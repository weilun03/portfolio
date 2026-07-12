export default function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow?: string;
  title: string;
}) {
  return (
    <div className="mb-10">
      {eyebrow && (
        <p className="mb-2 font-mono text-xs uppercase tracking-widest text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-3xl text-foreground">{title}</h2>
    </div>
  );
}
