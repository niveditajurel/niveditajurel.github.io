import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { PixelIcon } from "@/components/ui/PixelIcon";

/**
 * The Build Machine — the hero's centerpiece.
 * Performs the value prop on loop: ambiguity → system → build → shipped.
 * Each cycle is a real project with its real metric.
 */

interface BuildProject {
  id: string;
  name: string;
  chaos: string[];
  nodes: string[];
  metric: string;
  metricLabel: string;
  href: string;
  year: string;
}

const projects: BuildProject[] = [
  {
    id: "anand-pag",
    name: "vendor-ops",
    chaos: ["vendor delays", "3–5 day loops", "zero visibility", "spreadsheet chaos", "invoice pileup", "500 vendors"],
    nodes: ["Intake", "Process", "Evidence", "Bundle"],
    metric: "95→100%",
    metricLabel: "job reliability · 200+ bundles",
    href: "/projects/anand-pag",
    year: "2025",
  },
  {
    id: "nomad-ai",
    name: "nomad-ai",
    chaos: ["what's it worth?", "no comps", "gut-feel pricing", "exit anxiety", "messy books", "SMB blind spots"],
    nodes: ["Ingest", "Value", "Explain", "Decide"],
    metric: "608 users",
    metricLabel: "+865% growth in 4 months",
    href: "/projects/nomad-ai",
    year: "2024",
  },
  {
    id: "skingenius",
    name: "skingenius",
    chaos: ["quiz drop-off", "trust gap", "too many SKUs", "vague routines", "onboarding maze"],
    nodes: ["Ask", "Analyze", "Match", "Convert"],
    metric: "+25%",
    metricLabel: "quiz completion · +30% engagement",
    href: "/projects/skingenius",
    year: "2024",
  },
];

const PHASES = ["ambiguity", "system", "build", "shipped"] as const;
type Phase = (typeof PHASES)[number];
const PHASE_MS: Record<Phase, number> = {
  ambiguity: 2400,
  system: 2400,
  build: 2400,
  shipped: 3000,
};

// deterministic scatter positions (percent of stage)
const SCATTER: Array<{ x: number; y: number; r: number }> = [
  { x: 8, y: 12, r: -7 },
  { x: 58, y: 6, r: 5 },
  { x: 30, y: 38, r: -3 },
  { x: 66, y: 46, r: 8 },
  { x: 12, y: 64, r: 4 },
  { x: 48, y: 70, r: -6 },
];

