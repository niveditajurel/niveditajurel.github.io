import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";

const journeyMoments = [
  {
    period: "Current chapter",
    title: "AI-first product work with a systems mindset",
    description:
      "My current focus is on AI products, exploring and talking through almost everything AI-related, and building stronger foundations for decisions before and after launch.",
  },
  {
    period: "Cross-sector growth",
    title: "From software and analytics into product roles",
    description:
      "Work across health tech, edtech, fintech, and enterprise operations taught me how to translate between users, data, and delivery teams.",
  },
  {
    period: "Early foundation",
    title: "Entrepreneurship and community-building at VIT",
    description:
      "Building startup-facing communities taught me how to create momentum, earn trust, and keep people moving toward a shared goal.",
  },
];

export const JourneyPreview = () => {
  const isClayNotionMode = siteConfig.experiments.clayNotionLanding;

  return (
    <section id="journey-preview" className="bg-transparent px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl border-t border-border/70 pt-6 lg:pt-7">
        <div className="mb-6 space-y-3">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Journey Preview
            </p>
            <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
              <h2 className={cn("clay-section-heading max-w-[14ch] text-foreground md:text-[2.6rem]", isClayNotionMode && "font-editorial")}>
                How the product lens got sharper over time.
              </h2>
              <div className="max-w-[38rem] space-y-3 xl:text-right">
                <p className="text-base leading-7 text-muted-foreground">
                  The path now starts with AI-first product work, broad exploration and
                  conversation across almost anything AI-related, then traces back through the
                  earlier chapters that shaped the lens underneath it.
                </p>
                <Link href="/journey">
                  <span className="inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary xl:ml-auto">
                    Read the full journey
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start">
          <div className="hidden lg:block" />
          <div className="grid gap-4">
            {journeyMoments.map((moment, index) => (
              <motion.article
                key={moment.title}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
                whileHover={isClayNotionMode ? { y: -3 } : undefined}
                className={cn(
                  "rounded-[1.75rem] border border-border/60 bg-card/92 px-6 py-5 shadow-[0_18px_60px_-50px_rgba(15,23,42,0.28)] backdrop-blur-sm",
                  isClayNotionMode && "bg-[#fffdf8]/88 shadow-[0_20px_50px_-38px_rgba(81,57,24,0.16)]",
                )}
              >
                <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  {moment.period}
                </div>
                <h3 className={cn("clay-card-title text-foreground", isClayNotionMode && "font-editorial text-[1.42rem]")}>{moment.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{moment.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
