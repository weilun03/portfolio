import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import TagChip from "@/components/ui/TagChip";
import { profile } from "@/data/profile";
import { skills } from "@/data/skills";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <Container>
      <section className="py-16">
        <SectionHeading eyebrow="About" title="Who I am" />

        <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
          <div className="reveal space-y-4" style={{ animationDelay: "0ms" }}>
            <p className="max-w-2xl text-muted">{profile.summary}</p>
            <p className="max-w-2xl text-muted">{profile.interests}</p>
          </div>

          <div className="reveal" style={{ animationDelay: "80ms" }}>
            <Card>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
                Developer Interests
              </h3>
              <ul className="space-y-3">
                {profile.interestAreas.map((interest) => (
                  <li key={interest} className="text-sm text-foreground">
                    {interest}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 py-16">
        <SectionHeading eyebrow="Skills" title="What I work with" />
        <div className="grid gap-4 sm:grid-cols-2">
          {skills.map((category, index) => (
            <div
              key={category.title}
              className="reveal h-full"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <Card className="h-full">
                <h3 className="mb-3 font-heading text-lg text-foreground">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <TagChip key={item} label={item} />
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
