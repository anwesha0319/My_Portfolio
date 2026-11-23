interface SkillChipProps {
  name: string;
  featured?: boolean;
}

export default function SkillChip({ name, featured = false }: SkillChipProps) {
  return (
    <li>
      <span
        className={`inline-block rounded-md px-3 py-1.5 text-sm leading-tight font-medium whitespace-nowrap ${
          featured
            ? "bg-[var(--lavender)] text-[var(--ink)] border border-[var(--lavender)]"
            : "bg-transparent text-[var(--text)] border border-white/[0.18]"
        }`}
      >
        {featured && <span className="sr-only">Most used: </span>}
        {name}
      </span>
    </li>
  );
}
