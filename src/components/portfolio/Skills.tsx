import { Reveal, SectionHeading } from "./Section";
import { skillGroups } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <SectionHeading index="02" title="Skills" note="Tools and areas I work across the stack." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 80}>
            <div className="h-full rounded-lg border border-line bg-card p-5 transition-colors hover:border-foreground">
              <p className="mb-4 font-mono text-xs tracking-wider text-muted-foreground uppercase">
                {group.title}
              </p>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line bg-faint px-3 py-1 text-sm font-medium"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
