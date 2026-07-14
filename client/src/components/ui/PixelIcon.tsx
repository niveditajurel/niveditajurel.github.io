/**
 * Cute pixel-art icons — hand-drawn bitmaps, Mistral-style.
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
  system: [
    "X..X..X",
    "...X...",
    ".XXXXX.",
    "...X...",
    ".XXXXX.",
    "...X...",
    "X..X..X",
  ],
  eye: [
    ".......",
    "..XXX..",
    ".X...X.",
    "X..X..X",
    ".X...X.",
    "..XXX..",
    ".......",
  ],
  cursor: [
    "X......",
    "XX.....",
    "X.X....",
    "X..X...",
    "X...X..",
    "XX.X...",
    "..X.X..",
  ],
  network: [
    "XX.....XX",
    "XX.....XX",
    ".X.....X.",
    ".XXXXXXX.",
    "....X....",
    ".XXXXXXX.",
    ".X.....X.",
    "XX.....XX",
    "XX.....XX",
  ],
  rocket: [
    "....X....",
    "...XXX...",
    "..XXXXX..",
    "..XX.XX..",
    "..XXXXX..",
    ".XX.X.XX.",
    "X...X...X",
    "...X.X...",
    "..X...X..",
  ],
  lens: [
    "...XXX...",
    "..X...X..",
    ".X..X..X.",
    "X..XXX..X",
    "X..XXX..X",
    ".X.....X.",
    "..XXXXX..",
    "......XX.",
    ".......XX",
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
  const rowCount = rows.length;
  const columnCount = Math.max(...rows.map((row) => row.length));
  const cell = size / Math.max(rowCount, columnCount);

  return (
    <span
      aria-hidden="true"
      className={`inline-grid shrink-0 ${className}`}
      style={{
        gridTemplateColumns: `repeat(${columnCount}, ${cell}px)`,
        gridTemplateRows: `repeat(${rowCount}, ${cell}px)`,
        width: size,
        height: cell * rowCount,
        imageRendering: "pixelated",
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
