/**
 * ====================================================================
 * 🌟 MyLink 개인 프로필 & SNS 링크 설정 파일
 * ====================================================================
 * 이 파일에서 프로필 정보와 링크 주소를 간편하게 수정할 수 있습니다.
 * 
 * 💡 링크 주소 입력 방법:
 * - url 속성에 본인의 실제 프로필 주소를 큰따옴표 안에 입력하세요.
 *   예: url: "https://instagram.com/my_id"
 * - url을 빈 문자열("")로 두면, 아래 emptyLinkBehavior 설정에 따라
 *   자동으로 '비활성화(클릭 불가)'되거나 '숨김' 처리됩니다.
 */

export const myLinkConfig = {
  // 1. 프로필 기본 정보
  profile: {
    // 화면에 표시될 본인의 이름 또는 닉네임
    name: "김민우 (Minwoo Kim)",

    // 프로필 사진 이미지 경로 (public 폴더 기준 경로 또는 외부 웹 이미지 URL)
    avatar: "./avatar.svg",

    // 이름 아래 표시될 신분/직함 또는 상태 태그
    badge: "Computer Science Student 🎓",

    // 짧은 자기소개 (줄바꿈은 \n으로 입력 가능)
    bio: "기술과 디자인으로 더 나은 사용자 경험을 만듭니다.\n새로운 기술을 탐구하고 기록하는 것을 좋아합니다. ✨",

    // 프로필 하단 위치/소속 정보 (선택사항, 필요없으면 빈 문자열)
    location: "Seoul, South Korea 📍",
  },

  // 2. 테마 설정
  // 'system' : 방문자의 기기 설정(다크모드/라이트모드)을 자동 감지
  // 'dark'   : 기본 다크모드
  // 'light'  : 기본 라이트모드
  defaultTheme: "system",

  // 3. 미입력 링크 처리 방식 설정
  // 'disabled' : 버튼은 표시하되 비활성화(클릭 불가 + 준비 중 뱃지)
  // 'hide'     : URL이 비어있는 버튼은 아예 화면에서 숨김
  emptyLinkBehavior: "disabled",

  // 4. 링크 버튼 목록
  // 순서를 바꾸거나 필요한 경우 항목을 추가할 수 있습니다.
  links: [
    {
      id: "instagram",
      title: "Instagram",
      subtitle: "일상 및 사진 아카이브",
      // ✏️ 실제 인스타그램 주소를 아래 따옴표 안에 입력하세요 (예: "https://instagram.com/아이디")
      url: "",
      icon: "instagram",
      badge: "Photo",
      brandColor: "#E1306C",
    },
    {
      id: "youtube",
      title: "YouTube",
      subtitle: "영상 콘텐츠 및 튜토리얼",
      // ✏️ 실제 유튜브 채널 주소를 아래 따옴표 안에 입력하세요 (예: "https://youtube.com/@채널명")
      url: "",
      icon: "youtube",
      badge: "Video",
      brandColor: "#FF0000",
    },
    {
      id: "github",
      title: "GitHub",
      subtitle: "오픈소스 및 개발 프로젝트 저장소",
      // ✏️ 실제 깃허브 프로필 주소를 아래 따옴표 안에 입력하세요 (예: "https://github.com/아이디")
      url: "",
      icon: "github",
      badge: "Code",
      brandColor: "#24292e",
    },
    {
      id: "email",
      title: "Email",
      subtitle: "협업 제안 및 연락하기",
      // ✏️ 실제 이메일 주소를 아래 따옴표 안에 입력하세요 (예: "mailto:your_email@example.com")
      url: "",
      icon: "email",
      badge: "Contact",
      brandColor: "#007AFF",
    },
  ],

  // 5. 푸터 문구
  footer: {
    copyright: "© 2026 MyLink. All rights reserved.",
    tagline: "Designed & Built with Vite and GitHub Pages",
  },
};
