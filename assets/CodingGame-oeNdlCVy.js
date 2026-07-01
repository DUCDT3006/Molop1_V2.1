import{t as e}from"./index-BWB-Xbge.js";import{a as t,c as n,i as r,n as i}from"./state-BDdBsVRV.js";function a(a,o){let{week:s,day:c}=o,l=n(s,c),u=i();if(!l){a.innerHTML=`<div style="padding:40px;text-align:center"><h2>Không tìm thấy bài học</h2></div>`;return}let d=l.coding,f=[],p=[...d.startPos],m=``,h=!1,g=new Set;function _(){let t=d.maze,n=t[0].length;a.innerHTML=`
      <div class="header-bar">
        <button class="back-btn" onclick="navigateTo('#daily/${s}/${c}')">←</button>
        <div class="title">🤖 Lập trình ghép vần</div>
        <div class="star-counter">⭐ ${u.stars}</div>
      </div>
      <div class="game-container">
        <div class="section-badge practice">🎮 Thực hành - Coding</div>
        <div class="instruction-box">${d.instruction} <button class="tts-btn" onclick="playTTS(this.dataset.text, this)" data-text="${e(d.instruction)}">🔊</button></div>
        
        <div class="target-word">
          Từ cần ghép: <span>"${d.targetWord}"</span>
          ${m?`<br>Đã nhặt: <span style="color:var(--success)">"${m}"</span>`:``}
        </div>

        <div style="text-align:center">
          <div class="maze-grid" style="grid-template-columns:repeat(${n}, 1fr)" id="maze">
            ${t.map((e,t)=>e.map((e,n)=>{let r=`maze-cell`,i=``,a=t===p[0]&&n===p[1],o=t===d.goalPos[0]&&n===d.goalPos[1],s=`${t}-${n}`,c=g.has(s);return a?(r+=` robot`,i=e!==` `&&e!==`🌀`&&!c?`🤖<span style="font-size:0.7rem;display:block;margin-top:-4px">`+e+`</span>`:`🤖`):o&&!a?(r+=` goal`,i=`🌀`):e!==` `&&e!==`🌀`&&!c?(r+=` letter`,i=e):(c&&(r+=` collected`),i=`·`),`<div class="${r}" data-r="${t}" data-c="${n}">${i}</div>`}).join(``)).join(``)}
          </div>
        </div>

        <div class="game-card" style="margin-top:16px">
          <h4 style="margin-bottom:10px">📝 Chuỗi lệnh:</h4>
          <div class="command-queue" id="cmd-queue">
            ${f.length===0?`<span style="color:var(--text-dim);font-size:0.9rem">Chưa có lệnh nào. Hãy bấm mũi tên để thêm lệnh!</span>`:f.map(e=>`<span class="command-tag">${v(e)}</span>`).join(``)}
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
            <button class="btn btn-success" id="cmd-run" ${h?`disabled`:``}>▶️ Chạy!</button>
          </div>
        </div>

        <div id="result-msg" style="text-align:center;margin-top:16px;font-size:1.1rem;font-weight:700;min-height:30px"></div>
      </div>
    `,a.querySelector(`#cmd-up`)?.addEventListener(`click`,()=>y(`UP`)),a.querySelector(`#cmd-down`)?.addEventListener(`click`,()=>y(`DOWN`)),a.querySelector(`#cmd-left`)?.addEventListener(`click`,()=>y(`LEFT`)),a.querySelector(`#cmd-right`)?.addEventListener(`click`,()=>y(`RIGHT`)),a.querySelector(`#cmd-clear`)?.addEventListener(`click`,x),a.querySelector(`#cmd-undo`)?.addEventListener(`click`,b),a.querySelector(`#cmd-run`)?.addEventListener(`click`,S)}function v(e){return{UP:`⬆️`,DOWN:`⬇️`,LEFT:`⬅️`,RIGHT:`➡️`}[e]||e}function y(e){h||(f.push(e),_())}function b(){h||f.length===0||(f.pop(),_())}function x(){h||(f=[],p=[...d.startPos],m=``,g=new Set,_())}async function S(){if(h||f.length===0)return;h=!0,p=[...d.startPos],m=``,g=new Set;let e=d.maze,t=e[p[0]][p[1]];t!==` `&&t!==`🌀`&&(m+=t,g.add(`${p[0]}-${p[1]}`)),_(),await T(300);for(let t=0;t<f.length;t++){let n=f[t],r=[...p];if(n===`UP`?r[0]--:n===`DOWN`?r[0]++:n===`LEFT`?r[1]--:n===`RIGHT`&&r[1]++,r[0]<0||r[0]>=e.length||r[1]<0||r[1]>=e[0].length){C(`🚧 Đâm vào tường vũ trụ rồi! Hãy thử lại.`,`var(--danger)`),h=!1;return}p=r;let i=`${p[0]}-${p[1]}`,o=e[p[0]][p[1]];o!==` `&&o!==`🌀`&&!g.has(i)&&(m+=o,g.add(i)),_();let s=a.querySelectorAll(`.command-tag`);s[t]&&(s[t].style.background=`var(--success)`),await T(400)}let n=p[0]===d.goalPos[0]&&p[1]===d.goalPos[1],r=m===d.targetWord;n&&r?(h=!1,w()):n?(C(`Đến đích nhưng ghép sai: "${m}". Từ đúng: "${d.targetWord}". Thử đường đi khác!`,`var(--warning)`),h=!1):(C(`Chưa đến đích 🌀! Cần thêm lệnh di chuyển.`,`var(--warning)`),h=!1)}function C(e,t){let n=a.querySelector(`#result-msg`);n&&(n.textContent=e,n.style.color=t)}function w(){r(s,c,`coding`,`excellent`),t(),a.innerHTML=`
      <div class="reward-screen" style="position:relative">
        <div class="reward-content">
          <div class="reward-emoji">🎉</div>
          <div class="reward-title">Tuyệt vời! Ghép đúng từ "${d.targetWord}"!</div>
          <div class="reward-stars">⭐⭐⭐</div>
          <div class="reward-subtitle">Astro rất tự hào về bạn!</div>
          <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
            <button class="btn btn-primary" onclick="navigateTo('#daily/${s}/${c}')">📋 Quay lại</button>
          </div>
        </div>
      </div>
    `}function T(e){return new Promise(t=>setTimeout(t,e))}_()}export{a as renderCodingGame};