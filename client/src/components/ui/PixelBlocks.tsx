const SUNSET = ["#fa520f", "#ff8105", "#ffa110", "#ffb83e", "#ffd06a", "#ffd900"];

/**
 * Stair-stepped pixel cluster — Mistral's signature decorative motif.
 * Deterministic, pure CSS squares.
 */
export function PixelCluster({
  className = "",
  size = 10,
  flip = false,
}: {
  className?: string;
  size?: number;
  flip?: boolean;
}) {
  const rows = [1, 2, 3, 4];
  return (
    <div aria-hidden="true" className={`pointer-events-none ${className}`}>
      {rows.map((count, r) => (
        <div key={r} className={`flex ${flip ? "justify-end" : "justify-start"}`}>
          {Array.from({ length: count }).map((_, i) => (
            <span
              key={i}
              style={{
                width: size,
                height: size,
                background: SUNSET[(r * 2 + i) % SUNSET.length],
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

/**
 * Pixelated sunset stripe — the page-closing brand band.
 * Color bands run orange→yellow left to right; cells dissolve upward
 * with a deterministic pattern (no randomness, stable across renders).
 */
export function PixelStripe() {
  const cols = 64;
  const rows = [
    // row 0 (top): sparse
    (c: number) => (c * 7 + 3) % 4 === 0,
    // row 1: medium
    (c: number) => (c * 5 + 1) % 3 !== 0,
    // row 2 (bottom): solid
    () => true,
  ];
  const colorFor = (c: number) => SUNSET[Math.min(Math.floor((c / cols) * SUNSET.length), SUNSET.length - 1)];

  return (
    <div aria-hidden="true" className="flex w-full flex-col">
      {rows.map((filled, r) => (
        <div key={r} className="flex w-full">
          {Array.from({ length: cols }).map((_, c) => (
            <span
              key={c}
              className="h-1.5 sm:h-2"
              style={{
                flex: 1,
                background: filled(c) ? colorFor(c) : "transparent",
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
