module.exports = {
  plugins: {
    tailwindcss: { config: "./tailwind.config.js" },
  },
};

// typescript는 가져오기/내보내기가 없는 파일을 레거시 스크립트 파일로 취급합니다.
// 이러한 파일은 모듈이 아니며 정의가 전역 네임스페이스에 병합됩니다.isolatedModules이러한 파일을 금지합니다.
// 파일에 가져오기 또는 내보내기를 추가하면 모듈이 되고 오류가 사라집니다.
// 또한export {} 아무 것도 가져오지 않고 파일을 모듈로 만드는 편리한 방법 입니다.

// isolatedModules로 설정하십시오 false
