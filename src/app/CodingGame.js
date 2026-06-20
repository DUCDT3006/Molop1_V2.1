/* ====================================
   Molop1 V2.1 - Coding Game (Maze)
   Fixed: collect letter at start position
   ==================================== */
import { getLesson } from '../data/lessons.js';
import { getState, markComplete, showConfetti } from '../data/state.js';

export function renderCodingGame(container, params) {
  const { week, day } = params;
  const lesson = getLesson(week, day);
  const state = getState();

  if (!lesson) {
    container.innerHTML = '<div style="padding:40px;text-align:center"><h2>Không tìm thấy bài học</h2></div>';
    return;
  }

  const coding = lesson.coding;
  let commands = [];
  let robotPos = [...coding.startPos];
  let collectedLetters = '';
  let isRunning = false;
  // Track which cells have been collected so we don't double-collect
  let collectedCells = new Set();

  function renderGame() {
    const maze = coding.maze;
    const cols = maze[0].length;

    container.innerHTML = `
      <div class="header-bar">
        <button class="back-btn" onclick="navigateTo('#daily/${week}/${day}')">←</button>
        <div class="title">🤖 Lập trình ghép vần</div>
        <div class="star-counter">⭐ ${state.stars}</div>
      </div>
      <div class="game-container">
        <div class="section-badge practice">🎮 Thực hành - Coding</div>
        <div class="instruction-box">${coding.instruction}</div>
        
        <div class="target-word">
          Từ cần ghép: <span>"${coding.targetWord}"</span>
          ${collectedLetters ? `<br>Đã nhặt: <span style="color:var(--success)">"${collectedLetters}"</span>` : ''}
        </div>

        <div style="text-align:center">
          <div class="maze-grid" style="grid-template-columns:repeat(${cols}, 1fr)" id="maze">
            ${maze.map((row, r) => row.map((cell, c) => {
              let cls = 'maze-cell';
              let content = '';
              const isRobot = r === robotPos[0] && c === robotPos[1];
              const isGoal = r === coding.goalPos[0] && c === coding.goalPos[1];
              const cellKey = `${r}-${c}`;
              const wasCollected = collectedCells.has(cellKey);

              if (isRobot) {
                cls += ' robot';
                // Show robot + letter underneath if there's a letter here
                if (cell !== ' ' && cell !== '🌀' && !wasCollected) {
                  content = '🤖<span style="font-size:0.7rem;display:block;margin-top:-4px">' + cell + '</span>';
                } else {
                  content = '🤖';
                }
              } else if (isGoal && !isRobot) {
                cls += ' goal';
                content = '🌀';
              } else if (cell !== ' ' && cell !== '🌀' && !wasCollected) {
                cls += ' letter';
                content = cell;
              } else if (wasCollected) {
                cls += ' collected';
                content = '·';
              } else {
                content = '·';
              }
              return `<div class="${cls}" data-r="${r}" data-c="${c}">${content}</div>`;
            }).join('')).join('')}
          </div>
        </div>

        <div class="game-card" style="margin-top:16px">
          <h4 style="margin-bottom:10px">📝 Chuỗi lệnh:</h4>
          <div class="command-queue" id="cmd-queue">
            ${commands.length === 0 ? '<span style="color:var(--text-dim);font-size:0.9rem">Chưa có lệnh nào. Hãy bấm mũi tên để thêm lệnh!</span>' :
              commands.map((cmd) => `<span class="command-tag">${cmdToEmoji(cmd)}</span>`).join('')}
          </div>
          <div class="command-bar">
            <button class="btn btn-ghost" id="cmd-up">⬆️ Lên</button>
            <button class="btn btn-ghost" id="cmd-down">⬇️ Xuống</button>
            <button class="btn btn-ghost" id="cmd-left">⬅️ Trái</button>
            <button class="btn btn-ghost" id="cmd-right">➡️ Phải</button>
          </div>
          <div style="display:flex;gap:10px;justify-content:center;margin-top:12px">
            <button class="btn btn-secondary btn-sm" id="cmd-clear">🗑️ Xóa hết</button>
            <button class="btn btn-ghost btn-sm" id="cmd-undo">↩️ Xóa lệnh cuối</button>
            <button class="btn btn-success" id="cmd-run" ${isRunning ? 'disabled' : ''}>▶️ Chạy!</button>
          </div>
        </div>

        <div id="result-msg" style="text-align:center;margin-top:16px;font-size:1.1rem;font-weight:700;min-height:30px"></div>
      </div>
    `;

    // Attach events
    container.querySelector('#cmd-up')?.addEventListener('click', () => addCmd('UP'));
    container.querySelector('#cmd-down')?.addEventListener('click', () => addCmd('DOWN'));
    container.querySelector('#cmd-left')?.addEventListener('click', () => addCmd('LEFT'));
    container.querySelector('#cmd-right')?.addEventListener('click', () => addCmd('RIGHT'));
    container.querySelector('#cmd-clear')?.addEventListener('click', clearCmds);
    container.querySelector('#cmd-undo')?.addEventListener('click', undoCmd);
    container.querySelector('#cmd-run')?.addEventListener('click', runCmds);
  }

  function cmdToEmoji(cmd) {
    const map = { 'UP': '⬆️', 'DOWN': '⬇️', 'LEFT': '⬅️', 'RIGHT': '➡️' };
    return map[cmd] || cmd;
  }

  function addCmd(dir) {
    if (isRunning) return;
    commands.push(dir);
    renderGame();
  }

  function undoCmd() {
    if (isRunning || commands.length === 0) return;
    commands.pop();
    renderGame();
  }

  function clearCmds() {
    if (isRunning) return;
    commands = [];
    robotPos = [...coding.startPos];
    collectedLetters = '';
    collectedCells = new Set();
    renderGame();
  }

  async function runCmds() {
    if (isRunning || commands.length === 0) return;
    isRunning = true;
    robotPos = [...coding.startPos];
    collectedLetters = '';
    collectedCells = new Set();
    const maze = coding.maze;

    // FIX: Collect letter at starting position
    const startCell = maze[robotPos[0]][robotPos[1]];
    if (startCell !== ' ' && startCell !== '🌀') {
      collectedLetters += startCell;
      collectedCells.add(`${robotPos[0]}-${robotPos[1]}`);
    }
    renderGame();
    await sleep(300);

    for (let i = 0; i < commands.length; i++) {
      const cmd = commands[i];
      let nextPos = [...robotPos];
      if (cmd === 'UP') nextPos[0]--;
      else if (cmd === 'DOWN') nextPos[0]++;
      else if (cmd === 'LEFT') nextPos[1]--;
      else if (cmd === 'RIGHT') nextPos[1]++;

      // Check bounds
      if (nextPos[0] < 0 || nextPos[0] >= maze.length || nextPos[1] < 0 || nextPos[1] >= maze[0].length) {
        showMessage('🚧 Đâm vào tường vũ trụ rồi! Hãy thử lại.', 'var(--danger)');
        isRunning = false;
        return;
      }

      robotPos = nextPos;
      const cellKey = `${robotPos[0]}-${robotPos[1]}`;
      const cell = maze[robotPos[0]][robotPos[1]];
      if (cell !== ' ' && cell !== '🌀' && !collectedCells.has(cellKey)) {
        collectedLetters += cell;
        collectedCells.add(cellKey);
      }

      renderGame();
      // Highlight current command
      const tags = container.querySelectorAll('.command-tag');
      if (tags[i]) tags[i].style.background = 'var(--success)';

      await sleep(400);
    }

    // Check result
    const reachedGoal = robotPos[0] === coding.goalPos[0] && robotPos[1] === coding.goalPos[1];
    const spelledCorrectly = collectedLetters === coding.targetWord;

    if (reachedGoal && spelledCorrectly) {
      isRunning = false;
      showSuccess();
    } else if (!reachedGoal) {
      showMessage('Chưa đến đích 🌀! Cần thêm lệnh di chuyển.', 'var(--warning)');
      isRunning = false;
    } else {
      showMessage(`Đến đích nhưng ghép sai: "${collectedLetters}". Từ đúng: "${coding.targetWord}". Thử đường đi khác!`, 'var(--warning)');
      isRunning = false;
    }
  }

  function showMessage(msg, color) {
    const el = container.querySelector('#result-msg');
    if (el) { el.textContent = msg; el.style.color = color; }
  }

  function showSuccess() {
    markComplete(week, day, 'coding', 'excellent');
    showConfetti();
    container.innerHTML = `
      <div class="reward-screen" style="position:relative">
        <div class="reward-content">
          <div class="reward-emoji">🎉</div>
          <div class="reward-title">Tuyệt vời! Ghép đúng từ "${coding.targetWord}"!</div>
          <div class="reward-stars">⭐⭐⭐</div>
          <div class="reward-subtitle">Astro rất tự hào về bạn!</div>
          <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
            <button class="btn btn-primary" onclick="navigateTo('#daily/${week}/${day}')">📋 Quay lại</button>
          </div>
        </div>
      </div>
    `;
  }

  function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

  renderGame();
}
