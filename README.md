# 🔗 MyLink - 개인 SNS 링크 모음 웹사이트

> **Linktree 스타일의 세련된 모던 반응형 개인 링크 모음 서비스**  
> 대학교 웹 프로그래밍 과제 프로젝트

[![Deploy MyLink to GitHub Pages](https://github.com/OWNER/mylink/actions/workflows/deploy.yml/badge.svg)](https://github.com/OWNER/mylink/actions)
![Node.js](https://img.shields.io/badge/Node.js-26.x-339933?logo=node.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?logo=vite&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-222222?logo=github&logoColor=white)

---

## 📌 1. 과제 제출 정보
- **GitHub 저장소 URL:** `https://github.com/[사용자이름]/mylink`
- **MyLink 배포 사이트 URL:** `https://[사용자이름].github.io/mylink/`

---

## ✨ 2. 주요 기능 및 특징

### 🎨 디자인 & UI/UX
- **모바일 퍼스트 반응형 레이아웃**: 스마트폰, 태블릿, 데스크톱 모든 환경에 최적화된 중앙 카드형 디자인
- **세련된 원형 프로필**: 회전 그라디언트 링과 미세한 인터랙션이 적용된 아바타 및 상태 표시 뱃지
- **다크 모드 / 라이트 모드 지원**:
  - 사용자 기기 테마(`prefers-color-scheme`) 자동 감지
  - 상단 토글 버튼을 통한 수동 테마 전환 및 `localStorage` 영구 저장
- **글래스모피즘 & 오로라 배경**: 부드러운 유기적 블러 애니메이션과 카드 배경 블러(`backdrop-filter`)
- **생동감 넘치는 마이크로 애니메이션**: 버튼 호버 시 리프트 업, 아이콘 회전, 박스 섀도우 강조 효과

### 🔗 링크 관리 및 보안
- **설정 파일 기반 간편 관리 (`src/config.js`)**:
  - 코드 수정 없이 `config.js`의 URL 따옴표 안에 링크만 입력하면 즉시 반영
  - Instagram, YouTube, GitHub, Email 기본 지원
- **미입력 링크 스마트 처리**:
  - 링크 주소가 입력되지 않은 항목은 자동으로 비활성화(클릭 불가 + 준비 중 뱃지) 또는 설정에 따라 숨김 처리
- **새 탭 열기 및 보안**:
  - 모든 외부 링크는 `target="_blank"` 및 `rel="noopener noreferrer"`로 열려 보안 및 성능 최적화

### 📋 추가 편의 기능
- **원클릭 주소 복사**:
  - 상단 및 하단 버튼 클릭 시 현재 마이링크 웹사이트 주소가 클립보드에 복사
  - 감각적인 토스트(Toast) 팝업 알림 및 버튼 아이콘 체크 마이크로 인터랙션

---

## 🛠️ 3. 기술 스택
- **Language**: HTML5, CSS3, JavaScript (ES6+ Module)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Hosting / CI/CD**: [GitHub Pages](https://pages.github.com/), [GitHub Actions](https://github.com/features/actions)
- **Font**: [Pretendard](https://cactus.t54.io/pretendard)

---

## 🚀 4. 프로젝트 구조

```
mylink/
├── index.html                   # 메인 HTML 템플릿
├── vite.config.js               # Vite 빌드 및 GitHub Pages 베이스 경로 설정
├── package.json                 # 프로젝트 정보 및 의존성 스크립트
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Pages 자동 배포 CI/CD 파이프라인
├── public/
│   ├── favicon.svg              # 웹사이트 파비콘
│   └── avatar.svg               # 기본 벡터 프로필 아바타
└── src/
    ├── config.js                # ⭐ [핵심] 프로필 및 SNS 링크 설정 파일
    ├── main.js                  # 동적 렌더링, 테마 전환, 클립보드 복사 등 인터랙션
    ├── icons.js                 # 고해상도 인라인 SVG 아이콘 모음
    └── style.css                # CSS 토큰, 반응형, 다크모드, 애니메이션 스타일
```

---

## ⚙️ 5. 내 프로필 및 링크 수정 방법

`src/config.js` 파일을 열고 원하는 값으로 수정하기만 하면 됩니다!

```javascript
// src/config.js
export const myLinkConfig = {
  profile: {
    name: "홍길동",                           // 표시할 이름
    badge: "Computer Science Student 🎓",    // 신분 또는 태그
    bio: "안녕하세요! 개발자 홍길동입니다.",      // 짧은 자기소개
    location: "Seoul, South Korea 📍",       // 위치
  },

  links: [
    {
      id: "instagram",
      title: "Instagram",
      url: "https://instagram.com/내_아이디",   // 👈 실제 주소 입력
      // ...
    },
    // YouTube, GitHub, Email 등도 동일하게 입력
  ]
};
```

---

## 💻 6. 로컬 개발 및 실행

```bash
# 1. 패키지 설치
npm install

# 2. 로컬 개발 서버 실행
npm run dev

# 3. 배포용 정적 빌드
npm run build
```

---

## 📄 라이선스
MIT License © 2026 MyLink
