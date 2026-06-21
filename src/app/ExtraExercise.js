/* ====================================
   Molop1 V2.1 - Extra Exercise (Bài tập bổ sung - Phụ huynh)
   ==================================== */
import { getLesson } from '../data/lessons.js';
import { getState, markComplete, showConfetti } from '../data/state.js';

export function renderExtraExercise(container, params) {
  const { week, day } = params;
  const lesson = getLesson(week, day);
  const state = getState();
  if (!lesson) { container.innerHTML = '<div style="padding:40px;text-align:center"><h2>Không tìm thấy bài học</h2></div>'; return; }

  let currentMode = null; // 'review', 'practice', 'challenge'

  function showModeSelect() {
    const extra = lesson.extraExercises || {};
    container.innerHTML = `
      <div class="header-bar">
        <button class="back-btn" onclick="navigateTo('#daily/${week}/${day}')">←</button>
        <div class="title">📝 Bài tập Bổ sung</div>
        <div class="star-counter">⭐ ${state.stars}</div>
      </div>
      <div class="game-container">
        <div class="section-badge" style="background:linear-gradient(135deg,#9B59B6,#8E44AD)">👨‍👩‍👧 Phụ huynh hướng dẫn</div>
        <div class="instruction-box">
          💡 <strong>Dành cho phụ huynh:</strong> Chọn mức độ phù hợp để bé luyện thêm. Các bài tập được tạo từ nội dung đã học trong ngày.
         <button class="tts-btn" onclick="playTTS(this.dataset.text)" data-text="${String(`
          💡 <strong>Dành cho phụ huynh:</strong> Chọn mức độ phù hợp để bé luyện thêm. Các bài tập được tạo từ nội dung đã học trong ngày.
        `).replace(/\"/g, '&quot;').replace(/<[^>]*>?/gm, '')}">🔊</button></div>
        <div class="level-select-grid">
          <div class="level-card unlocked" data-mode="review">
            <div class="level-emoji">📖</div>
            <div class="level-name">Ôn tập cơ bản</div>
            <div class="level-stars">⭐</div>
            <div class="level-desc">Ôn lại kiến thức Toán + Tiếng Việt</div>
          </div>
          <div class="level-card unlocked" data-mode="practice">
            <div class="level-emoji">✏️</div>
            <div class="level-name">Luyện thêm</div>
            <div class="level-stars">⭐⭐</div>
            <div class="level-desc">Bài tập nâng cao hơn một chút</div>
          </div>
          <div class="level-card unlocked" data-mode="challenge">
            <div class="level-emoji">🏆</div>
            <div class="level-name">Thử thách</div>
            <div class="level-stars">⭐⭐⭐</div>
            <div class="level-desc">Bài tập tổng hợp khó hơn</div>
          </div>
        </div>
      </div>`;

    container.querySelectorAll('.level-card.unlocked').forEach(card => {
      card.addEventListener('click', () => {
        currentMode = card.dataset.mode;
        startExercise(currentMode);
      });
    });
  }

  function getQuestions(mode) {
    const extra = lesson.extraExercises || {};
    if (mode === 'review') return extra.review || generateReview();
    if (mode === 'practice') return extra.practice || generatePractice();
    if (mode === 'challenge') return extra.challenge || generateChallenge();
    return generateReview();
  }

  function generateReview() {
    // Fallback: generate from existing lesson data
    const qs = [];
    if (lesson.basicMath && lesson.basicMath.questions) {
      const mq = lesson.basicMath.questions[0];
      if (mq) qs.push({ text: mq.text, answer: String(mq.answer), options: mq.options.map(String) });
    }
    if (lesson.basicVietnamese && lesson.basicVietnamese.questions) {
      const vq = lesson.basicVietnamese.questions[0];
      if (vq) qs.push({ text: vq.text, answer: vq.answer, options: vq.options });
    }
    if (qs.length < 3) {
      qs.push({ text: '1 + 1 = ?', answer: '2', options: ['1', '2', '3', '4'] });
    }
    return qs;
  }

  function generatePractice() {
    const qs = [];
    if (lesson.basicMath && lesson.basicMath.questions) {
      lesson.basicMath.questions.forEach(mq => {
        qs.push({ text: mq.text, answer: String(mq.answer), options: mq.options.map(String) });
      });
    }
    return qs.length >= 2 ? qs : generateReview();
  }

  function generateChallenge() {
    const qs = [];
    if (lesson.advanced) {
      lesson.advanced.forEach(aq => {
        qs.push({ text: aq.text, answer: aq.answer, options: aq.options });
      });
    }
    if (lesson.basicVietnamese && lesson.basicVietnamese.questions) {
      lesson.basicVietnamese.questions.forEach(vq => {
        qs.push({ text: vq.text, answer: vq.answer, options: vq.options });
      });
    }
    return qs.length >= 2 ? qs : generateReview();
  }

  function startExercise(mode) {
    const questions = getQuestions(mode);
    let currentQ = 0, correctCount = 0, selectedAnswer = null;
    const modeNames = { review: 'Ôn tập', practice: 'Luyện thêm', challenge: 'Thử thách' };

    function renderQ() {
      if (currentQ >= questions.length) { showExtraResults(); return; }
      const q = questions[currentQ];
      selectedAnswer = null;

      container.innerHTML = `
        <div class="header-bar">
          <button class="back-btn" id="back-modes">←</button>
          <div class="title">📝 ${modeNames[mode]} - Câu ${currentQ + 1}</div>
          <div class="star-counter">⭐ ${state.stars}</div>
        </div>
        <div class="game-container">
          <div class="game-card">
            <div class="question-counter">Câu ${currentQ + 1} / ${questions.length}</div>
            <div class="progress-bar" style="margin-bottom:20px">
              <div class="progress-bar-fill" style="width:${(currentQ / questions.length) * 100}%"></div>
            </div>
            <div class="question-text">${q.text} <button class="tts-btn" onclick="playTTS(this.dataset.text)" data-text="${String(`${q.text}`).replace(/\"/g, '&quot;').replace(/<[^>]*>?/gm, '')}">🔊</button></div>
            ${q.image ? `<div style="text-align:center;font-size:2.5rem;margin:12px 0;letter-spacing:8px">${q.image}</div>` : ''}
            <div class="quiz-options">
              ${q.options.map(opt => `<button class="quiz-option" data-val="${opt}">${opt}</button>`).join('')}
            </div>
            <div style="text-align:center;margin-top:16px">
              <button class="btn btn-success btn-lg" id="confirm-btn" disabled>✅ Xác nhận</button>
            </div>
          </div>
        </div>`;

      container.querySelector('#back-modes').addEventListener('click', showModeSelect);

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
        const isCorrect = selectedAnswer === q.answer;
        optBtns.forEach(b => {
          b.disabled = true;
          if (b.dataset.val === q.answer) b.classList.add('correct');
          if (b.classList.contains('selected') && !isCorrect) b.classList.add('incorrect');
        });
        confirmBtn.disabled = true;
        if (isCorrect) correctCount++;
        setTimeout(() => { currentQ++; renderQ(); }, 1200);
      });
    }

    function showExtraResults() {
      const pct = Math.round((correctCount / questions.length) * 100);
      let rating = pct >= 80 ? 'excellent' : pct >= 50 ? 'good' : 'try';
      markComplete(week, day, 'extra', rating);
      if (rating === 'excellent') showConfetti();

      container.innerHTML = `
        <div class="reward-screen" style="position:relative"><div class="reward-content">
          <div class="reward-emoji">${pct >= 80 ? '🌟' : pct >= 50 ? '👍' : '💪'}</div>
          <div class="reward-title">${pct >= 80 ? 'Giỏi lắm!' : pct >= 50 ? 'Tốt!' : 'Cần ôn thêm!'}</div>
          <div class="score-display">${correctCount}/${questions.length}</div>
          <div class="reward-stars">${pct >= 80 ? '⭐⭐⭐' : pct >= 50 ? '⭐⭐' : '⭐'}</div>
          <div class="reward-subtitle">Bài tập bổ sung: ${modeNames[mode]}</div>
          <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
            <button class="btn btn-primary" onclick="navigateTo('#daily/${week}/${day}')">📋 Quay lại</button>
            <button class="btn btn-accent" id="try-other-btn">📝 Chọn mức khác</button>
          </div>
        </div></div>`;

      container.querySelector('#try-other-btn')?.addEventListener('click', showModeSelect);
    }

    renderQ();
  }

  showModeSelect();
}
