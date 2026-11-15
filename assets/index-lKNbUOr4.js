(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={profile:{name:`김민우 (Minwoo Kim)`,avatar:`./avatar.svg`,badge:`Computer Science Student 🎓`,bio:`기술과 디자인으로 더 나은 사용자 경험을 만듭니다.
새로운 기술을 탐구하고 기록하는 것을 좋아합니다. ✨`,location:`Seoul, South Korea 📍`},defaultTheme:`system`,emptyLinkBehavior:`disabled`,links:[{id:`instagram`,title:`Instagram`,subtitle:`일상 및 사진 아카이브`,url:``,icon:`instagram`,badge:`Photo`,brandColor:`#E1306C`},{id:`youtube`,title:`YouTube`,subtitle:`영상 콘텐츠 및 튜토리얼`,url:``,icon:`youtube`,badge:`Video`,brandColor:`#FF0000`},{id:`github`,title:`GitHub`,subtitle:`오픈소스 및 개발 프로젝트 저장소`,url:``,icon:`github`,badge:`Code`,brandColor:`#24292e`},{id:`email`,title:`Email`,subtitle:`협업 제안 및 연락하기`,url:``,icon:`email`,badge:`Contact`,brandColor:`#007AFF`}],footer:{copyright:`© 2026 MyLink. All rights reserved.`,tagline:`Designed & Built with Vite and GitHub Pages`}},t={instagram:`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  `,youtube:`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
      <polygon points="10 15 15 12 10 9 10 15" fill="currentColor"/>
    </svg>
  `,github:`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
      <path d="M9 18c-4.51 2-5-2-7-2"/>
    </svg>
  `,email:`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  `,arrowUpRight:`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="7" y1="17" x2="17" y2="7"/>
      <polyline points="7 7 17 7 17 17"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
    </svg>
  `,check:`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  `,moon:`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
    </svg>
  `,sun:`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="4"/>
      <path d="M12 2v2"/>
      <path d="M12 20v2"/>
      <path d="m4.93 4.93 1.41 1.41"/>
      <path d="m17.66 17.66 1.41 1.41"/>
      <path d="M2 12h2"/>
      <path d="M20 12h2"/>
      <path d="m6.34 17.66-1.41 1.41"/>
      <path d="m19.07 4.93-1.41 1.41"/>
    </svg>
  `,clock:`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  `,share:`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="18" cy="5" r="3"/>
      <circle cx="6" cy="12" r="3"/>
      <circle cx="18" cy="19" r="3"/>
      <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/>
      <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>
    </svg>
  `};document.addEventListener(`DOMContentLoaded`,()=>{n(),r(),i(),a(),o()});function n(){let{profile:t}=e,n=document.getElementById(`profile-avatar`);if(n&&t.avatar){let e=t.avatar;e.startsWith(`./`)&&(e=`/mylink/${e.slice(2)}`),n.src=e,n.alt=`${t.name} 프로필 사진`}let r=document.getElementById(`profile-name`);r&&(r.textContent=t.name);let i=document.getElementById(`profile-badge`);i&&(t.badge?i.textContent=t.badge:i.parentElement.style.display=`none`);let a=document.getElementById(`profile-bio`);a&&(a.textContent=t.bio);let o=document.getElementById(`profile-location`);o&&(t.location?o.querySelector(`span`).textContent=t.location:o.style.display=`none`)}function r(){let n=document.getElementById(`links-container`);if(!n)return;let{links:r,emptyLinkBehavior:i}=e;n.innerHTML=``,r.forEach(e=>{let r=e.url&&e.url.trim()!==``;if(!r&&i===`hide`)return;let a=t[e.icon]||t.share,o=document.createElement(r?`a`:`div`);o.className=`link-card ${r?``:`disabled`}`,r?(o.href=e.url,o.target=`_blank`,o.rel=`noopener noreferrer`,o.setAttribute(`aria-label`,`${e.title} 바로가기 (새 탭)`)):(o.setAttribute(`role`,`button`),o.setAttribute(`aria-disabled`,`true`),o.setAttribute(`tabindex`,`0`),o.title=`링크 주소가 아직 등록되지 않았습니다 (config.js에서 설정 가능)`,o.addEventListener(`click`,e=>{e.preventDefault(),c(`아직 등록되지 않은 링크입니다. config.js에서 주소를 추가해 보세요! 🔗`)}),o.addEventListener(`keydown`,e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),c(`아직 등록되지 않은 링크입니다. config.js에서 주소를 추가해 보세요! 🔗`))}));let s=e.brandColor?`background: ${e.brandColor};`:`background: var(--accent-primary);`,l=r?`
        <div class="link-card-right">
          ${e.badge?`<span class="link-badge">${e.badge}</span>`:``}
          ${t.arrowUpRight}
        </div>
      `:`
        <div class="link-card-right">
          <span class="status-tag">
            ${t.clock} 준비 중
          </span>
        </div>
      `;o.innerHTML=`
      <div class="link-card-left">
        <div class="link-icon-box" style="${s}">
          ${a}
        </div>
        <div class="link-text-group">
          <span class="link-title">${e.title}</span>
          ${e.subtitle?`<span class="link-subtitle">${e.subtitle}</span>`:``}
        </div>
      </div>
      ${l}
    `,n.appendChild(o)})}function i(){let e=document.getElementById(`theme-toggle-btn`),n=document.getElementById(`theme-icon`),r=document.documentElement;function i(){let i=r.classList.contains(`dark`);n&&(n.innerHTML=i?t.sun:t.moon,e.setAttribute(`title`,i?`라이트 모드로 전환`:`다크 모드로 전환`))}i(),e&&e.addEventListener(`click`,()=>{let e=r.classList.toggle(`dark`);localStorage.setItem(`mylink-theme`,e?`dark`:`light`),i(),c(e?`다크 모드가 적용되었습니다. 🌙`:`라이트 모드가 적용되었습니다. ☀️`)}),window.matchMedia(`(prefers-color-scheme: dark)`).addEventListener(`change`,e=>{localStorage.getItem(`mylink-theme`)||(e.matches?r.classList.add(`dark`):r.classList.remove(`dark`),i())})}function a(){let e=document.getElementById(`copy-share-btn`),n=document.getElementById(`copy-share-icon`),r=document.getElementById(`bottom-copy-btn`),i=document.getElementById(`bottom-copy-icon`);n&&(n.innerHTML=t.copy),i&&(i.innerHTML=t.copy);async function a(e,n){let r=window.location.href;try{await navigator.clipboard.writeText(r),n&&(n.innerHTML=t.check),c(`마이링크 주소가 복사되었습니다! 🎉`),setTimeout(()=>{n&&(n.innerHTML=t.copy)},2e3)}catch{let e=document.createElement(`textarea`);e.value=r,e.style.position=`fixed`,e.style.left=`-9999px`,document.body.appendChild(e),e.select(),document.execCommand(`copy`),document.body.removeChild(e),n&&(n.innerHTML=t.check),c(`마이링크 주소가 복사되었습니다! 🎉`),setTimeout(()=>{n&&(n.innerHTML=t.copy)},2e3)}}e&&e.addEventListener(`click`,()=>a(e,n)),r&&r.addEventListener(`click`,()=>a(r,i))}function o(){let{footer:t}=e,n=document.getElementById(`footer-copyright`),r=document.getElementById(`footer-tagline`);n&&t.copyright&&(n.textContent=t.copyright),r&&t.tagline&&(r.textContent=t.tagline)}var s=null;function c(e){let n=document.getElementById(`toast`),r=document.getElementById(`toast-message`),i=document.getElementById(`toast-icon`);n&&r&&(r.textContent=e,i&&(i.innerHTML=t.check),n.classList.add(`show`),s&&clearTimeout(s),s=setTimeout(()=>{n.classList.remove(`show`)},2600))}