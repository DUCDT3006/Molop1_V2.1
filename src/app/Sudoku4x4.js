/* ====================================
   Molop1 V2.1 - Sudoku Game (3x3 → 4x4 → 4x4 Hard)
   ==================================== */
import { getLesson } from '../data/lessons.js';
import { getState, markComplete, showConfetti } from '../data/state.js';

export function renderSudoku(container, params) {
  const { week, day } = params;
  const lesson = getLesson(week, day);
  const state = getState();
  if (!lesson) { container.innerHTML = '<div style="padding:40px;text-align:center"><h2>Không tìm thấy bài học</h2></div>'; return; }

  // Check which levels are unlocked
  const sudokuKey = `sudoku-level-w${week}d${day}`;
  let unlockedLevel = parseInt(localStorage.getItem(sudokuKey)) || 1;
  let currentLevel = null;

  function showLevelSelect() {
    const levels = [
      { id: 1, name: 'Dễ (3×3)', stars: '⭐', desc: '3 emoji, lưới nhỏ', emoji: '🌱', unlocked: true },
      { id: 2, name: 'Trung bình (4×4)', stars: '⭐⭐', desc: '4 emoji, lưới vừa', emoji: '🌿', unlocked: unlockedLevel >= 2 },
      { id: 3, name: 'Nâng cao (4×4 Khó)', stars: '⭐⭐⭐', desc: '4 emoji, ít gợi ý', emoji: '🌳', unlocked: unlockedLevel >= 3 },
    ];

    container.innerHTML = `
      <div class="header-bar">
        <button class="back-btn" onclick="navigateTo('#daily/${week}/${day}')">←</button>
        <div class="title">🧩 Sudoku Hoa Quả</div>
        <div class="star-counter">⭐ ${state.stars}</div>
      </div>
      <div class="game-container">
        <div class="section-badge practice">🎮 Thực hành - Sudoku</div>
        <div class="instruction-box">Chọn trình độ bạn muốn chơi!</div>
        <div class="level-select-grid">
          ${levels.map(lv => `
            <div class="level-card ${lv.unlocked ? 'unlocked' : 'locked'}" data-level="${lv.id}">
              <div class="level-emoji">${lv.unlocked ? lv.emoji : '🔒'}</div>
              <div class="level-name">${lv.name}</div>
              <div class="level-stars">${lv.stars}</div>
              <div class="level-desc">${lv.unlocked ? lv.desc : 'Hoàn thành cấp trước để mở khóa!'}</div>
            </div>
          `).join('')}
        </div>
      </div>`;

    container.querySelectorAll('.level-card.unlocked').forEach(card => {
      card.addEventListener('click', () => {
        currentLevel = parseInt(card.dataset.level);
        startGame(currentLevel);
      });
    });
  }

  function getSudokuData(level) {
    if (level === 1) return lesson.sudoku3x3 || generate3x3();
    if (level === 2) return lesson.sudoku || lesson.sudoku4x4 || generate4x4();
    if (level === 3) return lesson.sudoku4x4hard || generateHard4x4();
    return generate3x3();
  }

  function generate3x3() {
    const symbols = ['🍎', '🍋', '🍇'];
    return {
      size: 3, symbols,
      initial: [[0, -1, 2], [-1, 2, -1], [2, -1, 0]],
      solution: [[0, 1, 2], [1, 2, 0], [2, 0, 1]]
    };
  }
  function generate4x4() {
    const symbols = ['🍎', '🍋', '🍇', '🍊'];
    return {
      size: 4, symbols,
      initial: [[0,-1,2,-1],[-1,2,-1,0],[2,-1,0,-1],[-1,0,-1,2]],
      solution: [[0,3,2,1],[1,2,3,0],[2,1,0,3],[3,0,1,2]]
    };
  }
  function generateHard4x4() {
    const symbols = ['🚀', '🌟', '🪐', '🛸'];
    return {
      size: 4, symbols,
      initial: [[-1,-1,2,-1],[-1,2,-1,-1],[2,-1,-1,-1],[-1,-1,-1,2]],
      solution: [[0,3,2,1],[1,2,3,0],[2,1,0,3],[3,0,1,2]]
    };
  }

  function startGame(level) {
    const data = getSudokuData(level);
    const size = data.size || (data.initial.length);
    const symbols = data.symbols;
    let grid = data.initial.map(row => [...row]);
    let selectedCell = null;

    function renderGrid() {
      const levelNames = { 1: 'Dễ (3×3)', 2: 'Trung bình (4×4)', 3: 'Nâng cao (4×4 Khó)' };
      container.innerHTML = `
        <div class="header-bar">
          <button class="back-btn" id="back-to-levels">←</button>
          <div class="title">🧩 Sudoku - ${levelNames[level]}</div>
          <div class="star-counter">⭐ ${state.stars}</div>
        </div>
        <div class="game-container">
          <div class="section-badge practice">🎮 Level ${level}</div>
          <div class="instruction-box">Điền emoji sao cho mỗi hàng và mỗi cột đều có đủ ${size} loại emoji khác nhau!</div>
          <div style="text-align:center">
            <div class="sudoku-grid sudoku-${size}x${size}" id="sudoku-grid">
              ${grid.map((row, r) => row.map((val, c) => {
                const isInitial = data.initial[r][c] !== -1;
                const isEmpty = val === -1;
                const isSelected = selectedCell && selectedCell[0] === r && selectedCell[1] === c;
                let cls = 'sudoku-cell';
                if (isInitial) cls += ' filled';
                else if (isEmpty) cls += ' empty';
                if (isSelected) cls += ' selected';
                const display = val === -1 ? '' : symbols[val];
                return `<div class="${cls}" data-r="${r}" data-c="${c}">${display}</div>`;
              }).join('')).join('')}
            </div>
          </div>
          <div style="text-align:center;margin:16px 0">
            <h4 style="margin-bottom:10px">Chọn emoji để điền:</h4>
            <div class="symbol-picker">
              ${symbols.map((sym, i) => `<button class="symbol-btn" data-idx="${i}">${sym}</button>`).join('')}
              <button class="symbol-btn" data-idx="-1" style="font-size:1.2rem">❌</button>
            </div>
          </div>
          <div style="display:flex;gap:10px;justify-content:center;margin-top:16px">
            <button class="btn btn-success" id="check-btn">✅ Kiểm tra</button>
            <button class="btn btn-ghost" id="reset-btn">🔄 Làm lại</button>
          </div>
          <div id="result-msg" style="text-align:center;margin-top:16px;font-size:1.05rem;font-weight:700;min-height:24px"></div>
        </div>`;

      container.querySelector('#back-to-levels').addEventListener('click', showLevelSelect);

      container.querySelectorAll('.sudoku-cell:not(.filled)').forEach(cell => {
        cell.addEventListener('click', () => {
          selectedCell = [parseInt(cell.dataset.r), parseInt(cell.dataset.c)];
          renderGrid();
        });
      });

      container.querySelectorAll('.symbol-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          if (!selectedCell) { showMsg('Hãy chọn một ô trống trước!', 'var(--warning)'); return; }
          const [r, c] = selectedCell;
          if (data.initial[r][c] !== -1) return;
          grid[r][c] = parseInt(btn.dataset.idx);
          renderGrid();
        });
      });

      container.querySelector('#check-btn').addEventListener('click', () => checkSolution(data, grid, size));
      container.querySelector('#reset-btn').addEventListener('click', () => {
        grid = data.initial.map(row => [...row]); selectedCell = null; renderGrid();
      });
    }

    function showMsg(text, color) {
      const el = container.querySelector('#result-msg');
      if (el) { el.textContent = text; el.style.color = color; }
    }

    function checkSolution(data, grid, size) {
      let allFilled = true, allCorrect = true;
      const cells = container.querySelectorAll('.sudoku-cell');
      
      cells.forEach(c => { c.classList.remove('error', 'success-cell'); });

      for (let r = 0; r < size; r++) {
        for (let c = 0; c < size; c++) {
          const idx = r * size + c;
          const cell = cells[idx];
          if (grid[r][c] === -1) { 
            allFilled = false; 
            cell.classList.add('error'); 
          }
        }
      }
      if (!allFilled) { showMsg('Vẫn còn ô trống! 📝', 'var(--warning)'); return; }

      for (let r = 0; r < size; r++) {
        for (let c = 0; c < size; c++) {
          const val = grid[r][c];
          let isValid = true;

          for (let i = 0; i < size; i++) {
            if (i !== c && grid[r][i] === val) isValid = false;
          }
          for (let i = 0; i < size; i++) {
            if (i !== r && grid[i][c] === val) isValid = false;
          }
          if (size === 4) {
            const br = Math.floor(r / 2) * 2;
            const bc = Math.floor(c / 2) * 2;
            for (let i = 0; i < 2; i++) {
              for (let j = 0; j < 2; j++) {
                if ((br + i !== r || bc + j !== c) && grid[br + i][bc + j] === val) {
                  isValid = false;
                }
              }
            }
          }

          const idx = r * size + c;
          const cell = cells[idx];
          if (!isValid) {
            allCorrect = false;
            if (data.initial[r][c] === -1) cell.classList.add('error');
          } else {
            cell.classList.add('success-cell');
          }
        }
      }

      if (allCorrect) {
        // Unlock next level
        if (level < 3) {
          const newUnlocked = Math.max(unlockedLevel, level + 1);
          localStorage.setItem(sudokuKey, newUnlocked);
          unlockedLevel = newUnlocked;
        }
        markComplete(week, day, 'sudoku', level >= 2 ? 'excellent' : 'good');
        showConfetti();
        setTimeout(() => {
          container.innerHTML = `
            <div class="reward-screen" style="position:relative"><div class="reward-content">
              <div class="reward-emoji">🧩</div>
              <div class="reward-title">Giải Sudoku ${level === 1 ? '3×3' : '4×4'} thành công!</div>
              <div class="reward-stars">${'⭐'.repeat(level)}</div>
              <div class="reward-subtitle">${level < 3 ? `Level ${level + 1} đã được mở khóa! 🎉` : 'Bạn đã hoàn thành tất cả level!'}</div>
              <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
                <button class="btn btn-primary" onclick="navigateTo('#daily/${week}/${day}')">📋 Quay lại</button>
                ${level < 3 ? `<button class="btn btn-accent" id="next-level-btn">🚀 Chơi Level ${level + 1}</button>` : ''}
              </div>
            </div></div>`;
          const nextBtn = container.querySelector('#next-level-btn');
          if (nextBtn) nextBtn.addEventListener('click', () => startGame(level + 1));
        }, 800);
      } else {
        showMsg('Có ô sai rồi! Thử sửa lại nhé! 🔧', 'var(--danger)');
      }
    }

    renderGrid();
  }

  showLevelSelect();
}
