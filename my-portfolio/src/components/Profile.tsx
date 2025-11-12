import Image from "next/image";
import profileImg from "../../../public/images/profileImage.png";

export default function Profile() {
  return (
    <section className="flex gap-[9px]">
      <Image
        src={profileImg}
        alt="MinKyeonghyeon"
        width={103}
        height={103}
        placeholder="blur"
      />
      <div>
        <h2 className="font-mono text-2xl">
          <span className="block">Min</span>
          <span className="block">Kyeonghyeon</span>
        </h2>
      </div>
    </section>
  );
}
