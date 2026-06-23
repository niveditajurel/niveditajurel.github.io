import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import { DoodleArrow, DoodleUnderline } from "@/components/ui/doodle-accents";

const experienceSummary = "Former SWE · Startups + enterprise PM";

const snapshotSignals = [
  {
    eyebrow: "Systems",
    title: "Untangle messy workflows",
  },
  {
    eyebrow: "Execution",
    title: "Scope what teams can ship",
  },
  {
    eyebrow: "Customer lens",
    title: "Catch friction before it scales",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const revealVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
};

function FloatingAiNote({ shouldReduceMotion }: { shouldReduceMotion: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10, y: 10 }}
      animate={
        shouldReduceMotion
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 1, x: 0, y: [0, -3, 0] }
      }
      transition={
        shouldReduceMotion
          ? { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
          : { duration: 6.4, repeat: Infinity, ease: "easeInOut" }
      }
      className="flex items-center gap-2 text-[#e0a770] [text-shadow:0_0_18px_rgba(224,167,112,0.16)]"
    >
      <DoodleArrow className="hidden h-4 w-[3.7rem] text-[#e0a770] sm:block" delay={0.18} />
      <span className="font-hand text-[1.45rem] leading-none sm:text-[1.72rem]">AI-first</span>
    </motion.div>
  );
}

