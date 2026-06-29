import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";
import { toolkitGroups } from "@/data/toolkit";

export const ToolkitPreview = () => {
  const isClayNotionMode = siteConfig.experiments.clayNotionLanding;

  return (
    <section id="toolkit" className="bg-transparent px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-7xl border-t border-border/70 pt-6 lg:pt-7">

        {/* Header — compact two-col */}
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between lg:mb-7">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#b9653d]">
              How I Build With AI
            </p>
            <h2 className={cn(
              "mt-1 text-[1.6rem] font-semibold leading-[1.05] tracking-[-0.03em] text-[#1f1612]",
              isClayNotionMode && "font-editorial",
            )}>
              My AI-first stack.
            </h2>
          </div>
          <p className="max-w-[32rem] text-[0.82rem] leading-[1.6] text-[#9a8070] sm:text-right">
            Tools I reach for across thinking, building, and shipping.
          </p>
        </div>

        {/* Compact rows — one line per category */}
        <div className="overflow-hidden rounded-2xl border border-[#e8d8c8]/70 bg-[#fdfaf6]">
          {toolkitGroups.map((group, index) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className={cn(
                "flex flex-wrap items-center gap-x-3 gap-y-2 px-4 py-3 sm:flex-nowrap sm:gap-x-4 sm:px-5",
                index < toolkitGroups.length - 1 && "border-b border-[#ece0d0]/70",
              )}
            >
              {/* Stage + category */}
              <div className="flex shrink-0 items-center gap-2 sm:w-[13rem]">
                <span
                  className="font-mono text-[0.64rem] font-bold tabular-nums"
                  style={{ color: group.color }}
                >
                  {group.stage}
                </span>
                <span className={cn(
                  "text-[0.8rem] font-semibold tracking-[-0.01em] text-[#2a1f14]",
                  isClayNotionMode && "font-editorial text-[0.88rem]",
                )}>
                  {group.title}
                </span>
              </div>

              {/* Hero chips */}
              <div className="flex shrink-0 items-center gap-1.5">
                {group.heroItems.map((tool) => (
                  <span
                    key={tool}
                    className="inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[0.7rem] font-semibold"
                    style={{
                      borderColor: `${group.color}38`,
                      backgroundColor: `${group.color}0d`,
                      color: group.color,
                    }}
                  >
                    <span className="h-1 w-1 rounded-full" style={{ backgroundColor: group.color }} />
                    {tool}
                  </span>
                ))}
              </div>

              {/* Separator */}
              <span className="hidden h-3 w-px shrink-0 bg-[#d8c8b4] sm:block" />

              {/* Regular tools — small, muted */}
              <div className="flex flex-wrap items-center gap-1.5 sm:flex-nowrap sm:overflow-hidden">
                {group.items.map((tool) => (
                  <span
                    key={tool}
                    className="shrink-0 whitespace-nowrap text-[0.68rem] font-medium text-[#9a7e6a]"
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
