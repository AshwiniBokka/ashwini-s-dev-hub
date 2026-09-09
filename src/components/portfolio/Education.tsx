import { GraduationCap } from "lucide-react";
import { Reveal, SectionHeading } from "./Section";

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <SectionHeading index="06" title="Education" />
      <Reveal>
        <div className="rounded-lg border border-line bg-card p-6 lg:max-w-2xl">
          <div className="flex items-start gap-4">
            <span
              className="grid size-10 shrink-0 place-items-center rounded-md bg-invert text-invert-foreground"
              aria-hidden
            >
              <GraduationCap className="size-5" />
            </span>
            <div>
              <p className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
                2022 — present
              </p>
              <h3 className="mt-1 font-display text-xl font-bold tracking-tight">
                VIT-AP University
              </h3>
              <p className="mt-1 text-muted-foreground">
                Integrated M.Tech — Computer Science Engineering
              </p>
            </div>
          </div>
          <div className="mt-6 flex items-center gap-3">
            <span className="h-px flex-1 bg-line" aria-hidden />
            <span className="font-mono text-xs text-muted-foreground">
              Currently in 7th semester · 5-year integrated programme
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
