import { Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import { Reveal, SectionHeading } from "./Section";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/data/portfolio";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="border-y border-line bg-panel">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading index="07" title="Let's connect" />
            <p className="max-w-md leading-relaxed text-muted-foreground">
              Open to internship opportunities, software developer roles, and open-source
              collaboration.
            </p>
            <div className="mt-8 space-y-3">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center justify-between rounded-lg border border-line px-4 py-3 transition-colors hover:border-foreground"
              >
                <span className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground">
                  <Mail className="size-4" /> Email
                </span>
                <span className="font-mono text-sm">{EMAIL}</span>
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-lg border border-line px-4 py-3 transition-colors hover:border-foreground"
              >
                <span className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground">
                  <Github className="size-4" /> GitHub
                </span>
                <span className="font-mono text-sm">ashwinibokka3 ↗</span>
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-lg border border-line px-4 py-3 transition-colors hover:border-foreground"
              >
                <span className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground">
                  <Linkedin className="size-4" /> LinkedIn
                </span>
                <span className="font-mono text-sm">ashwini-bokka ↗</span>
              </a>
            </div>
          </div>

          <Reveal delay={80}>
            <form
              className="space-y-4 rounded-lg border border-line bg-card p-6"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div>
                <label className="mb-1.5 block font-mono text-xs text-muted-foreground" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-md border border-line bg-faint px-3 py-2.5 text-sm focus:border-foreground focus:outline-none"
                />
              </div>
              <div>
                <label
                  className="mb-1.5 block font-mono text-xs text-muted-foreground"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-md border border-line bg-faint px-3 py-2.5 text-sm focus:border-foreground focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-1.5 block font-mono text-xs text-muted-foreground" htmlFor="msg">
                  Message
                </label>
                <textarea
                  id="msg"
                  name="message"
                  rows={4}
                  required
                  placeholder="How can we work together?"
                  className="w-full resize-none rounded-md border border-line bg-faint px-3 py-2.5 text-sm focus:border-foreground focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-primary py-3 font-semibold text-primary-foreground transition-colors hover:opacity-90"
              >
                Send Message
              </button>
              <p aria-live="polite" className="font-mono text-xs text-muted-foreground">
                {sent
                  ? "Thanks — message noted. Email delivery isn't connected yet, so reach out directly for now."
                  : "Prefer email? Use the address above."}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
