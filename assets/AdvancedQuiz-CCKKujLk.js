import{a as e,c as t,i as n,n as r}from"./state-BDdBsVRV.js";function i(i,a){let{week:o,day:s}=a,c=t(o,s),l=r();if(!c){i.innerHTML=`<div style="padding:40px;text-align:center"><h2>Không tìm thấy bài học</h2></div>`;return}let u=c.advanced,d=0,f=0,p=null,m=null,h=45;window.registerCleanup&&window.registerCleanup(()=>{m&&=(clearInterval(m),null)});function g(){let e=u[d];h=45,p=null,m&&=(clearInterval(m),null);let t=`⭐`.repeat(Math.min(d+1,5)),n=d<2?`Dễ`:d<4?`Trung bình`:`Khó`;i.innerHTML=`
      <div class="header-bar">
        <button class="back-btn" onclick="navigateTo('#daily/${o}/${s}')">←</button>
        <div class="title">🧠 Thử thách Tư duy</div>
        <div class="star-counter">⭐ ${l.stars}</div>
      </div>
      <div class="game-container">
        <div class="section-badge advanced">🧠 Nâng cao - HSG</div>
        <div class="game-card">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
            <div class="question-counter">Câu ${d+1} / ${u.length}</div>
            <div style="font-size:0.8rem;color:var(--warning)">${t} ${n}</div>
          </div>
          <div class="timer-bar">
            <div class="timer-fill" id="timer-fill" style="width:100%"></div>
          </div>
          <div style="text-align:right;font-size:0.85rem;color:var(--text-muted);margin-bottom:12px">
            ⏱️ <span id="timer-text">${h}s</span>
          </div>
          <div class="question-text">${e.text}</div>
          ${e.image?`<div style="text-align:center;font-size:2.5rem;margin:12px 0;letter-spacing:8px">${e.image}</div>`:``}
          <div class="quiz-options">
            ${e.options.map(e=>`<button class="quiz-option" data-val="${e}">${e}</button>`).join(``)}
          </div>
          <div style="text-align:center;margin-top:16px">
            <button class="btn btn-success btn-lg" id="confirm-btn" disabled>✅ Xác nhận đáp án</button>
          </div>
        </div>
      </div>`;let r=i.querySelectorAll(`.quiz-option`),a=i.querySelector(`#confirm-btn`);r.forEach(e=>{e.addEventListener(`click`,()=>{r.forEach(e=>e.classList.remove(`selected`)),e.classList.add(`selected`),p=e.dataset.val,a.disabled=!1})}),a.addEventListener(`click`,()=>{p!==null&&(clearInterval(m),m=null,_(r,a))}),m=setInterval(()=>{h--;let t=i.querySelector(`#timer-fill`),n=i.querySelector(`#timer-text`);t&&(t.style.width=`${h/45*100}%`),n&&(n.textContent=`${h}s`),h<=0&&(clearInterval(m),m=null,p===null?(r.forEach(t=>{t.disabled=!0,t.dataset.val===e.answer&&t.classList.add(`correct`)}),a.disabled=!0,setTimeout(()=>v(),1500)):_(r,a))},1e3)}function _(e,t){let n=u[d],r=p===n.answer;e.forEach(e=>{e.disabled=!0,e.dataset.val===n.answer&&e.classList.add(`correct`),e.classList.contains(`selected`)&&!r&&e.classList.add(`incorrect`)}),t.disabled=!0,r&&f++,setTimeout(()=>v(),1200)}function v(){d++,d<u.length?g():(m&&=(clearInterval(m),null),y())}function y(){let t=Math.round(f/u.length*100),r,a,c,l;t>=80?(r=`excellent`,a=`🏆`,c=`Tư duy xuất sắc!`,l=`⭐⭐⭐`):t>=50?(r=`good`,a=`👍`,c=`Tốt lắm!`,l=`⭐⭐`):(r=`try`,a=`💪`,c=`Cần luyện thêm!`,l=`⭐`),n(o,s,`advanced`,r),r===`excellent`&&e(),i.innerHTML=`
      <div class="reward-screen" style="position:relative"><div class="reward-content">
        <div class="reward-emoji">${a}</div><div class="reward-title">${c}</div>
        <div class="score-display">${f}/${u.length}</div>
        <div class="reward-stars">${l}</div>
        <div class="reward-subtitle">Đúng ${t}% câu hỏi nâng cao</div>
        <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
          <button class="btn btn-primary" onclick="navigateTo('#daily/${o}/${s}')">📋 Quay lại</button>
          ${t<100?`<button class="btn btn-secondary" onclick="navigateTo('#advanced/${o}/${s}')">🔄 Làm lại</button>`:``}
        </div>
      </div></div>`}g()}export{i as renderAdvancedQuiz};