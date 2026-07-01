import{t as e}from"./index-CfmQQTCf.js";import{a as t,c as n,i as r,n as i}from"./state-BDdBsVRV.js";function a(a,o){let{week:s,day:c}=o,l=n(s,c),u=i();if(!l){a.innerHTML=`<div style="padding:40px;text-align:center"><h2>Không tìm thấy bài học</h2></div>`;return}let d=l.basicVietnamese,f=0,p=0,m=null;function h(){a.innerHTML=`
      <div class="header-bar">
        <button class="back-btn" onclick="navigateTo('#daily/${s}/${c}')">←</button>
        <div class="title">📖 ${d.title}</div>
        <div class="star-counter">⭐ ${u.stars}</div>
      </div>
      <div class="game-container">
        <div class="section-badge basic">📚 Cơ bản - Tiếng Việt</div>
        <div class="instruction-box">${d.instruction} <button class="tts-btn" onclick="playTTS(this.dataset.text, this)" data-text="${e(d.instruction)}">🔊</button></div>
        <div class="reading-card">
          <div class="passage-title">📄 ${d.passage.title}</div>
          <div class="passage-text">${d.passage.text}</div>
          <div class="reading-meta">
            <span>📝 ${d.passage.wordCount} từ</span>
            <span>⏱️ Đọc chậm, rõ ràng nhé!</span>
          </div>
        </div>
        <div style="text-align:center;margin-top:20px">
          <button class="btn btn-primary btn-lg" id="done-reading">✅ Đã đọc xong - Trả lời câu hỏi</button>
        </div>
      </div>`,a.querySelector(`#done-reading`).addEventListener(`click`,g)}function g(){let t=d.questions[f];m=null,a.innerHTML=`
      <div class="header-bar">
        <button class="back-btn" onclick="navigateTo('#daily/${s}/${c}')">←</button>
        <div class="title">📖 ${d.title} - Câu hỏi</div>
        <div class="star-counter">⭐ ${u.stars}</div>
      </div>
      <div class="game-container">
        <div class="section-badge basic">📚 Cơ bản - Tiếng Việt</div>
        <div class="game-card">
          <div class="question-counter">Câu ${f+1} / ${d.questions.length}</div>
          <div class="progress-bar" style="margin-bottom:20px">
            <div class="progress-bar-fill" style="width:${f/d.questions.length*100}%"></div>
          </div>
          <div class="question-text">${t.text} <button class="tts-btn" onclick="playTTS(this.dataset.text, this)" data-text="${e(t.text)}">🔊</button></div>
          <div class="quiz-options">
            ${t.options.map((e,t)=>`<button class="quiz-option" data-val="${e}">${e}</button>`).join(``)}
          </div>
          <div style="text-align:center;margin-top:16px">
            <button class="btn btn-success btn-lg" id="confirm-btn" disabled>✅ Xác nhận đáp án</button>
          </div>
        </div>
      </div>`;let n=a.querySelectorAll(`.quiz-option`),r=a.querySelector(`#confirm-btn`);n.forEach(e=>{e.addEventListener(`click`,()=>{n.forEach(e=>e.classList.remove(`selected`)),e.classList.add(`selected`),m=e.dataset.val,r.disabled=!1})}),r.addEventListener(`click`,()=>{if(m===null)return;let e=m===t.answer;n.forEach(n=>{n.disabled=!0,n.dataset.val===t.answer&&n.classList.add(`correct`),n.classList.contains(`selected`)&&!e&&n.classList.add(`incorrect`)}),r.disabled=!0,e&&p++,setTimeout(()=>{f++,f<d.questions.length?g():_()},1200)})}function _(){let e=Math.round(p/d.questions.length*100),n,i,o,l;e>=80?(n=`excellent`,i=`🌟`,o=`Hoàn thành tốt!`,l=`⭐⭐⭐`):e>=50?(n=`good`,i=`👍`,o=`Hoàn thành!`,l=`⭐⭐`):(n=`try`,i=`💪`,o=`Cần cố gắng thêm!`,l=`⭐`),r(s,c,`basic-viet`,n),n===`excellent`&&t(),a.innerHTML=`
      <div class="reward-screen" style="position:relative"><div class="reward-content">
        <div class="reward-emoji">${i}</div><div class="reward-title">${o}</div>
        <div class="score-display">${p}/${d.questions.length}</div>
        <div class="reward-stars">${l}</div>
        <div class="reward-subtitle">Đúng ${e}% câu hỏi đọc hiểu</div>
        <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
          <button class="btn btn-primary" onclick="navigateTo('#daily/${s}/${c}')">📋 Quay lại</button>
          ${e<100?`<button class="btn btn-secondary" onclick="navigateTo('#basic-viet/${s}/${c}')">🔄 Làm lại</button>`:``}
        </div>
      </div></div>`}h()}export{a as renderBasicVietnamese};