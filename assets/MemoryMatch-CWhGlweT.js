import{t as e}from"./index-Bb3ZNdG7.js";import{a as t,c as n,i as r,n as i}from"./state-BDdBsVRV.js";import{t as a}from"./ttsTextRegistry-1tOQuBp5.js";function o(o,s){let{week:c,day:l}=s,u=n(c,l),d=i();if(!u){o.innerHTML=`<div style="padding:40px;text-align:center"><h2>Không tìm thấy bài học</h2></div>`;return}let f=[...u.memory].sort(()=>Math.random()-.5),p=[],m=new Set,h=0,g=f.length/2,_=!1,v=[`#6C63FF`,`#FF6B6B`,`#4ECDC4`,`#F1C40F`,`#2ECC71`,`#E74C3C`,`#9B59B6`,`#1ABC9C`];function y(e){return v[Math.floor((e-1)/2)%v.length]}function b(){o.innerHTML=`
      <div class="header-bar">
        <button class="back-btn" onclick="navigateTo('#daily/${c}/${l}')">←</button>
        <div class="title">🃏 Ghép cặp Trí nhớ</div>
        <div class="star-counter">⭐ ${d.stars}</div>
      </div>
      <div class="game-container">
        <div class="section-badge practice">🎮 Thực hành - Memory</div>
        <div class="instruction-box">${a.MEMORY_INSTRUCTION} <button class="tts-btn" onclick="playTTS(this.dataset.text, this)" data-text="${e(a.MEMORY_INSTRUCTION)}">🔊</button></div>

        <div class="memory-stats">
          <div class="memory-stat">
            <div class="stat-val">${h}</div>
            <div class="stat-label">Lượt lật</div>
          </div>
          <div class="memory-stat">
            <div class="stat-val">${m.size/2}/${g}</div>
            <div class="stat-label">Cặp đúng</div>
          </div>
        </div>

        <div class="memory-grid" id="memory-grid">
          ${f.map((e,t)=>{let n=p.includes(t)||m.has(e.id),r=m.has(e.id),i=`memory-card`;n&&(i+=` flipped`),r&&(i+=` matched`);let a=r?`border-color:${y(e.id)};box-shadow:0 0 12px ${y(e.id)}40;`:``;return`
              <div class="${i}" data-index="${t}" style="${r?a:``}">
                <div class="memory-card-inner">
                  <div class="memory-card-front">❓</div>
                  <div class="memory-card-back" style="${r?a:``}">${e.val}</div>
                </div>
              </div>
            `}).join(``)}
        </div>
      </div>
    `,o.querySelectorAll(`.memory-card`).forEach(e=>{e.addEventListener(`click`,()=>x(parseInt(e.dataset.index)))})}function x(e){if(_)return;let t=f[e];if(m.has(t.id)||p.includes(e)||p.length>=2)return;if(p.push(e),p.length===1){b();return}h++,_=!0,b();let n=f[p[0]],r=f[p[1]];n.matchId===r.id&&r.matchId===n.id?setTimeout(()=>{m.add(n.id),m.add(r.id),p=[],_=!1,b(),m.size===f.length&&setTimeout(()=>S(),600)},500):setTimeout(()=>{p=[],_=!1,b()},1200)}function S(){let e,n,i,a;h<=g+2?(e=`excellent`,n=`🌟`,i=`Trí nhớ siêu phàm!`,a=`⭐⭐⭐`):h<=g*2?(e=`good`,n=`👍`,i=`Trí nhớ tốt!`,a=`⭐⭐`):(e=`try`,n=`💪`,i=`Hoàn thành!`,a=`⭐`),r(c,l,`memory`,e),e===`excellent`&&t(),o.innerHTML=`
      <div class="reward-screen" style="position:relative">
        <div class="reward-content">
          <div class="reward-emoji">${n}</div>
          <div class="reward-title">${i}</div>
          <div class="score-display">${g}/${g} cặp</div>
          <div class="reward-stars">${a}</div>
          <div class="reward-subtitle">Hoàn thành trong ${h} lượt lật</div>
          <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
            <button class="btn btn-primary" onclick="navigateTo('#daily/${c}/${l}')">📋 Quay lại</button>
            <button class="btn btn-secondary" onclick="navigateTo('#memory/${c}/${l}')">🔄 Chơi lại</button>
          </div>
        </div>
      </div>
    `}b()}export{o as renderMemoryMatch};