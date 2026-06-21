/* ====================================
   Molop1 V2.1 - Advanced Quiz (5 câu, 45s, confirm, hình ảnh)
   ==================================== */
import { getLesson } from '../data/lessons.js';
import { getState, markComplete, showConfetti } from '../data/state.js';

export function renderAdvancedQuiz(container, params) {
  const { week, day } = params;
  const lesson = getLesson(week, day);
  const state = getState();
  if (!lesson) { container.innerHTML = '<div style="padding:40px;text-align:center"><h2>Không tìm thấy bài học</h2></div>'; return; }

  const questions = lesson.advanced;
  let currentQ = 0, correctCount = 0, selectedAnswer = null;
  let timerInterval = null, timeLeft = 45;

  if (window.registerCleanup) {
    window.registerCleanup(() => { if (timerInterval) { clearInterval(timerInterval); timerInterval = null; } });
  }

  function renderQuestion() {
    const q = questions[currentQ];
    timeLeft = 45;
    selectedAnswer = null;
    if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }

    // Difficulty indicator
    const diffStars = '⭐'.repeat(Math.min(currentQ + 1, 5));
    const diffLabel = currentQ < 2 ? 'Dễ' : currentQ < 4 ? 'Trung bình' : 'Khó';

    container.innerHTML = `
      <div class="header-bar">
        <button class="back-btn" onclick="navigateTo('#daily/${week}/${day}')">←</button>
        <div class="title">🧠 Thử thách Tư duy</div>
        <div class="star-counter">⭐ ${state.stars}</div>
      </div>
      <div class="game-container">
        <div class="section-badge advanced">🧠 Nâng cao - HSG</div>
        <div class="game-card">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
            <div class="question-counter">Câu ${currentQ + 1} / ${questions.length}</div>
            <div style="font-size:0.8rem;color:var(--warning)">${diffStars} ${diffLabel}</div>
          </div>
          <div class="timer-bar">
            <div class="timer-fill" id="timer-fill" style="width:100%"></div>
          </div>
          <div style="text-align:right;font-size:0.85rem;color:var(--text-muted);margin-bottom:12px">
            ⏱️ <span id="timer-text">${timeLeft}s</span>
          </div>
          <div class="question-text">${q.text} <button class="tts-btn" onclick="playTTS(this.dataset.text)" data-text="${String(`${q.text}`).replace(/\"/g, '&quot;').replace(/<[^>]*>?/gm, '')}">🔊</button></div>
          ${q.image ? `<div style="text-align:center;font-size:2.5rem;margin:12px 0;letter-spacing:8px">${q.image}</div>` : ''}
          <div class="quiz-options">
            ${q.options.map(opt => `<button class="quiz-option" data-val="${opt}">${opt}</button>`).join('')}
          </div>
          <div style="text-align:center;margin-top:16px">
            <button class="btn btn-success btn-lg" id="confirm-btn" disabled>✅ Xác nhận đáp án</button>
          </div>
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
      clearInterval(timerInterval); timerInterval = null;
      checkAnswer(optBtns, confirmBtn);
    });

    // Start timer
    timerInterval = setInterval(() => {
      timeLeft--;
      const fill = container.querySelector('#timer-fill');
      const text = container.querySelector('#timer-text');
      if (fill) fill.style.width = `${(timeLeft / 45) * 100}%`;
      if (text) text.textContent = `${timeLeft}s`;
      if (timeLeft <= 0) {
        clearInterval(timerInterval); timerInterval = null;
        if (selectedAnswer === null) {
          optBtns.forEach(b => { b.disabled = true; if (b.dataset.val === q.answer) b.classList.add('correct'); });
          confirmBtn.disabled = true;
          setTimeout(() => nextQuestion(), 1500);
        } else {
          checkAnswer(optBtns, confirmBtn);
        }
      }
    }, 1000);
  }

  function checkAnswer(optBtns, confirmBtn) {
    const q = questions[currentQ];
    const isCorrect = selectedAnswer === q.answer;
    optBtns.forEach(b => {
      b.disabled = true;
      if (b.dataset.val === q.answer) b.classList.add('correct');
      if (b.classList.contains('selected') && !isCorrect) b.classList.add('incorrect');
    });
    confirmBtn.disabled = true;
    if (isCorrect) correctCount++;
    setTimeout(() => nextQuestion(), 1200);
  }

  function nextQuestion() {
    currentQ++;
    if (currentQ < questions.length) renderQuestion();
    else { if (timerInterval) { clearInterval(timerInterval); timerInterval = null; } showResults(); }
  }

  function showResults() {
    const pct = Math.round((correctCount / questions.length) * 100);
    let rating, emoji, title, stars;
    if (pct >= 80) { rating='excellent'; emoji='🏆'; title='Tư duy xuất sắc!'; stars='⭐⭐⭐'; }
    else if (pct >= 50) { rating='good'; emoji='👍'; title='Tốt lắm!'; stars='⭐⭐'; }
    else { rating='try'; emoji='💪'; title='Cần luyện thêm!'; stars='⭐'; }
    markComplete(week, day, 'advanced', rating);
    if (rating === 'excellent') showConfetti();
    container.innerHTML = `
      <div class="reward-screen" style="position:relative"><div class="reward-content">
        <div class="reward-emoji">${emoji}</div><div class="reward-title">${title}</div>
        <div class="score-display">${correctCount}/${questions.length}</div>
        <div class="reward-stars">${stars}</div>
        <div class="reward-subtitle">Đúng ${pct}% câu hỏi nâng cao</div>
        <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
          <button class="btn btn-primary" onclick="navigateTo('#daily/${week}/${day}')">📋 Quay lại</button>
          ${pct < 100 ? `<button class="btn btn-secondary" onclick="navigateTo('#advanced/${week}/${day}')">🔄 Làm lại</button>` : ''}
        </div>
      </div></div>`;
  }
  renderQuestion();
}
