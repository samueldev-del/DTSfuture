type LogoProps = {
  /** Show the full logo (mark + text) or just the mark */
  variant?: "full" | "mark";
  /** Height in pixels — width scales proportionally */
  height?: number;
  className?: string;
};

/**
 * DTSfuture Logo
 *
 * The mark is a stylised "D" built from two interlocking shapes:
 * – a bold vertical pillar (stability, engineering rigour)
 * – a forward-leaning arc that opens to the right (future, momentum)
 * The negative space between them forms an arrow / pathway,
 * symbolising the studio's trajectory from Germany to the international market.
 *
 * Colour mapping:
 *   Pillar  → littoral (#1A1715)
 *   Arc     → ouest    (#C0392B)
 *   Accent  → foret    (#234B2C)
 */
export function Logo({ variant = "full", height = 36, className = "" }: LogoProps) {
  if (variant === "mark") {
    return <LogoMark height={height} className={className} />;
  }

  // Full logo: mark + wordmark side by side
  // Mark viewBox is 40×40, text area ~160 wide → total ~210×40
  const ratio = 210 / 40;
  const width = height * ratio;

  return (
    <svg
      viewBox="0 0 210 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      aria-label="DTSfuture logo"
      role="img"
    >
      {/* === Mark === */}
      <g>
        {/* Vertical pillar — left side of the "D" */}
        <rect x="2" y="4" width="8" height="32" rx="3" fill="#1A1715" />

        {/* Forward arc — right side of the "D", opens forward */}
        <path
          d="M12 6 C12 6, 36 6, 36 20 C36 34, 12 34, 12 34"
          stroke="#C0392B"
          strokeWidth="7"
          strokeLinecap="round"
          fill="none"
        />

        {/* Small accent dot — the "signal" / "pulse" at the opening */}
        <circle cx="33" cy="20" r="3" fill="#234B2C" />
      </g>

      {/* === Wordmark === */}
      <g>
        {/* "DTS" in bold littoral */}
        <text
          x="50"
          y="28.5"
          fontFamily="var(--font-heading), 'Plus Jakarta Sans', system-ui, sans-serif"
          fontWeight="800"
          fontSize="24"
          letterSpacing="-0.04em"
          fill="#1A1715"
        >
          DTS
        </text>

        {/* "future." in medium ouest */}
        <text
          x="99"
          y="28.5"
          fontFamily="var(--font-heading), 'Plus Jakarta Sans', system-ui, sans-serif"
          fontWeight="500"
          fontSize="24"
          letterSpacing="-0.04em"
          fill="#C0392B"
        >
          future.
        </text>
      </g>
    </svg>
  );
}

function LogoMark({ height, className }: { height: number; className: string }) {
  const ratio = 40 / 40;
  const width = height * ratio;

  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      aria-label="DTSfuture mark"
      role="img"
    >
      {/* Vertical pillar */}
      <rect x="2" y="4" width="8" height="32" rx="3" fill="#1A1715" />

      {/* Forward arc */}
      <path
        d="M12 6 C12 6, 36 6, 36 20 C36 34, 12 34, 12 34"
        stroke="#C0392B"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />

      {/* Accent dot */}
      <circle cx="33" cy="20" r="3" fill="#234B2C" />
    </svg>
  );
}
