import Link from "next/link";
import { clinicInfo, footerClinicLinks, socialLinks, treatments } from "@/lib/data";

const treatmentLinks = treatments.slice(0, 5).map((treatment) => treatment.name);

const COPYRIGHT_YEAR = 2026;

export default function Footer() {
  return (
    <footer className="bg-ink pt-20 pb-7.5 text-white">
      <div className="wrap">
        <div className="grid grid-cols-1 gap-12.5 border-b border-white/12 pb-12.5 min-[721px]:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link
              href="#"
              className="flex items-center gap-2.5 font-serif text-[22px] tracking-[0.22em] text-white uppercase"
            >
              <span className="flex h-7.5 w-7.5 items-center justify-center rounded-999 border border-rose-2 text-sm text-rose-2">
                a
              </span>
              {clinicInfo.name}
            </Link>
            <p className="mt-4.5 max-w-80 text-sm text-white/60">
              Aesthetic and dermatology clinic in San Francisco. Medical-grade skincare with
              honest advice.
            </p>
          </div>

          <div>
            <h3 className="mb-4.5 text-[11px] font-medium tracking-[0.22em] text-rose-2 uppercase">
              Treatments
            </h3>
            <ul className="grid gap-2.5 text-sm text-white/72">
              {treatmentLinks.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4.5 text-[11px] font-medium tracking-[0.22em] text-rose-2 uppercase">
              Clinic
            </h3>
            <ul className="grid gap-2.5 text-sm text-white/72">
              {footerClinicLinks.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4.5 text-[11px] font-medium tracking-[0.22em] text-rose-2 uppercase">
              Contact
            </h3>
            <ul className="grid gap-2.5 text-sm text-white/72">
              <li>{clinicInfo.address}</li>
              <li>{clinicInfo.phone}</li>
              <li>{clinicInfo.email}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-6.5 text-xs text-white/45">
          <span>
            © {COPYRIGHT_YEAR} {clinicInfo.name} Skin Clinic. All rights reserved.
          </span>
          <div className="flex gap-2.5">
            {socialLinks.map((social) => (
              <span
                key={social}
                className="grid h-9 w-9 place-items-center rounded-999 border border-white/20 text-[11px] tracking-[0.05em]"
              >
                {social}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
