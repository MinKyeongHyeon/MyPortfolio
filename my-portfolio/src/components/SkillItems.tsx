interface SkillItemProps {
  name: string;
  level: number;
}

export default function SkillItems({ name, level }: SkillItemProps) {
  const height = level * 12;
  return (
    <li className="flex flex-col gap-2 items-center">
      <span className="font-inter text-[10px] text-white">{level}</span>
      <div
        aria-label={`${name} 숙련도 ${level}/10`}
        className="w-9 rounded-full bg-[#A6391B]"
        style={{ height: `${height}px` }}
      />
      <span className="font-inter text-[10px] text-white">{name}</span>
    </li>
  );
}
