import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import ContactForm from "@/components/ui/ContactForm";
import { contactLinks } from "@/data/contact";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <Container>
      <section className="py-16">
        <SectionHeading eyebrow="Contact" title="Get in touch" />

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="reveal space-y-8" style={{ animationDelay: "0ms" }}>
            <p className="max-w-md text-muted">
              I&apos;m open to opportunities and happy to connect. Reach out through any of the
              channels below, or send a message directly using the form.
            </p>

            <Card>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
                Connect
              </h3>
              <ul className="space-y-4">
                {contactLinks.map((link) => (
                  <li key={link.label} className="flex items-center justify-between text-sm">
                    <span className="text-foreground">{link.label}</span>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-muted transition-colors hover:text-accent"
                    >
                      {link.value}
                    </a>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <div className="reveal" style={{ animationDelay: "80ms" }}>
            <Card>
              <ContactForm />
            </Card>
          </div>
        </div>
      </section>
    </Container>
  );
}
