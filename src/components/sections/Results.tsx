import Image from "next/image";
import Eyebrow from "@/components/ui/Eyebrow";
import { beforeAfterResults } from "@/lib/data";

export default function Results() {
  return (
    <section id="results" className="section-padding bg-white">
      <div className="wrap">
        <div className="mb-14 flex flex-col justify-between gap-7.5 lg:flex-row lg:items-end">
          <div>
            <Eyebrow>Real results</Eyebrow>
            <h2 className="mt-4.5 text-[clamp(34px,4.2vw,52px)]">
              Before &amp; after, <em className="font-normal text-rose italic">unfiltered.</em>
            </h2>
          </div>
          <p className="max-w-95 text-[15px] text-ink-2">
            All photos are from Aurelle clients, taken under identical lighting with consent.
            Individual results vary.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5.5 min-[721px]:grid-cols-2 min-[1025px]:grid-cols-3">
          {beforeAfterResults.map((result) => (
            <figure key={result.treatment}>
              <div className="relative aspect-[4/4.6] overflow-hidden rounded-24 bg-cream-2">
                <Image
                  src={result.image}
                  alt={`${result.treatment} before and after result`}
                  fill
                  sizes="(min-width: 1025px) 370px, (min-width: 721px) 50vw, 90vw"
                  className="object-cover"
                />
                <span className="absolute inset-y-0 left-1/2 w-px bg-white">
                  <span className="absolute top-1/2 left-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_10px_20px_-8px_rgba(0,0,0,.3)]" />
                </span>
                <span className="absolute bottom-4 left-4 rounded-999 bg-white/90 px-3 py-1.5 text-[11px] tracking-[0.18em] uppercase">
                  Before
                </span>
                <span className="absolute right-4 bottom-4 rounded-999 bg-white/90 px-3 py-1.5 text-[11px] tracking-[0.18em] uppercase">
                  After
                </span>
              </div>
              <figcaption className="mt-3.5 flex justify-between text-[13px] text-ink-2">
                <b className="font-medium text-ink">{result.treatment}</b>
                <span>{result.duration}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
