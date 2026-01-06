import Link from "next/link";

export default function Portfolio() {
  return (
    <div>
      <h1 className="sr-only">민경현의 포트폴리오</h1>
      <Link href="/home">홈으로</Link>
      <p>{/* 보여주고 싶은 내용은 무엇인가? */}</p>
      <h2>Atomic design 접근을 통한 재사용 가능한 컴포넌트에 대한 예시</h2>
      <p>Atomic Design 패턴을 사용해 컴포넌트를 최소기능단위로 분리</p>
      <p>렌더와 기능을 분리해 재사용성을 높임?</p>
      <p>함수 분리 재조합을 통해 재사용성을 높임?</p>
      <h2>Restfull API 사용을 능숙하게 할 수 있음</h2>
      <p>api호출과 에러상태에 따른 예외처리 예시</p>
      <p>디바운싱과 같은 기술을 통해 적절한 통신호출 최적화</p>
    </div>
  );
}
