import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import TimelineItem from "@/components/ui/TimelineItem";
import TagChip from "@/components/ui/TagChip";
import { education } from "@/data/education";
import { experience } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience",
};

export default function ExperiencePage() {
  return (
    <Container>
      <section className="py-16">
        <SectionHeading eyebrow="Experience" title="Working experience" />
        <div className="space-y-10">
          {experience.map((entry, index) => (
            <div key={entry.title} className="reveal" style={{ animationDelay: `${index * 100}ms` }}>
              <TimelineItem
                title={entry.title}
                subtitle={
                  entry.organization
                    ? `${entry.organization} · ${entry.internshipType}`
                    : entry.internshipType
                }
                period={`${entry.period} · ${entry.workMode}`}
              >
                <ul className="list-inside list-disc space-y-1 text-sm text-muted">
                  {entry.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                {entry.technologies && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {entry.technologies.map((tech) => (
                      <TagChip key={tech} label={tech} />
                    ))}
                  </div>
                )}
              </TimelineItem>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 py-16">
        <SectionHeading eyebrow="Education" title="Academic background" />
        <div className="space-y-10">
          {education.map((entry, index) => (
            <div key={entry.degree} className="reveal" style={{ animationDelay: `${index * 100}ms` }}>
              <TimelineItem
                title={entry.degree}
                subtitle={entry.institution}
                period={entry.period}
                note={`CGPA: ${entry.cgpa}`}
              />
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
