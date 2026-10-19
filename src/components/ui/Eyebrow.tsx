import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  variant?: "rose" | "rose-2";
};

const variants = {
  rose: "text-rose before:bg-rose",
  "rose-2": "text-rose-2 before:bg-rose-2",
};

export default function Eyebrow({ children, variant = "rose" }: EyebrowProps) {
  return (
    <div
      className={`flex items-center gap-3.5 text-[11px] font-medium tracking-[0.28em] uppercase before:h-px before:w-7 ${variants[variant]}`}
    >
      {children}
    </div>
  );
}
