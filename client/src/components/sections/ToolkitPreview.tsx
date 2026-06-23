import { motion } from "framer-motion";
import {
  Blocks,
  Bot,
  BrainCircuit,
  ChartNoAxesCombined,
  Rocket,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";
import { toolkitGroups } from "@/data/toolkit";

const icons = [BrainCircuit, Blocks, Bot, Rocket, ChartNoAxesCombined];

const toolkitCardStyles: Record<
  string,
  {
    surface: string;
    previewSurface: string;
    previewBorder: string;
    iconTone: string;
    stageTone: string;
    titleTone: string;
    textTone: string;
    chipTone: string;
    strongChipTone: string;
  }
> = {
  think: {
    surface: "from-[#fff3e3] via-[#fffaf4] to-[#f7e4cb]",
    previewSurface: "from-[#ffe7cf] via-[#fff6eb] to-[#ffd8b2]",
    previewBorder: "border-[#efc89a]",
    iconTone: "bg-[#fff5ea] text-[#c46f21]",
    stageTone: "text-[#bb6a20]",
    titleTone: "text-[#3a2414]",
    textTone: "text-[#7a5640]",
    chipTone: "border-[#ebcba9] bg-white/78 text-[#8b6248]",
    strongChipTone: "border-[#dcaf79] bg-[#fff1dd] text-[#9f5b22]",
  },
  prototype: {
    surface: "from-[#edf3ff] via-[#fbfcff] to-[#e0e9ff]",
    previewSurface: "from-[#dce7ff] via-[#f2f6ff] to-[#cfdfff]",
    previewBorder: "border-[#b9cbf2]",
    iconTone: "bg-white/88 text-[#416bc5]",
    stageTone: "text-[#3c63bb]",
    titleTone: "text-[#1f2c48]",
    textTone: "text-[#5f6f91]",
    chipTone: "border-[#c8d5f3] bg-white/78 text-[#65779d]",
    strongChipTone: "border-[#a7bceb] bg-[#e8efff] text-[#3d60a8]",
  },
  automate: {
    surface: "from-[#eef8ec] via-[#fbfef9] to-[#dbeed8]",
    previewSurface: "from-[#dbf0d5] via-[#f3fbef] to-[#cfe7ca]",
    previewBorder: "border-[#bcdcb5]",
    iconTone: "bg-white/88 text-[#4d8650]",
    stageTone: "text-[#4a7a48]",
    titleTone: "text-[#21351f]",
    textTone: "text-[#5c7758]",
    chipTone: "border-[#c8e0c4] bg-white/78 text-[#617a5f]",
    strongChipTone: "border-[#a4c89f] bg-[#ebf8e7] text-[#456d43]",
  },
  ship: {
    surface: "from-[#fff1e6] via-[#fffaf5] to-[#f7dfcf]",
    previewSurface: "from-[#ffdcca] via-[#fff1e6] to-[#ffd1b9]",
    previewBorder: "border-[#efc0a2]",
    iconTone: "bg-white/88 text-[#c46836]",
    stageTone: "text-[#bb6130]",
    titleTone: "text-[#402315]",
    textTone: "text-[#7d5742]",
    chipTone: "border-[#ebc9b3] bg-white/78 text-[#8a674f]",
    strongChipTone: "border-[#dda77f] bg-[#fff0e3] text-[#a1532a]",
  },
  learn: {
    surface: "from-[#eef3ff] via-[#fafcff] to-[#e0e8f7]",
    previewSurface: "from-[#dbe6fb] via-[#f2f6ff] to-[#d1ddf4]",
    previewBorder: "border-[#bccae5]",
    iconTone: "bg-white/88 text-[#4f689d]",
    stageTone: "text-[#4f6590]",
    titleTone: "text-[#25324a]",
    textTone: "text-[#60708c]",
    chipTone: "border-[#cad6ea] bg-white/78 text-[#687892]",
    strongChipTone: "border-[#afbfdf] bg-[#edf3ff] text-[#4f689d]",
  },
};

export const ToolkitPreview = () => {
  const isClayNotionMode = siteConfig.experiments.clayNotionLanding;

  return (
    <section id="toolkit" className="bg-transparent px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl border-t border-border/70 pt-6 lg:pt-7">
        <div className="mb-5 space-y-3 lg:mb-6">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              How I Build With AI
            </p>
            <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
              <h2
                className={cn(
                  "clay-section-heading max-w-[18ch] text-foreground md:text-[2.15rem]",
                  isClayNotionMode && "font-editorial",
                )}
              >
                My AI-first product builder stack.
              </h2>
              <p className="max-w-[42rem] text-[0.98rem] leading-7 text-muted-foreground xl:text-right">
                I build repeatable workflows around AI so thinking, prototyping, execution, and
                iteration all move faster without making the work feel messier.
              </p>
            </div>
          </div>
        </div>

        <div className="grid auto-rows-fr gap-4 md:grid-cols-2 xl:grid-cols-5">
          {toolkitGroups.map((group, index) => {
            const Icon = icons[index % icons.length];
            const style = toolkitCardStyles[group.id] ?? toolkitCardStyles.learn;

            return (
              <motion.article
                key={group.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
                className={cn(
                  "group relative flex h-full min-h-[26rem] flex-col overflow-hidden rounded-[1.55rem] border border-[#ead8c8] bg-gradient-to-b p-4 shadow-[0_18px_42px_-34px_rgba(52,36,19,0.12)]",
                  style.surface,
                  isClayNotionMode && "bg-[#fffdf8]/94",
                )}
                whileHover={{ y: -4 }}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute right-3 top-3 h-20 w-20 rounded-full blur-2xl"
                  style={{ background: group.accent }}
                />

                <div
                  className={cn(
                    "relative mb-4 h-[9.5rem] overflow-hidden rounded-[1.2rem] border bg-gradient-to-br p-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]",
                    style.previewSurface,
                    style.previewBorder,
                  )}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span
                      className={cn(
                        "text-[0.7rem] font-semibold uppercase tracking-[0.2em]",
                        style.stageTone,
                      )}
                    >
                      {group.stage}
                    </span>
                    <span className={cn("inline-flex rounded-full p-2 shadow-sm", style.iconTone)}>
                      <Icon className="h-4 w-4" />
                    </span>
                  </div>

                  <div className="mt-3 h-[5.65rem]">
                    <ToolkitMiniPreview groupId={group.id} />
                  </div>
                </div>

                <div className="flex flex-1 flex-col">
                  <h3
                    className={cn(
                      "min-h-[3.2rem] text-balance text-[1.05rem] font-semibold leading-[1.02] tracking-[-0.03em]",
                      style.titleTone,
                      isClayNotionMode && "font-editorial text-[1.14rem]",
                    )}
                  >
                    {group.title}
                  </h3>

                  <p className={cn("mt-3 min-h-[5.4rem] text-[0.9rem] leading-6", style.textTone)}>
                    {group.description}
                  </p>

                  <div className="mt-auto grid grid-cols-2 gap-2 pt-4">
                    {group.items.map((item, itemIndex) => (
                      <span
                        key={item}
                        className={cn(
                          "truncate rounded-full border px-2.5 py-1 text-[0.68rem]",
                          itemIndex === 0
                            ? cn("col-span-2 font-semibold uppercase tracking-[0.12em]", style.strongChipTone)
                            : style.chipTone,
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

function ToolkitMiniPreview({ groupId }: { groupId: string }) {
  if (groupId === "think") {
    return (
      <div className="grid h-full grid-cols-3 gap-2">
        {["Signal", "Scope", "Outcome"].map((label, index) => (
          <div
            key={label}
            className="flex flex-col justify-between rounded-[0.95rem] border border-white/60 bg-white/78 px-2.5 py-2"
          >
            <div className="text-[0.64rem] font-semibold uppercase tracking-[0.14em] text-[#bb6a20]">
              0{index + 1}
            </div>
            <div className="text-sm font-semibold text-[#3a2414]">{label}</div>
          </div>
        ))}
      </div>
    );
  }

  if (groupId === "prototype") {
    return (
      <div className="grid h-full grid-cols-[minmax(0,1fr)_3.7rem] gap-2">
        <div className="rounded-[0.95rem] border border-white/62 bg-white/82 p-2.5">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#98b6f0]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#c0d2f6]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#dce7fb]" />
          </div>
          <div className="mt-3 h-2.5 rounded-full bg-[#d4e1ff]" />
          <div className="mt-2 grid grid-cols-2 gap-2">
            <div className="h-10 rounded-[0.8rem] bg-[#eaf1ff]" />
            <div className="h-10 rounded-[0.8rem] bg-[#dde8ff]" />
          </div>
        </div>
        <div className="rounded-[1rem] border border-white/62 bg-white/82 p-2">
          <div className="h-full rounded-[0.85rem] bg-[#edf3ff] p-2">
            <div className="h-2 rounded-full bg-[#c9d8f6]" />
            <div className="mt-2 h-8 rounded-[0.75rem] bg-white/90" />
            <div className="mt-2 h-2 rounded-full bg-[#dbe6fb]" />
          </div>
        </div>
      </div>
    );
  }

  if (groupId === "automate") {
    return (
      <div className="flex h-full items-center justify-center rounded-[0.95rem] border border-white/58 bg-white/72 p-2">
        <svg viewBox="0 0 220 88" aria-hidden="true" className="h-full w-full">
          <path
            d="M38 24H96M124 24H182M68 24V62M152 24V62"
            fill="none"
            stroke="#78ae73"
            strokeDasharray="5 5"
            strokeLinecap="round"
            strokeWidth="3"
          />
          <rect x="26" y="13" width="42" height="20" rx="10" fill="#eff9ec" />
          <rect x="96" y="13" width="42" height="20" rx="10" fill="#d9edd4" />
          <rect x="166" y="13" width="28" height="20" rx="10" fill="#eff9ec" />
          <rect x="54" y="52" width="42" height="20" rx="10" fill="#d9edd4" />
          <rect x="138" y="52" width="42" height="20" rx="10" fill="#eff9ec" />
        </svg>
      </div>
    );
  }

  if (groupId === "ship") {
    return (
      <div className="grid h-full gap-2">
        {["Stories", "UAT", "Launch"].map((label, index) => (
          <div key={label} className="flex items-center gap-2.5 rounded-[0.95rem] border border-white/58 bg-white/74 px-2.5 py-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#fff1e6] text-[0.68rem] font-semibold text-[#bb6130]">
              {index + 1}
            </span>
            <div className="h-2 flex-1 rounded-full bg-[#efc6a8]" />
            <span className="text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-[#9c603c]">
              {label}
            </span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex h-full items-center rounded-[0.95rem] border border-white/58 bg-white/74 p-2.5">
      <svg viewBox="0 0 220 88" aria-hidden="true" className="h-full w-full">
        <rect x="20" y="46" width="22" height="22" rx="8" fill="#ced9ef" />
        <rect x="56" y="34" width="22" height="34" rx="8" fill="#bfcde6" />
        <rect x="92" y="22" width="22" height="46" rx="8" fill="#aebfde" />
        <path
          d="M20 62C42 58 61 46 80 46C100 46 108 28 132 28C156 28 166 42 200 18"
          fill="none"
          stroke="#5470a4"
          strokeLinecap="round"
          strokeWidth="4"
        />
        <circle cx="114" cy="28" r="5" fill="#5470a4" />
        <circle cx="200" cy="18" r="5" fill="#5470a4" />
      </svg>
    </div>
  );
}
