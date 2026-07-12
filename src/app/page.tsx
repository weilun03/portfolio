import Link from "next/link";
import Image from "next/image";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import TagChip from "@/components/ui/TagChip";
import ProjectImage from "@/components/ui/ProjectImage";
import { profile } from "@/data/profile";
import { coreSkills } from "@/data/skills";
import { projects } from "@/data/projects";
import profilePhoto from "@/assets/profilePhoto.jpg";

export default function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <Container>
      <section className="flex min-h-[calc(100vh-4rem)] flex-col justify-center py-16">
        <div className="grid items-center gap-10 lg:grid-cols-[3fr_2fr]">
          <div className="order-2 lg:order-1">
            <p
              className="reveal font-mono text-xs uppercase tracking-widest text-accent"
              style={{ animationDelay: "0ms" }}
            >
              {"// "}
              {profile.title}
            </p>
            <h1
              className="reveal mt-4 font-heading text-4xl text-foreground sm:text-6xl"
              style={{ animationDelay: "80ms" }}
            >
              {profile.name}
            </h1>
            <p
              className="reveal mt-5 max-w-xl text-base text-muted sm:text-lg"
              style={{ animationDelay: "160ms" }}
            >
              {profile.summary}
            </p>

            <div
              className="reveal mt-10 flex flex-col gap-4 sm:flex-row"
              style={{ animationDelay: "240ms" }}
            >
              <Button href="/projects">View Projects</Button>
              <Button href="/contact" variant="outline">
                Get in Touch
              </Button>
            </div>
          </div>

          <div
            className="reveal order-1 mx-auto w-48 sm:w-56 lg:order-2 lg:mx-0 lg:w-full lg:max-w-xs lg:justify-self-end"
            style={{ animationDelay: "0ms" }}
          >
            <div className="relative aspect-square overflow-hidden rounded-lg border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
              <Image
                src={profilePhoto}
                alt={`Portrait of ${profile.name}`}
                fill
                sizes="(min-width: 1024px) 20rem, (min-width: 640px) 14rem, 12rem"
                className="object-cover object-bottom"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="reveal border-t border-border/60 py-16" style={{ animationDelay: "0ms" }}>
        <p className="mb-8 font-mono text-sm uppercase tracking-widest text-muted">
          Technical Skills
        </p>
        <div className="flex flex-wrap gap-3">
          {coreSkills.map((item) => (
            <TagChip key={item} label={item} />
          ))}
        </div>
      </section>

      {featuredProjects.length > 0 && (
        <section className="border-t border-border/60 py-16">
          <p className="mb-8 font-mono text-sm uppercase tracking-widest text-muted">
            Featured Projects
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <div
                key={project.slug}
                className="reveal"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card>
                  {project.image && <ProjectImage src={project.image} alt={project.title} />}
                  <Link href="/projects" className="group block">
                    <h3 className="font-heading text-lg text-foreground">{project.title}</h3>
                    <p className="mt-2 text-sm text-muted">{project.description}</p>
                    <span className="mt-4 inline-block font-mono text-sm text-accent transition-transform duration-300 group-hover:translate-x-1">
                      View →
                    </span>
                  </Link>
                </Card>
              </div>
            ))}
          </div>
        </section>
      )}
    </Container>
  );
}
