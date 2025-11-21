import Link from "next/link";
import Image from "next/image";
import project1 from "../../public/images/tengerine.png";

export default function PortfolioCard() {
  return (
    <div className="mt-5 flex flex-col gap-4">
      <div className="w-full h-[95px] rounded-2xl bg-white">
        <Link href="/portfolio">
          <Image
            src={project1}
            alt="이미지"
            className="w-full h-[95px] rounded-2xl object-cover"
          />
        </Link>
      </div>
    </div>
  );
}
