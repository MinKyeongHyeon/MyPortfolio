import Navbar from "./Navbar";
export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <div>
        <p>여기에 내 소개 아이고어쩌구 저쩌구 로렘 입숨</p>
        <div>
          <h2>민경현</h2>
          <img src="/" alt="내 사진" />
        </div>
        <div>
          <h2>여기에 스킬 소개?</h2>
          <p>내 스킬 HTML5 ****</p>
          <p>내 스킬 CSS3 ****</p>
          <p>내 스킬 Javascript ****</p>
        </div>
        <div>
          <h3>여기에 프로젝트 소개?</h3>
          <p>오픈마켓?</p>
          <p>1만시간의 법칙?</p>
          <p>감귤마켓</p>
          <p>두근두근 비밀일기</p>
        </div>
      </div>
    </div>
  );
}
