import { getTechMeta, hexToRgba } from "@/data/techMeta";

export default function TagChip({ label }: { label: string }) {
  const meta = getTechMeta(label);

  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 font-mono text-sm text-muted"
      style={
        meta
          ? {
              borderColor: hexToRgba(meta.color, 0.35),
              backgroundColor: hexToRgba(meta.color, 0.1),
            }
          : undefined
      }
    >
      {meta?.icon && (
        <svg
          viewBox={meta.icon.viewBox}
          width={14}
          height={14}
          style={{ color: meta.color }}
          aria-hidden="true"
          dangerouslySetInnerHTML={{ __html: meta.icon.body }}
        />
      )}
      {label}
    </span>
  );
}