function WorkflowRail() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.78, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-[18.75rem] xl:mr-2"
    >
      <div className="relative overflow-hidden rounded-[1.7rem] border border-white/26 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(245,227,210,0.12))] px-4 py-4 shadow-[0_30px_80px_-50px_rgba(24,17,12,0.42),inset_0_1px_0_rgba(255,255,255,0.34)] backdrop-blur-[28px] saturate-[1.28]">
        <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[linear-gradient(180deg,rgba(255,255,255,0.28),rgba(255,255,255,0.08)_34%,rgba(255,255,255,0.03)_70%,rgba(255,255,255,0.1)_100%)]" />
        <div className="pointer-events-none absolute inset-x-5 top-2 h-10 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.24),transparent_72%)] blur-xl" />
        <div className="pointer-events-none absolute inset-y-5 left-0 w-px bg-white/18" />
        <div className="relative">
          <p className="section-kicker text-[#8b5431]">Product snapshot</p>
          <p className="mt-2 max-w-[14rem] text-[0.98rem] leading-7 text-[#2b1b12]">
            Technical range. Product judgment. Calm execution.
          </p>
          <div className="mt-4 space-y-2.5">
            {snapshotSignals.map((stage, index) => (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.22 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-[1rem] border border-white/18 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,247,239,0.08))] px-3.5 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-md"
              >
                <div className="min-w-0">
                  <p className="section-kicker text-[#8b5431]">{stage.eyebrow}</p>
                  <h2 className="mt-1.5 text-balance font-display text-[1.02rem] font-semibold leading-[1.18] text-[#22150d]">
                    {stage.title}
                  </h2>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function MobilePortraitCard({ shouldReduceMotion }: { shouldReduceMotion: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.72, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-[#f3e8dc] p-3 shadow-[0_34px_90px_-60px_rgba(0,0,0,0.78)] lg:hidden"
    >
      <motion.img
        src="/hero-background-alt-3.png"
        alt="Niv with product sketches around her"
        animate={
          shouldReduceMotion
            ? { opacity: 1, scale: 1 }
            : { opacity: 1, scale: [1, 1.01, 1] }
        }
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="h-[26rem] w-full rounded-[1.45rem] object-contain object-center"
      />
      <div className="pointer-events-none absolute inset-3 rounded-[1.45rem] bg-[linear-gradient(180deg,rgba(7,6,6,0.06)_0%,rgba(7,6,6,0.1)_38%,rgba(7,6,6,0.26)_100%),linear-gradient(90deg,rgba(7,6,6,0.28)_0%,rgba(7,6,6,0.12)_56%,rgba(7,6,6,0.16)_100%)]" />

      <div className="pointer-events-none absolute inset-x-6 bottom-7 flex flex-wrap gap-2">
        <span className="rounded-full border border-[#2c211b]/12 bg-[#fff8ef]/82 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#392b22] backdrop-blur-sm">
          Customer-first
        </span>
        <span className="rounded-full border border-[#2c211b]/12 bg-[#fff8ef]/82 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#392b22] backdrop-blur-sm">
          Systems thinking
        </span>
        <span className="rounded-full border border-[#2c211b]/12 bg-[#fff8ef]/82 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#392b22] backdrop-blur-sm">
          Shippable scope
        </span>
      </div>
    </motion.div>
  );
}

export const Hero = () => {
  const shouldReduceMotion = !!useReducedMotion();

  const scrollToFeaturedWork = () => {
    document.getElementById("featured-work")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#f3e8dc] text-[#fff8ef] lg:h-[min(43.5rem,calc(100svh-5.4rem))]">
      <div className="absolute inset-0 overflow-hidden bg-[#f3e8dc]">
        <motion.div
          aria-hidden="true"
          animate={
            shouldReduceMotion
              ? { opacity: 1, scale: 1 }
              : { opacity: 1, scale: [1, 1.012, 1] }
          }
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 hidden lg:block"
          style={{
            backgroundImage: "url('/hero-background-alt-3.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "58% 47%",
            backgroundSize: "104% auto",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,4,4,0.82)_0%,rgba(5,4,4,0.74)_18%,rgba(8,7,7,0.61)_34%,rgba(8,7,7,0.48)_50%,rgba(8,7,7,0.36)_68%,rgba(8,7,7,0.26)_84%,rgba(8,7,7,0.2)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_52%,rgba(0,0,0,0.23),transparent_34%),radial-gradient(circle_at_84%_24%,rgba(0,0,0,0.11),transparent_24%),linear-gradient(180deg,rgba(5,4,4,0.11)_0%,rgba(5,4,4,0.05)_28%,rgba(5,4,4,0.15)_100%)]" />
        <div className="absolute inset-y-0 left-1/2 hidden w-[24rem] -translate-x-1/2 bg-[radial-gradient(circle_at_center,rgba(8,7,7,0.18)_0%,rgba(8,7,7,0.1)_46%,transparent_74%)] blur-[72px] lg:block" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_86%_18%,rgba(255,247,237,0.08),transparent_20%),radial-gradient(circle_at_16%_84%,rgba(115,140,111,0.03),transparent_18%)]" />
        <div className="hero-noise absolute inset-0 opacity-[0.06]" />
      </div>

      <div className="section-shell relative z-10 px-4 pb-14 pt-24 sm:px-6 sm:pb-16 sm:pt-28 lg:px-8 lg:pb-6 lg:pt-8">
        <div className="grid gap-10 lg:h-full lg:grid-cols-[minmax(0,33rem)_minmax(0,1fr)] lg:items-center xl:grid-cols-[minmax(0,34rem)_minmax(0,1fr)]">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-[31rem] xl:max-w-[32rem]"
          >
            <motion.div variants={revealVariants} className="flex flex-wrap items-center gap-3 sm:gap-4">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/18 bg-white/8 px-4 py-2.5 shadow-[0_20px_55px_-42px_rgba(0,0,0,0.72)] backdrop-blur-md">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fff8ef] text-sm font-bold text-[#221914]">
                  N
                </span>
                <span className="text-sm font-semibold text-[#fff8ef]">Hi, I&apos;m Niv</span>
              </div>

              <FloatingAiNote shouldReduceMotion={shouldReduceMotion} />
            </motion.div>

            <motion.p variants={revealVariants} className="section-kicker mt-4 text-[#f3d3b5]">
              Product Builder + Manager
            </motion.p>

            <motion.div variants={revealVariants} className="mt-3">
              <h1 className="max-w-[11.2ch] font-display text-[clamp(2.75rem,4.45vw,4.4rem)] font-semibold leading-[0.88] text-[#fff8ef] [text-shadow:0_10px_32px_rgba(0,0,0,0.22)]">
                I bring clarity
                <br />
                to messy
                <br />
                product spaces.
              </h1>
              <DoodleUnderline className="mt-2 h-5 w-28 text-[#f1b47d] sm:w-34" delay={0.14} />
            </motion.div>

            <motion.p
              variants={revealVariants}
              className="mt-3.5 max-w-[27rem] text-[0.92rem] leading-6 text-[#f8eadb]/82 sm:text-[0.96rem] sm:leading-7"
            >
              Former software engineer turned product manager, working across startups and enterprise
              teams to turn unclear workflows into direction teams can build and ship.
            </motion.p>

            <motion.p
              variants={revealVariants}
              className="mt-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#f8eadb]/68"
            >
              {experienceSummary}
            </motion.p>

            <motion.div variants={revealVariants} className="mt-3.5 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={scrollToFeaturedWork}
                className="ink-button bg-[#fff4ea] text-[#221914] shadow-[0_16px_32px_-24px_rgba(0,0,0,0.7)] hover:bg-white"
              >
                View Work
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href={siteConfig.links.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/6 px-5 py-3 text-sm font-semibold text-[#f5e1cf] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md transition-colors hover:border-white/32 hover:bg-white/10 hover:text-[#fff8ef]"
              >
                View Resume
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>

          <div className="hidden h-full items-center justify-end pt-6 min-[1360px]:flex xl:pr-4 2xl:pr-8">
            <WorkflowRail />
          </div>

          <MobilePortraitCard shouldReduceMotion={shouldReduceMotion} />
        </div>
      </div>
    </section>
  );
};
