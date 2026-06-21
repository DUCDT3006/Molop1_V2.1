import{a as e,c as t,i as n,n as r}from"./state-BDdBsVRV.js";function i(i,a){let{week:o,day:s}=a,c=t(o,s),l=r();if(!c){i.innerHTML=`<div style="padding:40px;text-align:center"><h2>Không tìm thấy bài học</h2></div>`;return}let u=null;function d(){c.extraExercises,i.innerHTML=`
      <div class="header-bar">
        <button class="back-btn" onclick="navigateTo('#daily/${o}/${s}')">←</button>
        <div class="title">📝 Bài tập Bổ sung</div>
        <div class="star-counter">⭐ ${l.stars}</div>
      </div>
      <div class="game-container">
        <div class="section-badge" style="background:linear-gradient(135deg,#9B59B6,#8E44AD)">👨‍👩‍👧 Phụ huynh hướng dẫn</div>
        <div class="instruction-box">
          💡 <strong>Dành cho phụ huynh:</strong> Chọn mức độ phù hợp để bé luyện thêm. Các bài tập được tạo từ nội dung đã học trong ngày.
         <button class="tts-btn" onclick="playTTS(this.dataset.text)" data-text="${`
          💡 <strong>Dành cho phụ huynh:</strong> Chọn mức độ phù hợp để bé luyện thêm. Các bài tập được tạo từ nội dung đã học trong ngày.
        `.replace(/\"/g,`&quot;`).replace(/<[^>]*>?/gm,``)}">🔊</button></div>
        <div class="level-select-grid">
          <div class="level-card unlocked" data-mode="review">
            <div class="level-emoji">📖</div>
            <div class="level-name">Ôn tập cơ bản</div>
            <div class="level-stars">⭐</div>
            <div class="level-desc">Ôn lại kiến thức Toán + Tiếng Việt</div>
          </div>
          <div class="level-card unlocked" data-mode="practice">
            <div class="level-emoji">✏️</div>
            <div class="level-name">Luyện thêm</div>
            <div class="level-stars">⭐⭐</div>
            <div class="level-desc">Bài tập nâng cao hơn một chút</div>
          </div>
          <div class="level-card unlocked" data-mode="challenge">
            <div class="level-emoji">🏆</div>
            <div class="level-name">Thử thách</div>
            <div class="level-stars">⭐⭐⭐</div>
            <div class="level-desc">Bài tập tổng hợp khó hơn</div>
          </div>
        </div>
      </div>`,i.querySelectorAll(`.level-card.unlocked`).forEach(e=>{e.addEventListener(`click`,()=>{u=e.dataset.mode,g(u)})})}function f(e){let t=c.extraExercises||{};return e===`review`?t.review||p():e===`practice`?t.practice||m():e===`challenge`?t.challenge||h():p()}function p(){let e=[];if(c.basicMath&&c.basicMath.questions){let t=c.basicMath.questions[0];t&&e.push({text:t.text,answer:String(t.answer),options:t.options.map(String)})}if(c.basicVietnamese&&c.basicVietnamese.questions){let t=c.basicVietnamese.questions[0];t&&e.push({text:t.text,answer:t.answer,options:t.options})}return e.length<3&&e.push({text:`1 + 1 = ?`,answer:`2`,options:[`1`,`2`,`3`,`4`]}),e}function m(){let e=[];return c.basicMath&&c.basicMath.questions&&c.basicMath.questions.forEach(t=>{e.push({text:t.text,answer:String(t.answer),options:t.options.map(String)})}),e.length>=2?e:p()}function h(){let e=[];return c.advanced&&c.advanced.forEach(t=>{e.push({text:t.text,answer:t.answer,options:t.options})}),c.basicVietnamese&&c.basicVietnamese.questions&&c.basicVietnamese.questions.forEach(t=>{e.push({text:t.text,answer:t.answer,options:t.options})}),e.length>=2?e:p()}function g(t){let r=f(t),a=0,c=0,u=null,p={review:`Ôn tập`,practice:`Luyện thêm`,challenge:`Thử thách`};function m(){if(a>=r.length){h();return}let e=r[a];u=null,i.innerHTML=`
        <div class="header-bar">
          <button class="back-btn" id="back-modes">←</button>
          <div class="title">📝 ${p[t]} - Câu ${a+1}</div>
          <div class="star-counter">⭐ ${l.stars}</div>
        </div>
        <div class="game-container">
          <div class="game-card">
            <div class="question-counter">Câu ${a+1} / ${r.length}</div>
            <div class="progress-bar" style="margin-bottom:20px">
              <div class="progress-bar-fill" style="width:${a/r.length*100}%"></div>
            </div>
            <div class="question-text">${e.text} <button class="tts-btn" onclick="playTTS(this.dataset.text)" data-text="${String(`${e.text}`).replace(/\"/g,`&quot;`).replace(/<[^>]*>?/gm,``)}">🔊</button></div>
            ${e.image?`<div style="text-align:center;font-size:2.5rem;margin:12px 0;letter-spacing:8px">${e.image}</div>`:``}
            <div class="quiz-options">
              ${e.options.map(e=>`<button class="quiz-option" data-val="${e}">${e}</button>`).join(``)}
            </div>
            <div style="text-align:center;margin-top:16px">
              <button class="btn btn-success btn-lg" id="confirm-btn" disabled>✅ Xác nhận</button>
            </div>
          </div>
        </div>`,i.querySelector(`#back-modes`).addEventListener(`click`,d);let n=i.querySelectorAll(`.quiz-option`),o=i.querySelector(`#confirm-btn`);n.forEach(e=>{e.addEventListener(`click`,()=>{n.forEach(e=>e.classList.remove(`selected`)),e.classList.add(`selected`),u=e.dataset.val,o.disabled=!1})}),o.addEventListener(`click`,()=>{if(u===null)return;let t=u===e.answer;n.forEach(n=>{n.disabled=!0,n.dataset.val===e.answer&&n.classList.add(`correct`),n.classList.contains(`selected`)&&!t&&n.classList.add(`incorrect`)}),o.disabled=!0,t&&c++,setTimeout(()=>{a++,m()},1200)})}function h(){let a=Math.round(c/r.length*100),l=a>=80?`excellent`:a>=50?`good`:`try`;n(o,s,`extra`,l),l===`excellent`&&e(),i.innerHTML=`
        <div class="reward-screen" style="position:relative"><div class="reward-content">
          <div class="reward-emoji">${a>=80?`🌟`:a>=50?`👍`:`💪`}</div>
          <div class="reward-title">${a>=80?`Giỏi lắm!`:a>=50?`Tốt!`:`Cần ôn thêm!`}</div>
          <div class="score-display">${c}/${r.length}</div>
          <div class="reward-stars">${a>=80?`⭐⭐⭐`:a>=50?`⭐⭐`:`⭐`}</div>
          <div class="reward-subtitle">Bài tập bổ sung: ${p[t]}</div>
          <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
            <button class="btn btn-primary" onclick="navigateTo('#daily/${o}/${s}')">📋 Quay lại</button>
            <button class="btn btn-accent" id="try-other-btn">📝 Chọn mức khác</button>
          </div>
        </div></div>`,i.querySelector(`#try-other-btn`)?.addEventListener(`click`,d)}m()}d()}export{i as renderExtraExercise};