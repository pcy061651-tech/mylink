import './style.css';
import { myLinkConfig } from './config.js';
import { icons } from './icons.js';

/**
 * MyLink 메인 애플리케이션 로직
 */
document.addEventListener('DOMContentLoaded', () => {
  initProfile();
  initLinks();
  initTheme();
  initCopyActions();
  initFooter();
});

/**
 * 1. 프로필 정보 렌더링
 */
function initProfile() {
  const { profile } = myLinkConfig;

  // 아바타
  const avatarImg = document.getElementById('profile-avatar');
  if (avatarImg && profile.avatar) {
    const baseUrl = import.meta.env.BASE_URL || '/';
    let avatarSrc = profile.avatar;
    if (avatarSrc.startsWith('./')) {
      avatarSrc = `${baseUrl}${avatarSrc.slice(2)}`;
    }
    avatarImg.src = avatarSrc;
    avatarImg.alt = `${profile.name} 프로필 사진`;
  }

  // 이름
  const nameEl = document.getElementById('profile-name');
  if (nameEl) nameEl.textContent = profile.name;

  // 뱃지 태그
  const badgeEl = document.getElementById('profile-badge');
  if (badgeEl) {
    if (profile.badge) {
      badgeEl.textContent = profile.badge;
    } else {
      badgeEl.parentElement.style.display = 'none';
    }
  }

  // 소개글
  const bioEl = document.getElementById('profile-bio');
  if (bioEl) bioEl.textContent = profile.bio;

  // 위치/소속
  const locationEl = document.getElementById('profile-location');
  if (locationEl) {
    if (profile.location) {
      locationEl.querySelector('span').textContent = profile.location;
    } else {
      locationEl.style.display = 'none';
    }
  }
}

/**
 * 2. 링크 목록 동적 렌더링
 */
function initLinks() {
  const container = document.getElementById('links-container');
  if (!container) return;

  const { links, emptyLinkBehavior } = myLinkConfig;
  container.innerHTML = '';

  links.forEach((link) => {
    const hasUrl = link.url && link.url.trim() !== '';

    // URL이 비어있고 숨김(hide) 모드인 경우 건너뜀
    if (!hasUrl && emptyLinkBehavior === 'hide') {
      return;
    }

    const iconSvg = icons[link.icon] || icons.share;

    // 링크 카드 요소 생성
    const card = document.createElement(hasUrl ? 'a' : 'div');
    card.className = `link-card ${hasUrl ? '' : 'disabled'}`;
    
    if (hasUrl) {
      card.href = link.url;
      card.target = '_blank';
      card.rel = 'noopener noreferrer';
      card.setAttribute('aria-label', `${link.title} 바로가기 (새 탭)`);
    } else {
      card.setAttribute('role', 'button');
      card.setAttribute('aria-disabled', 'true');
      card.setAttribute('tabindex', '0');
      card.title = '링크 주소가 아직 등록되지 않았습니다 (config.js에서 설정 가능)';
      
      // 비활성화 링크 클릭 시 안내 토스트 띄우기
      card.addEventListener('click', (e) => {
        e.preventDefault();
        showToast('아직 등록되지 않은 링크입니다. config.js에서 주소를 추가해 보세요! 🔗');
      });
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          showToast('아직 등록되지 않은 링크입니다. config.js에서 주소를 추가해 보세요! 🔗');
        }
      });
    }

    // 브랜드 고유 배경색/그라디언트
    const brandStyle = link.brandColor 
      ? `background: ${link.brandColor};` 
      : 'background: var(--accent-primary);';

    // 우측 영역 콘텐츠 (정상 링크는 화살표, 비활성 링크는 준비중 뱃지)
    const rightContent = hasUrl
      ? `
        <div class="link-card-right">
          ${link.badge ? `<span class="link-badge">${link.badge}</span>` : ''}
          ${icons.arrowUpRight}
        </div>
      `
      : `
        <div class="link-card-right">
          <span class="status-tag">
            ${icons.clock} 준비 중
          </span>
        </div>
      `;

    card.innerHTML = `
      <div class="link-card-left">
        <div class="link-icon-box" style="${brandStyle}">
          ${iconSvg}
        </div>
        <div class="link-text-group">
          <span class="link-title">${link.title}</span>
          ${link.subtitle ? `<span class="link-subtitle">${link.subtitle}</span>` : ''}
        </div>
      </div>
      ${rightContent}
    `;

    container.appendChild(card);
  });
}

