import { Github, Linkedin } from "lucide-react";
import { GITHUB_URL, LINKEDIN_URL } from "@/data/portfolio";

const facts = [
  { label: "Focus", value: "Software Dev" },
  { label: "Semester", value: "7th" },
  { label: "Degree", value: "Integrated M.Tech" },
  { label: "Areas", value: "DSA · ML · IoT" },
];

export function Hero() {
  return (
    <section id="home" className="mx-auto max-w-7xl px-5 pt-16 pb-20 lg:px-8">
      <div className="grid items-center gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="mb-4 font-mono text-sm text-muted-foreground">
            <span className="text-foreground">●</span> 7th Semester · Integrated M.Tech CSE ·
            VIT-AP University
          </p>
          <h1 className="font-display text-5xl leading-[0.95] font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Hi, I&apos;m
            <br />
            Ashwini
            <br />
            Bokka
          </h1>
          <p className="mt-6 font-display text-xl font-medium sm:text-2xl">
            Computer Science Engineer &amp; Software Developer
          </p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Integrated M.Tech CSE student passionate about building practical software solutions,
            exploring machine learning and IoT, and contributing to open-source projects.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:opacity-90"
            >
              View My Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border-2 border-foreground px-6 py-3 font-semibold transition-colors hover:bg-foreground hover:text-background"
            >
              Contact Me
            </a>
          </div>
          <div className="mt-8 flex items-center gap-3">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="grid size-10 place-items-center rounded-md bg-invert text-invert-foreground transition-colors hover:opacity-90"
            >
              <Github className="size-4" />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="grid size-10 place-items-center rounded-md border-2 border-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              <Linkedin className="size-4" />
            </a>
            <span className="ml-2 font-mono text-xs text-muted-foreground">
              open to internships &amp; OSS
            </span>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative">
            <div className="absolute -top-3 -left-3 size-full rounded-lg bg-soft" aria-hidden />
            <div className="relative rounded-lg border border-line bg-card p-5">
              <div className="mb-4 flex items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-accent" />
                <span className="size-2.5 rounded-full bg-soft" />
                <span className="size-2.5 rounded-full bg-line" />
                <span className="ml-auto font-mono text-xs text-muted-foreground">
                  ashwini@vit-ap
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {facts.map((f) => (
                  <div key={f.label} className="rounded-md border border-line bg-faint p-3">
                    <p className="mb-1 font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
                      {f.label}
                    </p>
                    <p className="font-display leading-tight font-semibold">{f.value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-md bg-invert p-4 text-invert-foreground">
                <p className="mb-2 font-mono text-xs text-accent">$ oss-contribution</p>
                <p className="font-mono text-sm leading-relaxed">
                  Apache TVM · 3 merged PRs<span className="text-accent"> ✓</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
