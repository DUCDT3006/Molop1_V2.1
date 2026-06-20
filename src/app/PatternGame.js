/* ====================================
   Molop1 V2.1 - Pattern Game (Tìm Quy luật)
   Dãy số + Dãy hình + Dãy màu sắc
   ==================================== */
import { getLesson } from '../data/lessons.js';
import { getState, markComplete, showConfetti } from '../data/state.js';

export function renderPatternGame(container, params) {
  const { week, day } = params;
  const lesson = getLesson(week, day);
  const state = getState();
  if (!lesson || !lesson.patterns) {
    container.innerHTML = '<div style="padding:40px;text-align:center"><h2>Không tìm thấy bài học</h2><button class="btn btn-primary" onclick="navigateTo(\'#daily/'+week+'/'+day+'\')">Quay lại</button></div>';
    return;
  }

  const patterns = lesson.patterns;
  let currentQ = 0, correctCount = 0, selectedAnswer = null;
  let hintUsed = false;

  function renderQuestion() {
    const q = patterns[currentQ];
    selectedAnswer = null;
    hintUsed = false;

    // Build sequence display
    let sequenceHTML = '';
    if (q.type === 'number') {
      sequenceHTML = `<div class="pattern-sequence number-seq">
        ${q.sequence.map((item, i) => {
          if (item === '?') return `<div class="pattern-item pattern-blank">❓</div>`;
          return `<div class="pattern-item">${item}</div>`;
        }).join('<div class="pattern-arrow">→</div>')}
      </div>`;
    } else if (q.type === 'shape' || q.type === 'color') {
      sequenceHTML = `<div class="pattern-sequence shape-seq">
        ${q.sequence.map((item, i) => {
          if (item === '?') return `<div class="pattern-item pattern-blank">❓</div>`;
          return `<div class="pattern-item pattern-emoji">${item}</div>`;
        }).join('')}
      </div>`;
    }

    const diffStars = '⭐'.repeat(Math.min(currentQ + 1, 5));

    container.innerHTML = `
      <div class="header-bar">
        <button class="back-btn" onclick="navigateTo('#daily/${week}/${day}')">←</button>
        <div class="title">🔢 Tìm Quy luật</div>
        <div class="star-counter">⭐ ${state.stars}</div>
      </div>
      <div class="game-container">
        <div class="section-badge practice">🎮 Thực hành - Tìm Quy luật</div>
        <div class="game-card">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
            <div class="question-counter">Câu ${currentQ + 1} / ${patterns.length}</div>
            <div style="font-size:0.8rem;color:var(--warning)">${diffStars}</div>
          </div>
          <div class="progress-bar" style="margin-bottom:16px">
            <div class="progress-bar-fill" style="width:${(currentQ / patterns.length) * 100}%"></div>
          </div>

          <div class="question-text">${q.text}</div>
          ${sequenceHTML}

          <div id="hint-area" style="min-height:36px;text-align:center;margin:8px 0"></div>

          <div class="quiz-options">
            ${q.options.map(opt => `<button class="quiz-option" data-val="${opt}">${opt}</button>`).join('')}
          </div>

          <div style="display:flex;gap:10px;justify-content:center;margin-top:16px;flex-wrap:wrap">
            <button class="btn btn-success btn-lg" id="confirm-btn" disabled>✅ Xác nhận</button>
            <button class="btn btn-ghost" id="hint-btn">💡 Gợi ý</button>
          </div>
        </div>
      </div>`;

    const optBtns = container.querySelectorAll('.quiz-option');
    const confirmBtn = container.querySelector('#confirm-btn');
    const hintBtn = container.querySelector('#hint-btn');

    optBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        optBtns.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedAnswer = btn.dataset.val;
        confirmBtn.disabled = false;
      });
    });

    confirmBtn.addEventListener('click', () => {
      if (selectedAnswer === null) return;
      const isCorrect = selectedAnswer === String(q.answer);
      optBtns.forEach(b => {
        b.disabled = true;
        if (b.dataset.val === String(q.answer)) b.classList.add('correct');
        if (b.classList.contains('selected') && !isCorrect) b.classList.add('incorrect');
      });
      confirmBtn.disabled = true;
      if (isCorrect) correctCount++;
      setTimeout(() => { currentQ++; if (currentQ < patterns.length) renderQuestion(); else showResults(); }, 1200);
    });

    hintBtn.addEventListener('click', () => {
      if (hintUsed) return;
      hintUsed = true;
      const hintArea = container.querySelector('#hint-area');
      if (hintArea && q.hint) {
        hintArea.innerHTML = `<div class="hint-box">💡 ${q.hint}</div>`;
      }
      hintBtn.disabled = true;
      hintBtn.style.opacity = '0.4';
    });
  }

  function showResults() {
    const pct = Math.round((correctCount / patterns.length) * 100);
    let rating, emoji, title, stars;
    if (pct >= 80) { rating='excellent'; emoji='🌟'; title='Siêu tìm quy luật!'; stars='⭐⭐⭐'; }
    else if (pct >= 50) { rating='good'; emoji='👍'; title='Tốt lắm!'; stars='⭐⭐'; }
    else { rating='try'; emoji='💪'; title='Cần luyện thêm!'; stars='⭐'; }
    markComplete(week, day, 'pattern', rating);
    if (rating === 'excellent') showConfetti();
    container.innerHTML = `
      <div class="reward-screen" style="position:relative"><div class="reward-content">
        <div class="reward-emoji">${emoji}</div><div class="reward-title">${title}</div>
        <div class="score-display">${correctCount}/${patterns.length}</div>
        <div class="reward-stars">${stars}</div>
        <div class="reward-subtitle">Đúng ${pct}% bài tìm quy luật</div>
        <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
          <button class="btn btn-primary" onclick="navigateTo('#daily/${week}/${day}')">📋 Quay lại</button>
          ${pct < 100 ? `<button class="btn btn-secondary" onclick="navigateTo('#pattern/${week}/${day}')">🔄 Làm lại</button>` : ''}
        </div>
      </div></div>`;
  }

  renderQuestion();
}
