"use client";

import { useState } from "react";
import type { SubmitEvent } from "react";
import Button from "@/components/ui/Button";
import { contactLinks } from "@/data/contact";

const inputClasses =
  "w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const emailLink = contactLinks.find((link) => link.label === "Email");

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="text-sm text-muted">
        Thanks for writing that out! This form isn&apos;t wired up to actually send messages
        yet — for now, please reach me directly
        {emailLink && (
          <>
            {" "}
            at{" "}
            <a href={emailLink.href} className="text-accent hover:underline">
              {emailLink.value}
            </a>
          </>
        )}
        .
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm text-muted">
          Name
        </label>
        <input id="name" name="name" type="text" required className={inputClasses} placeholder="Your name" />
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm text-muted">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className={inputClasses}
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm text-muted">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={`${inputClasses} resize-none`}
          placeholder="What would you like to discuss?"
        />
      </div>

      <Button type="submit" className="w-full sm:w-auto">
        Send Message
      </Button>
    </form>
  );
}
