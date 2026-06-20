/* ====================================
   Molop1 V2.1 - Main App Entry & Router
   ==================================== */
import './style.css';

const app = document.getElementById('app');

const moduleLoaders = {
  'dashboard': () => import('./app/Dashboard.js'),
  'daily': () => import('./app/DailyLesson.js'),
  'basic-math': () => import('./app/BasicMath.js'),
  'basic-viet': () => import('./app/BasicVietnamese.js'),
  'coding': () => import('./app/CodingGame.js'),
  'sudoku': () => import('./app/Sudoku4x4.js'),
  'memory': () => import('./app/MemoryMatch.js'),
  'supermarket': () => import('./app/Supermarket.js'),
  'advanced': () => import('./app/AdvancedQuiz.js'),
  'boss': () => import('./app/BossFight.js'),
  'extra': () => import('./app/ExtraExercise.js'),
  'pattern': () => import('./app/PatternGame.js'),
  'math-puzzle': () => import('./app/MathPuzzle.js'),
};

const renderFnNames = {
  'dashboard': 'renderDashboard',
  'daily': 'renderDailyLesson',
  'basic-math': 'renderBasicMath',
  'basic-viet': 'renderBasicVietnamese',
  'coding': 'renderCodingGame',
  'sudoku': 'renderSudoku',
  'memory': 'renderMemoryMatch',
  'supermarket': 'renderSupermarket',
  'advanced': 'renderAdvancedQuiz',
  'boss': 'renderBossFight',
  'extra': 'renderExtraExercise',
  'pattern': 'renderPatternGame',
  'math-puzzle': 'renderMathPuzzle',
};

const moduleCache = {};

async function loadModule(name) {
  if (!moduleCache[name]) {
    const loader = moduleLoaders[name] || moduleLoaders['dashboard'];
    moduleCache[name] = await loader();
  }
  return moduleCache[name];
}

// Cleanup registry - components can register cleanup functions
window._cleanups = [];
window.registerCleanup = function(fn) {
  window._cleanups.push(fn);
};

function runCleanups() {
  window._cleanups.forEach(fn => { try { fn(); } catch(e) {} });
  window._cleanups = [];
}

async function navigate() {
  const hash = window.location.hash.slice(1) || 'dashboard';
  const parts = hash.split('/');
  const view = parts[0] || 'dashboard';
  const week = parseInt(parts[1]) || 1;
  const day = parseInt(parts[2]) || 1;

  // Run cleanups from previous view
  runCleanups();

  app.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:80vh;font-size:2rem;">⏳</div>';

  try {
    const mod = await loadModule(view);
    const fnName = renderFnNames[view] || 'renderDashboard';
    const renderFn = mod[fnName];

    if (renderFn) {
      app.innerHTML = '';
      renderFn(app, { week, day });
    } else {
      // Fallback to dashboard
      const dashMod = await loadModule('dashboard');
      app.innerHTML = '';
      dashMod.renderDashboard(app, { week, day });
    }
  } catch (e) {
    console.error('Navigation error:', e);
    app.innerHTML = `<div style="padding:40px;text-align:center;"><h2>⚠️ Lỗi tải trang</h2><p>${e.message}</p><button class="btn btn-primary" onclick="window.location.hash='dashboard'">Về trang chủ</button></div>`;
  }

  // Load mascot
  try {
    const mascotMod = await loadModule('mascot');
    // Mascot is loaded separately
  } catch (e) {
    // Load mascot directly
    try {
      const m = await import('./app/Mascot.js');
      m.renderMascot();
    } catch (err) {
      console.warn('Mascot not loaded:', err);
    }
  }
}

window.addEventListener('hashchange', navigate);
window.addEventListener('DOMContentLoaded', navigate);

// Global navigation helper
window.navigateTo = function (hash) {
  window.location.hash = hash;
};
