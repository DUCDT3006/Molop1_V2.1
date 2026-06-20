/* ====================================
   Molop1 V2.1 - POMath Supermarket
   ==================================== */
import { getLesson } from '../data/lessons.js';
import { getState, markComplete, showConfetti } from '../data/state.js';

export function renderSupermarket(container, params) {
  const { week, day } = params;
  const lesson = getLesson(week, day);
  const state = getState();

  if (!lesson) {
    container.innerHTML = '<div style="padding:40px;text-align:center"><h2>Không tìm thấy bài học</h2></div>';
    return;
  }

  const shop = lesson.supermarket;
  let cart = {}; // { itemId: quantity }
  let phase = 'shopping'; // 'shopping', 'checkout', 'change-quiz'

  function getTotal() {
    let total = 0;
    shop.items.forEach(item => {
      if (cart[item.id]) total += item.price * cart[item.id];
    });
    return total;
  }

  function getCartItems() {
    return shop.items.filter(item => cart[item.id] > 0);
  }

  function render() {
    const total = getTotal();
    const overBudget = total > shop.budget;
    const cartItems = getCartItems();

    container.innerHTML = `
      <div class="header-bar">
        <button class="back-btn" onclick="navigateTo('#daily/${week}/${day}')">←</button>
        <div class="title">🛒 Siêu thị Astro</div>
        <div class="star-counter">⭐ ${state.stars}</div>
      </div>
      <div class="game-container">
        <div class="section-badge practice">🎮 Thực hành - Siêu thị</div>
        <div class="instruction-box">${shop.instruction}</div>

        <div class="budget-display ${overBudget ? 'over-budget' : ''}">
          💰 Ví tiền: <span class="budget-amount">${shop.budget} xu</span>
          ${total > 0 ? `<br><span style="font-size:0.95rem;color:${overBudget ? 'var(--danger)' : 'var(--text-muted)'}">Đã chi: ${total} xu | Còn lại: ${shop.budget - total} xu</span>` : ''}
        </div>

        <div class="shop-grid">
          ${shop.items.map(item => {
            const qty = cart[item.id] || 0;
            return `
              <div class="shop-item">
                <span class="item-emoji">${item.emoji}</span>
                <div class="item-name">${item.name}</div>
                <div class="item-price">${item.price} xu</div>
                <div class="qty-control">
                  <button class="qty-btn" data-action="minus" data-id="${item.id}" ${qty === 0 ? 'disabled style="opacity:0.3"' : ''}>−</button>
                  <span class="qty-val">${qty}</span>
                  <button class="qty-btn" data-action="plus" data-id="${item.id}">+</button>
                </div>
              </div>
            `;
          }).join('')}
        </div>

        ${cartItems.length > 0 ? `
          <div class="cart-panel">
            <h3>🛒 Giỏ hàng</h3>
            ${cartItems.map(item => `
              <div class="cart-item-row">
                <span>${item.emoji} ${item.name} x${cart[item.id]}</span>
                <span>${item.price * cart[item.id]} xu</span>
              </div>
            `).join('')}
            <div class="cart-total ${overBudget ? 'over-budget' : ''}">
              <span>Tổng cộng:</span>
              <span style="color:${overBudget ? 'var(--danger)' : 'var(--warning)'}">${total} xu</span>
            </div>
            ${overBudget ? '<div style="color:var(--danger);text-align:center;margin-top:8px;font-size:0.9rem">⚠️ Vượt quá ngân sách!</div>' : ''}
          </div>
          <div style="text-align:center;margin-top:16px">
            <button class="btn btn-success btn-lg" id="checkout-btn" ${overBudget || total === 0 ? 'disabled' : ''}>
              💳 Thanh toán
            </button>
          </div>
        ` : ''}
      </div>
    `;

    // Event: qty buttons
    container.querySelectorAll('.qty-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        const action = btn.dataset.action;
        if (!cart[id]) cart[id] = 0;
        if (action === 'plus') cart[id]++;
        else if (action === 'minus' && cart[id] > 0) cart[id]--;
        render();
      });
    });

    // Event: checkout
    const checkoutBtn = container.querySelector('#checkout-btn');
    if (checkoutBtn) {
      checkoutBtn.addEventListener('click', () => {
        showChangeQuiz();
      });
    }
  }

  function showChangeQuiz() {
    const total = getTotal();
    const change = shop.budget - total;

    // Generate wrong options
    const options = new Set([change]);
    while (options.size < 4) {
      const wrong = change + (Math.floor(Math.random() * 10) - 5);
      if (wrong >= 0 && wrong !== change) options.add(wrong);
    }
    const shuffledOptions = [...options].sort(() => Math.random() - 0.5);

    container.innerHTML = `
      <div class="header-bar">
        <button class="back-btn" onclick="navigateTo('#daily/${week}/${day}')">←</button>
        <div class="title">🛒 Thanh toán</div>
        <div class="star-counter">⭐ ${state.stars}</div>
      </div>
      <div class="game-container">
        <div class="game-card" style="text-align:center">
          <div style="font-size:1.2rem;margin-bottom:12px">
            💰 Em đưa <strong>${shop.budget} xu</strong><br>
            🛒 Tổng tiền hàng: <strong>${total} xu</strong>
          </div>
          <div class="question-text" style="margin:20px 0">
            Em được trả lại bao nhiêu xu? 🤔
          </div>
          <div class="quiz-options" id="change-options">
            ${shuffledOptions.map(opt => `
              <button class="quiz-option" data-val="${opt}">${opt} xu</button>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    let answered = false;
    container.querySelectorAll('.quiz-option').forEach(btn => {
      btn.addEventListener('click', () => {
        if (answered) return;
        answered = true;
        const val = parseInt(btn.dataset.val);
        const isCorrect = val === change;

        container.querySelectorAll('.quiz-option').forEach(b => b.disabled = true);

        if (isCorrect) {
          btn.classList.add('correct');
          setTimeout(() => {
            markComplete(week, day, 'supermarket', 'excellent');
            showConfetti();
            showFinalReward(total, change);
          }, 1000);
        } else {
          btn.classList.add('incorrect');
          container.querySelectorAll('.quiz-option').forEach(b => {
            if (parseInt(b.dataset.val) === change) b.classList.add('correct');
          });
          setTimeout(() => {
            markComplete(week, day, 'supermarket', 'good');
            showFinalReward(total, change);
          }, 1500);
        }
      });
    });
  }

  function showFinalReward(total, change) {
    container.innerHTML = `
      <div class="reward-screen" style="position:relative">
        <div class="reward-content">
          <div class="reward-emoji">🛍️</div>
          <div class="reward-title">Mua sắm thành công!</div>
          <div style="font-size:1.1rem;color:var(--text-muted);margin:12px 0">
            Đã chi: ${total} xu | Tiền thối: ${change} xu
          </div>
          <div class="reward-stars">⭐⭐⭐</div>
          <div class="reward-subtitle">Bạn là nhà mua sắm thông minh!</div>
          <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
            <button class="btn btn-primary" onclick="navigateTo('#daily/${week}/${day}')">📋 Quay lại</button>
          </div>
        </div>
      </div>
    `;
  }

  render();
}
