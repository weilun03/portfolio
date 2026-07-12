export default function MetaBadge({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-accent">
      {label}
    </span>
  );
}
