import{a as e,c as t,i as n,n as r}from"./state-BDdBsVRV.js";function i(i,a){let{week:o,day:s}=a,c=t(o,s),l=r();if(!c||!c.patterns){i.innerHTML=`<div style="padding:40px;text-align:center"><h2>Không tìm thấy bài học</h2><button class="btn btn-primary" onclick="navigateTo('#daily/`+o+`/`+s+`')">Quay lại</button></div>`;return}let u=c.patterns,d=0,f=0,p=null,m=!1;function h(){let e=u[d];p=null,m=!1;let t=``;e.type===`number`?t=`<div class="pattern-sequence number-seq">
        ${e.sequence.map((e,t)=>e===`?`?`<div class="pattern-item pattern-blank">❓</div>`:`<div class="pattern-item">${e}</div>`).join(`<div class="pattern-arrow">→</div>`)}
      </div>`:(e.type===`shape`||e.type===`color`)&&(t=`<div class="pattern-sequence shape-seq">
        ${e.sequence.map((e,t)=>e===`?`?`<div class="pattern-item pattern-blank">❓</div>`:`<div class="pattern-item pattern-emoji">${e}</div>`).join(``)}
      </div>`);let n=`⭐`.repeat(Math.min(d+1,5));i.innerHTML=`
      <div class="header-bar">
        <button class="back-btn" onclick="navigateTo('#daily/${o}/${s}')">←</button>
        <div class="title">🔢 Tìm Quy luật</div>
        <div class="star-counter">⭐ ${l.stars}</div>
      </div>
      <div class="game-container">
        <div class="section-badge practice">🎮 Thực hành - Tìm Quy luật</div>
        <div class="game-card">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
            <div class="question-counter">Câu ${d+1} / ${u.length}</div>
            <div style="font-size:0.8rem;color:var(--warning)">${n}</div>
          </div>
          <div class="progress-bar" style="margin-bottom:16px">
            <div class="progress-bar-fill" style="width:${d/u.length*100}%"></div>
          </div>

          <div class="question-text">${e.text} <button class="tts-btn" onclick="playTTS(this.dataset.text, this)" data-text="${String(`${e.text}`).replace(/\"/g,`&quot;`)}">🔊</button></div>
          ${t}

          <div id="hint-area" style="min-height:36px;text-align:center;margin:8px 0"></div>

          <div class="quiz-options">
            ${e.options.map(e=>`<button class="quiz-option" data-val="${e}">${e}</button>`).join(``)}
          </div>

          <div style="display:flex;gap:10px;justify-content:center;margin-top:16px;flex-wrap:wrap">
            <button class="btn btn-success btn-lg" id="confirm-btn" disabled>✅ Xác nhận</button>
            <button class="btn btn-ghost" id="hint-btn">💡 Gợi ý</button>
          </div>
        </div>
      </div>`;let r=i.querySelectorAll(`.quiz-option`),a=i.querySelector(`#confirm-btn`),c=i.querySelector(`#hint-btn`);r.forEach(e=>{e.addEventListener(`click`,()=>{r.forEach(e=>e.classList.remove(`selected`)),e.classList.add(`selected`),p=e.dataset.val,a.disabled=!1})}),a.addEventListener(`click`,()=>{if(p===null)return;let t=p===String(e.answer);r.forEach(n=>{n.disabled=!0,n.dataset.val===String(e.answer)&&n.classList.add(`correct`),n.classList.contains(`selected`)&&!t&&n.classList.add(`incorrect`)}),a.disabled=!0,t&&f++,setTimeout(()=>{d++,d<u.length?h():g()},1200)}),c.addEventListener(`click`,()=>{if(m)return;m=!0;let t=i.querySelector(`#hint-area`);t&&e.hint&&(t.innerHTML=`<div class="hint-box">💡 ${e.hint}</div>`),c.disabled=!0,c.style.opacity=`0.4`})}function g(){let t=Math.round(f/u.length*100),r,a,c,l;t>=80?(r=`excellent`,a=`🌟`,c=`Siêu tìm quy luật!`,l=`⭐⭐⭐`):t>=50?(r=`good`,a=`👍`,c=`Tốt lắm!`,l=`⭐⭐`):(r=`try`,a=`💪`,c=`Cần luyện thêm!`,l=`⭐`),n(o,s,`pattern`,r),r===`excellent`&&e(),i.innerHTML=`
      <div class="reward-screen" style="position:relative"><div class="reward-content">
        <div class="reward-emoji">${a}</div><div class="reward-title">${c}</div>
        <div class="score-display">${f}/${u.length}</div>
        <div class="reward-stars">${l}</div>
        <div class="reward-subtitle">Đúng ${t}% bài tìm quy luật</div>
        <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
          <button class="btn btn-primary" onclick="navigateTo('#daily/${o}/${s}')">📋 Quay lại</button>
          ${t<100?`<button class="btn btn-secondary" onclick="navigateTo('#pattern/${o}/${s}')">🔄 Làm lại</button>`:``}
        </div>
      </div></div>`}h()}export{i as renderPatternGame};