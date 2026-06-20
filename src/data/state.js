/* ====================================
   Molop1 V2.1 - State Management
   ==================================== */

const STATE_KEY = 'molop1_v21';

export function getState() {
  try {
    const d = localStorage.getItem(STATE_KEY);
    return d ? JSON.parse(d) : createDefault();
  } catch {
    return createDefault();
  }
}

function createDefault() {
  return {
    completed: {},
    stars: 0,
    currentWeek: 1,
    unlockedWeeks: [1]
  };
}

export function saveState(state) {
  localStorage.setItem(STATE_KEY, JSON.stringify(state));
}

export function markComplete(week, day, activity, rating) {
  const s = getState();
  const key = `w${week}d${day}-${activity}`;
  if (!s.completed[key]) {
    s.completed[key] = rating;
    if (rating === 'excellent') s.stars += 3;
    else if (rating === 'good') s.stars += 2;
    else s.stars += 1;
  }
  saveState(s);
  return s;
}

export function isComplete(week, day, activity) {
  return !!getState().completed[`w${week}d${day}-${activity}`];
}

export function getDayProgress(week, day) {
  const s = getState();
  const activities = ['basic-math', 'basic-viet', 'coding', 'sudoku', 'memory', 'supermarket', 'pattern', 'math-puzzle', 'advanced'];
  let done = 0;
  activities.forEach(a => {
    if (s.completed[`w${week}d${day}-${a}`]) done++;
  });
  return { done, total: activities.length, percent: Math.round((done / activities.length) * 100) };
}

export function unlockWeek(week) {
  const s = getState();
  if (!s.unlockedWeeks.includes(week)) {
    s.unlockedWeeks.push(week);
  }
  saveState(s);
}

export function showConfetti() {
  const container = document.createElement('div');
  container.className = 'confetti-container';
  const colors = ['#FF6B6B', '#4ECDC4', '#6C63FF', '#F1C40F', '#2ECC71', '#FF8E8E'];
  for (let i = 0; i < 50; i++) {
    const c = document.createElement('div');
    c.className = 'confetti';
    c.style.left = Math.random() * 100 + '%';
    c.style.background = colors[Math.floor(Math.random() * colors.length)];
    c.style.animationDelay = Math.random() * 2 + 's';
    c.style.width = (Math.random() * 8 + 6) + 'px';
    c.style.height = (Math.random() * 8 + 6) + 'px';
    container.appendChild(c);
  }
  document.body.appendChild(container);
  setTimeout(() => container.remove(), 4000);
}
