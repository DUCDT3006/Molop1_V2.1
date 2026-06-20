/* ====================================
   Molop1 V2.1 - Memory Match Game
   Fixed: isProcessing timing, visual hints
   ==================================== */
import { getLesson } from '../data/lessons.js';
import { getState, markComplete, showConfetti } from '../data/state.js';

export function renderMemoryMatch(container, params) {
  const { week, day } = params;
  const lesson = getLesson(week, day);
  const state = getState();

  if (!lesson) {
    container.innerHTML = '<div style="padding:40px;text-align:center"><h2>Không tìm thấy bài học</h2></div>';
    return;
  }

  // Shuffle cards ONCE and store
  const cards = [...lesson.memory].sort(() => Math.random() - 0.5);
  let flippedIndexes = [];
  let matchedIds = new Set();
  let moves = 0;
  let totalPairs = cards.length / 2;
  let isProcessing = false;

  // Color hints for pairs
  const pairColors = ['#6C63FF', '#FF6B6B', '#4ECDC4', '#F1C40F', '#2ECC71', '#E74C3C', '#9B59B6', '#1ABC9C'];

  function getPairColor(cardId) {
    // Each pair gets a unique border color when matched
    const pairIndex = Math.floor((cardId - 1) / 2);
    return pairColors[pairIndex % pairColors.length];
  }

  function render() {
    container.innerHTML = `
      <div class="header-bar">
        <button class="back-btn" onclick="navigateTo('#daily/${week}/${day}')">←</button>
        <div class="title">🃏 Ghép cặp Trí nhớ</div>
        <div class="star-counter">⭐ ${state.stars}</div>
      </div>
      <div class="game-container">
        <div class="section-badge practice">🎮 Thực hành - Memory</div>
        <div class="instruction-box">Lật 2 thẻ mỗi lượt. Tìm các cặp thẻ có liên quan với nhau!</div>

        <div class="memory-stats">
          <div class="memory-stat">
            <div class="stat-val">${moves}</div>
            <div class="stat-label">Lượt lật</div>
          </div>
          <div class="memory-stat">
            <div class="stat-val">${matchedIds.size / 2}/${totalPairs}</div>
            <div class="stat-label">Cặp đúng</div>
          </div>
        </div>

        <div class="memory-grid" id="memory-grid">
          ${cards.map((card, i) => {
            const isFlipped = flippedIndexes.includes(i) || matchedIds.has(card.id);
            const isMatched = matchedIds.has(card.id);
            let cls = 'memory-card';
            if (isFlipped) cls += ' flipped';
            if (isMatched) cls += ' matched';

            const matchColor = isMatched ? `border-color:${getPairColor(card.id)};box-shadow:0 0 12px ${getPairColor(card.id)}40;` : '';

            return `
              <div class="${cls}" data-index="${i}" style="${isMatched ? matchColor : ''}">
                <div class="memory-card-inner">
                  <div class="memory-card-front">❓</div>
                  <div class="memory-card-back" style="${isMatched ? matchColor : ''}">${card.val}</div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;

    // Attach click events only to unmatched, unflipped cards
    container.querySelectorAll('.memory-card').forEach(cardEl => {
      cardEl.addEventListener('click', () => handleCardClick(parseInt(cardEl.dataset.index)));
    });
  }

  function handleCardClick(idx) {
    if (isProcessing) return;

    const cardData = cards[idx];

    // Don't flip already matched or already flipped
    if (matchedIds.has(cardData.id)) return;
    if (flippedIndexes.includes(idx)) return;
    if (flippedIndexes.length >= 2) return;

    flippedIndexes.push(idx);

    // If this is the first card, just flip and show
    if (flippedIndexes.length === 1) {
      render();
      return;
    }

    // Second card flipped
    moves++;
    isProcessing = true; // Lock immediately
    render(); // Show both cards flipped

    const card1 = cards[flippedIndexes[0]];
    const card2 = cards[flippedIndexes[1]];

    // Check match: card1.matchId === card2.id AND card2.matchId === card1.id
    const isMatch = card1.matchId === card2.id && card2.matchId === card1.id;

    if (isMatch) {
      // Match found!
      setTimeout(() => {
        matchedIds.add(card1.id);
        matchedIds.add(card2.id);
        flippedIndexes = [];
        isProcessing = false;
        render();

        // Check if all matched
        if (matchedIds.size === cards.length) {
          setTimeout(() => showResults(), 600);
        }
      }, 500);
    } else {
      // No match - flip back after showing
      setTimeout(() => {
        flippedIndexes = [];
        isProcessing = false;
        render();
      }, 1200);
    }
  }

  function showResults() {
    let rating, emoji, title, stars;

    if (moves <= totalPairs + 2) {
      rating = 'excellent'; emoji = '🌟'; title = 'Trí nhớ siêu phàm!'; stars = '⭐⭐⭐';
    } else if (moves <= totalPairs * 2) {
      rating = 'good'; emoji = '👍'; title = 'Trí nhớ tốt!'; stars = '⭐⭐';
    } else {
      rating = 'try'; emoji = '💪'; title = 'Hoàn thành!'; stars = '⭐';
    }

    markComplete(week, day, 'memory', rating);
    if (rating === 'excellent') showConfetti();

    container.innerHTML = `
      <div class="reward-screen" style="position:relative">
        <div class="reward-content">
          <div class="reward-emoji">${emoji}</div>
          <div class="reward-title">${title}</div>
          <div class="score-display">${totalPairs}/${totalPairs} cặp</div>
          <div class="reward-stars">${stars}</div>
          <div class="reward-subtitle">Hoàn thành trong ${moves} lượt lật</div>
          <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
            <button class="btn btn-primary" onclick="navigateTo('#daily/${week}/${day}')">📋 Quay lại</button>
            <button class="btn btn-secondary" onclick="navigateTo('#memory/${week}/${day}')">🔄 Chơi lại</button>
          </div>
        </div>
      </div>
    `;
  }

  render();
}
