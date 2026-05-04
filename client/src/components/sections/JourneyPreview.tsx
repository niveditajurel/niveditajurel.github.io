import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";

const journeyMoments = [
  {
    period: "Early foundation",
    title: "Entrepreneurship and community-building at VIT",
    description:
      "Building startup-facing communities taught me how to create momentum, earn trust, and keep people moving toward a shared goal.",
  },
  {
    period: "Cross-sector growth",
    title: "From software and analytics into product roles",
    description:
      "Work across health tech, edtech, fintech, and enterprise operations taught me how to translate between users, data, and delivery teams.",
  },
  {
    period: "Current chapter",
    title: "AI-first product work with a systems mindset",
    description:
      "My current focus is on AI products, operational clarity, and stronger foundations for decisions before and after launch.",
  },
];

export const JourneyPreview = () => {
  const isClayNotionMode = siteConfig.experiments.clayNotionLanding;

  return (
    <section className="bg-transparent px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl border-t border-border/70 pt-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Journey Preview
            </p>
            <h2 className={cn("text-3xl font-bold text-foreground md:text-4xl", isClayNotionMode && "font-editorial font-medium tracking-[-0.045em] md:text-[3rem]")}>
              The through-line is not one title. It is the way each step sharpened the product lens.
            </h2>
            <p className="max-w-xl text-base leading-7 text-muted-foreground">
              The path runs through entrepreneurship communities, cross-sector roles, and a steady move
              toward product work that balances systems thinking with empathy.
            </p>
            <Link href="/journey">
              <span className="inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary">
                Read the full journey
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>

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
                <h3 className={cn("text-xl font-semibold text-foreground", isClayNotionMode && "font-editorial font-medium text-[1.42rem] tracking-[-0.03em]")}>{moment.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{moment.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
