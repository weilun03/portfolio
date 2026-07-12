import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import TagChip from "@/components/ui/TagChip";
import MetaBadge from "@/components/ui/MetaBadge";
import ProjectImage from "@/components/ui/ProjectImage";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
};

function ProjectGrid({ items }: { items: typeof projects }) {
  const hasBadges = items.some((project) => project.level || project.scope || project.team);

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((project, index) => (
        <div
          key={project.slug}
          className="reveal h-full"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <Card className="flex h-full flex-col">
            {project.image && <ProjectImage src={project.image} alt={project.title} />}

            <h3 className="line-clamp-2 font-heading text-lg text-foreground">
              {project.title}
            </h3>

            {hasBadges && (
              <div className="mt-2 flex flex-wrap gap-2">
                {project.level && (
                  <MetaBadge label={project.level === "diploma" ? "Diploma" : "Degree"} />
                )}
                {project.scope && (
                  <MetaBadge
                    label={project.scope === "fyp" ? "Final Year Project" : "Assignment"}
                  />
                )}
                {project.team && (
                  <MetaBadge
                    label={
                      project.team === "individual"
                        ? "Individual"
                        : `Group of ${project.teamSize}`
                    }
                  />
                )}
              </div>
            )}

            <p className="mt-2 text-justify text-sm text-muted">{project.description}</p>

            <div className="mt-4">
              <p className="mb-2 font-mono text-xs uppercase tracking-widest text-accent">
                Highlights
              </p>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted">
                {project.highlights.map((highlight, highlightIndex) => (
                  <li key={highlightIndex} className="text-justify">
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {project.technologies && (
              <div className="mt-auto pt-4">
                <p className="mb-2 font-mono text-xs uppercase tracking-widest text-accent">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <TagChip key={techIndex} label={tech} />
                  ))}
                </div>
              </div>
            )}
          </Card>
        </div>
      ))}
    </div>
  );
}

export default function ProjectsPage() {
  const universityProjects = projects.filter((project) => project.category === "university");
  const workProjects = projects.filter((project) => project.category === "work");

  return (
    <Container>
      <section className="py-16">
        <SectionHeading eyebrow="Work" title="Work projects" />
        <ProjectGrid items={workProjects} />
      </section>

      <section className="border-t border-border/60 py-16">
        <SectionHeading eyebrow="University" title="University projects" />
        <ProjectGrid items={universityProjects} />
      </section>
    </Container>
  );
}
