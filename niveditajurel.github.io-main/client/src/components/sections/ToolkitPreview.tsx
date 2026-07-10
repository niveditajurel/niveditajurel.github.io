import { motion } from "framer-motion";
import { PixelIcon } from "@/components/ui/PixelIcon";
import { PixelWalker } from "@/components/ui/PixelWalker";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";
import { toolkitGroups } from "@/data/toolkit";

export const ToolkitPreview = () => {
  const isClayNotionMode = siteConfig.experiments.clayNotionLanding;

  return (
    <section id="toolkit" className="bg-transparent px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
      <div className="relative mx-auto max-w-7xl border-t border-[var(--bp-hairline)] pt-6 lg:pt-7">
        <PixelWalker duration={78} delay={7} coding />

        {/* Header — compact two-col */}
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between lg:mb-7">
          <div>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.24em] text-[var(--bp-ink-muted)]">
              <PixelIcon name="chip" size={13} className="mr-2 inline-block align-[-2px]" />
              04 — How I Build With AI
            </p>
            <h2 className={cn(
              "font-statement mt-1 text-[1.6rem] font-semibold leading-[1.05] tracking-tight text-[var(--bp-ink)]",
            )}>
              My AI-first stack.
            </h2>
          </div>
          <p className="max-w-[32rem] text-[0.82rem] leading-[1.6] text-[var(--bp-ink-muted)] sm:text-right">
            Tools I reach for across thinking, building, and shipping.
          </p>
        </div>

        {/* Compact rows — one line per category */}
        <div className="overflow-hidden rounded-xl border border-[var(--bp-hairline)] bg-white">
          {toolkitGroups.map((group, index) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className={cn(
                "flex flex-wrap items-center gap-x-3 gap-y-2 px-4 py-3 sm:flex-nowrap sm:gap-x-4 sm:px-5",
                index < toolkitGroups.length - 1 && "border-b border-[var(--bp-hairline)]",
              )}
            >
              {/* Stage + category */}
              <div className="flex shrink-0 items-center gap-2 sm:w-[13rem]">
                <span className="font-mono text-[0.64rem] font-bold tabular-nums text-[var(--bp-cobalt)]">
                  {group.stage}
                </span>
                <span className={cn(
                  "text-[0.8rem] font-semibold tracking-[-0.01em] text-[var(--bp-ink)]",
                )}>
                  {group.title}
                </span>
              </div>

              {/* Hero chips */}
              <div className="flex shrink-0 items-center gap-1.5">
                {group.heroItems.map((tool) => (
                  <span
                    key={tool}
                    className="inline-flex items-center gap-1 rounded border border-[var(--bp-cobalt)]/20 bg-[var(--bp-cobalt-subtle)]/60 px-2.5 py-0.5 font-mono text-[0.7rem] font-medium text-[var(--bp-cobalt)]"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Separator */}
              <span className="hidden h-3 w-px shrink-0 bg-[var(--bp-hairline)] sm:block" />

              {/* Regular tools — small, muted */}
              <div className="flex flex-wrap items-center gap-1.5 sm:flex-nowrap sm:overflow-hidden">
                {group.items.map((tool) => (
                  <span
                    key={tool}
                    className="shrink-0 whitespace-nowrap text-[0.68rem] font-medium text-[var(--bp-ink-muted)]"
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
