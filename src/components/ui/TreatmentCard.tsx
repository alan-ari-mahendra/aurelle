import Link from "next/link";
import type { ReactNode } from "react";
import type { Treatment } from "@/lib/data";

type TreatmentCardProps = {
  treatment: Treatment;
  icon: ReactNode;
};

export default function TreatmentCard({ treatment, icon }: TreatmentCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-24 border border-line bg-cream p-8.5 pb-7.5 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_30px_60px_-36px_rgba(42,38,48,.3)]">
      <span className="absolute top-5 right-5.5 font-serif text-[22px] text-rose-2 italic">
        {treatment.number}
      </span>

      <div className="mb-6.5 flex h-14.5 w-14.5 items-center justify-center rounded-full border border-rose-2 bg-white">
        {icon}
      </div>

      <h3 className="mb-2.5 text-[28px]">{treatment.name}</h3>
      <p className="min-h-16.5 text-sm text-ink-2">{treatment.description}</p>

      <div className="mt-6 flex items-center justify-between border-t border-line pt-5 text-[13px]">
        <div>
          <small className="block text-[11px] tracking-[0.1em] text-muted uppercase">
            From
          </small>
          <b className="text-[15px] font-medium">{treatment.priceFrom}</b>
        </div>
        <Link href="#book" className="flex items-center gap-2 font-medium text-rose">
          Book
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            className="h-3.5 w-3.5"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
