import{a as e,c as t,i as n,n as r}from"./state-BDdBsVRV.js";function i(i,a){let{week:o,day:s}=a,c=t(o,s),l=r();if(!c){i.innerHTML=`<div style="padding:40px;text-align:center"><h2>Không tìm thấy bài học</h2></div>`;return}let u=c.basicVietnamese,d=0,f=0,p=null;function m(){i.innerHTML=`
      <div class="header-bar">
        <button class="back-btn" onclick="navigateTo('#daily/${o}/${s}')">←</button>
        <div class="title">📖 ${u.title}</div>
        <div class="star-counter">⭐ ${l.stars}</div>
      </div>
      <div class="game-container">
        <div class="section-badge basic">📚 Cơ bản - Tiếng Việt</div>
        <div class="instruction-box">${u.instruction}</div>
        <div class="reading-card">
          <div class="passage-title">📄 ${u.passage.title}</div>
          <div class="passage-text">${u.passage.text}</div>
          <div class="reading-meta">
            <span>📝 ${u.passage.wordCount} từ</span>
            <span>⏱️ Đọc chậm, rõ ràng nhé!</span>
          </div>
        </div>
        <div style="text-align:center;margin-top:20px">
          <button class="btn btn-primary btn-lg" id="done-reading">✅ Đã đọc xong - Trả lời câu hỏi</button>
        </div>
      </div>`,i.querySelector(`#done-reading`).addEventListener(`click`,h)}function h(){let e=u.questions[d];p=null,i.innerHTML=`
      <div class="header-bar">
        <button class="back-btn" onclick="navigateTo('#daily/${o}/${s}')">←</button>
        <div class="title">📖 ${u.title} - Câu hỏi</div>
        <div class="star-counter">⭐ ${l.stars}</div>
      </div>
      <div class="game-container">
        <div class="section-badge basic">📚 Cơ bản - Tiếng Việt</div>
        <div class="game-card">
          <div class="question-counter">Câu ${d+1} / ${u.questions.length}</div>
          <div class="progress-bar" style="margin-bottom:20px">
            <div class="progress-bar-fill" style="width:${d/u.questions.length*100}%"></div>
          </div>
          <div class="question-text">${e.text}</div>
          <div class="quiz-options">
            ${e.options.map((e,t)=>`<button class="quiz-option" data-val="${e}">${e}</button>`).join(``)}
          </div>
          <div style="text-align:center;margin-top:16px">
            <button class="btn btn-success btn-lg" id="confirm-btn" disabled>✅ Xác nhận đáp án</button>
          </div>
        </div>
      </div>`;let t=i.querySelectorAll(`.quiz-option`),n=i.querySelector(`#confirm-btn`);t.forEach(e=>{e.addEventListener(`click`,()=>{t.forEach(e=>e.classList.remove(`selected`)),e.classList.add(`selected`),p=e.dataset.val,n.disabled=!1})}),n.addEventListener(`click`,()=>{if(p===null)return;let r=p===e.answer;t.forEach(t=>{t.disabled=!0,t.dataset.val===e.answer&&t.classList.add(`correct`),t.classList.contains(`selected`)&&!r&&t.classList.add(`incorrect`)}),n.disabled=!0,r&&f++,setTimeout(()=>{d++,d<u.questions.length?h():g()},1200)})}function g(){let t=Math.round(f/u.questions.length*100),r,a,c,l;t>=80?(r=`excellent`,a=`🌟`,c=`Hoàn thành tốt!`,l=`⭐⭐⭐`):t>=50?(r=`good`,a=`👍`,c=`Hoàn thành!`,l=`⭐⭐`):(r=`try`,a=`💪`,c=`Cần cố gắng thêm!`,l=`⭐`),n(o,s,`basic-viet`,r),r===`excellent`&&e(),i.innerHTML=`
      <div class="reward-screen" style="position:relative"><div class="reward-content">
        <div class="reward-emoji">${a}</div><div class="reward-title">${c}</div>
        <div class="score-display">${f}/${u.questions.length}</div>
        <div class="reward-stars">${l}</div>
        <div class="reward-subtitle">Đúng ${t}% câu hỏi đọc hiểu</div>
        <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
          <button class="btn btn-primary" onclick="navigateTo('#daily/${o}/${s}')">📋 Quay lại</button>
          ${t<100?`<button class="btn btn-secondary" onclick="navigateTo('#basic-viet/${o}/${s}')">🔄 Làm lại</button>`:``}
        </div>
      </div></div>`}m()}export{i as renderBasicVietnamese};