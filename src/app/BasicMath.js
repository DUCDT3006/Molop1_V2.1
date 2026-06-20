/* ====================================
   Molop1 V2.1 - Basic Math (with confirm button)
   ==================================== */
import { getLesson } from '../data/lessons.js';
import { getState, markComplete, showConfetti } from '../data/state.js';

export function renderBasicMath(container, params) {
  const { week, day } = params;
  const lesson = getLesson(week, day);
  const state = getState();
  if (!lesson) { container.innerHTML = '<div style="padding:40px;text-align:center"><h2>Không tìm thấy bài học</h2></div>'; return; }

  const questions = lesson.basicMath.questions;
  let currentQ = 0, correctCount = 0, selectedAnswer = null;

  function renderQuestion() {
    const q = questions[currentQ];
    selectedAnswer = null;
    container.innerHTML = `
      <div class="header-bar">
        <button class="back-btn" onclick="navigateTo('#daily/${week}/${day}')">←</button>
        <div class="title">🔢 ${lesson.basicMath.title}</div>
        <div class="star-counter">⭐ ${state.stars}</div>
      </div>
      <div class="game-container">
        <div class="section-badge basic">📚 Cơ bản - Toán</div>
        <div class="instruction-box">${lesson.basicMath.instruction}</div>
        <div class="game-card">
          <div class="question-counter">Câu ${currentQ + 1} / ${questions.length}</div>
          <div class="progress-bar" style="margin-bottom:20px">
            <div class="progress-bar-fill" style="width:${(currentQ / questions.length) * 100}%"></div>
          </div>
          <div class="question-text">${q.text}</div>
          <div class="quiz-options" id="options">
            ${q.options.map((opt, i) => `<button class="quiz-option" data-val="${opt}" id="opt-${i}">${opt}</button>`).join('')}
          </div>
          <div style="text-align:center;margin-top:16px">
            <button class="btn btn-success btn-lg" id="confirm-btn" disabled>✅ Xác nhận đáp án</button>
          </div>
        </div>
      </div>
    `;

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
      const isCorrect = String(selectedAnswer) === String(q.answer);
      optBtns.forEach(b => {
        b.disabled = true;
        if (String(b.dataset.val) === String(q.answer)) b.classList.add('correct');
        if (b.classList.contains('selected') && !isCorrect) b.classList.add('incorrect');
      });
      confirmBtn.disabled = true;
      if (isCorrect) correctCount++;

      setTimeout(() => {
        currentQ++;
        if (currentQ < questions.length) renderQuestion();
        else showResults();
      }, 1200);
    });
  }

  function showResults() {
    const pct = Math.round((correctCount / questions.length) * 100);
    let rating, emoji, title, stars;
    if (pct >= 80) { rating='excellent'; emoji='🌟'; title='Hoàn thành tốt!'; stars='⭐⭐⭐'; }
    else if (pct >= 50) { rating='good'; emoji='👍'; title='Hoàn thành!'; stars='⭐⭐'; }
    else { rating='try'; emoji='💪'; title='Cần cố gắng thêm!'; stars='⭐'; }
    markComplete(week, day, 'basic-math', rating);
    if (rating === 'excellent') showConfetti();
    container.innerHTML = `
      <div class="reward-screen" style="position:relative"><div class="reward-content">
        <div class="reward-emoji">${emoji}</div><div class="reward-title">${title}</div>
        <div class="score-display">${correctCount}/${questions.length}</div>
        <div class="reward-stars">${stars}</div>
        <div class="reward-subtitle">Đúng ${pct}% câu hỏi</div>
        <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
          <button class="btn btn-primary" onclick="navigateTo('#daily/${week}/${day}')">📋 Quay lại</button>
          ${pct < 100 ? `<button class="btn btn-secondary" onclick="navigateTo('#basic-math/${week}/${day}')">🔄 Làm lại</button>` : ''}
        </div>
      </div></div>`;
  }
  renderQuestion();
}
