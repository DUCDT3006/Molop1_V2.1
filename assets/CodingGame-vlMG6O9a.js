import{a as e,c as t,i as n,n as r}from"./state-BDdBsVRV.js";function i(i,a){let{week:o,day:s}=a,c=t(o,s),l=r();if(!c){i.innerHTML=`<div style="padding:40px;text-align:center"><h2>Không tìm thấy bài học</h2></div>`;return}let u=c.coding,d=[],f=[...u.startPos],p=``,m=!1,h=new Set;function g(){let e=u.maze,t=e[0].length;i.innerHTML=`
      <div class="header-bar">
        <button class="back-btn" onclick="navigateTo('#daily/${o}/${s}')">←</button>
        <div class="title">🤖 Lập trình ghép vần</div>
        <div class="star-counter">⭐ ${l.stars}</div>
      </div>
      <div class="game-container">
        <div class="section-badge practice">🎮 Thực hành - Coding</div>
        <div class="instruction-box">${u.instruction} <button class="tts-btn" onclick="playTTS(this.dataset.text, this)" data-text="${String(`${u.instruction}`).replace(/\"/g,`&quot;`).replace(/<[^>]*>?/gm,``)}">🔊</button></div>
        
        <div class="target-word">
          Từ cần ghép: <span>"${u.targetWord}"</span>
          ${p?`<br>Đã nhặt: <span style="color:var(--success)">"${p}"</span>`:``}
        </div>

        <div style="text-align:center">
          <div class="maze-grid" style="grid-template-columns:repeat(${t}, 1fr)" id="maze">
            ${e.map((e,t)=>e.map((e,n)=>{let r=`maze-cell`,i=``,a=t===f[0]&&n===f[1],o=t===u.goalPos[0]&&n===u.goalPos[1],s=`${t}-${n}`,c=h.has(s);return a?(r+=` robot`,i=e!==` `&&e!==`🌀`&&!c?`🤖<span style="font-size:0.7rem;display:block;margin-top:-4px">`+e+`</span>`:`🤖`):o&&!a?(r+=` goal`,i=`🌀`):e!==` `&&e!==`🌀`&&!c?(r+=` letter`,i=e):(c&&(r+=` collected`),i=`·`),`<div class="${r}" data-r="${t}" data-c="${n}">${i}</div>`}).join(``)).join(``)}
          </div>
        </div>

        <div class="game-card" style="margin-top:16px">
          <h4 style="margin-bottom:10px">📝 Chuỗi lệnh:</h4>
          <div class="command-queue" id="cmd-queue">
            ${d.length===0?`<span style="color:var(--text-dim);font-size:0.9rem">Chưa có lệnh nào. Hãy bấm mũi tên để thêm lệnh!</span>`:d.map(e=>`<span class="command-tag">${_(e)}</span>`).join(``)}
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
            <button class="btn btn-success" id="cmd-run" ${m?`disabled`:``}>▶️ Chạy!</button>
          </div>
        </div>

        <div id="result-msg" style="text-align:center;margin-top:16px;font-size:1.1rem;font-weight:700;min-height:30px"></div>
      </div>
    `,i.querySelector(`#cmd-up`)?.addEventListener(`click`,()=>v(`UP`)),i.querySelector(`#cmd-down`)?.addEventListener(`click`,()=>v(`DOWN`)),i.querySelector(`#cmd-left`)?.addEventListener(`click`,()=>v(`LEFT`)),i.querySelector(`#cmd-right`)?.addEventListener(`click`,()=>v(`RIGHT`)),i.querySelector(`#cmd-clear`)?.addEventListener(`click`,b),i.querySelector(`#cmd-undo`)?.addEventListener(`click`,y),i.querySelector(`#cmd-run`)?.addEventListener(`click`,x)}function _(e){return{UP:`⬆️`,DOWN:`⬇️`,LEFT:`⬅️`,RIGHT:`➡️`}[e]||e}function v(e){m||(d.push(e),g())}function y(){m||d.length===0||(d.pop(),g())}function b(){m||(d=[],f=[...u.startPos],p=``,h=new Set,g())}async function x(){if(m||d.length===0)return;m=!0,f=[...u.startPos],p=``,h=new Set;let e=u.maze,t=e[f[0]][f[1]];t!==` `&&t!==`🌀`&&(p+=t,h.add(`${f[0]}-${f[1]}`)),g(),await w(300);for(let t=0;t<d.length;t++){let n=d[t],r=[...f];if(n===`UP`?r[0]--:n===`DOWN`?r[0]++:n===`LEFT`?r[1]--:n===`RIGHT`&&r[1]++,r[0]<0||r[0]>=e.length||r[1]<0||r[1]>=e[0].length){S(`🚧 Đâm vào tường vũ trụ rồi! Hãy thử lại.`,`var(--danger)`),m=!1;return}f=r;let a=`${f[0]}-${f[1]}`,o=e[f[0]][f[1]];o!==` `&&o!==`🌀`&&!h.has(a)&&(p+=o,h.add(a)),g();let s=i.querySelectorAll(`.command-tag`);s[t]&&(s[t].style.background=`var(--success)`),await w(400)}let n=f[0]===u.goalPos[0]&&f[1]===u.goalPos[1],r=p===u.targetWord;n&&r?(m=!1,C()):n?(S(`Đến đích nhưng ghép sai: "${p}". Từ đúng: "${u.targetWord}". Thử đường đi khác!`,`var(--warning)`),m=!1):(S(`Chưa đến đích 🌀! Cần thêm lệnh di chuyển.`,`var(--warning)`),m=!1)}function S(e,t){let n=i.querySelector(`#result-msg`);n&&(n.textContent=e,n.style.color=t)}function C(){n(o,s,`coding`,`excellent`),e(),i.innerHTML=`
      <div class="reward-screen" style="position:relative">
        <div class="reward-content">
          <div class="reward-emoji">🎉</div>
          <div class="reward-title">Tuyệt vời! Ghép đúng từ "${u.targetWord}"!</div>
          <div class="reward-stars">⭐⭐⭐</div>
          <div class="reward-subtitle">Astro rất tự hào về bạn!</div>
          <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
            <button class="btn btn-primary" onclick="navigateTo('#daily/${o}/${s}')">📋 Quay lại</button>
          </div>
        </div>
      </div>
    `}function w(e){return new Promise(t=>setTimeout(t,e))}g()}export{i as renderCodingGame};