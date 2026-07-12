import type { ComponentPropsWithoutRef } from "react";
import Link from "next/link";

type BaseProps = {
  variant?: "filled" | "outline";
};

type ButtonAsLink = BaseProps &
  ComponentPropsWithoutRef<typeof Link> & {
    href: string;
  };

type ButtonAsButton = BaseProps &
  ComponentPropsWithoutRef<"button"> & {
    href?: undefined;
  };

type ButtonProps = ButtonAsLink | ButtonAsButton;

const variantClasses: Record<NonNullable<BaseProps["variant"]>, string> = {
  filled: "bg-accent text-background hover:bg-accent-hover",
  outline: "border border-border text-foreground hover:border-accent hover:text-accent",
};

export default function Button({ variant = "filled", className = "", ...props }: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-medium transition-colors ${variantClasses[variant]} ${className}`;

  if (props.href) {
    return <Link {...(props as ButtonAsLink)} className={classes} />;
  }

  return <button {...(props as ButtonAsButton)} className={classes} />;
}
