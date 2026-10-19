import Image from "next/image";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import { clinicInfo, heroImage } from "@/lib/data";

export default function Hero() {
  return (
    <section className="section-padding relative flex min-h-screen items-center overflow-hidden pt-37.5">
      <div
        className="pointer-events-none absolute -top-30 -right-35 z-0 h-155 w-155 rounded-full blur-[70px]"
        style={{
          background:
            "radial-gradient(circle, rgba(217,212,234,.95), rgba(217,212,234,0) 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute right-55 -bottom-60 z-0 h-135 w-135 rounded-full blur-[70px]"
        style={{
          background:
            "radial-gradient(circle, rgba(231,207,198,.9), rgba(231,207,198,0) 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -left-45 -bottom-30 z-0 h-105 w-105 rounded-full blur-[70px]"
        style={{
          background:
            "radial-gradient(circle, rgba(244,230,225,.9), rgba(244,230,225,0) 70%)",
        }}
      />

      <div className="wrap relative z-10 grid gap-15 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="lg:col-start-1 lg:row-start-1">
          <Eyebrow>Aesthetic &amp; Dermatology Clinic</Eyebrow>

          <h1 className="mt-5.5 mb-6.5 text-[clamp(46px,6.2vw,84px)]">
            <span className="block">Skin that feels</span>
            <span className="block">
              like you, <em className="font-normal text-rose italic">only brighter.</em>
            </span>
          </h1>

          <p className="mb-9.5 max-w-115 text-[17px] text-ink-2">
            Medical-grade skincare treatments, personalised by board-certified
            dermatologists. Natural results, zero guesswork.
          </p>

          <div className="flex flex-wrap items-center gap-3.5">
            <Button href="#book" variant="dark" arrow>
              Book a Consultation
            </Button>
            <Button href="#treatments" variant="ghost">
              View Treatments
            </Button>
          </div>
        </div>

        <div className="relative h-[620px] lg:col-start-2 lg:row-start-1 lg:row-span-2">
          <div className="absolute top-17.5 left-0 h-57.5 w-57.5 rounded-full border border-rose opacity-70">
            <div className="absolute inset-4.5 rounded-full border border-dashed border-rose opacity-60" />
          </div>

          <div className="absolute top-0 right-0 h-full w-[78%] overflow-hidden rounded-t-999 rounded-b-28 shadow-2xl">
            <Image
              src={heroImage}
              alt="Aurelle Skin Clinic treatment room"
              fill
              sizes="(min-width: 1024px) 460px, 90vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="absolute -top-4.5 right-7.5 grid h-30 w-30 place-items-center rounded-full bg-ink text-white">
            <svg
              viewBox="0 0 120 120"
              className="absolute inset-0 h-full w-full animate-badge-spin motion-reduce:animate-none"
            >
              <defs>
                <path
                  id="hero-badge-path"
                  d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0"
                />
              </defs>
              <text className="fill-white text-[10.5px] tracking-[0.24em] uppercase">
                <textPath href="#hero-badge-path">
                  Certified clinic • Since 2011 •{" "}
                </textPath>
              </text>
            </svg>
            <span className="font-serif text-[22px] italic">est.</span>
          </div>

          <div className="absolute bottom-30 -left-2.5 min-w-57.5 rounded-[20px] border border-white/70 bg-white/92 p-4.5 text-[13px] shadow-[0_24px_50px_-24px_rgba(42,38,48,.35)] backdrop-blur-[10px]">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#6FBF9A] shadow-[0_0_0_4px_rgba(111,191,154,.2)]" />
            <small className="text-muted">Next available slot</small>
            <b className="mt-1 block text-[15px] font-medium">Today, 3:30 PM</b>
          </div>

          <div className="absolute bottom-12.5 -right-3.5 flex items-center gap-3.5 rounded-[20px] border border-white/70 bg-white/92 p-4.5 text-[13px] shadow-[0_24px_50px_-24px_rgba(42,38,48,.35)] backdrop-blur-[10px]">
            <span className="font-serif text-[34px] leading-none">98%</span>
            <div>
              <b className="block text-[15px] font-medium">Would recommend</b>
              <small className="block text-muted">Based on 2,400 reviews</small>
            </div>
          </div>
        </div>

        <div className="flex max-w-130 items-center gap-4.5 border-t border-line pt-7 lg:col-start-1 lg:row-start-2">
          <div className="flex">
            <span className="-ml-0 h-9.5 w-9.5 rounded-999 border-2 border-cream bg-lav" />
            <span className="-ml-2.5 h-9.5 w-9.5 rounded-999 border-2 border-cream bg-rose-2" />
            <span className="-ml-2.5 h-9.5 w-9.5 rounded-999 border-2 border-cream bg-[#D5C4B8]" />
            <span className="-ml-2.5 h-9.5 w-9.5 rounded-999 border-2 border-cream bg-[#CFCAD8]" />
          </div>
          <div>
            <div className="text-[13px] tracking-[2px] text-gold">
              ★★★★★ <b className="text-[15px] font-medium text-gold">4.9</b>
            </div>
            <small className="block text-[13px] text-muted">
              Trusted by 10,000+ clients since {clinicInfo.foundedYear}
            </small>
          </div>
        </div>
      </div>
    </section>
  );
}
