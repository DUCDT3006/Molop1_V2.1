import{a as e,c as t,i as n,n as r}from"./state-BDdBsVRV.js";function i(i,a){let{week:o,day:s}=a,c=t(o,s),l=r();if(!c){i.innerHTML=`<div style="padding:40px;text-align:center"><h2>Không tìm thấy bài học</h2></div>`;return}let u=[...c.memory].sort(()=>Math.random()-.5),d=[],f=new Set,p=0,m=u.length/2,h=!1,g=[`#6C63FF`,`#FF6B6B`,`#4ECDC4`,`#F1C40F`,`#2ECC71`,`#E74C3C`,`#9B59B6`,`#1ABC9C`];function _(e){return g[Math.floor((e-1)/2)%g.length]}function v(){i.innerHTML=`
      <div class="header-bar">
        <button class="back-btn" onclick="navigateTo('#daily/${o}/${s}')">←</button>
        <div class="title">🃏 Ghép cặp Trí nhớ</div>
        <div class="star-counter">⭐ ${l.stars}</div>
      </div>
      <div class="game-container">
        <div class="section-badge practice">🎮 Thực hành - Memory</div>
        <div class="instruction-box">Lật 2 thẻ mỗi lượt. Tìm các cặp thẻ có liên quan với nhau!</div>

        <div class="memory-stats">
          <div class="memory-stat">
            <div class="stat-val">${p}</div>
            <div class="stat-label">Lượt lật</div>
          </div>
          <div class="memory-stat">
            <div class="stat-val">${f.size/2}/${m}</div>
            <div class="stat-label">Cặp đúng</div>
          </div>
        </div>

        <div class="memory-grid" id="memory-grid">
          ${u.map((e,t)=>{let n=d.includes(t)||f.has(e.id),r=f.has(e.id),i=`memory-card`;n&&(i+=` flipped`),r&&(i+=` matched`);let a=r?`border-color:${_(e.id)};box-shadow:0 0 12px ${_(e.id)}40;`:``;return`
              <div class="${i}" data-index="${t}" style="${r?a:``}">
                <div class="memory-card-inner">
                  <div class="memory-card-front">❓</div>
                  <div class="memory-card-back" style="${r?a:``}">${e.val}</div>
                </div>
              </div>
            `}).join(``)}
        </div>
      </div>
    `,i.querySelectorAll(`.memory-card`).forEach(e=>{e.addEventListener(`click`,()=>y(parseInt(e.dataset.index)))})}function y(e){if(h)return;let t=u[e];if(f.has(t.id)||d.includes(e)||d.length>=2)return;if(d.push(e),d.length===1){v();return}p++,h=!0,v();let n=u[d[0]],r=u[d[1]];n.matchId===r.id&&r.matchId===n.id?setTimeout(()=>{f.add(n.id),f.add(r.id),d=[],h=!1,v(),f.size===u.length&&setTimeout(()=>b(),600)},500):setTimeout(()=>{d=[],h=!1,v()},1200)}function b(){let t,r,a,c;p<=m+2?(t=`excellent`,r=`🌟`,a=`Trí nhớ siêu phàm!`,c=`⭐⭐⭐`):p<=m*2?(t=`good`,r=`👍`,a=`Trí nhớ tốt!`,c=`⭐⭐`):(t=`try`,r=`💪`,a=`Hoàn thành!`,c=`⭐`),n(o,s,`memory`,t),t===`excellent`&&e(),i.innerHTML=`
      <div class="reward-screen" style="position:relative">
        <div class="reward-content">
          <div class="reward-emoji">${r}</div>
          <div class="reward-title">${a}</div>
          <div class="score-display">${m}/${m} cặp</div>
          <div class="reward-stars">${c}</div>
          <div class="reward-subtitle">Hoàn thành trong ${p} lượt lật</div>
          <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
            <button class="btn btn-primary" onclick="navigateTo('#daily/${o}/${s}')">📋 Quay lại</button>
            <button class="btn btn-secondary" onclick="navigateTo('#memory/${o}/${s}')">🔄 Chơi lại</button>
          </div>
        </div>
      </div>
    `}v()}export{i as renderMemoryMatch};