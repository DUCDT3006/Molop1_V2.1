import{t as e}from"./index-BBH6oX91.js";import{a as t,c as n,i as r,n as i}from"./state-BDdBsVRV.js";function a(a,o){let{week:s,day:c}=o,l=n(s,c),u=i();if(!l||!l.patterns){a.innerHTML=`<div style="padding:40px;text-align:center"><h2>Không tìm thấy bài học</h2><button class="btn btn-primary" onclick="navigateTo('#daily/`+s+`/`+c+`')">Quay lại</button></div>`;return}let d=l.patterns,f=0,p=0,m=null,h=!1;function g(){let t=d[f];m=null,h=!1;let n=``;t.type===`number`?n=`<div class="pattern-sequence number-seq">
        ${t.sequence.map((e,t)=>e===`?`?`<div class="pattern-item pattern-blank">❓</div>`:`<div class="pattern-item">${e}</div>`).join(`<div class="pattern-arrow">→</div>`)}
      </div>`:(t.type===`shape`||t.type===`color`)&&(n=`<div class="pattern-sequence shape-seq">
        ${t.sequence.map((e,t)=>e===`?`?`<div class="pattern-item pattern-blank">❓</div>`:`<div class="pattern-item pattern-emoji">${e}</div>`).join(``)}
      </div>`);let r=`⭐`.repeat(Math.min(f+1,5));a.innerHTML=`
      <div class="header-bar">
        <button class="back-btn" onclick="navigateTo('#daily/${s}/${c}')">←</button>
        <div class="title">🔢 Tìm Quy luật</div>
        <div class="star-counter">⭐ ${u.stars}</div>
      </div>
      <div class="game-container">
        <div class="section-badge practice">🎮 Thực hành - Tìm Quy luật</div>
        <div class="game-card">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
            <div class="question-counter">Câu ${f+1} / ${d.length}</div>
            <div style="font-size:0.8rem;color:var(--warning)">${r}</div>
          </div>
          <div class="progress-bar" style="margin-bottom:16px">
            <div class="progress-bar-fill" style="width:${f/d.length*100}%"></div>
          </div>

          <div class="question-text">${t.text} <button class="tts-btn" onclick="playTTS(this.dataset.text, this)" data-text="${e(t.text)}">🔊</button></div>
          ${n}

          <div id="hint-area" style="min-height:36px;text-align:center;margin:8px 0"></div>

          <div class="quiz-options">
            ${t.options.map(e=>`<button class="quiz-option" data-val="${e}">${e}</button>`).join(``)}
          </div>

          <div style="display:flex;gap:10px;justify-content:center;margin-top:16px;flex-wrap:wrap">
            <button class="btn btn-success btn-lg" id="confirm-btn" disabled>✅ Xác nhận</button>
            <button class="btn btn-ghost" id="hint-btn">💡 Gợi ý</button>
          </div>
        </div>
      </div>`;let i=a.querySelectorAll(`.quiz-option`),o=a.querySelector(`#confirm-btn`),l=a.querySelector(`#hint-btn`);i.forEach(e=>{e.addEventListener(`click`,()=>{i.forEach(e=>e.classList.remove(`selected`)),e.classList.add(`selected`),m=e.dataset.val,o.disabled=!1})}),o.addEventListener(`click`,()=>{if(m===null)return;let e=m===String(t.answer);i.forEach(n=>{n.disabled=!0,n.dataset.val===String(t.answer)&&n.classList.add(`correct`),n.classList.contains(`selected`)&&!e&&n.classList.add(`incorrect`)}),o.disabled=!0,e&&p++,setTimeout(()=>{f++,f<d.length?g():_()},1200)}),l.addEventListener(`click`,()=>{if(h)return;h=!0;let e=a.querySelector(`#hint-area`);e&&t.hint&&(e.innerHTML=`<div class="hint-box">💡 ${t.hint}</div>`),l.disabled=!0,l.style.opacity=`0.4`})}function _(){let e=Math.round(p/d.length*100),n,i,o,l;e>=80?(n=`excellent`,i=`🌟`,o=`Siêu tìm quy luật!`,l=`⭐⭐⭐`):e>=50?(n=`good`,i=`👍`,o=`Tốt lắm!`,l=`⭐⭐`):(n=`try`,i=`💪`,o=`Cần luyện thêm!`,l=`⭐`),r(s,c,`pattern`,n),n===`excellent`&&t(),a.innerHTML=`
      <div class="reward-screen" style="position:relative"><div class="reward-content">
        <div class="reward-emoji">${i}</div><div class="reward-title">${o}</div>
        <div class="score-display">${p}/${d.length}</div>
        <div class="reward-stars">${l}</div>
        <div class="reward-subtitle">Đúng ${e}% bài tìm quy luật</div>
        <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
          <button class="btn btn-primary" onclick="navigateTo('#daily/${s}/${c}')">📋 Quay lại</button>
          ${e<100?`<button class="btn btn-secondary" onclick="navigateTo('#pattern/${s}/${c}')">🔄 Làm lại</button>`:``}
        </div>
      </div></div>`}g()}export{a as renderPatternGame};