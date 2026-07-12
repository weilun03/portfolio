export default function TagChip({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted">
      {label}
    </span>
  );
}
