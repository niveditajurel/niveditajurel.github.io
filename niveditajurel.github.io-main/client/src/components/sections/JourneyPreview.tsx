import { motion } from "framer-motion";
import { PixelIcon } from "@/components/ui/PixelIcon";
import { PixelWalker } from "@/components/ui/PixelWalker";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";

const journeyPolaroids = [
  { src: "/wild/portrait.jpg", caption: "techstars · boston", top: "0rem", left: "2%", rotate: -5 },
  { src: "/wild/whiteboard.jpg", caption: "sketching flows", top: "6rem", left: "40%", rotate: 4 },
  { src: "/wild/crowd.jpg", caption: "startup weekend", top: "12.5rem", left: "8%", rotate: -2 },
];

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
      <div className="relative mx-auto max-w-7xl border-t border-[var(--bp-hairline)] pt-6 lg:pt-7">
        <PixelWalker duration={50} delay={5} />
        <div className="mb-6 space-y-3">
          <div className="space-y-3">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.24em] text-[var(--bp-ink-muted)]">
              <PixelIcon name="flag" size={13} className="mr-2 inline-block align-[-2px]" />
              06 — Journey
            </p>
            <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
              <h2 className="font-statement max-w-[16ch] text-4xl font-semibold leading-[1.05] tracking-tight text-[var(--bp-ink)] md:text-[2.6rem]">
                How the product lens got sharper over time.
              </h2>
              <div className="max-w-[38rem] space-y-3 xl:text-right">
                <p className="text-[1rem] leading-7 text-muted-foreground">
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
          <div className="relative hidden lg:block">
            <div className="relative mx-auto min-h-[24rem] w-full max-w-[22rem]">
              {journeyPolaroids.map((polaroid, index) => (
                <motion.figure
                  key={polaroid.src}
                  className="absolute z-0 w-[58%] rounded-md border border-[var(--bp-hairline)] bg-white p-2 pb-1 shadow-[0_24px_48px_-20px_rgba(31,31,31,0.35)] hover:z-30"
                  style={{ top: polaroid.top, left: polaroid.left }}
                  initial={{ opacity: 0, y: 26, rotate: 0 }}
                  whileInView={{ opacity: 1, y: 0, rotate: polaroid.rotate }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: index * 0.12, ease: "easeOut" }}
                  whileHover={{ scale: 1.05, rotate: 0 }}
                >
                  <div className="aspect-[4/5] overflow-hidden rounded-sm bg-[var(--bp-cobalt-subtle)]/40">
                    <img
                      src={polaroid.src}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <figcaption className="font-hand py-1.5 text-center text-[0.85rem] leading-tight text-[var(--bp-ink)]">
                    {polaroid.caption}
                  </figcaption>
                </motion.figure>
              ))}
            </div>
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
                className="rounded-xl border border-[var(--bp-hairline)] bg-white px-6 py-5 transition-shadow duration-300 hover:shadow-[0_12px_32px_-16px_rgba(22,24,29,0.12)]"
              >
                <div className="mb-3 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[var(--bp-cobalt)]">
                  {moment.period}
                </div>
                <h3 className="font-fraunces text-[1.42rem] font-semibold leading-[1.08] tracking-tight text-[var(--bp-ink)]">{moment.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--bp-ink-muted)]">{moment.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
