/**
 * Multicolor pixel-art sprites — Mistral-style decorative trios.
 * Each sprite is a char grid + palette; renders as CSS grid of squares.
 */

type Sprite = {
  grid: string[];
  colors: Record<string, string>;
  motion?: "robot" | "cat" | "code" | "gear" | "presentation";
};

const SPRITES: Record<string, Sprite> = {
  presentation: {
    grid: [
      "................",
      "..NNNNNNNNNN....",
      "..NWWWWWWWWN....",
      "..NWWWWWWWWN....",
      "..NWWWWWWWBN....",
      "..NWWWWWBBBN....",
      "..NWWYWWBBBN....",
      "..NWWYWWBBBN....",
      "..NYYYYYBBBN....",
      "..NNNNNNNNNN....",
      ".......NN.......",
      "......NNNN......",
      ".......NN.......",
      ".....NNNNNN.....",
      "................",
    ],
    colors: { N: "#14213d", W: "#fff8e0", B: "#3b82c4", Y: "#ff8105" },
    motion: "presentation",
  },
  code: {
    grid: [
      "................",
      "..OOOOOOOOOO....",
      ".ORRRRRRRRRRO...",
      "ORRRRRRRRRRRRO..",
      "ORRYYRRRRYYRRO..",
      "ORRYRRYYRRYRRO..",
      "ORRRYYRRYYRRRO..",
      "ORRRRRYYRRRRRO..",
      "ORRYYRRYYRRRRO..",
      "ORRRRRRRRRRRRO..",
      ".ORRRRRRRRRRO...",
      "..OOOOOOOORO....",
      "..........OO....",
      "................",
    ],
    colors: { O: "#ff8105", R: "#fff0c4", Y: "#f45117" },
    motion: "code",
  },
  gear: {
    grid: [
      ".....B.B.......",
      "...BBBBBBB.....",
      "..BB..B..BB....",
      ".BB..BBB..BB...",
      "BB..BWWWB..BB..",
      ".BBWWWWWWWBB...",
      "BBBBWWBWWBBBB..",
      ".BBWWWWWWWBB...",
      "BB..BWWWB..BB..",
      ".BB..BBB..BB...",
      "..BB..B..BB....",
      "...BBBBBBB.....",
      ".....B.B.......",
    ],
    colors: { B: "#2479bd", W: "#dff1ff" },
    motion: "gear",
  },
  cat: {
    grid: [
      "................",
      "...NN......NN...",
      "..NNNN....NNNN..",
      "..NNNNNNNNNNNN..",
      "..NNWNNNNNNWNN..",
      "..NNNNONONNNNN..",
      "...NNNNNNNNNN...",
      "..NNNNNNNNNNNN..",
      ".NNNNNNNNNNNNNN.",
      ".NNNNNNNNNNNNNN.",
      "..NN........NN..",
      "..NN........NN..",
      "..NN........NNN.",
      ".............NN.",
      "................",
    ],
    colors: { N: "#14213d", W: "#fff8e0", O: "#ff8105" },
    motion: "cat",
  },
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
      "................",
      "......NN........",
      ".....NYYN.......",
      "....NNNNNN......",
      "...NNBBBBNN.....",
      "..BNBWWWWNBO....",
      "..BNWOROWNBO....",
      "..BNBWWWWNBO....",
      "...NNBBBBNN.....",
      "....NOOON.......",
      "...NOOOOON......",
      "...NNNNNNN......",
      "....N....N......",
      "...NN....NN.....",
      "...N......N.....",
      "................",
    ],
    colors: { N: "#14213d", B: "#3b82c4", W: "#e6f4ff", O: "#ff8105", R: "#f45117", Y: "#ffd06a" },
    motion: "robot",
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
      className={`pixel-object pixel-object--${sprite.motion ?? name} inline-grid ${className}`}
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
            data-pixel-cell={ch}
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
