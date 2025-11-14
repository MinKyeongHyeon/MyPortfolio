import SkillItems from "./SkillItems";

export default function Skills() {
  return (
    <ul className="mt-8 flex justify-between items-end">
      <SkillItems name="HTML5" level={9} />
      <SkillItems name="CSS3" level={8} />
      <SkillItems name="JS" level={9} />
      <SkillItems name="TS" level={8} />
      <SkillItems name="React19" level={9} />
      <SkillItems name="Next.js" level={7} />
      <SkillItems name="Tailwind" level={9} />
    </ul>
  );
}
