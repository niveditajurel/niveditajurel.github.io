import { motion } from "framer-motion";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { PixelWalker } from "@/components/ui/PixelWalker";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

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
  return (
    <section id="journey-preview" className="mistral-section">
      <div className="mistral-section-shell">
        <PixelWalker duration={75} delay={5} hearts />
        <SectionIntro
          number="05"
          label="Journey"
          title="The chapters behind the product lens."
          description="Engineering, cross-sector product work, and community-building shaped how I find signal and create momentum."
          icon="flag"
          headingStyle="editorial"
        />
        <div className="mb-6 flex justify-end">
          <Link href="/journey">
            <span className="inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-[var(--bp-ink)] transition-colors hover:text-[var(--bp-cobalt)]">
              Read the full journey
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
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
                  transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
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
                transition={{ duration: 0.48, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="mistral-surface rounded-none px-6 py-5 shadow-none"
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