/**
 * 3. 다크모드 / 라이트모드 토글 관리
 */
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  const iconWrap = document.getElementById('theme-icon');
  const html = document.documentElement;

  function updateIcon() {
    const isDark = html.classList.contains('dark');
    if (iconWrap) {
      iconWrap.innerHTML = isDark ? icons.sun : icons.moon;
      toggleBtn.setAttribute('title', isDark ? '라이트 모드로 전환' : '다크 모드로 전환');
    }
  }

  // 초기 아이콘 설정
  updateIcon();

  // 토글 클릭 이벤트
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const isDark = html.classList.toggle('dark');
      localStorage.setItem('mylink-theme', isDark ? 'dark' : 'light');
      updateIcon();
      showToast(isDark ? '다크 모드가 적용되었습니다. 🌙' : '라이트 모드가 적용되었습니다. ☀️');
    });
  }

  // 시스템 테마 변경 감지 (사용자가 수동 설정을 안 한 경우)
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('mylink-theme')) {
      if (e.matches) {
        html.classList.add('dark');
      } else {
        html.classList.remove('dark');
      }
      updateIcon();
    }
  });
}

/**
 * 4. 링크 복사 액션 (상단 및 하단 버튼)
 */
function initCopyActions() {
  const topCopyBtn = document.getElementById('copy-share-btn');
  const topCopyIcon = document.getElementById('copy-share-icon');
  const bottomCopyBtn = document.getElementById('bottom-copy-btn');
  const bottomCopyIcon = document.getElementById('bottom-copy-icon');

  if (topCopyIcon) topCopyIcon.innerHTML = icons.copy;
  if (bottomCopyIcon) bottomCopyIcon.innerHTML = icons.copy;

  async function handleCopy(btn, iconEl) {
    const currentUrl = window.location.href;
    try {
      await navigator.clipboard.writeText(currentUrl);
      if (iconEl) iconEl.innerHTML = icons.check;
      showToast('마이링크 주소가 복사되었습니다! 🎉');

      setTimeout(() => {
        if (iconEl) iconEl.innerHTML = icons.copy;
      }, 2000);
    } catch (err) {
      // 복사 권한 또는 구형 브라우저 fallback
      const textArea = document.createElement('textarea');
      textArea.value = currentUrl;
      textArea.style.position = 'fixed';
      textArea.style.left = '-9999px';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);

      if (iconEl) iconEl.innerHTML = icons.check;
      showToast('마이링크 주소가 복사되었습니다! 🎉');

      setTimeout(() => {
        if (iconEl) iconEl.innerHTML = icons.copy;
      }, 2000);
    }
  }

  if (topCopyBtn) {
    topCopyBtn.addEventListener('click', () => handleCopy(topCopyBtn, topCopyIcon));
  }
  if (bottomCopyBtn) {
    bottomCopyBtn.addEventListener('click', () => handleCopy(bottomCopyBtn, bottomCopyIcon));
  }
}

/**
 * 5. 푸터 텍스트 초기화
 */
function initFooter() {
  const { footer } = myLinkConfig;
  const copyEl = document.getElementById('footer-copyright');
  const tagEl = document.getElementById('footer-tagline');

  if (copyEl && footer.copyright) copyEl.textContent = footer.copyright;
  if (tagEl && footer.tagline) tagEl.textContent = footer.tagline;
}

/**
 * 6. 토스트 알림 표시 함수
 */
let toastTimeout = null;
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');
  const toastIcon = document.getElementById('toast-icon');

  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  if (toastIcon) toastIcon.innerHTML = icons.check;

  toast.classList.add('show');

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}
