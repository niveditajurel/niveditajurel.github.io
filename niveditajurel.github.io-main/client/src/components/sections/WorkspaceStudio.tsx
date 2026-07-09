import { useState } from "react";
import { PixelIcon } from "@/components/ui/PixelIcon";
import { PixelArtTrio } from "@/components/ui/PixelArt";
import { PixelWalker } from "@/components/ui/PixelWalker";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

interface Hotspot {
  id: string;
  num: number;
  x: number; // % from left
  y: number; // % from top
  pin: string; // short label under pin on hover (a11y)
  eyebrow: string;
  title: string;
  body: string;
}

const hotspots: Hotspot[] = [
  {
    id: "monitor",
    num: 1,
    x: 76,
    y: 45,
    pin: "The monitor",
    eyebrow: "On screen right now",
    title: "Building in the open",
    body: "AI-native product workflows — n8n pipelines, Claude subagents, RAG valuation flows. The code on the screen is real, not a mockup.",
  },
  {
    id: "laptop",
    num: 2,
    x: 57,
    y: 47,
    pin: "The laptop",
    eyebrow: "Weekend builds",
    title: "Ship for the fun of it",
    body: "Side projects and prototypes I build outside of work. I try every new AI tool — but only keep the ones that actually serve users.",
  },
  {
    id: "board",
    num: 3,
    x: 62,
    y: 27,
    pin: "The moodboard",
    eyebrow: "What I believe",
    title: "What if it works out?",
    body: "Less hype, more clarity. Optimistic by default — but I pressure-test every idea before betting real time on it.",
  },
  {
    id: "mug",
    num: 4,
    x: 72,
    y: 54,
    pin: "The coffee mug",
    eyebrow: "Off the clock",
    title: "Away from the screen",
    body: "Amateur chess player, weekend painter, and sketch-note experimenter. I do my clearest thinking when I step away from the desk.",
  },
  {
    id: "beanbag",
    num: 5,
    x: 21,
    y: 63,
    pin: "The beanbag",
    eyebrow: "How I work",
    title: "Calm and systems-first",
    body: "I get to the signal fast and turn messy, ambiguous problems into scope a team can actually build and ship.",
  },
  {
    id: "rug",
    num: 6,
    x: 49,
    y: 77,
    pin: "The rug",
    eyebrow: "Where it started",
    title: "Roots at VIT",
    body: "Co-organizing hackathons and startup weekends taught me to build momentum and earn trust — long before I was building products.",
  },
];

export const WorkspaceStudio = () => {
  const reduceMotion = !!useReducedMotion();
  const [activeId, setActiveId] = useState<string>("monitor");
  const [explored, setExplored] = useState<Set<string>>(() => new Set(["monitor"]));

  const active = hotspots.find((h) => h.id === activeId) ?? hotspots[0];

  const select = (id: string) => {
    setActiveId(id);
    setExplored((prev) => {
      if (prev.has(id)) return prev;
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  };

  return (
    <section id="studio" className="bg-transparent px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
      <div className="relative mx-auto max-w-7xl border-t border-[var(--bp-hairline)] pt-6 lg:pt-7">
        <PixelWalker duration={58} delay={4} />
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3">
            <PixelArtTrio names={["heart", "robot", "flask"]} className="mb-1" />
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.24em] text-[var(--bp-ink-muted)]">
              <PixelIcon name="heart" size={13} className="mr-2 inline-block align-[-2px]" />
              07 — Step into the studio
            </p>
            <h2 className="font-statement max-w-[20ch] text-4xl font-semibold leading-[1.05] tracking-tight text-[var(--bp-ink)] md:text-[2.6rem]">
              Click around. It&apos;s how I actually work.
            </h2>
          </div>
          <div className="flex items-center gap-2 self-start rounded-full border border-[var(--bp-hairline)] bg-white px-3.5 py-1.5 font-mono text-[0.7rem] text-[var(--bp-cobalt)] sm:self-auto">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--bp-cobalt)]" />
            explored {explored.size} / {hotspots.length}
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] lg:items-stretch">
          {/* Scene with hotspots */}
          <div className="relative overflow-hidden rounded-xl border border-[var(--bp-hairline)] bg-white">
            <img
              src="/workspace.jpg"
              alt="A miniature model of Nivedita's studio workspace"
              loading="lazy"
              className="block w-full"
            />
            {hotspots.map((spot) => {
              const isActive = spot.id === activeId;
              const isExplored = explored.has(spot.id);
              return (
                <button
                  key={spot.id}
                  type="button"
                  onClick={() => select(spot.id)}
                  aria-label={`${spot.pin} — ${spot.title}`}
                  aria-pressed={isActive}
                  className="group absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none"
                  style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                >
                  <span
                    className={`flex h-7 w-7 items-center justify-center rounded-full font-mono text-xs font-medium transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[var(--bp-cobalt)] focus-visible:ring-offset-2 ${
                      isActive
                        ? "scale-110 bg-[var(--bp-cobalt)] text-white shadow-[0_0_0_5px_rgba(250,82,15,0.22)]"
                        : isExplored
                          ? "bg-white text-[var(--bp-cobalt)] shadow-[0_0_0_1.5px_var(--bp-cobalt)] group-hover:scale-110"
                          : "bg-[var(--bp-cobalt)]/90 text-white shadow-[0_0_0_4px_rgba(250,82,15,0.2)] group-hover:scale-110"
                    } ${!isActive && !reduceMotion ? "bp-live-dot" : ""}`}
                  >
                    {isExplored ? spot.num : spot.num}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Reveal card */}
          <div className="flex flex-col rounded-xl border border-[var(--bp-hairline)] bg-white p-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.28, ease: [0, 0.55, 0.45, 1] }}
                className="flex h-full flex-col"
              >
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-[var(--bp-cobalt)]">
                  {String(active.num).padStart(2, "0")} · {active.eyebrow}
                </p>
                <h3 className="font-fraunces mt-2 text-[1.5rem] font-semibold leading-tight tracking-tight text-[var(--bp-ink)]">
                  {active.title}
                </h3>
                <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-[var(--bp-ink-muted)]">
                  {active.body}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5 border-t border-[var(--bp-hairline)] pt-4">
                  {hotspots.map((spot) => (
                    <button
                      key={spot.id}
                      type="button"
                      onClick={() => select(spot.id)}
                      aria-label={`Show ${spot.pin}`}
                      className={`h-6 w-6 rounded-md font-mono text-[0.65rem] transition-colors ${
                        spot.id === activeId
                          ? "bg-[var(--bp-cobalt)] text-white"
                          : explored.has(spot.id)
                            ? "border border-[var(--bp-cobalt)]/40 text-[var(--bp-cobalt)]"
                            : "border border-[var(--bp-hairline)] text-[var(--bp-ink-muted)] hover:border-[var(--bp-cobalt)]/40"
                      }`}
                    >
                      {spot.num}
                    </button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
