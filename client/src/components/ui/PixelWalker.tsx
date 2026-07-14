/**
 * Tiny pixel-art bot that crawls along a section divider line.
 * Rounded robot head (side ear-nubs, twin antenna stems, green square eyes)
 * with two little legs — two-frame crawl cycle, walks the full line, flips, walks back.
 * Optional `emote` pops a little idea-bulb / coding-monitor / hearts / wrench above its head.
 * Parent container must be `relative`; the bot stands on the top border.
 * Hidden entirely under prefers-reduced-motion (see index.css `.bp-walker`).
 */

const COLS = 11;

const FRAME_A = [
  "...N...N...",
  "...N...N...",
  "..NNNNNNN..",
  "..NBBBBBN..",
  "EENFGFGFNEE",
  "..NFFFFFN..",
  "..NBBBBBN..",
  "..NNNNNNN..",
  "...L...L...",
  "...L...L...",
];

const FRAME_B = [
  "...N...N...",
  "...N...N...",
  "..NNNNNNN..",
  "..NBBBBBN..",
  "EENFGFGFNEE",
  "..NFFFFFN..",
  "..NBBBBBN..",
  "..NNNNNNN..",
  "...L...L...",
  "....L.L....",
];

const CELL_COLORS: Record<string, string> = {
  N: "#14213d",
  B: "#3b82c4",
  F: "#e6f4ff",
  G: "#ff8105",
  E: "#2479bd",
  L: "#14213d",
};

const IDEA_ROWS = [".YYY.", "YYYYY", "YYYYY", ".YYY.", "..S.."];
const IDEA_COLORS: Record<string, string> = { Y: "#ffd23f", S: "#8a8a8a" };

const CODING_ROWS = ["MMMMM", "M...M", "M.G.M", "M...M", ".MMM."];
const CODING_COLORS: Record<string, string> = { M: "#2c3550", G: "#38e07b" };

const HEART_ROWS = [".H.H.", "HHHHH", "HHHHH", ".HHH.", "..H.."];
const HEART_COLORS: Record<string, string> = { H: "#ef5d6b" };

const WRENCH_ROWS = ["MM...M", ".M..M.", "..MM..", "...H..", "..H...", ".H...."];
const WRENCH_COLORS: Record<string, string> = { M: "#52657a", H: "#f18b22" };

function BotFrame({ rows, cell, className = "" }: { rows: string[]; cell: number; className?: string }) {
  return (
    <span
      className={`col-start-1 row-start-1 grid ${className}`}
      style={{
        gridTemplateColumns: `repeat(${COLS}, ${cell}px)`,
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

function EmoteGlyph({
  rows,
  colors,
  cell,
  blinkChar,
}: {
  rows: string[];
  colors: Record<string, string>;
  cell: number;
  blinkChar?: string;
}) {
  return (
    <span
      className="grid"
      style={{
        gridTemplateColumns: `repeat(${rows[0].length}, ${cell}px)`,
        gridTemplateRows: `repeat(${rows.length}, ${cell}px)`,
      }}
    >
      {rows.flatMap((row, r) =>
        row.split("").map((c, i) => (
          <span
            key={`${r}-${i}`}
            className={c === blinkChar ? "bp-cursor-blink" : undefined}
            style={{ background: colors[c] ?? "transparent" }}
          />
        )),
      )}
    </span>
  );
}

export function PixelWalker({
  duration = 78,
  delay = 0,
  size = 36,
  bulb = false,
  coding = false,
  hearts = false,
  wrench = false,
}: {
  /** seconds for a full there-and-back crawl */
  duration?: number;
  /** seconds before the crawl starts */
  delay?: number;
  /** bot width in px */
  size?: number;
  /** glowing idea-bulb, fixed above its head */
  bulb?: boolean;
  /** coding monitor with blinking cursor, fixed above its head */
  coding?: boolean;
  /** two hearts popping above its head, one on each side */
  hearts?: boolean;
  /** pixel wrench held above its head */
  wrench?: boolean;
}) {
  const cell = size / COLS;
  const height = cell * FRAME_A.length;
  const emoteCell = cell * 0.85;
  const emoteTop = -(emoteCell * 5 + 4);
  const wrenchTop = -(emoteCell * WRENCH_ROWS.length + 4);

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

      {bulb ? (
        <span className="bp-emote bp-emote-idea" style={{ top: emoteTop, left: "50%" }}>
          <EmoteGlyph rows={IDEA_ROWS} colors={IDEA_COLORS} cell={emoteCell} />
        </span>
      ) : null}

      {coding ? (
        <span className="bp-emote bp-emote-coding" style={{ top: emoteTop, left: "50%" }}>
          <EmoteGlyph rows={CODING_ROWS} colors={CODING_COLORS} cell={emoteCell} blinkChar="G" />
        </span>
      ) : null}

      {hearts ? (
        <>
          <span className="bp-emote bp-emote-heart-a" style={{ top: emoteTop, left: "30%" }}>
            <EmoteGlyph rows={HEART_ROWS} colors={HEART_COLORS} cell={emoteCell} />
          </span>
          <span className="bp-emote bp-emote-heart-b" style={{ top: emoteTop, left: "70%" }}>
            <EmoteGlyph rows={HEART_ROWS} colors={HEART_COLORS} cell={emoteCell} />
          </span>
        </>
      ) : null}

      {wrench ? (
        <span className="bp-emote bp-emote-wrench" style={{ top: wrenchTop, left: "50%" }}>
          <EmoteGlyph rows={WRENCH_ROWS} colors={WRENCH_COLORS} cell={emoteCell} />
        </span>
      ) : null}
    </span>
  );
}
