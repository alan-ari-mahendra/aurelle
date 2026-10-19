import Image from "next/image";
import Eyebrow from "@/components/ui/Eyebrow";
import GhostText from "@/components/ui/GhostText";
import { doctor } from "@/lib/data";

export default function Doctor() {
  return (
    <section id="doctor" className="section-padding relative overflow-hidden">
      <GhostText className="-right-10 top-10">Doctor</GhostText>

      <div className="wrap grid grid-cols-1 items-center gap-12.5 lg:grid-cols-[0.95fr_1.05fr] lg:gap-22.5">
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-28 rounded-b-[240px] bg-rose-3">
            <Image
              src={doctor.image.src}
              alt={doctor.image.alt}
              fill
              sizes="(min-width: 1024px) 480px, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute top-10 -right-7.5 rounded-[18px] bg-white p-5.5 text-[13px] shadow-[0_20px_40px_-20px_rgba(42,38,48,.3)] max-[720px]:right-0">
            <b className="block font-serif text-xl font-medium">{doctor.name}</b>
            <small className="text-muted">{doctor.title}</small>
          </div>
        </div>

        <div>
          <Eyebrow>Meet your doctor</Eyebrow>
          <h2 className="mt-5 mb-5.5 text-[clamp(34px,4.2vw,52px)]">
            Care that starts with <em className="font-normal text-rose italic">listening.</em>
          </h2>

          {doctor.bio.map((paragraph) => (
            <p key={paragraph} className="mb-4.5 max-w-130 text-base text-ink-2">
              {paragraph}
            </p>
          ))}

          <div className="my-7.5 flex flex-wrap gap-2.5">
            {doctor.credentials.map((credential) => (
              <span
                key={credential}
                className="rounded-999 bg-lav-2 px-4 py-2.5 text-xs tracking-[0.06em] text-ink-2"
              >
                {credential}
              </span>
            ))}
          </div>

          <blockquote className="mt-2.5 max-w-120 border-l border-rose pl-5.5 font-serif text-[22px] text-ink-2 italic">
            &ldquo;{doctor.quote}&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
}
