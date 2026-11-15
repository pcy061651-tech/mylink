import { defineConfig } from 'vite';

export default defineConfig({
  // GitHub Pages 배포 시 저장소 이름(mylink)을 기본 경로로 설정합니다.
  // 로컬 개발 환경(npm run dev)에서는 자동으로 '/'로 동작합니다.
  base: process.env.NODE_ENV === 'production' ? '/mylink/' : '/',
  server: {
    port: 3000,
    open: false,
  },
});
