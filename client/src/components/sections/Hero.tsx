import { Link } from "wouter";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { siteConfig } from "@/data/site";
import { PixelWalker } from "@/components/ui/PixelWalker";

/* ── Hero — "Editorial Overlap" (design handoff 6b) ──
   Full-bleed portrait, left legibility wash, overlapping headline,
   and a restrained entrance sequence. */

const heroPrinciples: Array<{
  label: string;
  mark: "systems" | "execution" | "customer";
  position: string;
  delay: string;
}> = [
  {
    label: "Systems",
    mark: "systems",
    position: "left-[58%] top-[21%] xl:left-[58%]",
    delay: "-1.1s",
  },
  {
    label: "Execution",
    mark: "execution",
    position: "right-[5%] top-[34%] 2xl:right-[4%]",
    delay: "-3.6s",
  },
  {
    label: "Customer Lens",
    mark: "customer",
    position: "right-[5%] top-[55%] 2xl:right-[4%]",
    delay: "-5.4s",
  },
];

const heroPixelMarks = {
  systems: [
    "....BB.....",
    "...BBBB....",
    ".....P.....",
    ".....P.....",
    ".GGPPPPPOO.",
    ".GG..P..OO.",
    ".....P.....",
    "...YYYY....",
    "....YY.....",
  ],
  execution: [
    ".....B.....",
    "....BBB....",
    "...BWWWB...",
    "...BWNWB...",
    "...BWWWB...",
    "..ORBBBRO..",
    ".OO.RRR.OO.",
    "...R.R.....",
    "..Y...Y....",
  ],
  customer: [
    "..OOOOOOO..",
    ".OPPPPPPPO.",
    "OPP.MMM.PPO",
    "OP.MWWWM.PO",
    "OPP.MMM.PPO",
    ".OPPPPPPPO.",
    "..OOOOO....",
    "...OO......",
  ],
} as const;

const heroPixelColors: Record<string, string> = {
  N: "#14213d",
  B: "#2479bd",
  G: "#52a66f",
  P: "#ffd06a",
  Y: "#ffc039",
  O: "#ff8105",
  R: "#f45117",
  M: "#df5279",
  W: "#fff8e8",
};

function HeroPrincipleMark({ mark, size }: { mark: keyof typeof heroPixelMarks; size: number }) {
  const rows = heroPixelMarks[mark];
  const columns = Math.max(...rows.map((row) => row.length));
  const cell = size / columns;

  return (
    <span
      aria-hidden="true"
      className={`hero-principle-mark hero-principle-mark--${mark} inline-grid shrink-0`}
      style={{
        gridTemplateColumns: `repeat(${columns}, ${cell}px)`,
        gridTemplateRows: `repeat(${rows.length}, ${cell}px)`,
        width: size,
        height: rows.length * cell,
        imageRendering: "pixelated",
      }}
    >
      {rows.flatMap((row, rowIndex) =>
        row.split("").map((cellValue, columnIndex) => (
          <span
            key={`${rowIndex}-${columnIndex}`}
            data-pixel-cell={cellValue}
            style={{ background: heroPixelColors[cellValue] ?? "transparent" }}
          />
        )),
      )}
    </span>
  );
}

