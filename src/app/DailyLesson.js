/* ====================================
   Molop1 V2.1 - Daily Lesson (Nâng cao)
   ==================================== */
import { getLesson } from '../data/lessons.js';
import { getState, isComplete, getDayProgress } from '../data/state.js';

export function renderDailyLesson(container, params) {
  const { week, day } = params;
  const lesson = getLesson(week, day);
  const state = getState();

  if (!lesson) {
    container.innerHTML = '<div style="padding:40px;text-align:center"><h2>Không tìm thấy bài học</h2><button class="btn btn-primary" onclick="navigateTo(\'#dashboard\')">Về trang chủ</button></div>';
    return;
  }

  // Boss Day landing
  if (lesson.isBossDay) {
    container.innerHTML = `
      <div class="header-bar">
        <button class="back-btn" onclick="navigateTo('#dashboard')">←</button>
        <div class="title">${lesson.emoji} ${lesson.dayName} - ${lesson.title}</div>
        <div class="star-counter">⭐ ${state.stars}</div>
      </div>
      <div class="boss-fight-container">
        <div style="animation: bossEntrance 1s ease">
          <div class="boss-display">${lesson.bossEmoji || '🐉'}</div>
          <h2 style="margin:16px 0;color:var(--secondary)">${lesson.title}</h2>
          <p style="color:var(--text-muted);margin-bottom:24px">${lesson.theme}</p>
          <button class="btn btn-secondary btn-lg" onclick="navigateTo('#boss/${week}/${day}')">⚔️ Vào Boss Fight!</button>
        </div>
      </div>`;
    return;
  }

  const prog = getDayProgress(week, day);

  const activities = [
    // Nâng cao theo SGK
    { key: 'basic-math', icon: '🔢', title: 'Toán Nâng cao', desc: lesson.basicMath.title, route: `basic-math/${week}/${day}`, section: 'advanced-sgk' },
    { key: 'basic-viet', icon: '📖', title: 'Tiếng Việt Nâng cao', desc: lesson.basicVietnamese.title, route: `basic-viet/${week}/${day}`, section: 'advanced-sgk' },
    // Thực hành Tư duy
    { key: 'coding', icon: '🤖', title: 'Lập trình Ghép vần', desc: `Ghép từ "${lesson.coding.targetWord}"`, route: `coding/${week}/${day}`, section: 'practice' },
    { key: 'sudoku', icon: '🧩', title: 'Sudoku (3 cấp độ)', desc: 'Logic điền emoji', route: `sudoku/${week}/${day}`, section: 'practice' },
    { key: 'memory', icon: '🃏', title: 'Ghép cặp Trí nhớ', desc: 'Lật thẻ tìm cặp liên quan', route: `memory/${week}/${day}`, section: 'practice' },
    { key: 'supermarket', icon: '🛒', title: 'Siêu thị Tính toán', desc: `Ngân sách: ${lesson.supermarket.budget} xu`, route: `supermarket/${week}/${day}`, section: 'practice' },
    { key: 'pattern', icon: '🔢', title: 'Tìm Quy luật', desc: 'Dãy số & dãy hình', route: `pattern/${week}/${day}`, section: 'practice' },
    { key: 'math-puzzle', icon: '🧮', title: 'Toán Đố Vui', desc: 'Toán ngược, cân bằng, logic', route: `math-puzzle/${week}/${day}`, section: 'practice' },
    // Toán Tư duy HSG
    { key: 'advanced', icon: '🧠', title: 'Toán Tư duy HSG', desc: '5 dạng bài nâng cao (45 giây)', route: `advanced/${week}/${day}`, section: 'hsg' },
  ];

  const sgkActs = activities.filter(a => a.section === 'advanced-sgk');
  const practiceActs = activities.filter(a => a.section === 'practice');
  const hsgActs = activities.filter(a => a.section === 'hsg');

  function renderActivityList(acts) {
    return acts.map(a => {
      const done = isComplete(week, day, a.key);
      return `
        <div class="activity-item ${done ? 'done' : ''}" onclick="navigateTo('#${a.route}')">
          <div class="activity-icon">${a.icon}</div>
          <div class="activity-info">
            <div class="activity-title">${a.title}</div>
            <div class="activity-desc">${a.desc}</div>
          </div>
          <div class="activity-status">${done ? '✅' : '▶️'}</div>
        </div>`;
    }).join('');
  }

  const extraDone = isComplete(week, day, 'extra');

  container.innerHTML = `
    <div class="header-bar">
      <button class="back-btn" onclick="navigateTo('#dashboard')">←</button>
      <div class="title">${lesson.emoji} ${lesson.dayName} - ${lesson.title}</div>
      <div class="star-counter">⭐ ${state.stars}</div>
    </div>
    <div class="daily-container">
      <div class="instruction-box">${lesson.theme} <button class="tts-btn" onclick="playTTS(this.dataset.text)" data-text="${String(`${lesson.theme}`).replace(/\"/g, '&quot;').replace(/<[^>]*>?/gm, '')}">🔊</button></div>

      ${lesson.curriculumRef ? `<div class="curriculum-ref">📋 Theo CT GDPT 2018: ${lesson.curriculumRef}</div>` : ''}

      <div class="daily-section">
        <div class="section-badge" style="background:linear-gradient(135deg,#6C63FF,#8B83FF)">📚 Nâng cao theo SGK (30%)</div>
        <div class="daily-activities">${renderActivityList(sgkActs)}</div>
      </div>

      <div class="daily-section">
        <div class="section-badge practice">🎮 Thực hành Tư duy (40%)</div>
        <div class="daily-activities">${renderActivityList(practiceActs)}</div>
      </div>

      <div class="daily-section">
        <div class="section-badge advanced">🧠 Toán Tư duy HSG (30%)</div>
        <div class="daily-activities">${renderActivityList(hsgActs)}</div>
      </div>

      <div class="daily-section extra-section">
        <div class="section-badge" style="background:linear-gradient(135deg,#9B59B6,#8E44AD)">📝 Bài tập bổ sung (Phụ huynh)</div>
        <div class="extra-info">
          <p>💡 Phần này dành cho phụ huynh cho bé luyện thêm tại nhà. Có 3 mức độ: Ôn tập, Luyện thêm, Thử thách.</p>
        </div>
        <div class="daily-activities">
          <div class="activity-item ${extraDone ? 'done' : ''}" onclick="navigateTo('#extra/${week}/${day}')">
            <div class="activity-icon">📝</div>
            <div class="activity-info">
              <div class="activity-title">Bài tập bổ sung</div>
              <div class="activity-desc">Chọn mức: Ôn tập / Luyện thêm / Thử thách</div>
            </div>
            <div class="activity-status">${extraDone ? '✅' : '➕'}</div>
          </div>
        </div>
      </div>

      <div style="margin-top:24px">
        <div style="display:flex;justify-content:space-between;margin-bottom:6px;font-size:0.9rem;color:var(--text-muted)">
          <span>Tiến độ ngày</span>
          <span>${prog.done}/${prog.total} (${prog.percent}%)</span>
        </div>
        <div class="progress-bar" style="height:12px">
          <div class="progress-bar-fill" style="width:${prog.percent}%"></div>
        </div>
      </div>
    </div>
  `;
}
