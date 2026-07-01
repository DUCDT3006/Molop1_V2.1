import{t as e}from"./index-DdBWtAAQ.js";import{a as t,c as n,i as r,n as i,o as a}from"./state-BDdBsVRV.js";function o(o,s){let{week:c,day:l}=s,u=n(c,l||5),d=i();if(!u||!u.isBossDay){o.innerHTML=`<div class="boss-fight-container" style="padding-top:100px">
      <div class="boss-display">🔒</div><h2>Boss Fight chưa sẵn sàng</h2>
      <p style="color:var(--text-muted);margin:12px 0">Hoàn thành các bài học trong tuần để mở khóa!</p>
      <button class="btn btn-primary" onclick="navigateTo('#dashboard')">🏠 Về trang chủ</button></div>`;return}let f=u.bossFight,p=0,m=0,h=null,g=100,_=100/f.length;function v(){o.innerHTML=`
      <div class="header-bar">
        <button class="back-btn" onclick="navigateTo('#dashboard')">←</button>
        <div class="title">🛡️ Boss Fight</div>
        <div class="star-counter">⭐ ${d.stars}</div>
      </div>
      <div class="boss-fight-container">
        <div style="animation: bossEntrance 1s ease">
          <h2 style="color:var(--secondary);margin-bottom:8px">⚔️ Đại chiến Boss Tuần ${c}!</h2>
          <p style="color:var(--text-muted);margin-bottom:24px">Trả lời đúng để đánh bại ${u.bossName}!</p>
          <div class="boss-display">${u.bossEmoji}</div>
          <h3 style="margin:12px 0">${u.bossName}</h3>
          <div class="boss-hp-bar"><div class="boss-hp-fill" style="width:100%"></div></div>
          <p style="color:var(--danger);font-weight:700">HP: 100%</p>
        </div>
        <button class="btn btn-secondary btn-lg" id="start-boss" style="margin-top:24px">⚔️ Bắt đầu chiến đấu!</button>
      </div>`,o.querySelector(`#start-boss`).addEventListener(`click`,y)}function y(){let t=f[p];h=null,o.innerHTML=`
      <div class="header-bar">
        <button class="back-btn" onclick="navigateTo('#dashboard')">←</button>
        <div class="title">⚔️ Boss Fight - Câu ${p+1}/${f.length}</div>
        <div class="star-counter">⭐ ${d.stars}</div>
      </div>
      <div class="boss-fight-container">
        <div style="display:flex;align-items:center;justify-content:center;gap:20px;margin-bottom:16px">
          <div style="font-size:3rem">${u.bossEmoji}</div>
          <div style="flex:1;max-width:300px">
            <div style="font-size:0.85rem;color:var(--text-muted);margin-bottom:4px">${u.bossName} - HP</div>
            <div class="boss-hp-bar"><div class="boss-hp-fill" id="boss-hp" style="width:${g}%"></div></div>
            <div style="font-size:0.85rem;color:var(--danger);font-weight:700">${Math.round(g)}%</div>
          </div>
        </div>
        <div class="boss-score">Điểm: ${m}/${f.length}</div>
        <div class="game-card" style="text-align:left">
          <div class="question-counter">Câu ${p+1} / ${f.length}</div>
          <div class="progress-bar" style="margin-bottom:16px">
            <div class="progress-bar-fill" style="width:${p/f.length*100}%"></div>
          </div>
          <div class="question-text">${t.text} <button class="tts-btn" onclick="playTTS(this.dataset.text, this)" data-text="${e(t.text)}">🔊</button></div>
          <div class="quiz-options">
            ${t.options.map(e=>`<button class="quiz-option" data-val="${e}">${e}</button>`).join(``)}
          </div>
          <div style="text-align:center;margin-top:16px">
            <button class="btn btn-success btn-lg" id="confirm-btn" disabled>✅ Xác nhận</button>
          </div>
        </div>
      </div>`;let n=o.querySelectorAll(`.quiz-option`),r=o.querySelector(`#confirm-btn`);n.forEach(e=>{e.addEventListener(`click`,()=>{n.forEach(e=>e.classList.remove(`selected`)),e.classList.add(`selected`),h=e.dataset.val,r.disabled=!1})}),r.addEventListener(`click`,()=>{if(h===null)return;let e=h===t.answer;if(n.forEach(n=>{n.disabled=!0,n.dataset.val===t.answer&&n.classList.add(`correct`),n.classList.contains(`selected`)&&!e&&n.classList.add(`incorrect`)}),r.disabled=!0,e){m++,g=Math.max(0,g-_);let e=o.querySelector(`#boss-hp`);e&&(e.style.width=`${g}%`)}setTimeout(()=>{p++,p<f.length?y():b()},1300)})}function b(){let e=m,n=e>=6;n&&(a(c+1),t());let i;i=e>=9?`excellent`:e>=6?`good`:`try`,r(c,l||5,`boss`,i),o.innerHTML=`
      <div class="reward-screen" style="position:relative"><div class="reward-content">
        <div class="reward-emoji">${n?`🏆`:`💪`}</div>
        <div class="reward-title">${n?`Chiến thắng! 🎉`:`Cố gắng thêm nào!`}</div>
        <div class="score-display">${e}/10</div>
        <div class="reward-stars">${n?`⭐⭐⭐`:`⭐`}</div>
        <div class="reward-subtitle">${n?`Đã đánh bại ${u.bossName}! Tuần ${c+1} đã mở khóa!`:`Hãy ôn lại bài và thử lại nhé!`}</div>
        <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-top:8px">
          <button class="btn btn-primary" onclick="navigateTo('#dashboard')">🏠 Về trang chủ</button>
          ${n?``:`<button class="btn btn-secondary" onclick="navigateTo('#boss/${c}/${l||5}')">🔄 Thử lại</button>`}
        </div>
      </div></div>`}v()}export{o as renderBossFight};