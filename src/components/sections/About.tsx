import Image from "next/image";
import Eyebrow from "@/components/ui/Eyebrow";
import { aboutCopy, aboutImages, aboutStats } from "@/lib/data";

export default function About() {
  return (
    <section className="section-padding">
      <div className="wrap grid grid-cols-1 items-center gap-12.5 lg:grid-cols-2 lg:gap-20">
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-28 bg-lav-2">
            <Image
              src={aboutImages.main.src}
              alt={aboutImages.main.alt}
              fill
              sizes="(min-width: 1024px) 540px, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -left-10 bottom-15 aspect-square w-[46%] overflow-hidden rounded-full border-[10px] border-cream shadow-[0_30px_60px_-30px_rgba(42,38,48,.3)] max-[720px]:-bottom-5 max-[720px]:left-0 max-[720px]:w-[40%]">
            <Image
              src={aboutImages.sub.src}
              alt={aboutImages.sub.alt}
              fill
              sizes="300px"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <Eyebrow>About the clinic</Eyebrow>
          <h2 className="mt-5 mb-6 text-[clamp(34px,4.2vw,52px)]">
            Fifteen years of <em className="font-normal text-rose italic">honest</em> skincare.
          </h2>
          <p className="max-w-120 text-base text-ink-2">{aboutCopy}</p>

          <div className="mt-10 grid grid-cols-3 gap-5.5">
            {aboutStats.map((stat) => (
              <div key={stat.label} className="border-t border-line pt-4.5">
                <b className="block font-serif text-[34px] leading-none font-medium">
                  {stat.value}
                </b>
                <small className="mt-1.5 block text-[13px] text-muted">{stat.label}</small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
