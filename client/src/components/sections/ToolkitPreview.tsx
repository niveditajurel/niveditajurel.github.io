import { motion, useReducedMotion } from "framer-motion";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { PixelWalker } from "@/components/ui/PixelWalker";
import { toolkitGroups } from "@/data/toolkit";

export const ToolkitPreview = () => {
  const reduceMotion = !!useReducedMotion();

  return (
    <section id="toolkit" className="mistral-section">
      <div className="mistral-section-shell">
        <PixelWalker duration={78} delay={7} coding />
        <SectionIntro
          number="03"
          label="AI-native stack"
          title="How I move from thought to shipped work."
          description="A working stack for research, prototyping, automation, data, and delivery. Tools stay secondary to the product decision."
          icon="chip"
          compact
          headingStyle="editorial"
        />

        <div className="mistral-surface overflow-hidden rounded-none shadow-none">
          {toolkitGroups.map((group, index) => (
            <motion.div
              key={group.id}
              initial={reduceMotion ? false : { opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.4,
                delay: index * 0.045,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid gap-3 border-b border-[var(--bp-hairline)] px-4 py-3.5 last:border-b-0 sm:grid-cols-[13rem_minmax(0,1fr)] sm:items-center sm:px-5"
            >
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-[0.64rem] font-bold tabular-nums text-[var(--bp-cobalt)]">
                  {group.stage}
                </span>
                <span className="text-[0.82rem] font-semibold tracking-[-0.01em] text-[var(--bp-ink)]">
                  {group.title}
                </span>
              </div>

              <div className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1.5">
                {group.heroItems.map((tool) => (
                  <span
                    key={tool}
                    className="rounded border border-[var(--bp-cobalt)]/20 bg-[var(--bp-cobalt-subtle)]/60 px-2.5 py-0.5 font-mono text-[0.69rem] font-medium text-[var(--bp-cobalt-hover)]"
                  >
                    {tool}
                  </span>
                ))}
                <span className="mx-1 hidden h-3 w-px bg-[var(--bp-hairline)] sm:block" />
                {group.items.map((tool) => (
                  <span
                    key={tool}
                    className="whitespace-nowrap text-[0.69rem] font-medium text-[var(--bp-ink-muted)]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
