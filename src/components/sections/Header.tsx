"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { clinicInfo, navLinks } from "@/lib/data";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-20 py-6">
      <div className="wrap flex items-center justify-between gap-6">
        <Link
          href="#"
          className="flex items-center gap-2.5 font-serif text-xl tracking-[0.22em] uppercase"
        >
          <span className="flex h-7.5 w-7.5 items-center justify-center rounded-999 border border-rose text-sm text-rose">
            a
          </span>
          {clinicInfo.name}
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-ink-2 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-ink">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 text-sm md:flex">
          <span className="text-ink-2">{clinicInfo.phone}</span>
          <Button href="#book" variant="dark">
            Book Appointment
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-999 border border-line md:hidden"
        >
          <span className="relative block h-px w-4 bg-ink before:absolute before:-top-1.5 before:left-0 before:h-px before:w-4 before:bg-ink after:absolute after:top-1.5 after:left-0 after:h-px after:w-4 after:bg-ink" />
        </button>
      </div>

      {open && (
        <div className="wrap mt-4 md:hidden">
          <div className="flex flex-col gap-1 rounded-24 border border-line bg-cream p-6 text-sm shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-3 text-ink-2 last:border-none hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
            <span className="pt-4 text-ink-2">{clinicInfo.phone}</span>
            <div className="pt-4">
              <Button href="#book" variant="dark">
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
