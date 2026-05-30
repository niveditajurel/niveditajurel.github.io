import { motion } from "framer-motion";
import { Blocks, Bot, BrainCircuit, ChartNoAxesCombined, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";
import { toolkitGroups } from "@/data/toolkit";

const icons = [BrainCircuit, Blocks, Bot, Rocket, ChartNoAxesCombined];

export const ToolkitPreview = () => {
  const isClayNotionMode = siteConfig.experiments.clayNotionLanding;

  return (
    <section id="toolkit" className="bg-transparent px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl border-t border-border/70 pt-8">
        <div className="mb-8 space-y-3">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              How I Build With AI
            </p>
            <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
              <h2
                className={cn(
                  "clay-section-heading max-w-[19ch] text-foreground md:text-[2.3rem]",
                  isClayNotionMode && "font-editorial",
                )}
              >
                My AI-first product builder stack.
              </h2>
              <p className="max-w-[43rem] text-base leading-7 text-muted-foreground xl:text-right">
                I do not just use AI tools. I build workflows around them. This is the living stack
                behind how I think faster, prototype faster, automate repetitive execution work,
                and ship with clearer product direction.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {toolkitGroups.map((group, index) => {
            const Icon = icons[index % icons.length];

            return (
              <motion.article
                key={group.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
                className={cn(
                  "relative overflow-hidden rounded-[1.7rem] border border-border/60 bg-background/88 p-5 shadow-[0_18px_50px_-40px_rgba(15,23,42,0.18)] backdrop-blur-sm",
                  isClayNotionMode && "bg-[#fffdf8]/90 shadow-[0_20px_50px_-38px_rgba(81,57,24,0.14)]",
                )}
                whileHover={{ y: -4 }}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute right-3 top-3 h-24 w-24 rounded-full blur-2xl"
                  style={{ background: group.accent }}
                />

                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="inline-flex rounded-full bg-primary/10 p-2.5 text-primary">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {group.stage}
                    </span>
                  </div>

                  <h3
                    className={cn(
                      "clay-card-title text-[1.28rem] leading-[1.08] text-foreground",
                      isClayNotionMode && "font-editorial text-[1.45rem]",
                    )}
                  >
                    {group.title}
                  </h3>

                  <p className="text-sm leading-6 text-muted-foreground">{group.description}</p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {group.items.map((item, itemIndex) => (
                      <span
                        key={item}
                        className={cn(
                          "rounded-full border px-3 py-1 text-xs text-muted-foreground",
                          itemIndex === 0
                            ? "border-border/60 bg-background/78 font-semibold uppercase tracking-[0.12em] text-foreground/72"
                            : "border-border/50 bg-background/58",
                        )}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
