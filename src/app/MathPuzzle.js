/* ====================================
   Molop1 V2.1 - Math Puzzle (Toán Đố Vui)
   Toán ngược, cân bằng, không gian, đố vui
   ==================================== */
import { getLesson } from '../data/lessons.js';
import { getState, markComplete, showConfetti } from '../data/state.js';

export function renderMathPuzzle(container, params) {
  const { week, day } = params;
  const lesson = getLesson(week, day);
  const state = getState();
  if (!lesson || !lesson.mathPuzzles) {
    container.innerHTML = '<div style="padding:40px;text-align:center"><h2>Không tìm thấy bài học</h2><button class="btn btn-primary" onclick="navigateTo(\'#daily/'+week+'/'+day+'\')">Quay lại</button></div>';
    return;
  }

  const puzzles = lesson.mathPuzzles;
  let currentQ = 0, correctCount = 0, selectedAnswer = null;

  function renderPuzzle() {
    const q = puzzles[currentQ];
    selectedAnswer = null;

    // Category badge
    const catMap = {
      'reverse': { icon: '🔄', label: 'Toán ngược' },
      'balance': { icon: '⚖️', label: 'Cân bằng' },
      'spatial': { icon: '🔲', label: 'Không gian' },
      'word': { icon: '📝', label: 'Toán đố' },
      'logic': { icon: '🧩', label: 'Logic' },
      'compare': { icon: '📊', label: 'So sánh' },
    };
    const cat = catMap[q.category] || { icon: '🧮', label: 'Toán đố' };

    container.innerHTML = `
      <div class="header-bar">
        <button class="back-btn" onclick="navigateTo('#daily/${week}/${day}')">←</button>
        <div class="title">🧮 Toán Đố Vui</div>
        <div class="star-counter">⭐ ${state.stars}</div>
      </div>
      <div class="game-container">
        <div class="section-badge practice">🎮 Thực hành - Toán Đố</div>
        <div class="game-card">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
            <div class="question-counter">Câu ${currentQ + 1} / ${puzzles.length}</div>
            <div class="puzzle-category">${cat.icon} ${cat.label}</div>
          </div>
          <div class="progress-bar" style="margin-bottom:16px">
            <div class="progress-bar-fill" style="width:${(currentQ / puzzles.length) * 100}%"></div>
          </div>

          <div class="question-text">${q.text} <button class="tts-btn" onclick="playTTS(this.dataset.text)" data-text="${String(`${q.text}`).replace(/\"/g, '&quot;').replace(/<[^>]*>?/gm, '')}">🔊</button></div>

          ${q.image ? `<div class="puzzle-visual">${q.image}</div>` : ''}
          ${q.illustration ? `<div class="puzzle-illustration">${q.illustration}</div>` : ''}

          <div class="quiz-options">
            ${q.options.map(opt => `<button class="quiz-option" data-val="${opt}">${opt}</button>`).join('')}
          </div>

          <div style="text-align:center;margin-top:16px">
            <button class="btn btn-success btn-lg" id="confirm-btn" disabled>✅ Xác nhận</button>
          </div>

          ${q.explanation ? `<div id="explanation" style="display:none" class="explanation-box"></div>` : ''}
        </div>
      </div>`;

    const optBtns = container.querySelectorAll('.quiz-option');
    const confirmBtn = container.querySelector('#confirm-btn');

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

      // Show explanation
      if (q.explanation) {
        const expEl = container.querySelector('#explanation');
        if (expEl) {
          expEl.style.display = 'block';
          expEl.innerHTML = `<div class="explanation-icon">${isCorrect ? '✅' : '📖'}</div><div>${q.explanation}</div>`;
        }
      }

      setTimeout(() => { currentQ++; if (currentQ < puzzles.length) renderPuzzle(); else showResults(); }, 1800);
    });
  }

  function showResults() {
    const pct = Math.round((correctCount / puzzles.length) * 100);
    let rating, emoji, title, stars;
    if (pct >= 80) { rating='excellent'; emoji='🏆'; title='Nhà Toán học nhí!'; stars='⭐⭐⭐'; }
    else if (pct >= 50) { rating='good'; emoji='👍'; title='Giỏi lắm!'; stars='⭐⭐'; }
    else { rating='try'; emoji='💪'; title='Cần luyện thêm!'; stars='⭐'; }
    markComplete(week, day, 'math-puzzle', rating);
    if (rating === 'excellent') showConfetti();
    container.innerHTML = `
      <div class="reward-screen" style="position:relative"><div class="reward-content">
        <div class="reward-emoji">${emoji}</div><div class="reward-title">${title}</div>
        <div class="score-display">${correctCount}/${puzzles.length}</div>
        <div class="reward-stars">${stars}</div>
        <div class="reward-subtitle">Đúng ${pct}% bài toán đố</div>
        <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
          <button class="btn btn-primary" onclick="navigateTo('#daily/${week}/${day}')">📋 Quay lại</button>
          ${pct < 100 ? `<button class="btn btn-secondary" onclick="navigateTo('#math-puzzle/${week}/${day}')">🔄 Làm lại</button>` : ''}
        </div>
      </div></div>`;
  }

  renderPuzzle();
}