export function BuildMachine() {
  const reduceMotion = !!useReducedMotion();
  const [, navigate] = useLocation();
  const [projectIndex, setProjectIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>(reduceMotion ? "shipped" : "ambiguity");

  const project = projects[projectIndex];

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setTimeout(() => {
      const next = PHASES[(PHASES.indexOf(phase) + 1) % PHASES.length];
      if (next === "ambiguity") {
        setProjectIndex((p) => (p + 1) % projects.length);
      }
      setPhase(next);
    }, PHASE_MS[phase]);
    return () => window.clearTimeout(timer);
  }, [phase, reduceMotion]);

  const phaseIdx = PHASES.indexOf(phase);

  return (
    <div className="w-full overflow-hidden rounded-xl border border-[#2c2c2e] bg-[var(--bp-panel)] shadow-[0_32px_64px_-24px_rgba(31,31,31,0.5)]">
      {/* Title bar */}
      <div className="flex items-center justify-between border-b border-[#2c2c2e] bg-[#232325] px-4 py-2.5">
        <div className="flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[var(--bp-panel-muted)]">
          <PixelIcon name="chip" size={13} />
          niv.exe — how I actually work
        </div>
        <span className="font-mono text-[0.6rem] text-[var(--bp-panel-muted)]">
          {project.year} · {project.name}
        </span>
      </div>

      {/* Phase tracker */}
      <div className="flex items-center gap-1 border-b border-[#2c2c2e] px-4 py-2">
        {PHASES.map((p, i) => (
          <div key={p} className="flex flex-1 items-center gap-1">
            <span
              className={`font-mono text-[0.56rem] uppercase tracking-[0.14em] transition-colors duration-300 ${
                i === phaseIdx
                  ? "text-[var(--bp-cobalt)]"
                  : i < phaseIdx
                    ? "text-[var(--bp-positive)]"
                    : "text-[var(--bp-panel-muted)]"
              }`}
            >
              {i < phaseIdx ? "✓ " : ""}
              {p}
            </span>
            {i < PHASES.length - 1 && (
              <span className="h-px flex-1 bg-[#2c2c2e]" />
            )}
          </div>
        ))}
      </div>

      {/* Stage */}
      <div className="bp-dot-grid relative h-56 sm:h-60">
        <AnimatePresence mode="wait">
          {/* PHASE 1 — chaos */}
          {phase === "ambiguity" && (
            <motion.div
              key={`chaos-${project.id}`}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
            >
              {project.chaos.map((word, i) => {
                const pos = SCATTER[i % SCATTER.length];
                return (
                  <motion.span
                    key={word}
                    className="absolute rounded border border-[#3c3c3e] bg-[#2a2a2c] px-2.5 py-1 font-mono text-[0.62rem] text-[#c9c5bb]"
                    style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                    initial={{ opacity: 0, scale: 0.7, rotate: pos.r * 2 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate: pos.r,
                      y: [0, -4, 0],
                    }}
                    transition={{
                      opacity: { delay: i * 0.12, duration: 0.3 },
                      scale: { delay: i * 0.12, type: "spring", stiffness: 300 },
                      y: { duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 },
                    }}
                  >
                    {word}
                  </motion.span>
                );
              })}
            </motion.div>
          )}

          {/* PHASE 2 — system */}
          {phase === "system" && (
            <motion.div
              key={`system-${project.id}`}
              className="absolute inset-0 flex items-center justify-center px-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
            >
              <div className="flex w-full items-center justify-between">
                {project.nodes.map((node, i) => (
                  <div key={node} className="flex flex-1 items-center">
                    <motion.div
                      className="rounded-md border border-[var(--bp-cobalt)]/60 bg-[#2a2a2c] px-3 py-2 font-mono text-[0.62rem] text-[#f0ede5]"
                      initial={{ opacity: 0, y: 14, scale: 0.85 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: i * 0.35, type: "spring", stiffness: 260 }}
                    >
                      {node}
                    </motion.div>
                    {i < project.nodes.length - 1 && (
                      <motion.div
                        className="h-px flex-1 origin-left bg-[var(--bp-cobalt)]"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: i * 0.35 + 0.25, duration: 0.3 }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* PHASE 3 — build */}
          {phase === "build" && (
            <motion.div
              key={`build-${project.id}`}
              className="absolute inset-0 flex items-center justify-center px-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
            >
              <div className="w-full max-w-sm rounded-lg border border-[#3c3c3e] bg-[#232325] p-4">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#ff5f56]" />
                  <span className="h-2 w-2 rounded-full bg-[#ffbd2e]" />
                  <span className="h-2 w-2 rounded-full bg-[#27c93f]" />
                  <span className="ml-2 font-mono text-[0.55rem] text-[var(--bp-panel-muted)]">
                    {project.name} — building…
                  </span>
                </div>
                <div className="mt-3 space-y-2">
                  {project.nodes.map((node, i) => (
                    <motion.div
                      key={node}
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.3 }}
                    >
                      <span className="font-mono text-[0.58rem] text-[var(--bp-positive)]">✓</span>
                      <span className="h-2 rounded-sm bg-[#3c3c3e]" style={{ width: `${72 - i * 12}%` }} />
                      <span className="font-mono text-[0.55rem] text-[var(--bp-panel-muted)]">{node}</span>
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#3c3c3e]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <motion.div
                    className="h-full bg-[var(--bp-cobalt)]"
                    initial={{ width: "8%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.9, ease: "easeInOut" }}
                  />
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* PHASE 4 — shipped */}
          {phase === "shipped" && (
            <motion.div
              key={`ship-${project.id}`}
              className="absolute inset-0 flex flex-col items-center justify-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="rounded-lg border-2 border-[var(--bp-positive)] px-5 py-2 font-mono text-sm font-medium uppercase tracking-[0.2em] text-[var(--bp-positive)]"
                initial={reduceMotion ? { opacity: 1 } : { scale: 2.2, opacity: 0, rotate: -14 }}
                animate={{ scale: 1, opacity: 1, rotate: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 16 }}
              >
                Shipped ✓
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                <div className="font-fraunces text-4xl text-[#f5f5f5]">{project.metric}</div>
                <div className="mt-1 font-mono text-[0.62rem] text-[var(--bp-panel-muted)]">
                  {project.metricLabel}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Ship log strip — the machine writes its own history */}
      <div className="border-t border-[#2c2c2e] px-3 py-2 lg:pl-32 xl:pl-36">
        {projects.map((p, i) => {
          const isCurrent = i === projectIndex;
          const isStamped = isCurrent && phase === "shipped";
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => navigate(p.href)}
              className={`flex w-full items-baseline gap-2.5 rounded px-2 py-1 text-left font-mono text-[0.62rem] transition-colors hover:bg-white/5 ${
                isCurrent ? "opacity-100" : "opacity-45"
              }`}
            >
              <span className="text-[var(--bp-positive)]">▸ {p.year}</span>
              <span className={`flex-1 truncate ${isCurrent ? "text-[#ffb83e]" : "text-[#c9c5bb]"}`}>
                {p.name}
              </span>
              <motion.span
                className="text-[var(--bp-positive)]"
                animate={isStamped && !reduceMotion ? { scale: [1, 1.25, 1] } : {}}
                transition={{ delay: 0.5 }}
              >
                {p.metric}
              </motion.span>
            </button>
          );
        })}
        <p className="px-2 pt-1.5 font-mono text-[0.55rem] text-[var(--bp-panel-muted)]">
          <span className="text-[var(--bp-positive)]">niv ~ %</span> every cycle above is a real
          project — click a row to open its case study
        </p>
      </div>
    </div>
  );
}
