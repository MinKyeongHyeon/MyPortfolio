import Image from "next/image";
import profileImg from "../../../public/images/profileImage.png";

export default function About() {
  return (
    <div className="flex justify-center">
      <main className="flex flex-col gap-[9px]">
        <header className="h-8">header section</header>
        {/* 프로필 섹션 */}
        <section className="flex gap-[9px]">
          <Image
            src={profileImg}
            alt="MinKyeonghyeon"
            width={103}
            height={103}
            placeholder="blur"
          />
          <div>
            <h1 className="font-mono text-2xl bg-custom-orange">
              <span className="block">Min</span>
              <span className="block">Kyeonghyeon</span>
            </h1>
          </div>
        </section>

        {/* 나의 성장 지표 */}
        <section>
          <h2 className="font-mono text-2xl text-custom-orange">
            Envolving...
          </h2>
          <figure>
            <div aria-label="Learning Journey">0000</div>
            <figcaption>since 2025 05 21</figcaption>
          </figure>
        </section>

        {/* 기술 스택 섹션 */}
        <section>
          <header>
            <h2>Skills</h2>
            <button type="button" aria-label="스킬 섹션 토글">
              -
            </button>
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
    </div>
  );
}
