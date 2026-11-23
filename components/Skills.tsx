import { skillGroups, skillsSection } from "@/data/content";
import SkillChip from "./SkillChip";

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-20 scroll-mt-24"
    >
      {/* Header block */}
      <div>
        <h2
          id="skills-heading"
          className="display text-[clamp(2.25rem,5vw,4rem)] font-medium leading-[1.05]"
        >
          {skillsSection.heading}
        </h2>
        <p className="text-[1.0625rem] text-[var(--muted)] max-w-[48ch] mt-4">
          {skillsSection.intro}
        </p>
      </div>

      {/* Groups grid - staggered layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12 mt-14">
        {skillGroups.map((group, groupIndex) => (
          <div 
            key={group.title} 
            className="border-t-[3px] border-[var(--lavender)] pt-5"
            style={{
              marginTop: groupIndex > 0 ? `${groupIndex * 3}rem` : '0'
            }}
          >
            <h3 className="display text-2xl font-medium leading-tight text-[var(--text)]">
              {group.title}
            </h3>
            <p className="text-sm leading-relaxed text-[var(--muted)] mt-2 max-w-[36ch]">
              {group.blurb}
            </p>
            <ul className="flex flex-wrap gap-2 mt-6 list-none p-0">
              {group.skills.map((skill) => (
                <SkillChip
                  key={skill.name}
                  name={skill.name}
                  featured={skill.featured}
                />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
