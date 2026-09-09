import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(16px)",
        transition:
          "opacity .6s cubic-bezier(.22,1,.36,1), transform .6s cubic-bezier(.22,1,.36,1)",
        transitionDelay: `${delay}ms`,
      }}
      className={className}
    >
      {children}
    </div>
  );
}

export function SectionHeading({
  index,
  title,
  note,
}: {
  index: string;
  title: string;
  note?: string;
}) {
  return (
    <div className="mb-10 flex items-end justify-between gap-6">
      <div>
        <p className="mb-2 font-mono text-sm text-muted-foreground">/ {index}</p>
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      </div>
      {note ? (
        <p className="hidden max-w-xs text-right font-mono text-xs text-muted-foreground sm:block">
          {note}
        </p>
      ) : null}
    </div>
  );
}
