import { useState } from "react";
import { SectionIntro } from "@/components/ui/SectionIntro";
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
    id: "frame",
    num: 1,
    x: 31,
    y: 48,
    pin: "Frame the mess",
    eyebrow: "Start with signal",
    title: "Frame the messy space",
    body: "I turn scattered requests, user pain, and business pressure into one decision frame the team can challenge and use.",
  },
  {
    id: "workflow",
    num: 2,
    x: 45,
    y: 58,
    pin: "Map the workflow",
    eyebrow: "Make the system visible",
    title: "Map actors, states, and handoffs",
    body: "Before proposing screens, I expose the workflow: who acts, what changes state, where trust breaks, and which dependency can block delivery.",
  },
  {
    id: "decision",
    num: 3,
    x: 57,
    y: 68,
    pin: "Find the decision",
    eyebrow: "Choose the leverage point",
    title: "Find the decision that matters",
    body: "I separate symptoms from the product decision underneath them, then define the smallest coherent scope that can change the outcome.",
  },
  {
    id: "prototype",
    num: 4,
    x: 67,
    y: 68,
    pin: "Prototype the risk",
    eyebrow: "Learn before polishing",
    title: "Prototype the riskiest assumption",
    body: "I use flows, working prototypes, and AI-assisted builds to make uncertainty testable before the team commits to the expensive version.",
  },
  {
    id: "align",
    num: 5,
    x: 76,
    y: 68,
    pin: "Align the team",
    eyebrow: "Create shared direction",
    title: "Align product, design, and engineering",
    body: "The artifact becomes a shared model: clear tradeoffs, ownership, sequencing, and enough context for each function to move without guesswork.",
  },
  {
    id: "ship",
    num: 6,
    x: 85,
    y: 68,
    pin: "Ship and learn",
    eyebrow: "Close the loop",
    title: "Ship, measure, and sharpen",
    body: "I stay close through delivery, watch the real workflow, and use what changes after launch to improve the next product decision.",
  },
];

export const WorkspaceStudio = () => {
  const reduceMotion = !!useReducedMotion();
  const [activeId, setActiveId] = useState<string>("frame");
  const [explored, setExplored] = useState<Set<string>>(() => new Set(["frame"]));

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
    <section id="studio" className="mistral-section">
      <div className="mistral-section-shell">
        <PixelWalker duration={96} delay={2} bulb />
        <SectionIntro
          number="06"
          label="Interactive method"
          title="Trace how I move from ambiguity to ship."
          description="A real whiteboard becomes the interaction: open each decision point to see how I make complex product work buildable."
          icon="heart"
        />
        <div className="mb-5 flex justify-end">
          <div className="flex items-center gap-2 rounded-full border border-[var(--bp-hairline)] bg-[var(--bp-surface)] px-3.5 py-1.5 font-mono text-[0.7rem] text-[var(--bp-cobalt)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--bp-cobalt)]" />
            explored {explored.size} / {hotspots.length}
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] lg:items-stretch">
          {/* Scene with hotspots */}
          <div className="mistral-surface relative overflow-hidden">
            <img
              src="/wild/whiteboard.jpg"
              alt="Nivedita mapping a product workflow on a whiteboard"
              loading="lazy"
              className="block aspect-[4/3] h-full w-full object-cover"
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
          <div className="mistral-surface flex flex-col p-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
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
