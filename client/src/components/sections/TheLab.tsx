import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Bot, Compass, NotebookPen } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";

const explorations = [
  {
    title: "AI-native interaction patterns",
    description: "Exploring how conversational flows, recommendations, and decision support can feel useful instead of performative.",
    icon: Bot,
  },
  {
    title: "Product systems and workflows",
    description: "Testing ways to make discovery, prioritization, and stakeholder alignment feel structured without becoming rigid.",
    icon: Compass,
  },
  {
    title: "Notes, syntheses, and teardown thinking",
    description: "Collecting lightweight observations on products, communities, and user behavior that sharpen how I frame opportunities.",
    icon: NotebookPen,
  },
];

export const TheLab = () => {
  const isClayNotionMode = siteConfig.experiments.clayNotionLanding;

  return (
    <section className={cn("bg-white/54 px-4 py-16 backdrop-blur-[1px] sm:px-6 lg:px-8 lg:py-24", isClayNotionMode && "bg-[#fff8ef]/62")}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl space-y-3 border-t border-border/60 pt-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Selected Explorations
          </p>
          <h2 className={cn("text-3xl font-bold text-foreground md:text-4xl", isClayNotionMode && "font-editorial font-medium tracking-[-0.045em] md:text-[2.9rem]")}>
            A smaller view into the ideas I keep pressure-testing outside the core portfolio.
          </h2>
          <p className="text-base leading-7 text-muted-foreground">
            This section stays lighter than the featured work. It is here to show curiosity, initiative,
            and how I keep sharpening my product lens through smaller experiments.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {explorations.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
                whileHover={isClayNotionMode ? { y: -3 } : undefined}
                className={cn(
                  "rounded-[1.75rem] border border-border/60 bg-background/90 p-6 shadow-[0_18px_60px_-50px_rgba(15,23,42,0.28)] backdrop-blur-sm",
                  isClayNotionMode && "bg-[#fffdf8]/88 shadow-[0_20px_50px_-38px_rgba(81,57,24,0.16)]",
                )}
              >
                <div className="mb-5 inline-flex rounded-full bg-primary/10 p-3 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="space-y-3">
                  <h3 className={cn("text-xl font-semibold text-foreground", isClayNotionMode && "font-editorial font-medium text-[1.45rem] tracking-[-0.03em]")}>{item.title}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">{item.description}</p>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-8">
          <Link href="/about">
            <span className="inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary">
              More on how I think
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};
