import Eyebrow from "@/components/ui/Eyebrow";
import TreatmentCard from "@/components/ui/TreatmentCard";
import { treatments } from "@/lib/data";

const iconClass = "h-6.5 w-6.5 stroke-rose stroke-[1.2] fill-none";

const icons = [
  <svg key="hydrafacial" viewBox="0 0 24 24" className={iconClass}>
    <circle cx="12" cy="12" r="8" />
    <path d="M12 4v16M4 12h16" />
  </svg>,
  <svg key="laser-resurfacing" viewBox="0 0 24 24" className={iconClass}>
    <path d="M4 20L20 4M8 4h12v12" />
  </svg>,
  <svg key="dermal-fillers" viewBox="0 0 24 24" className={iconClass}>
    <path d="M12 3c3 4 6 7 6 11a6 6 0 0 1-12 0c0-4 3-7 6-11z" />
  </svg>,
  <svg key="chemical-peel" viewBox="0 0 24 24" className={iconClass}>
    <path d="M4 16c4-8 12-8 16 0M4 20h16" />
  </svg>,
  <svg key="microneedling" viewBox="0 0 24 24" className={iconClass}>
    <path d="M6 18L18 6M6 6l12 12" />
    <circle cx="12" cy="12" r="9" />
  </svg>,
  <svg key="anti-wrinkle" viewBox="0 0 24 24" className={iconClass}>
    <path d="M12 2l2.5 6.5L21 9l-5 4.5L17.5 21 12 17.5 6.5 21 8 13.5 3 9l6.5-.5z" />
  </svg>,
];

export default function Treatments() {
  return (
    <section id="treatments" className="section-padding bg-white">
      <div className="wrap">
        <div className="mb-14 flex flex-col justify-between gap-7.5 lg:flex-row lg:items-end">
          <div>
            <Eyebrow>Our treatments</Eyebrow>
            <h2 className="mt-4.5 text-[clamp(34px,4.2vw,52px)]">
              Tailored to your skin,{" "}
              <em className="font-normal text-rose italic">not a trend.</em>
            </h2>
          </div>
          <p className="max-w-95 text-[15px] text-ink-2">
            From gentle facials to advanced laser work, each treatment is performed by licensed
            practitioners using FDA-cleared devices.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5.5 min-[721px]:grid-cols-2 min-[1025px]:grid-cols-3">
          {treatments.map((treatment, index) => (
            <TreatmentCard key={treatment.number} treatment={treatment} icon={icons[index]} />
          ))}
        </div>
      </div>
    </section>
  );
}
