import Link from "next/link";
import Button from "@/components/ui/Button";
import { clinicInfo, navLinks } from "@/lib/data";

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-10 py-6">
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
      </div>
    </header>
  );
}
