import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface PortfolioCardProps {
  project: {
    image: string | StaticImageData;
    title: string;
    href: string;
  };
}

export default function PortfolioCard({ project }: PortfolioCardProps) {
  return (
    <div className="mt-5 flex flex-col gap-4">
      <div className="relative w-full h-[95px] rounded-2xl bg-white">
        <Link href={project.href}>
          <Image
            src={project.image}
            alt={project.title}
            className="w-full h-[95px] rounded-2xl object-cover"
            fill
          />
        </Link>
      </div>
    </div>
  );
}
