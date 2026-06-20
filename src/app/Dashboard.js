/* ====================================
   Molop1 V2.1 - Dashboard
   ==================================== */
import { getAllLessonsForWeek } from '../data/lessons.js';
import { getState, getDayProgress } from '../data/state.js';

export function renderDashboard(container) {
  const state = getState();
  const week = state.currentWeek || 1;
  const lessons = getAllLessonsForWeek(week);

  const dayEmojis = ['🚀', '🪐', '🌟', '🛸', '🛡️'];
  
  container.innerHTML = `
    <div class="header-bar">
      <div style="width:44px"></div>
      <div class="title">Molop1 V2.1 🚀</div>
      <div class="star-counter">⭐ ${state.stars}</div>
    </div>
    <div class="dashboard-container">
      <div class="week-header">
        <h1>🌌 Tuần ${week}: Khám phá Thiên hà Chữ & Số</h1>
        <p>Chào mừng nhà thám hiểm! Hãy hoàn thành từng chặng để chinh phục vũ trụ kiến thức!</p>
      </div>
      <div class="dashboard-grid">
        ${lessons.map((lesson, i) => {
          const prog = getDayProgress(week, lesson.day);
          const prevProg = i > 0 ? getDayProgress(week, lessons[i-1].day) : { percent: 100 };
          const isUnlocked = i === 0 || prevProg.percent >= 50;
          const isCompleted = prog.percent === 100;
          const isActive = isUnlocked && !isCompleted;
          const isBoss = lesson.isBossDay;
          
          let cardClass = 'day-card';
          if (!isUnlocked) cardClass += ' locked';
          else if (isCompleted) cardClass += ' completed';
          else if (isActive) cardClass += ' active';
          if (isBoss) cardClass += ' boss-card';

          return `
            <div class="${cardClass}" data-day="${lesson.day}" ${!isUnlocked ? '' : `onclick="window.navigateTo('#${isBoss ? 'boss' : 'daily'}/${week}/${lesson.day}')"`}>
              <span class="day-emoji">${dayEmojis[i] || '📚'}</span>
              <div class="day-name">${lesson.dayName}</div>
              <div class="day-theme">${lesson.theme}</div>
              <div class="progress-bar">
                <div class="progress-bar-fill" style="width:${prog.percent}%"></div>
              </div>
              <div style="margin-top:8px;font-size:0.8rem;color:var(--text-muted)">${prog.done}/${prog.total} hoạt động</div>
            </div>
          `;
        }).join('')}
      </div>
      <div style="text-align:center;padding:20px 0;color:var(--text-muted);">
        <p style="font-size:1.1rem;">🧑‍🚀 Astro nói: "Mỗi ngày một chặng, em sẽ chinh phục cả vũ trụ!"</p>
      </div>
    </div>
  `;
}
