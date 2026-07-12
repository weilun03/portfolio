"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/navigation";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <Container>
        <nav className="grid h-16 grid-cols-[1fr_auto_1fr] items-center">
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="col-start-1 flex h-8 w-8 flex-col items-center justify-center justify-self-start gap-1.5 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <span
              className={`h-px w-5 bg-foreground transition-transform duration-300 ${
                isOpen ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-5 bg-foreground transition-transform duration-300 ${
                isOpen ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>

          <ul className="col-start-2 hidden items-center gap-8 justify-self-center md:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`group relative py-1 text-sm transition-colors hover:text-accent ${
                      isActive ? "text-accent" : "text-muted"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-px bg-accent transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="col-start-3 hidden justify-self-end md:block">
            <Button href="/resume.pdf" download variant="outline" className="px-4 py-1.5">
              Resume
            </Button>
          </div>
        </nav>

        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <ul className="min-h-0 flex flex-col gap-4 border-t border-border/60 py-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-sm transition-colors hover:text-accent ${
                      isActive ? "text-accent" : "text-muted"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link
                href="/resume.pdf"
                download
                onClick={() => setIsOpen(false)}
                className="text-sm text-accent transition-colors hover:text-accent-hover"
              >
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </header>
  );
}
