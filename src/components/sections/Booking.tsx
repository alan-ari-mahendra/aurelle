import Eyebrow from "@/components/ui/Eyebrow";
import BookingForm from "@/components/ui/BookingForm";
import { hours } from "@/lib/data";

export default function Booking() {
  return (
    <section className="section-padding">
      <div className="wrap grid grid-cols-1 gap-12.5 lg:grid-cols-2 lg:items-start lg:gap-17.5">
        <div className="lg:col-start-1 lg:row-start-1">
          <Eyebrow>Book a visit</Eyebrow>
          <h2 className="mt-4.5 mb-5.5 text-[clamp(34px,4.2vw,52px)]">
            Your skin deserves a{" "}
            <em className="font-normal text-rose italic">second opinion.</em>
          </h2>
          <p className="mb-10 max-w-105 text-base text-ink-2">
            Consultations are 30 minutes and include a digital skin analysis. No commitment, no
            sales pitch.
          </p>
        </div>

        <div className="lg:col-start-2 lg:row-start-1 lg:row-span-2">
          <BookingForm />
        </div>

        <div className="lg:col-start-1 lg:row-start-2">
          <div className="max-w-110 rounded-24 border border-line bg-white p-7.5">
            <h3 className="mb-4 text-2xl font-medium">Opening hours</h3>
            {hours.map((hour) => (
              <div
                key={hour.day}
                className="flex justify-between border-t border-line py-2.5 text-sm text-ink-2"
              >
                <span>{hour.day}</span>
                <b className={`font-medium ${hour.closed ? "text-ink-2" : "text-ink"}`}>
                  {hour.time}
                </b>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
