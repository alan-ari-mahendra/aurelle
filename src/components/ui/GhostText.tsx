type GhostTextProps = {
  children: string;
  className?: string;
  strokeColor?: string;
};

export default function GhostText({
  children,
  className = "",
  strokeColor = "var(--color-rose-2)",
}: GhostTextProps) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute font-serif text-[clamp(90px,14vw,200px)] leading-none font-normal text-transparent italic select-none max-[720px]:hidden ${className}`}
      style={{ WebkitTextStroke: `1px ${strokeColor}`, whiteSpace: "nowrap" }}
    >
      {children}
    </span>
  );
}
