import{a as e,c as t,i as n,n as r}from"./state-BDdBsVRV.js";import{t as i}from"./ttsTextRegistry-BsC2sywG.js";function a(a,o){let{week:s,day:c}=o,l=t(s,c),u=r();if(!l){a.innerHTML=`<div style="padding:40px;text-align:center"><h2>Không tìm thấy bài học</h2></div>`;return}let d=`sudoku-level-w${s}d${c}`,f=parseInt(localStorage.getItem(d))||1,p=null;function m(){let e=[{id:1,name:`Dễ (3×3)`,stars:`⭐`,desc:`3 emoji, lưới nhỏ`,emoji:`🌱`,unlocked:!0},{id:2,name:`Trung bình (4×4)`,stars:`⭐⭐`,desc:`4 emoji, lưới vừa`,emoji:`🌿`,unlocked:f>=2},{id:3,name:`Nâng cao (4×4 Khó)`,stars:`⭐⭐⭐`,desc:`4 emoji, ít gợi ý`,emoji:`🌳`,unlocked:f>=3}];a.innerHTML=`
      <div class="header-bar">
        <button class="back-btn" onclick="navigateTo('#daily/${s}/${c}')">←</button>
        <div class="title">🧩 Sudoku Hoa Quả</div>
        <div class="star-counter">⭐ ${u.stars}</div>
      </div>
      <div class="game-container">
        <div class="section-badge practice">🎮 Thực hành - Sudoku</div>
        <div class="instruction-box">${i.EXTRA_MODE_SELECT} <button class="tts-btn" onclick="playTTS(this.dataset.text, this)" data-text="${i.EXTRA_MODE_SELECT}">🔊</button></div>
        <div class="level-select-grid">
          ${e.map(e=>`
            <div class="level-card ${e.unlocked?`unlocked`:`locked`}" data-level="${e.id}">
              <div class="level-emoji">${e.unlocked?e.emoji:`🔒`}</div>
              <div class="level-name">${e.name}</div>
              <div class="level-stars">${e.stars}</div>
              <div class="level-desc">${e.unlocked?e.desc:`Hoàn thành cấp trước để mở khóa!`}</div>
            </div>
          `).join(``)}
        </div>
      </div>`,a.querySelectorAll(`.level-card.unlocked`).forEach(e=>{e.addEventListener(`click`,()=>{p=parseInt(e.dataset.level),y(p)})})}function h(e){return e===1?l.sudoku3x3||g():e===2?l.sudoku||l.sudoku4x4||_():e===3?l.sudoku4x4hard||v():g()}function g(){return{size:3,symbols:[`🍎`,`🍋`,`🍇`],initial:[[0,-1,2],[-1,2,-1],[2,-1,0]],solution:[[0,1,2],[1,2,0],[2,0,1]]}}function _(){return{size:4,symbols:[`🍎`,`🍋`,`🍇`,`🍊`],initial:[[0,-1,2,-1],[-1,2,-1,0],[2,-1,0,-1],[-1,0,-1,2]],solution:[[0,3,2,1],[1,2,3,0],[2,1,0,3],[3,0,1,2]]}}function v(){return{size:4,symbols:[`🚀`,`🌟`,`🪐`,`🛸`],initial:[[-1,-1,2,-1],[-1,2,-1,-1],[2,-1,-1,-1],[-1,-1,-1,2]],solution:[[0,3,2,1],[1,2,3,0],[2,1,0,3],[3,0,1,2]]}}function y(t){let r=h(t),i=r.size||r.initial.length,o=r.symbols,l=r.initial.map(e=>[...e]),p=null;function g(){a.innerHTML=`
        <div class="header-bar">
          <button class="back-btn" id="back-to-levels">←</button>
          <div class="title">🧩 Sudoku - ${{1:`Dễ (3×3)`,2:`Trung bình (4×4)`,3:`Nâng cao (4×4 Khó)`}[t]}</div>
          <div class="star-counter">⭐ ${u.stars}</div>
        </div>
        <div class="game-container">
          <div class="section-badge practice">🎮 Level ${t}</div>
          <div class="instruction-box">${instruction} <button class="tts-btn" onclick="playTTS(this.dataset.text, this)" data-text="${instruction}">🔊</button></div>
          <div style="text-align:center">
            <div class="sudoku-grid sudoku-${i}x${i}" id="sudoku-grid">
              ${l.map((e,t)=>e.map((e,n)=>{let i=r.initial[t][n]!==-1,a=e===-1,s=p&&p[0]===t&&p[1]===n,c=`sudoku-cell`;i?c+=` filled`:a&&(c+=` empty`),s&&(c+=` selected`);let l=e===-1?``:o[e];return`<div class="${c}" data-r="${t}" data-c="${n}">${l}</div>`}).join(``)).join(``)}
            </div>
          </div>
          <div style="text-align:center;margin:16px 0">
            <h4 style="margin-bottom:10px">Chọn emoji để điền:</h4>
            <div class="symbol-picker">
              ${o.map((e,t)=>`<button class="symbol-btn" data-idx="${t}">${e}</button>`).join(``)}
              <button class="symbol-btn" data-idx="-1" style="font-size:1.2rem">❌</button>
            </div>
          </div>
          <div style="display:flex;gap:10px;justify-content:center;margin-top:16px">
            <button class="btn btn-success" id="check-btn">✅ Kiểm tra</button>
            <button class="btn btn-ghost" id="reset-btn">🔄 Làm lại</button>
          </div>
          <div id="result-msg" style="text-align:center;margin-top:16px;font-size:1.05rem;font-weight:700;min-height:24px"></div>
        </div>`,a.querySelector(`#back-to-levels`).addEventListener(`click`,m),a.querySelectorAll(`.sudoku-cell:not(.filled)`).forEach(e=>{e.addEventListener(`click`,()=>{p=[parseInt(e.dataset.r),parseInt(e.dataset.c)],g()})}),a.querySelectorAll(`.symbol-btn`).forEach(e=>{e.addEventListener(`click`,()=>{if(!p){_(`Hãy chọn một ô trống trước!`,`var(--warning)`);return}let[t,n]=p;r.initial[t][n]===-1&&(l[t][n]=parseInt(e.dataset.idx),g())})}),a.querySelector(`#check-btn`).addEventListener(`click`,()=>v(r,l,i)),a.querySelector(`#reset-btn`).addEventListener(`click`,()=>{l=r.initial.map(e=>[...e]),p=null,g()})}function _(e,t){let n=a.querySelector(`#result-msg`);n&&(n.textContent=e,n.style.color=t)}function v(r,i,o){let l=!0,u=!0,p=a.querySelectorAll(`.sudoku-cell`);p.forEach(e=>{e.classList.remove(`error`,`success-cell`)});for(let e=0;e<o;e++)for(let t=0;t<o;t++){let n=p[e*o+t];i[e][t]===-1&&(l=!1,n.classList.add(`error`))}if(!l){_(`Vẫn còn ô trống! 📝`,`var(--warning)`);return}for(let e=0;e<o;e++)for(let t=0;t<o;t++){let n=i[e][t],a=!0;for(let r=0;r<o;r++)r!==t&&i[e][r]===n&&(a=!1);for(let r=0;r<o;r++)r!==e&&i[r][t]===n&&(a=!1);if(o===4){let r=Math.floor(e/2)*2,o=Math.floor(t/2)*2;for(let s=0;s<2;s++)for(let c=0;c<2;c++)(r+s!==e||o+c!==t)&&i[r+s][o+c]===n&&(a=!1)}let s=p[e*o+t];a?s.classList.add(`success-cell`):(u=!1,r.initial[e][t]===-1&&s.classList.add(`error`))}if(u){if(t<3){let e=Math.max(f,t+1);localStorage.setItem(d,e),f=e}n(s,c,`sudoku`,t>=2?`excellent`:`good`),e(),setTimeout(()=>{a.innerHTML=`
            <div class="reward-screen" style="position:relative"><div class="reward-content">
              <div class="reward-emoji">🧩</div>
              <div class="reward-title">Giải Sudoku ${t===1?`3×3`:`4×4`} thành công!</div>
              <div class="reward-stars">${`⭐`.repeat(t)}</div>
              <div class="reward-subtitle">${t<3?`Level ${t+1} đã được mở khóa! 🎉`:`Bạn đã hoàn thành tất cả level!`}</div>
              <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
                <button class="btn btn-primary" onclick="navigateTo('#daily/${s}/${c}')">📋 Quay lại</button>
                ${t<3?`<button class="btn btn-accent" id="next-level-btn">🚀 Chơi Level ${t+1}</button>`:``}
              </div>
            </div></div>`;let e=a.querySelector(`#next-level-btn`);e&&e.addEventListener(`click`,()=>y(t+1))},800)}else _(`Có ô sai rồi! Thử sửa lại nhé! 🔧`,`var(--danger)`)}g()}m()}export{a as renderSudoku};