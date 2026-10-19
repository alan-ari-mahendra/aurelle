import Eyebrow from "@/components/ui/Eyebrow";
import GhostText from "@/components/ui/GhostText";
import { reasons } from "@/lib/data";

export default function Reasons() {
  return (
    <section className="section-padding relative overflow-hidden bg-ink text-white">
      <GhostText className="-right-5 -bottom-7.5" strokeColor="rgba(255,255,255,.1)">
        Reason
      </GhostText>

      <div className="wrap grid grid-cols-1 items-start gap-12.5 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <Eyebrow variant="rose-2">Why Aurelle</Eyebrow>
          <h2 className="mt-4.5 text-[clamp(34px,4.2vw,52px)] text-white">
            Three things we <em className="font-normal text-rose-2 italic">never</em> compromise
            on.
          </h2>
        </div>

        <div className="grid">
          {reasons.map((reason) => (
            <div
              key={reason.number}
              className="grid grid-cols-[70px_1fr] gap-5 border-t border-white/14 py-7.5 last:border-b"
            >
              <i className="font-serif text-[30px] leading-[1.1] text-rose-2 italic">
                {reason.number}
              </i>
              <div>
                <h3 className="mb-2 text-2xl text-white">{reason.title}</h3>
                <p className="text-[14.5px] text-white/72">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
