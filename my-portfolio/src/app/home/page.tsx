import Card from "@/components/Card";
import Profile from "@/components/Profile";
import Skills from "@/components/Skills";
import Runtime from "@/components/Runtime";
import Intro from "@/components/Intro";
export default function About() {
  return (
    <div className=" flex justify-center">
      <main className="flex flex-col gap-3">
        {/* 프로필 섹션 */}
        <Profile />
        <Intro />

        {/* 나의 성장 지표 */}
        <Runtime />

        {/* 기술 스택 섹션 */}
        <Card title="Skills">
          <Skills />
        </Card>

        {/* 포트폴리오 섹션 */}
        <Card title="Portfolio" backgroundColor="#485E2E">
          <span className="text-white">아 정말 어렵다 nextjs</span>
        </Card>

        {/* 연락처 섹션 */}
        <Card title="Contact" backgroundColor="#BDBDBD">
          <p className="font-mono text-lg text-white mt-3.5">
            Email : manemin2@gmail.com
          </p>
          <p className="font-mono text-lg text-white mb-3.5">
            Phone : 010-4858-2859
          </p>
        </Card>
      </main>
    </div>
  );
}
