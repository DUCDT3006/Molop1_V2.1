/* ====================================
   Molop1 V2.1 - Boss Fight (with confirm button)
   ==================================== */
import { getLesson } from '../data/lessons.js';
import { getState, markComplete, unlockWeek, showConfetti } from '../data/state.js';

export function renderBossFight(container, params) {
  const { week, day } = params;
  const lesson = getLesson(week, day || 5);
  const state = getState();

  if (!lesson || !lesson.isBossDay) {
    container.innerHTML = `<div class="boss-fight-container" style="padding-top:100px">
      <div class="boss-display">🔒</div><h2>Boss Fight chưa sẵn sàng</h2>
      <p style="color:var(--text-muted);margin:12px 0">Hoàn thành các bài học trong tuần để mở khóa!</p>
      <button class="btn btn-primary" onclick="navigateTo('#dashboard')">🏠 Về trang chủ</button></div>`;
    return;
  }

  const questions = lesson.bossFight;
  let currentQ = 0, correctCount = 0, selectedAnswer = null;
  let bossHP = 100;
  const hpPerQ = 100 / questions.length;

  function renderIntro() {
    container.innerHTML = `
      <div class="header-bar">
        <button class="back-btn" onclick="navigateTo('#dashboard')">←</button>
        <div class="title">🛡️ Boss Fight</div>
        <div class="star-counter">⭐ ${state.stars}</div>
      </div>
      <div class="boss-fight-container">
        <div style="animation: bossEntrance 1s ease">
          <h2 style="color:var(--secondary);margin-bottom:8px">⚔️ Đại chiến Boss Tuần ${week}!</h2>
          <p style="color:var(--text-muted);margin-bottom:24px">Trả lời đúng để đánh bại ${lesson.bossName}!</p>
          <div class="boss-display">${lesson.bossEmoji}</div>
          <h3 style="margin:12px 0">${lesson.bossName}</h3>
          <div class="boss-hp-bar"><div class="boss-hp-fill" style="width:100%"></div></div>
          <p style="color:var(--danger);font-weight:700">HP: 100%</p>
        </div>
        <button class="btn btn-secondary btn-lg" id="start-boss" style="margin-top:24px">⚔️ Bắt đầu chiến đấu!</button>
      </div>`;
    container.querySelector('#start-boss').addEventListener('click', renderQuestion);
  }

  function renderQuestion() {
    const q = questions[currentQ];
    selectedAnswer = null;
    container.innerHTML = `
      <div class="header-bar">
        <button class="back-btn" onclick="navigateTo('#dashboard')">←</button>
        <div class="title">⚔️ Boss Fight - Câu ${currentQ + 1}/${questions.length}</div>
        <div class="star-counter">⭐ ${state.stars}</div>
      </div>
      <div class="boss-fight-container">
        <div style="display:flex;align-items:center;justify-content:center;gap:20px;margin-bottom:16px">
          <div style="font-size:3rem">${lesson.bossEmoji}</div>
          <div style="flex:1;max-width:300px">
            <div style="font-size:0.85rem;color:var(--text-muted);margin-bottom:4px">${lesson.bossName} - HP</div>
            <div class="boss-hp-bar"><div class="boss-hp-fill" id="boss-hp" style="width:${bossHP}%"></div></div>
            <div style="font-size:0.85rem;color:var(--danger);font-weight:700">${Math.round(bossHP)}%</div>
          </div>
        </div>
        <div class="boss-score">Điểm: ${correctCount}/${questions.length}</div>
        <div class="game-card" style="text-align:left">
          <div class="question-counter">Câu ${currentQ + 1} / ${questions.length}</div>
          <div class="progress-bar" style="margin-bottom:16px">
            <div class="progress-bar-fill" style="width:${(currentQ / questions.length) * 100}%"></div>
          </div>
          <div class="question-text">${q.text}</div>
          <div class="quiz-options">
            ${q.options.map(opt => `<button class="quiz-option" data-val="${opt}">${opt}</button>`).join('')}
          </div>
          <div style="text-align:center;margin-top:16px">
            <button class="btn btn-success btn-lg" id="confirm-btn" disabled>✅ Xác nhận</button>
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
      const isCorrect = selectedAnswer === q.answer;
      optBtns.forEach(b => {
        b.disabled = true;
        if (b.dataset.val === q.answer) b.classList.add('correct');
        if (b.classList.contains('selected') && !isCorrect) b.classList.add('incorrect');
      });
      confirmBtn.disabled = true;
      if (isCorrect) { correctCount++; bossHP = Math.max(0, bossHP - hpPerQ); const hp = container.querySelector('#boss-hp'); if (hp) hp.style.width = `${bossHP}%`; }
      setTimeout(() => { currentQ++; if (currentQ < questions.length) renderQuestion(); else showResults(); }, 1300);
    });
  }

  function showResults() {
    const score = correctCount, isVictory = score >= 6;
    if (isVictory) { unlockWeek(week + 1); showConfetti(); }
    let rating; if (score >= 9) rating='excellent'; else if (score >= 6) rating='good'; else rating='try';
    markComplete(week, day || 5, 'boss', rating);
    container.innerHTML = `
      <div class="reward-screen" style="position:relative"><div class="reward-content">
        <div class="reward-emoji">${isVictory ? '🏆' : '💪'}</div>
        <div class="reward-title">${isVictory ? 'Chiến thắng! 🎉' : 'Cố gắng thêm nào!'}</div>
        <div class="score-display">${score}/10</div>
        <div class="reward-stars">${isVictory ? '⭐⭐⭐' : '⭐'}</div>
        <div class="reward-subtitle">${isVictory ? `Đã đánh bại ${lesson.bossName}! Tuần ${week+1} đã mở khóa!` : `Hãy ôn lại bài và thử lại nhé!`}</div>
        <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-top:8px">
          <button class="btn btn-primary" onclick="navigateTo('#dashboard')">🏠 Về trang chủ</button>
          ${!isVictory ? `<button class="btn btn-secondary" onclick="navigateTo('#boss/${week}/${day||5}')">🔄 Thử lại</button>` : ''}
        </div>
      </div></div>`;
  }
  renderIntro();
}
