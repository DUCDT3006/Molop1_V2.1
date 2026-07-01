import{a as e,c as t,i as n,n as r}from"./state-BDdBsVRV.js";import{t as i}from"./ttsTextRegistry-BsC2sywG.js";function a(a,o){let{week:s,day:c}=o,l=t(s,c),u=r();if(!l){a.innerHTML=`<div style="padding:40px;text-align:center"><h2>Không tìm thấy bài học</h2></div>`;return}let d=null;function f(){l.extraExercises,a.innerHTML=`
      <div class="header-bar">
        <button class="back-btn" onclick="navigateTo('#daily/${s}/${c}')">←</button>
        <div class="title">📝 Bài tập Bổ sung</div>
        <div class="star-counter">⭐ ${u.stars}</div>
      </div>
      <div class="game-container">
        <div class="section-badge" style="background:linear-gradient(135deg,#9B59B6,#8E44AD)">👨‍👩‍👧 Phụ huynh hướng dẫn</div>
        <div class="instruction-box">
          💡 <strong>Dành cho phụ huynh:</strong> Chọn mức độ phù hợp để bé luyện thêm. Các bài tập được tạo từ nội dung đã học trong ngày.
         <button class="tts-btn" onclick="playTTS(this.dataset.text, this)" data-text="${i.PARENT_NOTE}">🔊</button></div>
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
      </div>`,a.querySelectorAll(`.level-card.unlocked`).forEach(e=>{e.addEventListener(`click`,()=>{d=e.dataset.mode,_(d)})})}function p(e){let t=l.extraExercises||{};return e===`review`?t.review||m():e===`practice`?t.practice||h():e===`challenge`?t.challenge||g():m()}function m(){let e=[];if(l.basicMath&&l.basicMath.questions){let t=l.basicMath.questions[0];t&&e.push({text:t.text,answer:String(t.answer),options:t.options.map(String)})}if(l.basicVietnamese&&l.basicVietnamese.questions){let t=l.basicVietnamese.questions[0];t&&e.push({text:t.text,answer:t.answer,options:t.options})}return e.length<3&&e.push({text:i.FALLBACK_QUESTION,answer:`2`,options:[`1`,`2`,`3`,`4`]}),e}function h(){let e=[];return l.basicMath&&l.basicMath.questions&&l.basicMath.questions.forEach(t=>{e.push({text:t.text,answer:String(t.answer),options:t.options.map(String)})}),e.length>=2?e:m()}function g(){let e=[];return l.advanced&&l.advanced.forEach(t=>{e.push({text:t.text,answer:t.answer,options:t.options})}),l.basicVietnamese&&l.basicVietnamese.questions&&l.basicVietnamese.questions.forEach(t=>{e.push({text:t.text,answer:t.answer,options:t.options})}),e.length>=2?e:m()}function _(t){let r=p(t),i=0,o=0,l=null,d={review:`Ôn tập`,practice:`Luyện thêm`,challenge:`Thử thách`};function m(){if(i>=r.length){h();return}let e=r[i];l=null,a.innerHTML=`
        <div class="header-bar">
          <button class="back-btn" id="back-modes">←</button>
          <div class="title">📝 ${d[t]} - Câu ${i+1}</div>
          <div class="star-counter">⭐ ${u.stars}</div>
        </div>
        <div class="game-container">
          <div class="game-card">
            <div class="question-counter">Câu ${i+1} / ${r.length}</div>
            <div class="progress-bar" style="margin-bottom:20px">
              <div class="progress-bar-fill" style="width:${i/r.length*100}%"></div>
            </div>
            <div class="question-text">${e.text} <button class="tts-btn" onclick="playTTS(this.dataset.text, this)" data-text="${e.text}">🔊</button></div>
            ${e.image?`<div style="text-align:center;font-size:2.5rem;margin:12px 0;letter-spacing:8px">${e.image}</div>`:``}
            <div class="quiz-options">
              ${e.options.map(e=>`<button class="quiz-option" data-val="${e}">${e}</button>`).join(``)}
            </div>
            <div style="text-align:center;margin-top:16px">
              <button class="btn btn-success btn-lg" id="confirm-btn" disabled>✅ Xác nhận</button>
            </div>
          </div>
        </div>`,a.querySelector(`#back-modes`).addEventListener(`click`,f);let n=a.querySelectorAll(`.quiz-option`),s=a.querySelector(`#confirm-btn`);n.forEach(e=>{e.addEventListener(`click`,()=>{n.forEach(e=>e.classList.remove(`selected`)),e.classList.add(`selected`),l=e.dataset.val,s.disabled=!1})}),s.addEventListener(`click`,()=>{if(l===null)return;let t=l===e.answer;n.forEach(n=>{n.disabled=!0,n.dataset.val===e.answer&&n.classList.add(`correct`),n.classList.contains(`selected`)&&!t&&n.classList.add(`incorrect`)}),s.disabled=!0,t&&o++,setTimeout(()=>{i++,m()},1200)})}function h(){let i=Math.round(o/r.length*100),l=i>=80?`excellent`:i>=50?`good`:`try`;n(s,c,`extra`,l),l===`excellent`&&e(),a.innerHTML=`
        <div class="reward-screen" style="position:relative"><div class="reward-content">
          <div class="reward-emoji">${i>=80?`🌟`:i>=50?`👍`:`💪`}</div>
          <div class="reward-title">${i>=80?`Giỏi lắm!`:i>=50?`Tốt!`:`Cần ôn thêm!`}</div>
          <div class="score-display">${o}/${r.length}</div>
          <div class="reward-stars">${i>=80?`⭐⭐⭐`:i>=50?`⭐⭐`:`⭐`}</div>
          <div class="reward-subtitle">Bài tập bổ sung: ${d[t]}</div>
          <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
            <button class="btn btn-primary" onclick="navigateTo('#daily/${s}/${c}')">📋 Quay lại</button>
            <button class="btn btn-accent" id="try-other-btn">📝 Chọn mức khác</button>
          </div>
        </div></div>`,a.querySelector(`#try-other-btn`)?.addEventListener(`click`,f)}m()}f()}export{a as renderExtraExercise};