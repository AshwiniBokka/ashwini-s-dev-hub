import { Github, Linkedin } from "lucide-react";
import { GITHUB_URL, LINKEDIN_URL } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="bg-invert text-invert-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row lg:px-8">
        <p className="font-mono text-sm opacity-70">
          Ashwini Bokka · Built with passion for technology
        </p>
        <div className="flex items-center gap-3">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="grid size-9 place-items-center rounded-md border border-current/20 transition-colors hover:bg-current/10"
          >
            <Github className="size-4" />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="grid size-9 place-items-center rounded-md border border-current/20 transition-colors hover:bg-current/10"
          >
            <Linkedin className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
