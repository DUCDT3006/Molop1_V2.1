import{a as e,c as t,i as n,n as r,o as i}from"./state-BDdBsVRV.js";function a(a,o){let{week:s,day:c}=o,l=t(s,c||5),u=r();if(!l||!l.isBossDay){a.innerHTML=`<div class="boss-fight-container" style="padding-top:100px">
      <div class="boss-display">🔒</div><h2>Boss Fight chưa sẵn sàng</h2>
      <p style="color:var(--text-muted);margin:12px 0">Hoàn thành các bài học trong tuần để mở khóa!</p>
      <button class="btn btn-primary" onclick="navigateTo('#dashboard')">🏠 Về trang chủ</button></div>`;return}let d=l.bossFight,f=0,p=0,m=null,h=100,g=100/d.length;function _(){a.innerHTML=`
      <div class="header-bar">
        <button class="back-btn" onclick="navigateTo('#dashboard')">←</button>
        <div class="title">🛡️ Boss Fight</div>
        <div class="star-counter">⭐ ${u.stars}</div>
      </div>
      <div class="boss-fight-container">
        <div style="animation: bossEntrance 1s ease">
          <h2 style="color:var(--secondary);margin-bottom:8px">⚔️ Đại chiến Boss Tuần ${s}!</h2>
          <p style="color:var(--text-muted);margin-bottom:24px">Trả lời đúng để đánh bại ${l.bossName}!</p>
          <div class="boss-display">${l.bossEmoji}</div>
          <h3 style="margin:12px 0">${l.bossName}</h3>
          <div class="boss-hp-bar"><div class="boss-hp-fill" style="width:100%"></div></div>
          <p style="color:var(--danger);font-weight:700">HP: 100%</p>
        </div>
        <button class="btn btn-secondary btn-lg" id="start-boss" style="margin-top:24px">⚔️ Bắt đầu chiến đấu!</button>
      </div>`,a.querySelector(`#start-boss`).addEventListener(`click`,v)}function v(){let e=d[f];m=null,a.innerHTML=`
      <div class="header-bar">
        <button class="back-btn" onclick="navigateTo('#dashboard')">←</button>
        <div class="title">⚔️ Boss Fight - Câu ${f+1}/${d.length}</div>
        <div class="star-counter">⭐ ${u.stars}</div>
      </div>
      <div class="boss-fight-container">
        <div style="display:flex;align-items:center;justify-content:center;gap:20px;margin-bottom:16px">
          <div style="font-size:3rem">${l.bossEmoji}</div>
          <div style="flex:1;max-width:300px">
            <div style="font-size:0.85rem;color:var(--text-muted);margin-bottom:4px">${l.bossName} - HP</div>
            <div class="boss-hp-bar"><div class="boss-hp-fill" id="boss-hp" style="width:${h}%"></div></div>
            <div style="font-size:0.85rem;color:var(--danger);font-weight:700">${Math.round(h)}%</div>
          </div>
        </div>
        <div class="boss-score">Điểm: ${p}/${d.length}</div>
        <div class="game-card" style="text-align:left">
          <div class="question-counter">Câu ${f+1} / ${d.length}</div>
          <div class="progress-bar" style="margin-bottom:16px">
            <div class="progress-bar-fill" style="width:${f/d.length*100}%"></div>
          </div>
          <div class="question-text">${e.text} <button class="tts-btn" onclick="playTTS(this.dataset.text, this)" data-text="${String(`${e.text}`).replace(/\"/g,`&quot;`)}">🔊</button></div>
          <div class="quiz-options">
            ${e.options.map(e=>`<button class="quiz-option" data-val="${e}">${e}</button>`).join(``)}
          </div>
          <div style="text-align:center;margin-top:16px">
            <button class="btn btn-success btn-lg" id="confirm-btn" disabled>✅ Xác nhận</button>
          </div>
        </div>
      </div>`;let t=a.querySelectorAll(`.quiz-option`),n=a.querySelector(`#confirm-btn`);t.forEach(e=>{e.addEventListener(`click`,()=>{t.forEach(e=>e.classList.remove(`selected`)),e.classList.add(`selected`),m=e.dataset.val,n.disabled=!1})}),n.addEventListener(`click`,()=>{if(m===null)return;let r=m===e.answer;if(t.forEach(t=>{t.disabled=!0,t.dataset.val===e.answer&&t.classList.add(`correct`),t.classList.contains(`selected`)&&!r&&t.classList.add(`incorrect`)}),n.disabled=!0,r){p++,h=Math.max(0,h-g);let e=a.querySelector(`#boss-hp`);e&&(e.style.width=`${h}%`)}setTimeout(()=>{f++,f<d.length?v():y()},1300)})}function y(){let t=p,r=t>=6;r&&(i(s+1),e());let o;o=t>=9?`excellent`:t>=6?`good`:`try`,n(s,c||5,`boss`,o),a.innerHTML=`
      <div class="reward-screen" style="position:relative"><div class="reward-content">
        <div class="reward-emoji">${r?`🏆`:`💪`}</div>
        <div class="reward-title">${r?`Chiến thắng! 🎉`:`Cố gắng thêm nào!`}</div>
        <div class="score-display">${t}/10</div>
        <div class="reward-stars">${r?`⭐⭐⭐`:`⭐`}</div>
        <div class="reward-subtitle">${r?`Đã đánh bại ${l.bossName}! Tuần ${s+1} đã mở khóa!`:`Hãy ôn lại bài và thử lại nhé!`}</div>
        <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-top:8px">
          <button class="btn btn-primary" onclick="navigateTo('#dashboard')">🏠 Về trang chủ</button>
          ${r?``:`<button class="btn btn-secondary" onclick="navigateTo('#boss/${s}/${c||5}')">🔄 Thử lại</button>`}
        </div>
      </div></div>`}_()}export{a as renderBossFight};