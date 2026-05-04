import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";
import { DoodleArrow, DoodleSpark } from "@/components/ui/doodle-accents";

const featuredWork = [
  {
    name: "Anand PAG / Cintas",
    descriptor: "Enterprise process transformation",
    role: "Product Consultant",
    scope: "Mapped cross-functional workflows and uncovered where automation and clearer handoffs could remove friction.",
    outcome: "Turned process complexity into clearer operational decisions across teams and departments.",
    href: "/journey",
    accent: "from-[#f3efe6] via-[#f7f5ef] to-[#ece7dd]",
    span: "lg:col-span-7",
  },
  {
    name: "SkinGenius",
    descriptor: "AI-powered skincare platform",
    role: "Product Manager",
    scope: "Refined onboarding and recommendation quality so the first session felt clearer, faster, and more personal.",
    outcome: "Improved engagement and quiz completion while strengthening the product’s retention story.",
    href: "/projects/skingenius",
    accent: "from-[#f7e1d8] via-[#f3e8e2] to-[#fff7f3]",
    span: "lg:col-span-5",
  },
  {
    name: "Nomad AI",
    descriptor: "AI valuation platform for SMB exits",
    role: "Consultant Product Manager",
    scope: "Defined pricing, analytics, and MVP structure for an AI-native financial SaaS product.",
    outcome: "Created a stronger monetization and measurement foundation for launch-stage growth.",
    href: "/projects/nomad-ai",
    accent: "from-[#e6ecf7] via-[#eef3fb] to-[#f7f9fc]",
    span: "lg:col-span-12",
  },
];

export const FeaturedWork = () => {
  const isClayNotionMode = siteConfig.experiments.clayNotionLanding;

  return (
    <section className="bg-transparent px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-5 border-t border-border/70 pt-8 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Featured Work
              </p>
              {isClayNotionMode ? (
                <div className="flex items-center gap-2 text-[#b37740]">
                  <span className="font-hand text-[1.28rem] leading-none">from messy to clear</span>
                  <DoodleSpark className="h-6 w-6 text-[#c48a56]" delay={0.1} />
                </div>
              ) : null}
            </div>
            <h2 className={cn("text-3xl font-bold text-foreground md:text-5xl", isClayNotionMode && "font-editorial font-medium tracking-[-0.05em] md:text-[3.3rem]")}>
              Projects where I translated ambiguity into product structure.
            </h2>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground">
              A few case-study snapshots from consulting, AI product work, and systems thinking. The
              through-line is simple: find the signal, align the people, and make the next product
              move easier to see.
            </p>
          </div>
          {isClayNotionMode ? (
            <div className="hidden items-end justify-end lg:flex">
              <DoodleArrow className="h-10 w-28 text-[#c48a56]" delay={0.18} />
            </div>
          ) : null}
          <Link href="/work">
            <span className="inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary">
              See the full work archive
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-12 lg:gap-6">
          {featuredWork.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
              whileHover={isClayNotionMode ? { y: -4, rotate: index % 2 === 0 ? -0.25 : 0.25 } : undefined}
              className={cn(
                `group relative overflow-hidden rounded-[2rem] border border-border/80 bg-gradient-to-br ${item.accent} p-6 shadow-[0_20px_70px_-55px_rgba(15,23,42,0.35)] ${item.span}`,
                isClayNotionMode && "border-border/60 shadow-[0_24px_60px_-42px_rgba(81,57,24,0.18)]",
              )}
            >
              {isClayNotionMode ? (
                <>
                  <div className="absolute left-6 top-0 h-1.5 w-24 rounded-full bg-[#d7a166]/70" />
                  <div className="absolute right-6 top-4 font-hand text-[1.45rem] leading-none text-[#aa6d39]">
                    0{index + 1}
                  </div>
                </>
              ) : null}
              <div className="flex h-full flex-col justify-between gap-8">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    <span className="rounded-full bg-white/70 px-3 py-1">{item.descriptor}</span>
                    <span className="rounded-full bg-white/55 px-3 py-1">{item.role}</span>
                  </div>

                  <div className="space-y-3">
                    <h3 className={cn("text-2xl font-bold text-foreground md:text-3xl", isClayNotionMode && "font-editorial font-medium tracking-[-0.04em]")}>{item.name}</h3>
                    <p className="max-w-3xl text-base leading-7 text-foreground/80">{item.scope}</p>
                    <div className="paper-panel max-w-3xl px-4 py-4">
                      <p className="font-hand text-[1.2rem] leading-none text-[#a46a39]">impact note</p>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.outcome}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 border-t border-foreground/10 pt-4">
                  <p className="text-sm text-muted-foreground">A quick preview here, with deeper context on the linked page.</p>
                  <Link href={item.href}>
                    <span className="inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-foreground transition-transform duration-200 group-hover:translate-x-1">
                      Open case study
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
