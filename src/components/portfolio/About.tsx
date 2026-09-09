import { Reveal, SectionHeading } from "./Section";
import { currentlyLearning } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="border-y border-line bg-panel">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <SectionHeading index="01" title="About" note="Who I am and what I'm working on." />
        <div className="grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                I&apos;m pursuing an Integrated M.Tech in Computer Science Engineering at VIT-AP
                University, currently in my 7th semester of the five-year programme.
              </p>
              <p>
                My interests sit across software development, data structures and algorithms,
                machine learning, IoT and open-source development. I like turning coursework and
                ideas into working systems — designing the architecture, writing the code, and
                understanding the data behind it.
              </p>
              <p>
                Alongside academics I contribute to open source and build projects that solve
                practical problems, and I&apos;m looking for internships and software developer
                opportunities where I can keep learning in a real engineering team.
              </p>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-2" delay={100}>
            <div className="rounded-lg border border-line p-6">
              <p className="mb-4 font-mono text-xs tracking-wider text-muted-foreground uppercase">
                Currently learning
              </p>
              <ul className="space-y-3">
                {currentlyLearning.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium">
                    <span className="size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
