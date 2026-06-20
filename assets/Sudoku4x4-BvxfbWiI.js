import{a as e,c as t,i as n,n as r}from"./state-BDdBsVRV.js";function i(i,a){let{week:o,day:s}=a,c=t(o,s),l=r();if(!c){i.innerHTML=`<div style="padding:40px;text-align:center"><h2>Không tìm thấy bài học</h2></div>`;return}let u=`sudoku-level-w${o}d${s}`,d=parseInt(localStorage.getItem(u))||1,f=null;function p(){let e=[{id:1,name:`Dễ (3×3)`,stars:`⭐`,desc:`3 emoji, lưới nhỏ`,emoji:`🌱`,unlocked:!0},{id:2,name:`Trung bình (4×4)`,stars:`⭐⭐`,desc:`4 emoji, lưới vừa`,emoji:`🌿`,unlocked:d>=2},{id:3,name:`Nâng cao (4×4 Khó)`,stars:`⭐⭐⭐`,desc:`4 emoji, ít gợi ý`,emoji:`🌳`,unlocked:d>=3}];i.innerHTML=`
      <div class="header-bar">
        <button class="back-btn" onclick="navigateTo('#daily/${o}/${s}')">←</button>
        <div class="title">🧩 Sudoku Hoa Quả</div>
        <div class="star-counter">⭐ ${l.stars}</div>
      </div>
      <div class="game-container">
        <div class="section-badge practice">🎮 Thực hành - Sudoku</div>
        <div class="instruction-box">Chọn trình độ bạn muốn chơi!</div>
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
      </div>`,i.querySelectorAll(`.level-card.unlocked`).forEach(e=>{e.addEventListener(`click`,()=>{f=parseInt(e.dataset.level),v(f)})})}function m(e){return e===1?c.sudoku3x3||h():e===2?c.sudoku||c.sudoku4x4||g():e===3?c.sudoku4x4hard||_():h()}function h(){return{size:3,symbols:[`🍎`,`🍋`,`🍇`],initial:[[0,-1,2],[-1,2,-1],[2,-1,0]],solution:[[0,1,2],[1,2,0],[2,0,1]]}}function g(){return{size:4,symbols:[`🍎`,`🍋`,`🍇`,`🍊`],initial:[[0,-1,2,-1],[-1,2,-1,0],[2,-1,0,-1],[-1,0,-1,2]],solution:[[0,3,2,1],[1,2,3,0],[2,1,0,3],[3,0,1,2]]}}function _(){return{size:4,symbols:[`🚀`,`🌟`,`🪐`,`🛸`],initial:[[-1,-1,2,-1],[-1,2,-1,-1],[2,-1,-1,-1],[-1,-1,-1,2]],solution:[[0,3,2,1],[1,2,3,0],[2,1,0,3],[3,0,1,2]]}}function v(t){let r=m(t),a=r.size||r.initial.length,c=r.symbols,f=r.initial.map(e=>[...e]),h=null;function g(){i.innerHTML=`
        <div class="header-bar">
          <button class="back-btn" id="back-to-levels">←</button>
          <div class="title">🧩 Sudoku - ${{1:`Dễ (3×3)`,2:`Trung bình (4×4)`,3:`Nâng cao (4×4 Khó)`}[t]}</div>
          <div class="star-counter">⭐ ${l.stars}</div>
        </div>
        <div class="game-container">
          <div class="section-badge practice">🎮 Level ${t}</div>
          <div class="instruction-box">Điền emoji sao cho mỗi hàng và mỗi cột đều có đủ ${a} loại emoji khác nhau!</div>
          <div style="text-align:center">
            <div class="sudoku-grid sudoku-${a}x${a}" id="sudoku-grid">
              ${f.map((e,t)=>e.map((e,n)=>{let i=r.initial[t][n]!==-1,a=e===-1,o=h&&h[0]===t&&h[1]===n,s=`sudoku-cell`;i?s+=` filled`:a&&(s+=` empty`),o&&(s+=` selected`);let l=e===-1?``:c[e];return`<div class="${s}" data-r="${t}" data-c="${n}">${l}</div>`}).join(``)).join(``)}
            </div>
          </div>
          <div style="text-align:center;margin:16px 0">
            <h4 style="margin-bottom:10px">Chọn emoji để điền:</h4>
            <div class="symbol-picker">
              ${c.map((e,t)=>`<button class="symbol-btn" data-idx="${t}">${e}</button>`).join(``)}
              <button class="symbol-btn" data-idx="-1" style="font-size:1.2rem">❌</button>
            </div>
          </div>
          <div style="display:flex;gap:10px;justify-content:center;margin-top:16px">
            <button class="btn btn-success" id="check-btn">✅ Kiểm tra</button>
            <button class="btn btn-ghost" id="reset-btn">🔄 Làm lại</button>
          </div>
          <div id="result-msg" style="text-align:center;margin-top:16px;font-size:1.05rem;font-weight:700;min-height:24px"></div>
        </div>`,i.querySelector(`#back-to-levels`).addEventListener(`click`,p),i.querySelectorAll(`.sudoku-cell:not(.filled)`).forEach(e=>{e.addEventListener(`click`,()=>{h=[parseInt(e.dataset.r),parseInt(e.dataset.c)],g()})}),i.querySelectorAll(`.symbol-btn`).forEach(e=>{e.addEventListener(`click`,()=>{if(!h){_(`Hãy chọn một ô trống trước!`,`var(--warning)`);return}let[t,n]=h;r.initial[t][n]===-1&&(f[t][n]=parseInt(e.dataset.idx),g())})}),i.querySelector(`#check-btn`).addEventListener(`click`,()=>y(r,f,a)),i.querySelector(`#reset-btn`).addEventListener(`click`,()=>{f=r.initial.map(e=>[...e]),h=null,g()})}function _(e,t){let n=i.querySelector(`#result-msg`);n&&(n.textContent=e,n.style.color=t)}function y(r,a,c){let l=!0,f=!0,p=i.querySelectorAll(`.sudoku-cell`);p.forEach(e=>{e.classList.remove(`error`,`success-cell`)});for(let e=0;e<c;e++)for(let t=0;t<c;t++){let n=p[e*c+t];a[e][t]===-1&&(l=!1,n.classList.add(`error`))}if(!l){_(`Vẫn còn ô trống! 📝`,`var(--warning)`);return}for(let e=0;e<c;e++)for(let t=0;t<c;t++){let n=a[e][t],i=!0;for(let r=0;r<c;r++)r!==t&&a[e][r]===n&&(i=!1);for(let r=0;r<c;r++)r!==e&&a[r][t]===n&&(i=!1);if(c===4){let r=Math.floor(e/2)*2,o=Math.floor(t/2)*2;for(let s=0;s<2;s++)for(let c=0;c<2;c++)(r+s!==e||o+c!==t)&&a[r+s][o+c]===n&&(i=!1)}let o=p[e*c+t];i?o.classList.add(`success-cell`):(f=!1,r.initial[e][t]===-1&&o.classList.add(`error`))}if(f){if(t<3){let e=Math.max(d,t+1);localStorage.setItem(u,e),d=e}n(o,s,`sudoku`,t>=2?`excellent`:`good`),e(),setTimeout(()=>{i.innerHTML=`
            <div class="reward-screen" style="position:relative"><div class="reward-content">
              <div class="reward-emoji">🧩</div>
              <div class="reward-title">Giải Sudoku ${t===1?`3×3`:`4×4`} thành công!</div>
              <div class="reward-stars">${`⭐`.repeat(t)}</div>
              <div class="reward-subtitle">${t<3?`Level ${t+1} đã được mở khóa! 🎉`:`Bạn đã hoàn thành tất cả level!`}</div>
              <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
                <button class="btn btn-primary" onclick="navigateTo('#daily/${o}/${s}')">📋 Quay lại</button>
                ${t<3?`<button class="btn btn-accent" id="next-level-btn">🚀 Chơi Level ${t+1}</button>`:``}
              </div>
            </div></div>`;let e=i.querySelector(`#next-level-btn`);e&&e.addEventListener(`click`,()=>v(t+1))},800)}else _(`Có ô sai rồi! Thử sửa lại nhé! 🔧`,`var(--danger)`)}g()}p()}export{i as renderSudoku};