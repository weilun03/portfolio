export default function ConfidentialImage() {
  return (
    <div className="mb-4 flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-md border border-border bg-background text-muted">
      <svg viewBox="0 0 24 24" width={22} height={22} fill="none" aria-hidden="true">
        <rect x="5" y="11" width="14" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <span className="font-mono text-xs uppercase tracking-widest">Confidential — NDA Protected</span>
    </div>
  );
}
