import Image from "next/image";
import profileImg from "../../../public/images/profileImage.png";

export default function About() {
  return (
    <main>
      {/* 프로필 섹션 */}
      <section>
        <Image
          src={profileImg}
          alt="MinKyeonghyeon"
          width={103}
          height={103}
          placeholder="blur"
        />
        <header>
          <h1>Min Kyeonghyeon</h1>
        </header>
      </section>

      {/* GitHub 활동 섹션 */}
      <section>
        <h2>Envolving...</h2>
        <figure>
          <div aria-label="GitHub contributions">0000</div>
          <figcaption>since 2025 05 21</figcaption>
        </figure>
      </section>

      {/* 기술 스택 섹션 */}
      <section>
        <header>
          <h2>Skills</h2>
          <button type="button" aria-label="스킬 섹션 토글">-</button>
        </header>
        <ul>
          <li>
            <span aria-label="숙련도">9.5</span>
            <span>HTML5</span>
          </li>
          <li>
            <span aria-label="숙련도">9.5</span>
            <span>CSS3</span>
          </li>
          <li>
            <span aria-label="숙련도">9.5</span>
            <span>JavaScript</span>
          </li>
          <li>
            <span aria-label="숙련도">9.5</span>
            <span>TypeScript</span>
          </li>
          <li>
            <span aria-label="숙련도">9.5</span>
            <span>React</span>
          </li>
          <li>
            <span aria-label="숙련도">9.5</span>
            <span>Next.js</span>
          </li>
        </ul>
      </section>

      {/* 포트폴리오 섹션 */}
      <section>
        <h2>Portfolio</h2>
      </section>

      {/* 연락처 섹션 */}
      <section>
        <h2>Contact</h2>
      </section>
    </main>
  );
}
