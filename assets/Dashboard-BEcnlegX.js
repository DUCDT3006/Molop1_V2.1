import{n as e,s as t,t as n}from"./state-BDdBsVRV.js";function r(r){let i=e(),a=i.currentWeek||1,o=t(a),s=[`🚀`,`🪐`,`🌟`,`🛸`,`🛡️`];r.innerHTML=`
    <div class="header-bar">
      <div style="width:44px"></div>
      <div class="title">Molop1 V2.1 🚀</div>
      <div class="star-counter">⭐ ${i.stars}</div>
    </div>
    <div class="dashboard-container">
      <div class="week-header">
        <h1>🌌 Tuần ${a}: Khám phá Thiên hà Chữ & Số</h1>
        <p>Chào mừng nhà thám hiểm! Hãy hoàn thành từng chặng để chinh phục vũ trụ kiến thức!</p>
      </div>
      <div class="dashboard-grid">
        ${o.map((e,t)=>{let r=n(a,e.day),i=t>0?n(a,o[t-1].day):{percent:100},c=t===0||i.percent>=50,l=r.percent===100,u=c&&!l,d=e.isBossDay,f=`day-card`;return c?l?f+=` completed`:u&&(f+=` active`):f+=` locked`,d&&(f+=` boss-card`),`
            <div class="${f}" data-day="${e.day}" ${c?`onclick="window.navigateTo('#${d?`boss`:`daily`}/${a}/${e.day}')"`:``}>
              <span class="day-emoji">${s[t]||`📚`}</span>
              <div class="day-name">${e.dayName}</div>
              <div class="day-theme">${e.theme}</div>
              <div class="progress-bar">
                <div class="progress-bar-fill" style="width:${r.percent}%"></div>
              </div>
              <div style="margin-top:8px;font-size:0.8rem;color:var(--text-muted)">${r.done}/${r.total} hoạt động</div>
            </div>
          `}).join(``)}
      </div>
      <div style="text-align:center;padding:20px 0;color:var(--text-muted);">
        <p style="font-size:1.1rem;">🧑‍🚀 Astro nói: "Mỗi ngày một chặng, em sẽ chinh phục cả vũ trụ!"</p>
      </div>
    </div>
  `}export{r as renderDashboard};