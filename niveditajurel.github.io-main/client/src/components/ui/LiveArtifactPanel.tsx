import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const pipelineStages = ["Received", "Processing", "Evidence", "Bundled"];

interface LiveArtifactPanelProps {
  className?: string;
}

export function LiveArtifactPanel({ className = "" }: LiveArtifactPanelProps) {
  const reduceMotion = !!useReducedMotion();
  const [activeStage, setActiveStage] = useState(reduceMotion ? pipelineStages.length - 1 : 0);

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setInterval(() => {
      setActiveStage((prev) => (prev + 1) % pipelineStages.length);
    }, 2200);
    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  return (
    <div className={`relative h-full overflow-hidden bg-[var(--bp-panel)] px-6 py-6 sm:px-8 ${className}`}>
      {/* Dot-matrix field */}
      <div aria-hidden="true" className="bp-dot-grid absolute inset-0" />

      <div className="relative flex h-full flex-col justify-center">
        {/* Panel header */}
        <div className="flex items-center gap-2.5 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[var(--bp-panel-muted)]">
          <span className="bp-live-dot h-1.5 w-1.5 rounded-full bg-[var(--bp-positive)]" />
          <span>Vendor Ops · Live</span>
        </div>

        {/* Pipeline stepper */}
        <div className="mt-8 flex items-start justify-between gap-2">
          {pipelineStages.map((stage, index) => {
            const isDone = index < activeStage;
            const isActive = index === activeStage;
            return (
              <div key={stage} className="flex flex-1 flex-col items-center gap-2.5">
                <div className="relative flex h-8 w-8 items-center justify-center">
                  {isActive && !reduceMotion && (
                    <span
                      key={`ripple-${activeStage}`}
                      className="bp-ripple absolute inset-0 rounded-full border border-[var(--bp-positive)]"
                    />
                  )}
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-full border font-mono text-xs transition-colors duration-300 ${
                      isDone || isActive
                        ? "border-[var(--bp-positive)] text-[var(--bp-positive)]"
                        : "border-[var(--bp-panel-muted)]/40 text-[var(--bp-panel-muted)]"
                    }`}
                  >
                    {isDone ? "✓" : index + 1}
                  </span>
                </div>
                <span
                  className={`font-mono text-[0.6rem] tracking-wide transition-colors duration-300 ${
                    isDone || isActive ? "text-[var(--bp-panel-ink)]" : "text-[var(--bp-panel-muted)]"
                  }`}
                >
                  {stage}
                </span>
              </div>
            );
          })}
        </div>

        {/* Metric footer */}
        <div className="mt-8 border-t border-white/10 pt-3.5 font-mono text-[0.65rem] text-[var(--bp-panel-muted)]">
          <span className="text-[var(--bp-positive)]">▲ 95→100%</span> reliability · 200+ bundles ·
          sync 2–4 min
        </div>
      </div>
    </div>
  );
}
