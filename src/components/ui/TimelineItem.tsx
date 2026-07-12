import type { ReactNode } from "react";

export default function TimelineItem({
  title,
  subtitle,
  period,
  note,
  children,
}: {
  title: string;
  subtitle: string;
  period?: string;
  note?: string;
  children?: ReactNode;
}) {
  return (
    <div className="relative border-l border-border pl-6">
      <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
      <h3 className="font-heading text-lg text-foreground">{title}</h3>
      <p className="text-sm text-muted">{subtitle}</p>
      {period && <p className="mt-1 font-mono text-xs text-muted">{period}</p>}
      {note && <p className="mt-1 font-mono text-xs text-muted">{note}</p>}
      {children && <div className="mt-3">{children}</div>}
    </div>
  );
}
