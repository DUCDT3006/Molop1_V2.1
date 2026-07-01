import{t as e}from"./index-DdBWtAAQ.js";import{a as t,c as n,i as r,n as i}from"./state-BDdBsVRV.js";import{t as a}from"./ttsTextRegistry-1tOQuBp5.js";function o(o,s){let{week:c,day:l}=s,u=n(c,l),d=i();if(!u){o.innerHTML=`<div style="padding:40px;text-align:center"><h2>Không tìm thấy bài học</h2></div>`;return}let f=`sudoku-level-w${c}d${l}`;parseInt(localStorage.getItem(f));let p=null,m=null;function h(){o.innerHTML=`
      <div class="header-bar">
        <button class="back-btn" onclick="navigateTo('#daily/${c}/${l}')">←</button>
        <div class="title">🧩 Sudoku Hoa Quả</div>
        <div class="star-counter">⭐ ${d.stars}</div>
      </div>
      <div class="game-container">
        <div class="section-badge practice">🎮 Thực hành - Sudoku</div>
        <div class="instruction-box">${a.SUDOKU_CHOOSE_SIZE} <button class="tts-btn" onclick="playTTS(this.dataset.text, this)" data-text="${e(a.SUDOKU_CHOOSE_SIZE)}">🔊</button></div>
        <div class="level-select-grid">
          ${[{id:`3x3`,size:3,name:`Lưới 3×3`,emoji:`🌱`,desc:`3 ký hiệu, lưới nhỏ`,unlocked:!0},{id:`4x4`,size:4,name:`Lưới 4×4`,emoji:`🌿`,desc:`4 ký hiệu, lưới vừa`,unlocked:!0},{id:`6x6`,size:6,name:`Lưới 6×6`,emoji:`🌳`,desc:`6 ký hiệu, lưới lớn`,unlocked:!0}].map(e=>`
            <div class="level-card ${e.unlocked?`unlocked`:`locked`}" data-size="${e.id}">
              <div class="level-emoji">${e.unlocked?e.emoji:`🔒`}</div>
              <div class="level-name">${e.name}</div>
              <div class="level-desc">${e.unlocked?e.desc:`Chưa mở khóa!`}</div>
            </div>
          `).join(``)}
        </div>
      </div>`,o.querySelectorAll(`.level-card.unlocked`).forEach(e=>{e.addEventListener(`click`,()=>{p=e.dataset.size,g()})})}function g(){o.innerHTML=`
      <div class="header-bar">
        <button class="back-btn" id="back-to-size">←</button>
        <div class="title">🧩 Sudoku - ${p.toUpperCase()}</div>
        <div class="star-counter">⭐ ${d.stars}</div>
      </div>
      <div class="game-container">
        <div class="section-badge practice">🎮 Chọn Kiểu Chơi</div>
        <div class="instruction-box">${a.SUDOKU_CHOOSE_MODE} <button class="tts-btn" onclick="playTTS(this.dataset.text, this)" data-text="${e(a.SUDOKU_CHOOSE_MODE)}">🔊</button></div>
        <div class="level-select-grid">
          ${[{id:`number`,name:`Chơi với Số`,emoji:`🔢`,desc:`Dùng các con số`},{id:`shape`,name:`Chơi với Hình`,emoji:`🍎`,desc:`Dùng các emoji hoa quả`}].map(e=>`
            <div class="level-card unlocked" data-mode="${e.id}">
              <div class="level-emoji">${e.emoji}</div>
              <div class="level-name">${e.name}</div>
              <div class="level-desc">${e.desc}</div>
            </div>
          `).join(``)}
        </div>
      </div>`,o.querySelector(`#back-to-size`).addEventListener(`click`,h),o.querySelectorAll(`.level-card[data-mode]`).forEach(e=>{e.addEventListener(`click`,()=>{m=e.dataset.mode,b()})})}function _(e,t){if(t===`number`){if(e===3)return[`1`,`2`,`3`];if(e===4)return[`1`,`2`,`3`,`4`];if(e===6)return[`1`,`2`,`3`,`4`,`5`,`6`]}else{if(e===3)return[`🍎`,`🍉`,`🍋`];if(e===4)return[`🍎`,`🍉`,`🍋`,`🍇`];if(e===6)return[`🍎`,`🍉`,`🍋`,`🍇`,`🍓`,`🍊`]}return[`1`,`2`,`3`]}function v(e,t,n){let r=e;for(let e=0;e<r;e++){let t=new Set;for(let i=0;i<r;i++){let a=n[e][i];if(a<0||a>=r)throw Error(`Invalid value ${a} at [${e}][${i}]`);if(t.has(a))throw Error(`Duplicate ${a} in row ${e}`);t.add(a)}}for(let e=0;e<r;e++){let t=new Set;for(let i=0;i<r;i++){let r=n[i][e];if(t.has(r))throw Error(`Duplicate ${r} in column ${e}`);t.add(r)}}if(e!==3){if(e===4)for(let e=0;e<2;e++)for(let t=0;t<2;t++){let r=new Set;for(let i=0;i<2;i++)for(let a=0;a<2;a++){let o=e*2+i,s=t*2+a,c=n[o][s];if(r.has(c))throw Error(`Duplicate ${c} in block [${e}][${t}]`);r.add(c)}}else if(e===6)for(let e=0;e<3;e++)for(let t=0;t<2;t++){let r=new Set;for(let i=0;i<2;i++)for(let a=0;a<3;a++){let o=e*2+i,s=t*3+a,c=n[o][s];if(r.has(c))throw Error(`Duplicate ${c} in block [${e}][${t}]`);r.add(c)}}}for(let e=0;e<r;e++)for(let i=0;i<r;i++){let r=t[e][i];if(r!==-1&&r!==n[e][i])throw Error(`Initial value mismatch at [${e}][${i}]: ${r} != ${n[e][i]}`)}}function y(e,t){let n=parseInt(e.split(`x`)[0],10),r=_(n,t);if(n===3){let e=[[0,1,2],[1,2,0],[2,0,1]],t=[[0,-1,2],[-1,2,-1],[2,-1,1]];return v(n,t,e),{size:3,symbols:r,initial:t,solution:e}}if(n===4){let e=[[0,3,2,1],[1,2,3,0],[2,1,0,3],[3,0,1,2]],t=[[0,-1,2,-1],[-1,2,-1,0],[2,-1,0,-1],[-1,0,-1,2]];return v(n,t,e),{size:4,symbols:r,initial:t,solution:e}}if(n===6){let e=[[0,1,2,3,4,5],[3,4,5,0,1,2],[1,2,0,4,5,3],[4,5,3,1,2,0],[2,0,1,5,3,4],[5,3,4,2,0,1]],t=[[0,-1,2,3,-1,5],[-1,4,-1,0,1,-1],[1,2,0,-1,5,3],[-1,-1,3,1,2,0],[2,0,-1,5,-1,4],[5,-1,4,-1,0,1]];return v(n,t,e),{size:6,symbols:r,initial:t,solution:e}}return{size:3,symbols:[`1`,`2`,`3`],initial:[[0,-1,2],[-1,2,-1],[2,-1,1]],solution:[[0,1,2],[1,2,0],[2,0,1]]}}function b(){let n=y(p,m),i=n.size,s=n.symbols,u=n.initial.map(e=>[...e]),f=null;function _(){let t;t=i===3?a.SUDOKU_INSTRUCTION_3x3:i===4?a.SUDOKU_INSTRUCTION_4x4:i===6?a.SUDOKU_INSTRUCTION_6x6:a.SUDOKU_INSTRUCTION_4x4;let r=m===`number`?`Số`:`Hình`;o.innerHTML=`
        <div class="header-bar">
          <button class="back-btn" id="back-to-mode">←</button>
          <div class="title">🧩 Sudoku ${i}×${i} (${r})</div>
          <div class="star-counter">⭐ ${d.stars}</div>
        </div>
        <div class="game-container">
          <div class="section-badge practice">🎮 ${i}×${i} - ${r}</div>
          <div class="instruction-box">${t} <button class="tts-btn" onclick="playTTS(this.dataset.text, this)" data-text="${e(t)}">🔊</button></div>
          <div style="text-align:center">
            <div class="sudoku-grid sudoku-${i}x${i}" id="sudoku-grid">
              ${u.map((e,t)=>e.map((e,r)=>{let a=n.initial[t][r]!==-1,o=e===-1,c=f&&f[0]===t&&f[1]===r,l=`sudoku-cell`;a?l+=` filled`:o&&(l+=` empty`),c&&(l+=` selected`),i===6&&(r===2&&(l+=` border-right-thick`),(t===1||t===3)&&(l+=` border-bottom-thick`));let u=e===-1?``:s[e];return`<div class="${l}" data-r="${t}" data-c="${r}">${u}</div>`}).join(``)).join(``)}
            </div>
          </div>
          <div style="text-align:center;margin:16px 0">
            <h4 style="margin-bottom:10px">Chọn ${m===`number`?`số`:`emoji`} để điền:</h4>
            <div class="symbol-picker">
              ${s.map((e,t)=>`<button class="symbol-btn" data-idx="${t}">${e}</button>`).join(``)}
              <button class="symbol-btn" data-idx="-1" style="font-size:1.2rem">❌</button>
            </div>
          </div>
          <div style="display:flex;gap:10px;justify-content:center;margin-top:16px">
            <button class="btn btn-success" id="check-btn">✅ Kiểm tra</button>
            <button class="btn btn-ghost" id="reset-btn">🔄 Làm lại</button>
          </div>
          <div id="result-msg" style="text-align:center;margin-top:16px;font-size:1.05rem;font-weight:700;min-height:24px"></div>
        </div>`,o.querySelector(`#back-to-mode`).addEventListener(`click`,g),o.querySelectorAll(`.sudoku-cell:not(.filled)`).forEach(e=>{e.addEventListener(`click`,()=>{f=[parseInt(e.dataset.r),parseInt(e.dataset.c)],_()})}),o.querySelectorAll(`.symbol-btn`).forEach(e=>{e.addEventListener(`click`,()=>{if(!f){v(`Hãy chọn một ô trống trước!`,`var(--warning)`);return}let[t,r]=f;n.initial[t][r]===-1&&(u[t][r]=parseInt(e.dataset.idx),_())})}),o.querySelector(`#check-btn`).addEventListener(`click`,()=>b(n,u,i)),o.querySelector(`#reset-btn`).addEventListener(`click`,()=>{u=n.initial.map(e=>[...e]),f=null,_()})}function v(e,t){let n=o.querySelector(`#result-msg`);n&&(n.textContent=e,n.style.color=t)}function b(e,n,i){let a=!0,s=!0,u=o.querySelectorAll(`.sudoku-cell`);u.forEach(e=>{e.classList.remove(`error`,`success-cell`)});for(let e=0;e<i;e++)for(let t=0;t<i;t++){let r=u[e*i+t];n[e][t]===-1&&(a=!1,r.classList.add(`error`))}if(!a){v(`Vẫn còn ô trống! 📝`,`var(--warning)`);return}for(let t=0;t<i;t++)for(let r=0;r<i;r++){let a=n[t][r],o=!0;for(let e=0;e<i;e++)e!==r&&n[t][e]===a&&(o=!1);for(let e=0;e<i;e++)e!==t&&n[e][r]===a&&(o=!1);if(i===4){let e=Math.floor(t/2)*2,i=Math.floor(r/2)*2;for(let s=0;s<2;s++)for(let c=0;c<2;c++)(e+s!==t||i+c!==r)&&n[e+s][i+c]===a&&(o=!1)}else if(i===6){let e=Math.floor(t/2)*2,i=Math.floor(r/3)*3;for(let s=0;s<2;s++)for(let c=0;c<3;c++)(e+s!==t||i+c!==r)&&n[e+s][i+c]===a&&(o=!1)}let c=u[t*i+r];o?c.classList.add(`success-cell`):(s=!1,e.initial[t][r]===-1&&c.classList.add(`error`))}s?(r(c,l,`sudoku`,i>=6?`excellent`:i>=4?`good`:`ok`),t(),setTimeout(()=>{o.innerHTML=`
            <div class="reward-screen" style="position:relative"><div class="reward-content">
              <div class="reward-emoji">🧩</div>
              <div class="reward-title">Giải Sudoku ${i}×${i} thành công!</div>
              <div class="reward-stars">${`⭐`.repeat(i===6?3:i===4?2:1)}</div>
              <div class="reward-subtitle">Xuất sắc! Bạn đã hoàn thành!</div>
              <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
                <button class="btn btn-primary" onclick="navigateTo('#daily/${c}/${l}')">📋 Quay lại</button>
                <button class="btn btn-accent" id="play-again-btn">🔄 Chơi lại</button>
              </div>
            </div></div>`;let e=o.querySelector(`#play-again-btn`);e&&e.addEventListener(`click`,()=>h())},800)):v(`Có ô sai rồi! Thử sửa lại nhé! 🔧`,`var(--danger)`)}_()}h()}export{o as renderSudoku};