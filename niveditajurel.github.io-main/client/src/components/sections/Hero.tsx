import { useRef } from "react";
import { Link } from "wouter";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import { PixelCluster } from "@/components/ui/PixelBlocks";
import { PixelIcon } from "@/components/ui/PixelIcon";
import { PixelArt, type PixelArtName } from "@/components/ui/PixelArt";
import { BuildMachine } from "@/components/ui/BuildMachine";

/* ── Floating artifact wrapper: entry pop + idle float + mouse parallax ── */

function FloatingArtifact({
  children,
  className = "",
  depth = 12,
  rotate = 0,
  delay = 0,
  mx,
  my,
  reduceMotion,
}: {
  children: React.ReactNode;
  className?: string;
  depth?: number;
  rotate?: number;
  delay?: number;
  mx: MotionValue<number>;
  my: MotionValue<number>;
  reduceMotion: boolean;
}) {
  const x = useTransform(mx, (v) => v * depth);
  const y = useTransform(my, (v) => v * depth);

  return (
    <motion.div
      style={reduceMotion ? undefined : { x, y }}
      className={`absolute ${className}`}
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.8, rotate: rotate * 2 }}
      animate={{ opacity: 1, scale: 1, rotate }}
      transition={{ delay, type: "spring", stiffness: 240, damping: 20 }}
    >
      <motion.div
        animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
        transition={{ duration: 5.2 + delay * 2, repeat: Infinity, ease: "easeInOut", delay }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/* ── Polaroid: the face, large ── */

function PolaroidCard() {
  return (
    <div
      className="group relative w-48 rounded-md border border-[var(--bp-hairline)] bg-white p-1.5 pb-3 shadow-[0_24px_48px_-20px_rgba(31,31,31,0.35)] xl:w-64"
      style={{ perspective: "800px" }}
    >
      <div
        aria-hidden="true"
        className="absolute -top-2.5 left-1/2 z-10 h-5 w-16 -translate-x-1/2 rotate-2 rounded-sm bg-[var(--bp-cobalt-subtle)]/80"
      />
      <div
        className="relative aspect-[5/6] w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
      >
        <img
          src="/hero-portrait.jpg"
          alt="Nivedita in front of a wall of hand-drawn product sketches"
          className="absolute inset-0 h-full w-full rounded-sm object-cover object-top [backface-visibility:hidden]"
          onError={(event) => {
            const img = event.currentTarget;
            if (!img.src.endsWith("/me.png")) img.src = "/me.png";
          }}
        />
        <img
          src="/pixel-portrait.png"
          alt="Pixel-art illustration of Nivedita"
          className="absolute inset-0 h-full w-full rounded-sm bg-[#e4c9a8] object-cover object-top [backface-visibility:hidden] [transform:rotateY(180deg)]"
          style={{ imageRendering: "pixelated" }}
        />
      </div>
      <p className="font-hand mt-1.5 text-center text-[0.85rem] leading-tight text-[var(--bp-ink)]">
        hi, I&apos;m Niv ✦ I built all of this
      </p>
    </div>
  );
}

/* ── Pixel badge: sprite + mono label, echoes the pixel-portrait vocabulary ── */

function PixelBadge({
  name,
  label,
  reduceMotion,
}: {
  name: PixelArtName;
  label: string;
  reduceMotion: boolean;
}) {
  return (
    <div className="flex items-center gap-2.5 rounded-lg border border-[var(--bp-hairline)] bg-white/92 px-3 py-2 shadow-[0_14px_28px_-14px_rgba(22,24,29,0.3)] backdrop-blur-sm">
      <motion.span
        className="inline-flex"
        animate={reduceMotion ? undefined : { rotate: [0, -7, 0, 7, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <PixelArt name={name} size={22} />
      </motion.span>
      <span className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-[var(--bp-ink-muted)]">
        {label}
      </span>
    </div>
  );
}

/* ── One sticky, on-brand ── */

function StickyNote() {
  return (
    <div className="w-40 -rotate-2 rounded-sm bg-[#ffe9a8] p-3.5 shadow-[0_16px_32px_-16px_rgba(22,24,29,0.4)]">
      <p className="font-hand text-[1.15rem] leading-tight text-[#4a3b10]">
        less hype, more clarity.
      </p>
      <p className="mt-2 font-mono text-[0.5rem] uppercase tracking-[0.14em] text-[#8a6d1f]">
        — how I run product
      </p>
    </div>
  );
}

/* ── Hero ── */

const headlineLines = ["I ship the product", "other PMs write decks about."];

export const Hero = () => {
  const reduceMotion = !!useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mx = useSpring(rawX, { stiffness: 60, damping: 20 });
  const my = useSpring(rawY, { stiffness: 60, damping: 20 });

  const handleMouseMove = (event: React.MouseEvent) => {
    if (reduceMotion) return;
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set((event.clientX - rect.left) / rect.width - 0.5);
    rawY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative isolate overflow-hidden bg-[var(--bp-paper)] text-[var(--bp-ink)]"
    >
      {/* Pixel corner accents */}
      <PixelCluster className="absolute left-0 top-[4.5rem] hidden lg:block" size={12} />
      <PixelCluster className="absolute bottom-0 right-0 hidden rotate-180 lg:block" size={12} />

      <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl flex-col justify-center px-4 py-16 sm:px-6 lg:px-8">
        {/* ── Anchored artifacts (desktop): 3, large, labeled ── */}
        <div className="pointer-events-none absolute inset-0 z-10 hidden lg:block [&>*]:pointer-events-auto">
          <FloatingArtifact
            className="left-[3%] top-[9%] hidden xl:block"
            depth={26}
            rotate={3}
            delay={0.9}
            mx={mx}
            my={my}
            reduceMotion={reduceMotion}
          >
            <StickyNote />
          </FloatingArtifact>
          <FloatingArtifact
            className="bottom-[15%] left-[2.5%] hidden xl:block"
            depth={18}
            rotate={-3}
            delay={1.15}
            mx={mx}
            my={my}
            reduceMotion={reduceMotion}
          >
            <PixelBadge name="robot" label="build with AI" reduceMotion={reduceMotion} />
          </FloatingArtifact>
          <FloatingArtifact
            className="right-[2%] top-[11%] hidden xl:block"
            depth={22}
            rotate={2}
            delay={1.3}
            mx={mx}
            my={my}
            reduceMotion={reduceMotion}
          >
            <PixelBadge name="chart" label="metrics" reduceMotion={reduceMotion} />
          </FloatingArtifact>
          <FloatingArtifact
            className="bottom-[10%] right-[2.5%] hidden xl:block"
            depth={16}
            rotate={-2}
            delay={1.45}
            mx={mx}
            my={my}
            reduceMotion={reduceMotion}
          >
            <PixelBadge name="heart" label="customer first" reduceMotion={reduceMotion} />
          </FloatingArtifact>
        </div>

        {/* ── Two columns: pitch left, the machine right ── */}
        <div className="relative z-20 grid items-center gap-10 lg:grid-cols-[minmax(0,11fr)_minmax(0,9fr)] lg:gap-10">
        <div className="flex max-w-3xl flex-col items-center text-center lg:items-start lg:text-left">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 whitespace-nowrap font-mono text-[0.68rem] uppercase tracking-[0.22em] text-[var(--bp-ink-muted)] sm:text-xs"
          >
            <PixelIcon name="spark" size={14} />
            Nivedita — Product Manager + Builder
          </motion.p>

          <h1 className="font-fraunces mt-6 text-[clamp(2.5rem,4vw,3.4rem)] font-semibold leading-[1.04] tracking-tight">
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={reduceMotion ? { y: 0 } : { y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0, 0.55, 0.45, 1] }}
              >
                {headlineLines[0]}
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={reduceMotion ? { y: 0 } : { y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, delay: 0.22, ease: [0, 0.55, 0.45, 1] }}
              >
                {headlineLines[1]}
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-6 max-w-[46ch] text-[1rem] leading-relaxed text-[var(--bp-ink-muted)] sm:text-lg"
          >
            Former engineer turned PM. Ambiguous, integration-heavy problems in — working,
            measured software out.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <Link href="/projects">
              <motion.span
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-[var(--bp-cobalt)] px-7 py-3.5 font-mono text-[0.8rem] font-medium text-white shadow-[0_14px_30px_-12px_rgba(250,82,15,0.55)]"
              >
                Tour the product
                <ArrowRight className="h-4 w-4" />
              </motion.span>
            </Link>
            <a
              href={siteConfig.links.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[var(--bp-hairline)] bg-white px-7 py-3.5 font-mono text-[0.8rem] font-medium text-[var(--bp-ink)] transition-colors hover:border-[var(--bp-cobalt)]/40"
            >
              Spec sheet
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="mt-10 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-[var(--bp-ink-muted)]"
          >
            scroll — the product tour starts below ↓
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0, 0.55, 0.45, 1] }}
          className="relative hidden lg:block"
        >
          <BuildMachine />
          <motion.div
            className="absolute -bottom-12 -left-20 z-20 xl:-left-36"
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 14, rotate: -12 }}
            animate={{ opacity: 1, y: 0, rotate: -7 }}
            transition={{ delay: 0.9, type: "spring", stiffness: 220, damping: 18 }}
            whileHover={reduceMotion ? undefined : { rotate: -3, scale: 1.04 }}
          >
            <PolaroidCard />
          </motion.div>
        </motion.div>
        </div>

        {/* ── Mobile: pitch first, then the two artifacts that matter ── */}
        <div className="relative z-10 mt-12 flex w-full max-w-md flex-col items-center gap-6 lg:hidden">
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 16, rotate: -6 }}
            whileInView={{ opacity: 1, y: 0, rotate: -3 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <PolaroidCard />
          </motion.div>
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full"
          >
            <BuildMachine />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
