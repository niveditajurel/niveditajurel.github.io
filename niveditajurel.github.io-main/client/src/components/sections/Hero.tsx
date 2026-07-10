import { Link } from "wouter";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { siteConfig } from "@/data/site";

/* ── Hero — "Editorial Overlap" (design handoff 6b) ──
   Full-bleed portrait, left legibility wash, overlapping headline,
   pixel corner block, shipped-stats terminal chip. */

const shippedStats = [
  "▸ vendor-ops 95→100%",
  "▸ nomad-ai 608",
  "▸ skingenius +25%",
];

export const Hero = () => {
  const reduceMotion = !!useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      className="relative isolate overflow-hidden"
      style={{ background: "#F2E3D0" }}
    >
      {/* Portrait — full-bleed background */}
      <motion.img
        src="/hero-portrait.jpg"
        alt="Nivedita, product manager and builder, in front of a whiteboard of hand-drawn product doodles"
        className="absolute inset-0 h-full w-full object-cover object-[70%_2%] lg:object-[82%_6%]"
        style={{ transformOrigin: "80% 30%" }}
        initial={reduceMotion ? { opacity: 1, scale: 1.06 } : { opacity: 0, scale: 1.12 }}
        animate={{ opacity: 1, scale: 1.06 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Legibility wash — vertical (mobile), horizontal-left (desktop) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 lg:hidden"
        style={{
          background:
            "linear-gradient(0deg, rgba(251,244,228,0.98) 0%, rgba(251,244,228,0.88) 26%, rgba(251,244,228,0.35) 52%, rgba(251,244,228,0) 72%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden lg:block"
        style={{
          background:
            "linear-gradient(96deg, rgba(251,244,228,0.98) 0%, rgba(251,244,228,0.9) 30%, rgba(251,244,228,0.35) 52%, rgba(251,244,228,0) 66%)",
        }}
      />

      {/* Pixel corner block, top-left */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 z-10 grid"
        style={{ gridTemplateColumns: "repeat(3, 16px)", gridTemplateRows: "repeat(3, 16px)" }}
      >
        <div style={{ background: "#EE5715" }} /><div style={{ background: "#F59B31" }} /><div />
        <div style={{ background: "#F59B31" }} /><div style={{ background: "#FBC748" }} /><div />
        <div /><div /><div style={{ background: "#FBC748" }} />
      </div>

      {/* Content */}
      <div className="relative z-20 mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl items-end px-5 pb-24 sm:px-6 lg:items-center lg:px-16 lg:pb-0">
        <motion.div
          className="flex w-full max-w-[640px] flex-col gap-6 lg:gap-[26px]"
          variants={reduceMotion ? undefined : container}
          initial={reduceMotion ? undefined : "hidden"}
          animate={reduceMotion ? undefined : "show"}
        >
          {/* Eyebrow */}
          <motion.p
            variants={reduceMotion ? undefined : item}
            className="font-mono flex items-center gap-2.5 text-[0.72rem] font-medium uppercase tracking-[0.28em] text-[#8A7F6E]"
          >
            <span
              aria-hidden="true"
              className="inline-block h-2.5 w-2.5"
              style={{ background: "#EE5715", boxShadow: "10px 0 0 #F59B31" }}
            />
            <span className="ml-2.5">Nivedita — PM + Builder</span>
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={reduceMotion ? undefined : item}
            className="font-fraunces m-0 font-normal leading-[1.02] text-[#23201B]"
            style={{ fontSize: "clamp(2.9rem, 5.6vw, 4.75rem)", textWrap: "pretty" }}
          >
            I ship the product<br />
            other PMs write<br />
            <span className="italic" style={{ color: "#EE5715" }}>decks</span> about.
          </motion.h1>

          {/* Subhead */}
          <motion.p
            variants={reduceMotion ? undefined : item}
            className="m-0 max-w-[420px] text-[1.05rem] leading-[1.6] text-[#6E665A] sm:text-[1.125rem]"
          >
            Former engineer turned PM. Ambiguous, integration-heavy problems in — working,
            measured software out.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={reduceMotion ? undefined : item} className="flex flex-wrap gap-3.5">
            <Link href="/projects">
              <span className="font-mono inline-flex cursor-pointer items-center rounded-lg px-[26px] py-[15px] text-[0.9rem] font-medium text-[#FFF6E8] transition-colors duration-200"
                style={{ background: "#EE5715" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#D94B0F")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#EE5715")}
              >
                Tour the product →
              </span>
            </Link>
            <a
              href={siteConfig.links.resume}
              target="_blank"
              rel="noreferrer"
              className="font-mono inline-flex items-center rounded-lg border-[1.5px] px-[26px] py-[15px] text-[0.9rem] font-medium text-[#23201B] transition-colors duration-200 hover:border-[#EE5715]/50"
              style={{ background: "#FFFDF7", borderColor: "#D8CDB9" }}
            >
              Spec sheet ↗
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Shipped-stats terminal chip, bottom-right */}
      <motion.div
        aria-hidden="true"
        initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
        className="font-mono absolute bottom-4 right-4 z-20 flex max-w-[calc(100%-2rem)] flex-wrap gap-x-5 gap-y-1 rounded-[10px] px-4 py-[11px] text-[0.78rem] text-[#6FE08B] lg:bottom-8 lg:right-11"
        style={{ background: "rgba(28,26,23,0.9)", boxShadow: "0 12px 30px rgba(35,32,27,0.25)" }}
      >
        {shippedStats.map((stat) => (
          <span key={stat} className="whitespace-nowrap">{stat}</span>
        ))}
      </motion.div>
    </section>
  );
};
