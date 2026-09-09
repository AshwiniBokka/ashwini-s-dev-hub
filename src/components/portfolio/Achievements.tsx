import { Reveal, SectionHeading } from "./Section";

const items = [
  {
    title: "Apache TVM merged pull requests",
    body: "Three pull requests merged into the Apache TVM open-source project (PR #18705, #18697, #18688).",
  },
  {
    title: "Technical projects",
    body: "Built projects spanning software architecture, IoT automation and machine learning — smart parking, smart irrigation and fraud detection.",
  },
  {
    title: "Hackathons & technical competitions",
    body: "Participating in hackathons and technical competitions to build under time constraints and collaborate with new teams.\u00a0",
  },
  {
    title: "Certifications",
    body: "Coursework and self-study certifications relevant to software development, DSA and machine learning.",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="border-y border-line bg-panel">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionHeading
          index="05"
          title="Achievements & Contributions"
          note="Verified work, no filler."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 2) * 80}>
              <div className="h-full rounded-lg border border-line bg-card p-6 transition-colors hover:border-foreground">
                <p className="font-mono text-xs text-muted-foreground">/ 0{i + 1}</p>
                <h3 className="mt-2 font-display text-lg font-bold tracking-tight">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
