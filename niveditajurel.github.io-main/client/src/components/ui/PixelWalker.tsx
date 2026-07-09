/**
 * Tiny pixel-art bot that walks along a section divider line.
 * Two-frame leg cycle (steps animation), walks the full line, flips, walks back.
 * Parent container must be `relative`; the bot stands on the top border.
 * Hidden entirely under prefers-reduced-motion (see index.css `.bp-walker`).
 */

const FRAME_A = [
  "...X...",
  ".XXXXX.",
  ".XeXeX.",
  ".XXXXX.",
  "..XXX..",
  "..L.L..",
  "..L..L.",
];

const FRAME_B = [
  "...X...",
  ".XXXXX.",
  ".XeXeX.",
  ".XXXXX.",
  "..XXX..",
  "..L.L..",
  ".L..L..",
];

const CELL_COLORS: Record<string, string> = {
  X: "var(--bp-cobalt)",
  e: "#fff8ef",
  L: "#16181d",
};

function BotFrame({ rows, cell, className = "" }: { rows: string[]; cell: number; className?: string }) {
  return (
    <span
      className={`col-start-1 row-start-1 grid ${className}`}
      style={{
        gridTemplateColumns: `repeat(7, ${cell}px)`,
        gridTemplateRows: `repeat(${rows.length}, ${cell}px)`,
      }}
    >
      {rows.flatMap((row, r) =>
        row.split("").map((c, i) => (
          <span key={`${r}-${i}`} style={{ background: CELL_COLORS[c] ?? "transparent" }} />
        )),
      )}
    </span>
  );
}

export function PixelWalker({
  duration = 52,
  delay = 0,
  size = 14,
}: {
  /** seconds for a full there-and-back walk */
  duration?: number;
  /** seconds before the walk starts */
  delay?: number;
  /** bot width in px */
  size?: number;
}) {
  const cell = size / 7;
  const height = cell * 7;

  return (
    <span
      aria-hidden="true"
      className="bp-walker pointer-events-none absolute"
      style={{
        top: -height,
        width: size,
        height,
        animation: `bp-walk-x ${duration}s linear ${delay}s infinite`,
        // custom prop so the keyframes know the bot width
        ["--bp-walker-w" as string]: `${size}px`,
      }}
    >
      <span
        className="grid h-full w-full"
        style={{ animation: `bp-walk-flip ${duration}s steps(1, end) ${delay}s infinite` }}
      >
        <BotFrame rows={FRAME_A} cell={cell} className="bp-walker-frame-a" />
        <BotFrame rows={FRAME_B} cell={cell} className="bp-walker-frame-b" />
      </span>
    </span>
  );
}
