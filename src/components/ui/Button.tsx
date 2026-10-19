import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "dark" | "ghost";
  arrow?: boolean;
};

export default function Button({
  href,
  children,
  variant = "dark",
  arrow = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-3 rounded-999 px-7 py-4 text-sm font-medium transition-colors";
  const variants = {
    dark: "bg-ink text-white hover:bg-[#3b3542]",
    ghost: "border border-ink text-ink hover:bg-ink hover:text-white",
  };
  const arrowBg = {
    dark: "bg-white/14",
    ghost: "bg-rose-3",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]}`}>
      {children}
      {arrow && (
        <span
          className={`flex h-7.5 w-7.5 items-center justify-center rounded-999 ${arrowBg[variant]}`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            className="h-3.5 w-3.5"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      )}
    </Link>
  );
}
