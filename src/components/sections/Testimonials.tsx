import Eyebrow from "@/components/ui/Eyebrow";
import { testimonials } from "@/lib/data";

const avatarColors = ["bg-lav", "bg-rose-2", "bg-[#D5C4B8]"];

export default function Testimonials() {
  return (
    <section id="reviews" className="section-padding overflow-hidden bg-cream-2">
      <div className="wrap">
        <div className="mb-14">
          <Eyebrow>Client stories</Eyebrow>
          <h2 className="mt-4.5 text-[clamp(34px,4.2vw,52px)]">
            What our clients <em className="font-normal text-rose italic">say.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 items-start gap-5.5 min-[721px]:grid-cols-2 min-[1025px]:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`relative rounded-24 bg-white p-8.5 ${index === 1 ? "min-[1025px]:translate-y-10" : ""}`}
            >
              <span className="absolute top-7.5 right-7 text-xs tracking-[2px] text-gold">
                {"★".repeat(testimonial.rating)}
              </span>
              <div className="mb-5 font-serif text-[60px] leading-[0.6] text-rose-2">&ldquo;</div>
              <p className="mb-6.5 text-[15px] text-ink-2">{testimonial.quote}</p>
              <div className="flex items-center gap-3.5">
                <span className={`h-11 w-11 rounded-full ${avatarColors[index % avatarColors.length]}`} />
                <div>
                  <b className="block text-sm font-medium">{testimonial.name}</b>
                  <small className="text-xs text-muted">{testimonial.context}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
