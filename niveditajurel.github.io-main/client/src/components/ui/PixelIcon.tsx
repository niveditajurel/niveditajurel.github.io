/**
 * Cute pixel-art icons — 7×7 hand-drawn bitmaps, Mistral-style.
 * "X" = filled cell. Renders as CSS squares, inherits color via `color` prop.
 */

const GLYPHS: Record<string, string[]> = {
  house: [
    "...X...",
    "..XXX..",
    ".XXXXX.",
    "XXXXXXX",
    ".XX.XX.",
    ".XX.XX.",
    ".XXXXX.",
  ],
  case: [
    "..XXX..",
    "..X.X..",
    "XXXXXXX",
    "X.....X",
    "XXXXXXX",
    "X.....X",
    "XXXXXXX",
  ],
  flask: [
    "..XXX..",
    "...X...",
    "...X...",
    "..X.X..",
    ".X...X.",
    "X.XXX.X",
    "XXXXXXX",
  ],
  flag: [
    "XXXXX..",
    "X...XX.",
    "XXXXX..",
    "X......",
    "X......",
    "X......",
    "X......",
  ],
  spark: [
    "...X...",
    "...X...",
    "..XXX..",
    "XXXXXXX",
    "..XXX..",
    "...X...",
    "...X...",
  ],
  chip: [
    ".X.X.X.",
    "XXXXXXX",
    "X.XXX.X",
    "X.XXX.X",
    "X.XXX.X",
    "XXXXXXX",
    ".X.X.X.",
  ],
  pen: [
    ".....XX",
    "....XXX",
    "...XXX.",
    "..XXX..",
    ".XXX...",
    "XXX....",
    "XX.....",
  ],
  heart: [
    ".......",
    ".XX.XX.",
    "XXXXXXX",
    "XXXXXXX",
    ".XXXXX.",
    "..XXX..",
    "...X...",
  ],
  mail: [
    ".......",
    "XXXXXXX",
    "XX...XX",
    "X.X.X.X",
    "X..X..X",
    "X.....X",
    "XXXXXXX",
  ],
  bolt: [
    "...XX..",
    "..XX...",
    ".XXXX..",
    "XXXXXX.",
    "...XX..",
    "..XX...",
    ".XX....",
  ],
};

export type PixelIconName = keyof typeof GLYPHS;

export function PixelIcon({
  name,
  size = 14,
  color = "var(--bp-cobalt)",
  className = "",
}: {
  name: PixelIconName;
  size?: number;
  color?: string;
  className?: string;
}) {
  const rows = GLYPHS[name];
  if (!rows) return null;
  const cell = size / 7;

  return (
    <span
      aria-hidden="true"
      className={`inline-grid shrink-0 ${className}`}
      style={{
        gridTemplateColumns: `repeat(7, ${cell}px)`,
        gridTemplateRows: `repeat(7, ${cell}px)`,
        width: size,
        height: size,
      }}
    >
      {rows.flatMap((row, r) =>
        row.split("").map((c, i) => (
          <span
            key={`${r}-${i}`}
            style={{ background: c === "X" ? color : "transparent" }}
          />
        )),
      )}
    </span>
  );
}
