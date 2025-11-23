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
    <li>
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
    </li>
  );
}
