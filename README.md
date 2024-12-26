# My Emotion Diary Project

"한입 리액트" 강의를 기반으로 제작해 추가적인 기능을 더한 감정 일기장 프로젝트입니다.

## 🚀 Demo
- 배포 링크 : https://emotion-diary-blush-two.vercel.app/

## 📚 사용 기술
- React
- Vite
- React Router
- react-calendar
- Web Storage API
- Vercel (배포)

## 🌟 주요 기능
1. 감정 일기 작성
   - 날짜, 감정, 일기 내용을 기록
   - 감정 점수 선택 가능
   - LocalStorage를 활용한 데이터 저장

2. 일기 목록 보기
   - 작성한 일기 리스트 확인
   - 정렬 기능 (최신순/오래된순)

3. 달력으로 보기 (추가 기능)
   - react-calendar를 활용한 달력 view
   - 날짜별로 작성된 일기 확인 가능 (날짜별 감정을 한눈에 보게 하기 위함)

4. Splash Screen (추가 기능)
   - Home 페이지 진입시 로딩 애니메이션 표시

## 🗂 프로젝트 구조
```
src/
├── components/         # 컴포넌트
├── hooks/              # 커스텀 훅 저장
├── pages/              # 페이지
└── util/               # 유틸리티 함수
```

## 🔍 주요 구현 사항
1. 데이터 저장장
   - Web Storage API (LocalStorage)를 활용한 일기 데이터 저장
   - 브라우저 새로고침 후에도 데이터 유지

2. 라우팅 구현
   - React Router를 사용한 페이지 간 이동
   - 동적 라우팅을 통한 일기 상세 페이지 구현

## 💡 문제 해결
### OG 이미지 최적화
- 문제: Open Graph 이미지가 정상적으로 표시되지 않음
- 해결: 이미지 최적화 작업 진행
  - 이미지 형식 및 크기 최적화

## 📝 학습 내용
1. React 기본 개념
   - Component
   - Props & State
   - React Hooks (useState, useEffect 등)

2. 추가 학습 내용
   - react-calendar 라이브러리 사용법
   - Vite 프로젝트 구성
   - Vercel 배포 프로세스
   - Web Storage API 활용
   - React Router를 통한 SPA 구현

## 💫 향후 발전 계획
1. 기능 추가
   - 감정 통계 시각화

2. 기술 개선
   - TypeScript 도입

## 참고 자료
- [https://velog.io/@hyerani/React-%EC%BA%98%EB%A6%B0%EB%8D%94-%EB%A7%8C%EB%93%A4%EA%B8%B0-react-calendar](React - 캘린더 만들기 (react-calendar))