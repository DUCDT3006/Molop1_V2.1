import{a as e,c as t,i as n,n as r}from"./state-BDdBsVRV.js";import{t as i}from"./ttsTextRegistry-BsC2sywG.js";function a(a,o){let{week:s,day:c}=o,l=t(s,c),u=r();if(!l){a.innerHTML=`<div style="padding:40px;text-align:center"><h2>Không tìm thấy bài học</h2></div>`;return}let d=[...l.memory].sort(()=>Math.random()-.5),f=[],p=new Set,m=0,h=d.length/2,g=!1,_=[`#6C63FF`,`#FF6B6B`,`#4ECDC4`,`#F1C40F`,`#2ECC71`,`#E74C3C`,`#9B59B6`,`#1ABC9C`];function v(e){return _[Math.floor((e-1)/2)%_.length]}function y(){a.innerHTML=`
      <div class="header-bar">
        <button class="back-btn" onclick="navigateTo('#daily/${s}/${c}')">←</button>
        <div class="title">🃏 Ghép cặp Trí nhớ</div>
        <div class="star-counter">⭐ ${u.stars}</div>
      </div>
      <div class="game-container">
        <div class="section-badge practice">🎮 Thực hành - Memory</div>
        <div class="instruction-box">${i.MEMORY_INSTRUCTION} <button class="tts-btn" onclick="playTTS(this.dataset.text, this)" data-text="${i.MEMORY_INSTRUCTION}">🔊</button></div>

        <div class="memory-stats">
          <div class="memory-stat">
            <div class="stat-val">${m}</div>
            <div class="stat-label">Lượt lật</div>
          </div>
          <div class="memory-stat">
            <div class="stat-val">${p.size/2}/${h}</div>
            <div class="stat-label">Cặp đúng</div>
          </div>
        </div>

        <div class="memory-grid" id="memory-grid">
          ${d.map((e,t)=>{let n=f.includes(t)||p.has(e.id),r=p.has(e.id),i=`memory-card`;n&&(i+=` flipped`),r&&(i+=` matched`);let a=r?`border-color:${v(e.id)};box-shadow:0 0 12px ${v(e.id)}40;`:``;return`
              <div class="${i}" data-index="${t}" style="${r?a:``}">
                <div class="memory-card-inner">
                  <div class="memory-card-front">❓</div>
                  <div class="memory-card-back" style="${r?a:``}">${e.val}</div>
                </div>
              </div>
            `}).join(``)}
        </div>
      </div>
    `,a.querySelectorAll(`.memory-card`).forEach(e=>{e.addEventListener(`click`,()=>b(parseInt(e.dataset.index)))})}function b(e){if(g)return;let t=d[e];if(p.has(t.id)||f.includes(e)||f.length>=2)return;if(f.push(e),f.length===1){y();return}m++,g=!0,y();let n=d[f[0]],r=d[f[1]];n.matchId===r.id&&r.matchId===n.id?setTimeout(()=>{p.add(n.id),p.add(r.id),f=[],g=!1,y(),p.size===d.length&&setTimeout(()=>x(),600)},500):setTimeout(()=>{f=[],g=!1,y()},1200)}function x(){let t,r,i,o;m<=h+2?(t=`excellent`,r=`🌟`,i=`Trí nhớ siêu phàm!`,o=`⭐⭐⭐`):m<=h*2?(t=`good`,r=`👍`,i=`Trí nhớ tốt!`,o=`⭐⭐`):(t=`try`,r=`💪`,i=`Hoàn thành!`,o=`⭐`),n(s,c,`memory`,t),t===`excellent`&&e(),a.innerHTML=`
      <div class="reward-screen" style="position:relative">
        <div class="reward-content">
          <div class="reward-emoji">${r}</div>
          <div class="reward-title">${i}</div>
          <div class="score-display">${h}/${h} cặp</div>
          <div class="reward-stars">${o}</div>
          <div class="reward-subtitle">Hoàn thành trong ${m} lượt lật</div>
          <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
            <button class="btn btn-primary" onclick="navigateTo('#daily/${s}/${c}')">📋 Quay lại</button>
            <button class="btn btn-secondary" onclick="navigateTo('#memory/${s}/${c}')">🔄 Chơi lại</button>
          </div>
        </div>
      </div>
    `}y()}export{a as renderMemoryMatch};