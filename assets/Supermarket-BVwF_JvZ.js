import{a as e,c as t,i as n,n as r}from"./state-BDdBsVRV.js";function i(i,a){let{week:o,day:s}=a,c=t(o,s),l=r();if(!c){i.innerHTML=`<div style="padding:40px;text-align:center"><h2>Không tìm thấy bài học</h2></div>`;return}let u=c.supermarket,d={};function f(){let e=0;return u.items.forEach(t=>{d[t.id]&&(e+=t.price*d[t.id])}),e}function p(){return u.items.filter(e=>d[e.id]>0)}function m(){let e=f(),t=e>u.budget,n=p();i.innerHTML=`
      <div class="header-bar">
        <button class="back-btn" onclick="navigateTo('#daily/${o}/${s}')">←</button>
        <div class="title">🛒 Siêu thị Astro</div>
        <div class="star-counter">⭐ ${l.stars}</div>
      </div>
      <div class="game-container">
        <div class="section-badge practice">🎮 Thực hành - Siêu thị</div>
        <div class="instruction-box">${u.instruction}</div>

        <div class="budget-display ${t?`over-budget`:``}">
          💰 Ví tiền: <span class="budget-amount">${u.budget} xu</span>
          ${e>0?`<br><span style="font-size:0.95rem;color:${t?`var(--danger)`:`var(--text-muted)`}">Đã chi: ${e} xu | Còn lại: ${u.budget-e} xu</span>`:``}
        </div>

        <div class="shop-grid">
          ${u.items.map(e=>{let t=d[e.id]||0;return`
              <div class="shop-item">
                <span class="item-emoji">${e.emoji}</span>
                <div class="item-name">${e.name}</div>
                <div class="item-price">${e.price} xu</div>
                <div class="qty-control">
                  <button class="qty-btn" data-action="minus" data-id="${e.id}" ${t===0?`disabled style="opacity:0.3"`:``}>−</button>
                  <span class="qty-val">${t}</span>
                  <button class="qty-btn" data-action="plus" data-id="${e.id}">+</button>
                </div>
              </div>
            `}).join(``)}
        </div>

        ${n.length>0?`
          <div class="cart-panel">
            <h3>🛒 Giỏ hàng</h3>
            ${n.map(e=>`
              <div class="cart-item-row">
                <span>${e.emoji} ${e.name} x${d[e.id]}</span>
                <span>${e.price*d[e.id]} xu</span>
              </div>
            `).join(``)}
            <div class="cart-total ${t?`over-budget`:``}">
              <span>Tổng cộng:</span>
              <span style="color:${t?`var(--danger)`:`var(--warning)`}">${e} xu</span>
            </div>
            ${t?`<div style="color:var(--danger);text-align:center;margin-top:8px;font-size:0.9rem">⚠️ Vượt quá ngân sách!</div>`:``}
          </div>
          <div style="text-align:center;margin-top:16px">
            <button class="btn btn-success btn-lg" id="checkout-btn" ${t||e===0?`disabled`:``}>
              💳 Thanh toán
            </button>
          </div>
        `:``}
      </div>
    `,i.querySelectorAll(`.qty-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.id,n=e.dataset.action;d[t]||(d[t]=0),n===`plus`?d[t]++:n===`minus`&&d[t]>0&&d[t]--,m()})});let r=i.querySelector(`#checkout-btn`);r&&r.addEventListener(`click`,()=>{h()})}function h(){let t=f(),r=u.budget-t,a=new Set([r]);for(;a.size<4;){let e=r+(Math.floor(Math.random()*10)-5);e>=0&&e!==r&&a.add(e)}let c=[...a].sort(()=>Math.random()-.5);i.innerHTML=`
      <div class="header-bar">
        <button class="back-btn" onclick="navigateTo('#daily/${o}/${s}')">←</button>
        <div class="title">🛒 Thanh toán</div>
        <div class="star-counter">⭐ ${l.stars}</div>
      </div>
      <div class="game-container">
        <div class="game-card" style="text-align:center">
          <div style="font-size:1.2rem;margin-bottom:12px">
            💰 Em đưa <strong>${u.budget} xu</strong><br>
            🛒 Tổng tiền hàng: <strong>${t} xu</strong>
          </div>
          <div class="question-text" style="margin:20px 0">
            Em được trả lại bao nhiêu xu? 🤔
          </div>
          <div class="quiz-options" id="change-options">
            ${c.map(e=>`
              <button class="quiz-option" data-val="${e}">${e} xu</button>
            `).join(``)}
          </div>
        </div>
      </div>
    `;let d=!1;i.querySelectorAll(`.quiz-option`).forEach(a=>{a.addEventListener(`click`,()=>{if(d)return;d=!0;let c=parseInt(a.dataset.val)===r;i.querySelectorAll(`.quiz-option`).forEach(e=>e.disabled=!0),c?(a.classList.add(`correct`),setTimeout(()=>{n(o,s,`supermarket`,`excellent`),e(),g(t,r)},1e3)):(a.classList.add(`incorrect`),i.querySelectorAll(`.quiz-option`).forEach(e=>{parseInt(e.dataset.val)===r&&e.classList.add(`correct`)}),setTimeout(()=>{n(o,s,`supermarket`,`good`),g(t,r)},1500))})})}function g(e,t){i.innerHTML=`
      <div class="reward-screen" style="position:relative">
        <div class="reward-content">
          <div class="reward-emoji">🛍️</div>
          <div class="reward-title">Mua sắm thành công!</div>
          <div style="font-size:1.1rem;color:var(--text-muted);margin:12px 0">
            Đã chi: ${e} xu | Tiền thối: ${t} xu
          </div>
          <div class="reward-stars">⭐⭐⭐</div>
          <div class="reward-subtitle">Bạn là nhà mua sắm thông minh!</div>
          <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
            <button class="btn btn-primary" onclick="navigateTo('#daily/${o}/${s}')">📋 Quay lại</button>
          </div>
        </div>
      </div>
    `}m()}export{i as renderSupermarket};