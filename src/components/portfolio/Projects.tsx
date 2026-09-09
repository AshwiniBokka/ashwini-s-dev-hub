import { ArrowUpRight, Github } from "lucide-react";
import { Reveal, SectionHeading } from "./Section";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="border-y border-line bg-panel">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionHeading
          index="03"
          title="Projects"
          note="Selected work across software, ML & IoT."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 80}>
              <article className="flex h-full flex-col rounded-lg border border-line bg-card p-6 transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-24px_oklch(0.183_0.031_263.4/0.5)]">
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
                    {p.category}
                  </span>
                  <span className="size-2 rounded-full bg-accent" aria-hidden />
                </div>
                <h3 className="font-display text-2xl font-bold tracking-tight">{p.name}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{p.description}</p>

                <ul className="mt-5 space-y-1.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" aria-hidden />
                      {f}
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <li key={t} className="rounded bg-faint px-2.5 py-1 font-mono text-xs">
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex gap-4 border-t border-line pt-5">
                  <a
                    href={p.github}
                    className="inline-flex items-center gap-1.5 font-mono text-sm font-medium transition-colors hover:text-accent"
                  >
                    <Github className="size-3.5" /> {p.githubLabel ?? "GitHub"}
                  </a>
                  {p.demo ? (
                    <a
                      href={p.demo}
                      className="inline-flex items-center gap-1.5 font-mono text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                      Live demo <ArrowUpRight className="size-3.5" />
                    </a>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
