import Container from "@/components/layout/Container";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-border/60 py-8">
      <Container>
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
