import{a as e,c as t,i as n,n as r}from"./state-BDdBsVRV.js";function i(i,a){let{week:o,day:s}=a,c=t(o,s),l=r();if(!c){i.innerHTML=`<div style="padding:40px;text-align:center"><h2>Không tìm thấy bài học</h2></div>`;return}let u=c.basicMath.questions,d=0,f=0,p=null;function m(){let e=u[d];p=null,i.innerHTML=`
      <div class="header-bar">
        <button class="back-btn" onclick="navigateTo('#daily/${o}/${s}')">←</button>
        <div class="title">🔢 ${c.basicMath.title}</div>
        <div class="star-counter">⭐ ${l.stars}</div>
      </div>
      <div class="game-container">
        <div class="section-badge basic">📚 Cơ bản - Toán</div>
        <div class="instruction-box">${c.basicMath.instruction} <button class="tts-btn" onclick="playTTS(this.dataset.text, this)" data-text="${String(`${c.basicMath.instruction}`).replace(/\"/g,`&quot;`)}">🔊</button></div>
        <div class="game-card">
          <div class="question-counter">Câu ${d+1} / ${u.length}</div>
          <div class="progress-bar" style="margin-bottom:20px">
            <div class="progress-bar-fill" style="width:${d/u.length*100}%"></div>
          </div>
          <div class="question-text">${e.text} <button class="tts-btn" onclick="playTTS(this.dataset.text, this)" data-text="${String(`${e.text}`).replace(/\"/g,`&quot;`)}">🔊</button></div>
          <div class="quiz-options" id="options">
            ${e.options.map((e,t)=>`<button class="quiz-option" data-val="${e}" id="opt-${t}">${e}</button>`).join(``)}
          </div>
          <div style="text-align:center;margin-top:16px">
            <button class="btn btn-success btn-lg" id="confirm-btn" disabled>✅ Xác nhận đáp án</button>
          </div>
        </div>
      </div>
    `;let t=i.querySelectorAll(`.quiz-option`),n=i.querySelector(`#confirm-btn`);t.forEach(e=>{e.addEventListener(`click`,()=>{t.forEach(e=>e.classList.remove(`selected`)),e.classList.add(`selected`),p=e.dataset.val,n.disabled=!1})}),n.addEventListener(`click`,()=>{if(p===null)return;let r=String(p)===String(e.answer);t.forEach(t=>{t.disabled=!0,String(t.dataset.val)===String(e.answer)&&t.classList.add(`correct`),t.classList.contains(`selected`)&&!r&&t.classList.add(`incorrect`)}),n.disabled=!0,r&&f++,setTimeout(()=>{d++,d<u.length?m():h()},1200)})}function h(){let t=Math.round(f/u.length*100),r,a,c,l;t>=80?(r=`excellent`,a=`🌟`,c=`Hoàn thành tốt!`,l=`⭐⭐⭐`):t>=50?(r=`good`,a=`👍`,c=`Hoàn thành!`,l=`⭐⭐`):(r=`try`,a=`💪`,c=`Cần cố gắng thêm!`,l=`⭐`),n(o,s,`basic-math`,r),r===`excellent`&&e(),i.innerHTML=`
      <div class="reward-screen" style="position:relative"><div class="reward-content">
        <div class="reward-emoji">${a}</div><div class="reward-title">${c}</div>
        <div class="score-display">${f}/${u.length}</div>
        <div class="reward-stars">${l}</div>
        <div class="reward-subtitle">Đúng ${t}% câu hỏi</div>
        <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
          <button class="btn btn-primary" onclick="navigateTo('#daily/${o}/${s}')">📋 Quay lại</button>
          ${t<100?`<button class="btn btn-secondary" onclick="navigateTo('#basic-math/${o}/${s}')">🔄 Làm lại</button>`:``}
        </div>
      </div></div>`}m()}export{i as renderBasicMath};