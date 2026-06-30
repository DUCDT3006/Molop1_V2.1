import{c as e,n as t,r as n,t as r}from"./state-BDdBsVRV.js";function i(i,a){let{week:o,day:s}=a,c=e(o,s),l=t();if(!c){i.innerHTML=`<div style="padding:40px;text-align:center"><h2>Không tìm thấy bài học</h2><button class="btn btn-primary" onclick="navigateTo('#dashboard')">Về trang chủ</button></div>`;return}if(c.isBossDay){i.innerHTML=`
      <div class="header-bar">
        <button class="back-btn" onclick="navigateTo('#dashboard')">←</button>
        <div class="title">${c.emoji} ${c.dayName} - ${c.title}</div>
        <div class="star-counter">⭐ ${l.stars}</div>
      </div>
      <div class="boss-fight-container">
        <div style="animation: bossEntrance 1s ease">
          <div class="boss-display">${c.bossEmoji||`🐉`}</div>
          <h2 style="margin:16px 0;color:var(--secondary)">${c.title}</h2>
          <p style="color:var(--text-muted);margin-bottom:24px">${c.theme}</p>
          <button class="btn btn-secondary btn-lg" onclick="navigateTo('#boss/${o}/${s}')">⚔️ Vào Boss Fight!</button>
        </div>
      </div>`;return}let u=r(o,s),d=[{key:`basic-math`,icon:`🔢`,title:`Toán Nâng cao`,desc:c.basicMath.title,route:`basic-math/${o}/${s}`,section:`advanced-sgk`},{key:`basic-viet`,icon:`📖`,title:`Tiếng Việt Nâng cao`,desc:c.basicVietnamese.title,route:`basic-viet/${o}/${s}`,section:`advanced-sgk`},{key:`coding`,icon:`🤖`,title:`Lập trình Ghép vần`,desc:`Ghép từ "${c.coding.targetWord}"`,route:`coding/${o}/${s}`,section:`practice`},{key:`sudoku`,icon:`🧩`,title:`Sudoku (3 cấp độ)`,desc:`Logic điền emoji`,route:`sudoku/${o}/${s}`,section:`practice`},{key:`memory`,icon:`🃏`,title:`Ghép cặp Trí nhớ`,desc:`Lật thẻ tìm cặp liên quan`,route:`memory/${o}/${s}`,section:`practice`},{key:`supermarket`,icon:`🛒`,title:`Siêu thị Tính toán`,desc:`Ngân sách: ${c.supermarket.budget} xu`,route:`supermarket/${o}/${s}`,section:`practice`},{key:`pattern`,icon:`🔢`,title:`Tìm Quy luật`,desc:`Dãy số & dãy hình`,route:`pattern/${o}/${s}`,section:`practice`},{key:`math-puzzle`,icon:`🧮`,title:`Toán Đố Vui`,desc:`Toán ngược, cân bằng, logic`,route:`math-puzzle/${o}/${s}`,section:`practice`},{key:`advanced`,icon:`🧠`,title:`Toán Tư duy HSG`,desc:`5 dạng bài nâng cao (45 giây)`,route:`advanced/${o}/${s}`,section:`hsg`}],f=d.filter(e=>e.section===`advanced-sgk`),p=d.filter(e=>e.section===`practice`),m=d.filter(e=>e.section===`hsg`);function h(e){return e.map(e=>{let t=n(o,s,e.key);return`
        <div class="activity-item ${t?`done`:``}" onclick="navigateTo('#${e.route}')">
          <div class="activity-icon">${e.icon}</div>
          <div class="activity-info">
            <div class="activity-title">${e.title}</div>
            <div class="activity-desc">${e.desc}</div>
          </div>
          <div class="activity-status">${t?`✅`:`▶️`}</div>
        </div>`}).join(``)}let g=n(o,s,`extra`);i.innerHTML=`
    <div class="header-bar">
      <button class="back-btn" onclick="navigateTo('#dashboard')">←</button>
      <div class="title">${c.emoji} ${c.dayName} - ${c.title}</div>
      <div class="star-counter">⭐ ${l.stars}</div>
    </div>
    <div class="daily-container">
      <div class="instruction-box">${c.theme} <button class="tts-btn" onclick="playTTS(this.dataset.text, this)" data-text="${String(`${c.theme}`).replace(/\"/g,`&quot;`).replace(/<[^>]*>?/gm,``)}">🔊</button></div>

      ${c.curriculumRef?`<div class="curriculum-ref">📋 Theo CT GDPT 2018: ${c.curriculumRef}</div>`:``}

      <div class="daily-section">
        <div class="section-badge" style="background:linear-gradient(135deg,#6C63FF,#8B83FF)">📚 Nâng cao theo SGK (30%)</div>
        <div class="daily-activities">${h(f)}</div>
      </div>

      <div class="daily-section">
        <div class="section-badge practice">🎮 Thực hành Tư duy (40%)</div>
        <div class="daily-activities">${h(p)}</div>
      </div>

      <div class="daily-section">
        <div class="section-badge advanced">🧠 Toán Tư duy HSG (30%)</div>
        <div class="daily-activities">${h(m)}</div>
      </div>

      <div class="daily-section extra-section">
        <div class="section-badge" style="background:linear-gradient(135deg,#9B59B6,#8E44AD)">📝 Bài tập bổ sung (Phụ huynh)</div>
        <div class="extra-info">
          <p>💡 Phần này dành cho phụ huynh cho bé luyện thêm tại nhà. Có 3 mức độ: Ôn tập, Luyện thêm, Thử thách.</p>
        </div>
        <div class="daily-activities">
          <div class="activity-item ${g?`done`:``}" onclick="navigateTo('#extra/${o}/${s}')">
            <div class="activity-icon">📝</div>
            <div class="activity-info">
              <div class="activity-title">Bài tập bổ sung</div>
              <div class="activity-desc">Chọn mức: Ôn tập / Luyện thêm / Thử thách</div>
            </div>
            <div class="activity-status">${g?`✅`:`➕`}</div>
          </div>
        </div>
      </div>

      <div style="margin-top:24px">
        <div style="display:flex;justify-content:space-between;margin-bottom:6px;font-size:0.9rem;color:var(--text-muted)">
          <span>Tiến độ ngày</span>
          <span>${u.done}/${u.total} (${u.percent}%)</span>
        </div>
        <div class="progress-bar" style="height:12px">
          <div class="progress-bar-fill" style="width:${u.percent}%"></div>
        </div>
      </div>
    </div>
  `}export{i as renderDailyLesson};