import{t as e}from"./index--WjYFHyU.js";import{a as t,c as n,i as r,n as i}from"./state-BDdBsVRV.js";import{t as a}from"./ttsTextRegistry-1tOQuBp5.js";function o(o,s){let{week:c,day:l}=s,u=n(c,l),d=i();if(!u){o.innerHTML=`<div style="padding:40px;text-align:center"><h2>Không tìm thấy bài học</h2></div>`;return}let f=null;function p(){u.extraExercises,o.innerHTML=`
      <div class="header-bar">
        <button class="back-btn" onclick="navigateTo('#daily/${c}/${l}')">←</button>
        <div class="title">📝 Bài tập Bổ sung</div>
        <div class="star-counter">⭐ ${d.stars}</div>
      </div>
      <div class="game-container">
        <div class="section-badge" style="background:linear-gradient(135deg,#9B59B6,#8E44AD)">👨‍👩‍👧 Phụ huynh hướng dẫn</div>
        <div class="instruction-box">
          💡 <strong>Dành cho phụ huynh:</strong> Chọn mức độ phù hợp để bé luyện thêm. Các bài tập được tạo từ nội dung đã học trong ngày.
         <button class="tts-btn" onclick="playTTS(this.dataset.text, this)" data-text="${e(a.EXTRA_PARENT_NOTE)}">🔊</button></div>
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
      </div>`,o.querySelectorAll(`.level-card.unlocked`).forEach(e=>{e.addEventListener(`click`,()=>{f=e.dataset.mode,v(f)})})}function m(e){let t=u.extraExercises||{};return e===`review`?t.review||h():e===`practice`?t.practice||g():e===`challenge`?t.challenge||_():h()}function h(){let e=[];if(u.basicMath&&u.basicMath.questions){let t=u.basicMath.questions[0];t&&e.push({text:t.text,answer:String(t.answer),options:t.options.map(String)})}if(u.basicVietnamese&&u.basicVietnamese.questions){let t=u.basicVietnamese.questions[0];t&&e.push({text:t.text,answer:t.answer,options:t.options})}return e.length<3&&e.push({text:a.FALLBACK_QUESTION,answer:`2`,options:[`1`,`2`,`3`,`4`]}),e}function g(){let e=[];return u.basicMath&&u.basicMath.questions&&u.basicMath.questions.forEach(t=>{e.push({text:t.text,answer:String(t.answer),options:t.options.map(String)})}),e.length>=2?e:h()}function _(){let e=[];return u.advanced&&u.advanced.forEach(t=>{e.push({text:t.text,answer:t.answer,options:t.options})}),u.basicVietnamese&&u.basicVietnamese.questions&&u.basicVietnamese.questions.forEach(t=>{e.push({text:t.text,answer:t.answer,options:t.options})}),e.length>=2?e:h()}function v(n){let i=m(n),a=0,s=0,u=null;function f(){let t=i[a];u=null,o.innerHTML=`
        <div class="header-bar">
          <button class="back-btn" id="back-to-select">←</button>
          <div class="title">📝 ${n===`review`?`Ôn tập`:n===`practice`?`Luyện thêm`:`Thử thách`}</div>
          <div class="star-counter">⭐ ${d.stars}</div>
        </div>
        <div class="game-container">
          <div class="game-card">
            <div class="question-counter">Câu ${a+1} / ${i.length}</div>
            <div class="progress-bar" style="margin-bottom:16px">
              <div class="progress-bar-fill" style="width:${a/i.length*100}%"></div>
            </div>
            <div class="question-text">${t.text} <button class="tts-btn" onclick="playTTS(this.dataset.text, this)" data-text="${e(t.text)}">🔊</button></div>
            <div class="quiz-options">
              ${t.options.map(e=>`<button class="quiz-option" data-val="${e}">${e}</button>`).join(``)}
            </div>
            <div style="text-align:center;margin-top:16px">
              <button class="btn btn-success btn-lg" id="confirm-btn" disabled>✅ Xác nhận</button>
            </div>
          </div>
        </div>`,o.querySelector(`#back-to-select`).addEventListener(`click`,p);let r=o.querySelectorAll(`.quiz-option`),c=o.querySelector(`#confirm-btn`);r.forEach(e=>{e.addEventListener(`click`,()=>{r.forEach(e=>e.classList.remove(`selected`)),e.classList.add(`selected`),u=e.dataset.val,c.disabled=!1})}),c.addEventListener(`click`,()=>{if(u===null)return;let e=u===t.answer;r.forEach(n=>{n.disabled=!0,n.dataset.val===t.answer&&n.classList.add(`correct`),n.classList.contains(`selected`)&&!e&&n.classList.add(`incorrect`)}),c.disabled=!0,e&&s++,setTimeout(()=>{a++,a<i.length?f():h()},1300)})}function h(){let e=s,a=i.length,u;u=e>=a*.9?`excellent`:e>=a*.7?`good`:`try`,r(c,l,`extra-${n}`,u),u===`excellent`&&t(),o.innerHTML=`
        <div class="reward-screen" style="position:relative"><div class="reward-content">
          <div class="reward-emoji">${u===`excellent`?`🏆`:u===`good`?`👍`:`💪`}</div>
          <div class="reward-title">${u===`excellent`?`Xuất sắc!`:u===`good`?`Tốt lắm!`:`Cố gắng thêm nào!`}</div>
          <div class="score-display">${e}/${a}</div>
          <div class="reward-stars">${u===`excellent`?`⭐⭐⭐`:u===`good`?`⭐⭐`:`⭐`}</div>
          <div class="reward-subtitle">${u===`excellent`?`Bé học rất tốt!`:u===`good`?`Bé đã làm tốt!`:`Hãy ôn lại bài nhé!`}</div>
          <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-top:8px">
            <button class="btn btn-primary" onclick="navigateTo('#daily/${c}/${l}')">🏠 Về bài học</button>
            <button class="btn btn-secondary" id="retry-btn">🔄 Thử lại</button>
          </div>
        </div></div>`,o.querySelector(`#retry-btn`).addEventListener(`click`,()=>v(n))}f()}p()}export{o as renderExtraExercise};