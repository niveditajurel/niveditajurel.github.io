/**
 * Multicolor pixel-art sprites — Mistral-style decorative trios.
 * Each sprite is a char grid + palette; renders as CSS grid of squares.
 */

type Sprite = { grid: string[]; colors: Record<string, string> };

const SPRITES: Record<string, Sprite> = {
  briefcase: {
    grid: [
      "..........",
      "...BBBB...",
      "..B....B..",
      ".BBBBBBBB.",
      ".BbbbbbbB.",
      ".BbBltBbB.",
      ".BbbbbbbB.",
      ".BbbbbbbB.",
      ".BBBBBBBB.",
      "..........",
    ],
    colors: { B: "#7a4a20", b: "#c98a3d", l: "#e8b25f", t: "#e8b25f" },
  },
  robot: {
    grid: [
      "....C.....",
      "...CCC....",
      "..RRRRRR..",
      ".RrrrrrrR.",
      ".RwGwwGwR.",
      ".RwwwwwwR.",
      ".RGGGGGGR.",
      "..RRRRRR..",
      "..R....R..",
      "..........",
    ],
    colors: { R: "#3d7fc4", r: "#7db4e8", w: "#eaf3fc", G: "#5ee08a", C: "#9aa2ad" },
  },
  globe: {
    grid: [
      "...GGGG...",
      "..GLLGGG..",
      ".GLLGGGGG.",
      ".GGGLLGGG.",
      ".GLLGGGLG.",
      ".GGGGLLGG.",
      ".GLGGGGGG.",
      "..GGGLLG..",
      "...GGGG...",
      "..........",
    ],
    colors: { G: "#3f8fd4", L: "#63c76a" },
  },
  flask: {
    grid: [
      "...FFF....",
      "....F.....",
      "....F.....",
      "...FpF....",
      "..FppppF..",
      ".FppppppF.",
      ".FppppppF.",
      "..FFFFFF..",
      "..........",
      "..........",
    ],
    colors: { F: "#6a6a6a", p: "#5ee08a" },
  },
  heart: {
    grid: [
      "..........",
      "..RR.RR...",
      ".RhRRRRR..",
      ".RRRRRRR..",
      "..RRRRR...",
      "...RRR....",
      "....R.....",
      "..........",
      "..........",
      "..........",
    ],
    colors: { R: "#e24b4a", h: "#f09595" },
  },
  chart: {
    grid: [
      "..........",
      ".......Y..",
      ".......Y..",
      "....O..Y..",
      "....O..Y..",
      ".o..O..Y..",
      ".o..O..Y..",
      ".DDDDDDDD.",
      "..........",
      "..........",
    ],
    colors: { O: "#ff8105", o: "#ffd06a", Y: "#fa520f", D: "#4a4a4a" },
  },
};

export type PixelArtName = keyof typeof SPRITES;

export function PixelArt({
  name,
  size = 28,
  className = "",
}: {
  name: PixelArtName;
  size?: number;
  className?: string;
}) {
  const sprite = SPRITES[name];
  if (!sprite) return null;
  const rows = sprite.grid.length;
  const cols = sprite.grid[0].length;

  return (
    <span
      aria-hidden="true"
      className={`inline-grid ${className}`}
      style={{
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        width: size,
        height: (size / cols) * rows,
        imageRendering: "pixelated",
      }}
    >
      {sprite.grid.flatMap((row, y) =>
        row.split("").map((ch, x) => (
          <span
            key={`${y}-${x}`}
            style={{ background: ch === "." ? "transparent" : sprite.colors[ch] ?? "transparent" }}
          />
        )),
      )}
    </span>
  );
}

export function PixelArtTrio({
  names,
  size = 26,
  className = "",
}: {
  names: [PixelArtName, PixelArtName, PixelArtName];
  size?: number;
  className?: string;
}) {
  return (
    <span aria-hidden="true" className={`flex items-end gap-3 ${className}`}>
      {names.map((n) => (
        <PixelArt key={n} name={n} size={size} />
      ))}
    </span>
  );
}
