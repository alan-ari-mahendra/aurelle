import { treatmentPills } from "@/lib/data";

export default function Marquee() {
  const pills = [...treatmentPills, ...treatmentPills];

  return (
    <div className="overflow-hidden border-y border-line bg-white py-5.5">
      <div className="flex w-max gap-3.5 animate-[marquee-scroll_40s_linear_infinite] motion-reduce:animate-none">
        {pills.map((pill, index) => (
          <span
            key={`${pill}-${index}`}
            className="flex items-center gap-2.5 rounded-999 border border-line px-5.5 py-2.5 text-[13px] whitespace-nowrap text-ink-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-rose"
          >
            {pill}
          </span>
        ))}
      </div>
    </div>
  );
}
