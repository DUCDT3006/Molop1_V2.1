import{a as e,c as t,i as n,n as r}from"./state-BDdBsVRV.js";function i(i,a){let{week:o,day:s}=a,c=t(o,s),l=r();if(!c||!c.mathPuzzles){i.innerHTML=`<div style="padding:40px;text-align:center"><h2>Không tìm thấy bài học</h2><button class="btn btn-primary" onclick="navigateTo('#daily/`+o+`/`+s+`')">Quay lại</button></div>`;return}let u=c.mathPuzzles,d=0,f=0,p=null;function m(){let e=u[d];p=null;let t={reverse:{icon:`🔄`,label:`Toán ngược`},balance:{icon:`⚖️`,label:`Cân bằng`},spatial:{icon:`🔲`,label:`Không gian`},word:{icon:`📝`,label:`Toán đố`},logic:{icon:`🧩`,label:`Logic`},compare:{icon:`📊`,label:`So sánh`}}[e.category]||{icon:`🧮`,label:`Toán đố`};i.innerHTML=`
      <div class="header-bar">
        <button class="back-btn" onclick="navigateTo('#daily/${o}/${s}')">←</button>
        <div class="title">🧮 Toán Đố Vui</div>
        <div class="star-counter">⭐ ${l.stars}</div>
      </div>
      <div class="game-container">
        <div class="section-badge practice">🎮 Thực hành - Toán Đố</div>
        <div class="game-card">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
            <div class="question-counter">Câu ${d+1} / ${u.length}</div>
            <div class="puzzle-category">${t.icon} ${t.label}</div>
          </div>
          <div class="progress-bar" style="margin-bottom:16px">
            <div class="progress-bar-fill" style="width:${d/u.length*100}%"></div>
          </div>

          <div class="question-text">${e.text} <button class="tts-btn" onclick="playTTS(this.dataset.text, this)" data-text="${String(`${e.text}`).replace(/\"/g,`&quot;`).replace(/<[^>]*>?/gm,``)}">🔊</button></div>

          ${e.image?`<div class="puzzle-visual">${e.image}</div>`:``}
          ${e.illustration?`<div class="puzzle-illustration">${e.illustration}</div>`:``}

          <div class="quiz-options">
            ${e.options.map(e=>`<button class="quiz-option" data-val="${e}">${e}</button>`).join(``)}
          </div>

          <div style="text-align:center;margin-top:16px">
            <button class="btn btn-success btn-lg" id="confirm-btn" disabled>✅ Xác nhận</button>
          </div>

          ${e.explanation?`<div id="explanation" style="display:none" class="explanation-box"></div>`:``}
        </div>
      </div>`;let n=i.querySelectorAll(`.quiz-option`),r=i.querySelector(`#confirm-btn`);n.forEach(e=>{e.addEventListener(`click`,()=>{n.forEach(e=>e.classList.remove(`selected`)),e.classList.add(`selected`),p=e.dataset.val,r.disabled=!1})}),r.addEventListener(`click`,()=>{if(p===null)return;let t=p===String(e.answer);if(n.forEach(n=>{n.disabled=!0,n.dataset.val===String(e.answer)&&n.classList.add(`correct`),n.classList.contains(`selected`)&&!t&&n.classList.add(`incorrect`)}),r.disabled=!0,t&&f++,e.explanation){let n=i.querySelector(`#explanation`);n&&(n.style.display=`block`,n.innerHTML=`<div class="explanation-icon">${t?`✅`:`📖`}</div><div>${e.explanation}</div>`)}setTimeout(()=>{d++,d<u.length?m():h()},1800)})}function h(){let t=Math.round(f/u.length*100),r,a,c,l;t>=80?(r=`excellent`,a=`🏆`,c=`Nhà Toán học nhí!`,l=`⭐⭐⭐`):t>=50?(r=`good`,a=`👍`,c=`Giỏi lắm!`,l=`⭐⭐`):(r=`try`,a=`💪`,c=`Cần luyện thêm!`,l=`⭐`),n(o,s,`math-puzzle`,r),r===`excellent`&&e(),i.innerHTML=`
      <div class="reward-screen" style="position:relative"><div class="reward-content">
        <div class="reward-emoji">${a}</div><div class="reward-title">${c}</div>
        <div class="score-display">${f}/${u.length}</div>
        <div class="reward-stars">${l}</div>
        <div class="reward-subtitle">Đúng ${t}% bài toán đố</div>
        <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
          <button class="btn btn-primary" onclick="navigateTo('#daily/${o}/${s}')">📋 Quay lại</button>
          ${t<100?`<button class="btn btn-secondary" onclick="navigateTo('#math-puzzle/${o}/${s}')">🔄 Làm lại</button>`:``}
        </div>
      </div></div>`}m()}export{i as renderMathPuzzle};