function HeroPixelAccent({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute left-0 top-0 z-30 grid grid-cols-3 grid-rows-2"
      initial={reduceMotion ? false : { opacity: 0, x: -18 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="col-start-1 row-start-1 h-3 w-4 bg-[#f64b0c] sm:h-4 sm:w-5" />
      <span className="col-start-2 row-start-1 h-3 w-4 bg-[#ff7a05] sm:h-4 sm:w-5" />
      <span className="col-span-3 col-start-1 row-start-2 h-3 bg-[#ffc039] sm:h-4" />
    </motion.div>
  );
}

export const Hero = () => {
  const reduceMotion = !!useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="relative isolate overflow-hidden bg-[var(--bp-paper)] lg:min-h-[min(820px,calc(100svh-4rem))] xl:min-h-[min(900px,calc(100svh-4rem))]">
      <HeroPixelAccent reduceMotion={reduceMotion} />

      {/* Portrait — full-bleed background */}
      <motion.img
        src="/hero-portrait.jpg"
        alt="Nivedita, product manager and builder, in front of a whiteboard of hand-drawn product doodles"
        className="absolute inset-0 h-full w-full object-cover object-[58%_0%] sm:object-[66%_0%] lg:object-[76%_4%] xl:object-[82%_5%]"
        style={{ transformOrigin: "80% 30%" }}
        initial={reduceMotion ? { opacity: 1, scale: 1.02 } : { opacity: 0, scale: 1.055 }}
        animate={{ opacity: 1, scale: 1.02 }}
        transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Legibility wash — vertical (mobile), horizontal-left (desktop) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 lg:hidden"
        style={{
          background:
            "linear-gradient(0deg, rgba(255,249,233,0.995) 0%, rgba(255,249,233,0.985) 58%, rgba(255,249,233,0.88) 73%, rgba(255,249,233,0.42) 90%, rgba(255,249,233,0) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden lg:block"
        style={{
          background:
            "linear-gradient(96deg, rgba(255,249,233,0.995) 0%, rgba(255,249,233,0.97) 31%, rgba(255,249,233,0.76) 43%, rgba(255,249,233,0.18) 57%, rgba(255,249,233,0) 66%)",
        }}
      />

      <ul
        aria-label="Product principles"
        className="pointer-events-none absolute inset-0 z-10 hidden lg:block"
      >
        {heroPrinciples.map((principle, index) => (
          <motion.li
            key={principle.label}
            className={`absolute ${principle.position}`}
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.46 + index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span
              className="hero-pixel-float inline-flex items-center gap-3.5"
              style={{ animationDelay: principle.delay }}
            >
              <HeroPrincipleMark mark={principle.mark} size={38} />
              <span className="font-mono text-[0.78rem] font-extrabold uppercase tracking-[0.12em] text-[#211b16] xl:text-[0.84rem]">
                {principle.label}
              </span>
            </span>
          </motion.li>
        ))}
      </ul>

      {/* Content */}
      <div className="relative z-20 mx-auto flex min-h-[calc(100svh-4rem)] w-full max-w-[1540px] items-start px-5 pb-12 pt-40 sm:items-center sm:px-7 sm:pb-20 sm:pt-24 lg:min-h-[min(820px,calc(100svh-4rem))] lg:px-12 lg:pb-8 lg:pt-12 xl:min-h-[min(900px,calc(100svh-4rem))] xl:px-16 2xl:px-20">
        <motion.div
          className="flex min-w-0 w-[calc(100vw-2.5rem)] max-w-[calc(100vw-2.5rem)] flex-col gap-4 overflow-hidden sm:w-full sm:max-w-[38rem] sm:gap-5 lg:max-w-[31rem] lg:gap-5 xl:max-w-[35rem]"
          variants={reduceMotion ? undefined : container}
          initial={reduceMotion ? undefined : "hidden"}
          animate={reduceMotion ? undefined : "show"}
        >
          {/* Eyebrow */}
          <motion.p
            variants={reduceMotion ? undefined : item}
            className="max-w-full font-mono text-[0.9rem] font-bold uppercase tracking-[0.18em] text-[#2f2922] sm:text-[1rem]"
          >
            <span>Nivedita — PM + Builder</span>
          </motion.p>

          <motion.ul
            variants={reduceMotion ? undefined : item}
            aria-label="Product principles"
            className="grid w-full max-w-full grid-cols-2 gap-x-4 gap-y-2 overflow-hidden sm:max-w-[31rem] sm:grid-cols-3 lg:hidden"
          >
            {heroPrinciples.map((principle) => (
              <li
                key={principle.label}
                className="flex min-w-0 items-center justify-start gap-1.5"
              >
                <HeroPrincipleMark mark={principle.mark} size={22} />
                <span className="min-w-0 max-w-full break-words font-mono text-[0.58rem] font-extrabold uppercase leading-[1.05] tracking-[0.035em] text-[#211b16] sm:text-[0.69rem]">
                  {principle.label}
                </span>
              </li>
            ))}
          </motion.ul>

          {/* Headline */}
          <motion.h1
            variants={reduceMotion ? undefined : item}
            className="font-fraunces m-0 max-w-full font-normal leading-[1.02] text-[#211b16]"
            style={{ fontSize: "clamp(2.65rem, 4.6vw, 4.35rem)", textWrap: "pretty" }}
          >
            I bring clarity<br />
            to <span className="font-semibold italic text-[#e34312]">messy</span><br />
            product spaces.
          </motion.h1>

          {/* Subhead */}
          <motion.p
            variants={reduceMotion ? undefined : item}
            className="m-0 w-full max-w-[20.5rem] text-[0.98rem] font-medium leading-[1.55] text-[#4d4339] sm:max-w-[420px] sm:text-[1.08rem]"
            style={{ overflowWrap: "break-word", whiteSpace: "normal" }}
          >
            Former software engineer turned product manager, working across startups and enterprise
            teams to turn unclear workflows into direction teams can build and ship.
          </motion.p>

          <motion.p
            variants={reduceMotion ? undefined : item}
            className="font-mono m-0 hidden text-[0.78rem] font-bold uppercase tracking-[0.22em] text-[#3b332b] sm:block"
          >
            Former SWE · Startups + Enterprise PM
          </motion.p>

          {/* CTAs */}
          <motion.div variants={reduceMotion ? undefined : item} className="flex flex-wrap gap-3.5">
            <Link href="/projects">
              <span className="mistral-action cursor-pointer"
              >
                View Work
              </span>
            </Link>
            <a
              href={siteConfig.links.resume}
              target="_blank"
              rel="noreferrer"
              className="mistral-outline-action"
            >
              View Resume
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 z-30 w-[calc(100%-2rem)] max-w-7xl -translate-x-1/2 border-t border-[var(--bp-hairline)] sm:w-[calc(100%-3rem)] lg:w-[calc(100%-4rem)]"
      >
        <PixelWalker duration={72} />
      </div>
    </section>
  );
};
