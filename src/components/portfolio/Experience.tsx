import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeading } from "./Section";
import { GITHUB_URL, mergedPRs } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <SectionHeading index="04" title="Experience & Open Source" />
      <div className="grid gap-8 lg:grid-cols-2">
        <Reveal>
          <ol className="relative space-y-8 border-l border-line pl-6">
            <li className="relative">
              <span
                className="absolute top-1.5 -left-[27px] size-2.5 rounded-full bg-accent ring-4 ring-background"
                aria-hidden
              />
              <p className="font-mono text-xs text-muted-foreground">Internship</p>
              <h3 className="mt-1 font-display text-xl font-bold tracking-tight">
                Software/Technology Intern
              </h3>
              <p className="mt-1 font-mono text-sm">LUDOVICO Coffee · early-stage startup</p>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Software/Technology Intern at an early-stage startup working around
                technology-driven solutions and product development.
              </p>
            </li>
            <li className="relative">
              <span
                className="absolute top-1.5 -left-[27px] size-2.5 rounded-full bg-line ring-4 ring-background"
                aria-hidden
              />
              <p className="font-mono text-xs text-muted-foreground">Education</p>
              <h3 className="mt-1 font-display text-xl font-bold tracking-tight">VIT-AP University</h3>
              <p className="mt-1 font-mono text-sm">
                Integrated M.Tech — Computer Science Engineering
              </p>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Currently in the 7th semester of the five-year integrated programme.
              </p>
            </li>
          </ol>
        </Reveal>

        <Reveal delay={100}>
          <div className="rounded-lg bg-invert p-6 text-invert-foreground">
            <p className="mb-2 font-mono text-xs text-accent">Open Source</p>
            <h3 className="font-display text-xl font-bold tracking-tight">
              Apache TVM Open Source Contributor
            </h3>
            <ul className="mt-4 space-y-2">
              {mergedPRs.map((pr) => (
                <li
                  key={pr}
                  className="flex items-center justify-between rounded-md border border-current/15 px-3 py-2 font-mono text-sm"
                >
                  <span>{pr}</span>
                  <span className="text-accent">merged ✓</span>
                </li>
              ))}
            </ul>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 font-mono text-sm text-accent hover:underline"
            >
              View contributions <ArrowUpRight className="size-3.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
