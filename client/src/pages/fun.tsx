import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Dices,
  Github,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import { BsMedium, BsSubstack } from "react-icons/bs";
import { Link } from "wouter";
import { BackgroundComponents } from "@/components/ui/background-components";
import { InTheWild } from "@/components/sections/InTheWild";
import { AnimatedProjectThumbnail, type AnimatedThumbnailVariant } from "@/components/ui/AnimatedProjectThumbnail";
import { PixelIcon, type PixelIconName } from "@/components/ui/PixelIcon";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";
import { funMediaItems, type FunMediaItem } from "@/data/fun";
import { experiments, type ExperimentItem } from "@/data/experiments";

type TrailId = "watch" | "read" | "build" | "offline";

type SurpriseItem = {
  id: string;
  trail: TrailId;
  title: string;
  href: string;
  targetId?: string;
};

const trailOptions: Array<{
  id: TrailId;
  label: string;
  note: string;
  icon: PixelIconName;
  color: string;
  target: string;
}> = [
  { id: "watch", label: "Watch", note: "Reels + visual notes", icon: "eye", color: "#f45117", target: "trail-watch" },
  { id: "read", label: "Read", note: "Essays + field notes", icon: "pen", color: "#2479bd", target: "trail-read" },
  { id: "build", label: "Build", note: "Prototypes + systems", icon: "rocket", color: "#4f8f63", target: "trail-build" },
  { id: "offline", label: "Wander", note: "Rooms + communities", icon: "spark", color: "#df5279", target: "in-the-wild" },
];

const trailCopy: Record<TrailId, string> = {
  watch: "A visual note, usually with one opinion too many.",
  read: "Longer thoughts for ideas that refuse to fit in a caption.",
  build: "Working software, because curiosity eventually becomes a prototype.",
  offline: "The rooms, people, and whiteboards behind the polished output.",
};

function SourceBadge({ source }: { source: FunMediaItem["source"] }) {
  const styles = {
    Instagram: { icon: "spark" as PixelIconName, tone: "border-[#efb692] bg-[#fff0df] text-[#9d421e]" },
    LinkedIn: { icon: "system" as PixelIconName, tone: "border-[#b9d1f4] bg-[#eaf3ff] text-[#315d9f]" },
    Medium: { icon: "pen" as PixelIconName, tone: "border-[#d5c2ae] bg-[#f5eadf] text-[#68462c]" },
    Substack: { icon: "mail" as PixelIconName, tone: "border-[#efc09e] bg-[#fff0e3] text-[#a74f1c]" },
  }[source];

  return (
    <span className={cn("inline-flex w-fit items-center gap-2 border px-2.5 py-1 font-mono text-[0.62rem] font-bold uppercase tracking-[0.13em]", styles.tone)}>
      <PixelIcon name={styles.icon} size={11} color="currentColor" />
      {source}
    </span>
  );
}

function ReelCard({
  item,
  featured = false,
  onOpen,
}: {
  item: FunMediaItem;
  featured?: boolean;
  onOpen: () => void;
}) {
  return (
    <motion.a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      onClick={onOpen}
      data-cursor="site"
      data-cursor-label="Open reel"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group/thumbnail hover-cursor-target relative block overflow-hidden border border-[#d7ba95] bg-[#fff4df] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f45117] focus-visible:ring-offset-4",
        featured ? "min-h-[24rem] lg:min-h-[29rem]" : "min-h-[18rem] lg:min-h-[23rem]",
      )}
    >
      <img
        src={item.imageSrc}
        alt={item.imageAlt ?? item.title}
        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover/thumbnail:scale-[1.035]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,17,10,0.02)_38%,rgba(27,17,10,0.86)_100%)]" />
      <div className="absolute left-4 top-4">
        <SourceBadge source={item.source} />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-4 text-[#fff8e8] sm:p-5">
        <p className="mb-2 font-mono text-[0.58rem] font-bold uppercase tracking-[0.16em] text-[#ffd06a]">
          Press play ↗
        </p>
        <h3 className={cn("max-w-[16ch] font-fraunces font-normal leading-[0.98] tracking-[-0.02em]", featured ? "text-[1.85rem] sm:text-[2.2rem]" : "text-[1.45rem] lg:text-[1.65rem]")}>
          {item.title}
        </h3>
      </div>
    </motion.a>
  );
}

function ReadingCard({ item, onOpen }: { item: FunMediaItem; onOpen: () => void }) {
  const isMedium = item.source === "Medium";

  return (
    <motion.a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      onClick={onOpen}
      data-cursor="site"
      data-cursor-label={`Open ${item.source}`}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group flex min-h-[14rem] flex-col justify-between border p-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f45117]",
        isMedium ? "border-[#1f1b17] bg-[#211f1a] text-[#fff8e8]" : "border-[#e8a577] bg-[#ff681f] text-[#27180f]",
      )}
    >
      <div>
        <div className="flex items-start justify-between gap-4">
          {isMedium ? <BsMedium className="h-8 w-8" /> : <BsSubstack className="h-7 w-7" />}
          <ArrowUpRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
        <p className="mt-5 font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] opacity-70">
          {isMedium ? "Product essay" : "Notes in progress"}
        </p>
        <h3 className="mt-2 max-w-[14ch] font-fraunces text-[clamp(1.55rem,2vw,2.1rem)] font-normal leading-[0.98] tracking-[-0.02em]">
          {item.title}
        </h3>
      </div>
      <p className="mt-4 max-w-[34rem] text-[0.82rem] font-medium leading-5 opacity-80">{item.description}</p>
    </motion.a>
  );
}

function BuildQuest({
  item,
  index,
  onOpen,
}: {
  item: ExperimentItem;
  index: number;
  onOpen: () => void;
}) {
  const variant = item.id as AnimatedThumbnailVariant;
  const tone = index === 0 ? "bg-[#dfeee0]" : "bg-[#dce8f5]";

  return (
    <Link
      href={item.href ?? "/work"}
      onClick={onOpen}
      data-cursor="project"
      data-cursor-label="Open build"
      className="group/thumbnail hover-cursor-target block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f45117] focus-visible:ring-offset-4"
    >
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        className="grid overflow-hidden border border-[#cdb994] bg-[#fff8e8] lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.7fr)]"
      >
        <div className={cn("relative min-h-[17rem] overflow-hidden border-b border-[#cdb994] lg:min-h-[20rem] lg:border-b-0 lg:border-r", tone)}>
          <AnimatedProjectThumbnail variant={variant} motion="hover" />
          <div className="absolute left-4 top-4 border border-[#2a241d]/20 bg-[#fff8e8]/90 px-3 py-2 font-mono text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#2a241d]">
            Quest 0{index + 1}
          </div>
        </div>
        <div className="flex flex-col justify-between p-5 sm:p-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-[0.64rem] font-bold uppercase tracking-[0.14em] text-[#4f7658]">
              <span className="h-2 w-2 bg-[#52a66f]" /> Playable build
            </div>
            <h3 className="mt-4 font-fraunces text-[clamp(2rem,3vw,3rem)] font-normal leading-[0.92] tracking-[-0.035em] text-[#211b16]">
              {item.title}
            </h3>
            <p className="mt-3 max-w-[29rem] text-[0.9rem] leading-6 text-[#655344]">
              {item.description ?? item.caseStudyTitle}
            </p>
          </div>
          <div className="mt-5 flex items-center justify-between border-t border-[#d9c8aa] pt-3 font-mono text-[0.64rem] font-bold uppercase tracking-[0.13em] text-[#9e431d]">
            Open quest
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/thumbnail:translate-x-1" />
          </div>
        </div>
      </motion.article>
    </Link>
  );
}

export default function Fun() {
  const reducedMotion = Boolean(useReducedMotion());
  const instagramFeature = funMediaItems.find((item) => item.id === "instagram-ai-learning-stack");
  const linkedinFeature = funMediaItems.find((item) => item.id === "linkedin-public-trail");
  const substackFeature = funMediaItems.find((item) => item.id === "substack-home");
  const reelItems = funMediaItems.filter((item) => item.source === "Instagram");
  const buildQuests = experiments.filter((item) => ["learning-council", "finwise"].includes(item.id));
  const [activeTrail, setActiveTrail] = useState<TrailId>("watch");
  const [visitedTrails, setVisitedTrails] = useState<TrailId[]>([]);
  const [surpriseIndex, setSurpriseIndex] = useState(0);

  const surpriseDeck: SurpriseItem[] = [
    ...(instagramFeature ? [{ id: instagramFeature.id, trail: "watch" as TrailId, title: instagramFeature.title, href: instagramFeature.href }] : []),
    ...(substackFeature ? [{ id: substackFeature.id, trail: "read" as TrailId, title: substackFeature.title, href: substackFeature.href }] : []),
    { id: "github-builds", trail: "build", title: "The builds and experiments on GitHub", href: siteConfig.links.github },
    { id: "offline-field-notes", trail: "offline", title: "Real rooms, whiteboards, and community", href: "#in-the-wild", targetId: "in-the-wild" },
  ];
  const surprise = surpriseDeck[surpriseIndex % surpriseDeck.length];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  if (!instagramFeature || !linkedinFeature || !substackFeature) {
    return null;
  }

  const markTrail = (trail: TrailId) => {
    setActiveTrail(trail);
    setVisitedTrails((current) => (current.includes(trail) ? current : [...current, trail]));
  };

  const visitTrail = (trail: (typeof trailOptions)[number]) => {
    markTrail(trail.id);
    document.getElementById(trail.target)?.scrollIntoView({
      behavior: reducedMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  const shuffleSurprise = () => {
    const next = (surpriseIndex + 1) % surpriseDeck.length;
    setSurpriseIndex(next);
    markTrail(surpriseDeck[next].trail);
  };

  return (
    <BackgroundComponents
      variant="clay-notion-paper"
      className="min-h-screen bg-[#fff8e8]"
      contentClassName="relative"
    >
      <main className="overflow-hidden pb-20 lg:pb-28">
        <section className="relative border-b border-[#d8c08f] bg-[#fff4dc] px-5 py-12 sm:px-8 lg:py-16">
          <div aria-hidden="true" className="absolute left-0 top-0 grid grid-cols-3 grid-rows-2">
            <span className="h-4 w-6 bg-[#f45117]" />
            <span className="h-4 w-6 bg-[#ff8105]" />
            <span className="col-span-3 h-4 bg-[#ffd06a]" />
          </div>
          <div aria-hidden="true" className="absolute right-[7%] top-[9%] hidden rotate-6 lg:block">
            <PixelIcon name="spark" size={54} color="#df5279" />
          </div>

          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(28rem,0.78fr)] lg:items-center">
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#a84721]">
                Fun page · curiosity is open
              </p>
              <h1 className="mt-5 max-w-[14ch] font-fraunces text-[clamp(3.2rem,6vw,6.2rem)] font-normal leading-[0.88] tracking-[-0.045em] text-[#211b16]">
                <span className="block">Curiosity, with</span>
                <span className="block text-[#e64a16]">no off switch.</span>
              </h1>
              <p className="mt-7 max-w-[39rem] text-[1.05rem] font-medium leading-7 text-[#5d4b3d] sm:text-[1.15rem] sm:leading-8">
                Things I publish, prototype, sketch, and follow when a case study would be too tidy.
              </p>
              <div className="mt-8 flex items-center gap-3 font-mono text-[0.65rem] font-bold uppercase tracking-[0.13em] text-[#8d5938]">
                <span>{visitedTrails.length}/4 trails visited</span>
                <span aria-hidden="true" className="flex gap-1.5">
                  {trailOptions.map((trail) => (
                    <span key={trail.id} className={cn("h-2.5 w-2.5 border border-[#b98b65]", visitedTrails.includes(trail.id) && "bg-[#f45117]")} />
                  ))}
                </span>
              </div>
            </motion.div>

            <motion.aside
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.68, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="border border-[#cdb58a] bg-[#fffaf0] shadow-[8px_8px_0_#f6c765]"
            >
              <div className="flex items-center justify-between border-b border-[#d8c08f] px-5 py-4">
                <p className="font-mono text-[0.66rem] font-bold uppercase tracking-[0.16em] text-[#564437]">Pick a trail</p>
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-[#9a7658]">No wrong answer</span>
              </div>
              <div className="grid grid-cols-2">
                {trailOptions.map((trail, index) => {
                  const visited = visitedTrails.includes(trail.id);
                  return (
                    <button
                      key={trail.id}
                      type="button"
                      onClick={() => visitTrail(trail)}
                      aria-pressed={activeTrail === trail.id}
                      className={cn(
                        "group relative min-h-24 border-[#d8c08f] p-3.5 text-left transition-colors focus:outline-none focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-[#f45117]",
                        index % 2 === 0 && "border-r",
                        index < 2 && "border-b",
                        activeTrail === trail.id ? "bg-[#ffe5b8]" : "hover:bg-[#fff1d7]",
                      )}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <PixelIcon name={trail.icon} size={25} color={trail.color} className="transition-transform duration-200 group-hover:-translate-y-1" />
                        {visited ? <Check className="h-4 w-4 text-[#4f8f63]" /> : <span className="font-mono text-[0.56rem] text-[#a68668]">0{index + 1}</span>}
                      </div>
                      <p className="mt-3 text-[0.9rem] font-bold text-[#2a211a]">{trail.label}</p>
                      <p className="mt-1 text-xs leading-5 text-[#78604c]">{trail.note}</p>
                    </button>
                  );
                })}
              </div>
              <div className="border-t border-[#d8c08f] p-4">
                <button
                  type="button"
                  onClick={shuffleSurprise}
                  className="flex min-h-12 w-full items-center justify-between bg-[#211f1a] px-4 text-left text-[#fff8e8] transition-colors hover:bg-[#e94e18] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f45117] focus-visible:ring-offset-2"
                >
                  <span className="inline-flex items-center gap-3 font-mono text-[0.68rem] font-bold uppercase tracking-[0.14em]">
                    <Dices className="h-4 w-4" /> Surprise me
                  </span>
                  <span className="font-mono text-[0.58rem] uppercase tracking-[0.1em]">Shuffle</span>
                </button>
                <AnimatePresence mode="wait">
                  <motion.a
                    key={surprise.id}
                    href={surprise.href}
                    target={surprise.targetId ? undefined : "_blank"}
                    rel={surprise.targetId ? undefined : "noreferrer"}
                    onClick={(event) => {
                      markTrail(surprise.trail);
                      if (surprise.targetId) {
                        event.preventDefault();
                        document.getElementById(surprise.targetId)?.scrollIntoView({
                          behavior: reducedMotion ? "auto" : "smooth",
                          block: "start",
                        });
                      }
                    }}
                    initial={reducedMotion ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reducedMotion ? undefined : { opacity: 0, y: -6 }}
                    transition={{ duration: 0.24 }}
                    className="mt-3 flex items-center justify-between gap-4 border border-[#d8c08f] bg-[#fff4dc] p-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f45117]"
                  >
                    <div>
                      <p className="font-mono text-[0.55rem] font-bold uppercase tracking-[0.14em] text-[#a84721]">Current rabbit hole</p>
                      <p className="mt-1 line-clamp-1 text-sm font-semibold text-[#2a211a]">{surprise.title}</p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-[#a84721]" />
                  </motion.a>
                </AnimatePresence>
              </div>
            </motion.aside>
          </div>
        </section>

        <section id="trail-watch" className="scroll-mt-20 border-b border-[#d8c08f] bg-[#fffaf0] px-5 py-12 sm:px-8 lg:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="font-mono text-[0.66rem] font-bold uppercase tracking-[0.18em] text-[#ad4a22]">01 · Watch</p>
                <h2 className="mt-3 font-fraunces text-[clamp(2.35rem,4vw,4rem)] font-normal leading-[0.92] tracking-[-0.04em] text-[#211b16]">Watch the ideas move.</h2>
              </div>
              <p className="max-w-[33rem] text-sm leading-6 text-[#6b5848] lg:text-right">{trailCopy.watch}</p>
            </div>

            <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.55fr)]">
              <ReelCard item={reelItems[0]} featured onOpen={() => markTrail("watch")} />
              <div className="grid gap-3 sm:grid-cols-3">
                {reelItems.slice(1, 4).map((item) => (
                  <ReelCard key={item.id} item={item} onOpen={() => markTrail("watch")} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="trail-read" className="scroll-mt-20 border-b border-[#d8c08f] bg-[#eef4ff] px-5 py-12 sm:px-8 lg:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-6 grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.7fr)] lg:items-end">
              <div>
                <p className="font-mono text-[0.66rem] font-bold uppercase tracking-[0.18em] text-[#315d9f]">02 · Read</p>
                <h2 className="mt-3 font-fraunces text-[clamp(2.35rem,4vw,4rem)] font-normal leading-[0.92] tracking-[-0.04em] text-[#19263a]">Longer thoughts live here.</h2>
              </div>
              <p className="max-w-[34rem] text-sm leading-6 text-[#52647b] lg:justify-self-end lg:text-right">{trailCopy.read}</p>
            </div>

            <div className="grid gap-3 lg:grid-cols-12">
              <motion.a
                href={linkedinFeature.href}
                target="_blank"
                rel="noreferrer"
                onClick={() => markTrail("read")}
                whileHover={{ y: -3 }}
                className="group relative overflow-hidden border border-[#aac5e8] bg-white lg:col-span-7 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2479bd]"
              >
                <img src="/linkedin-profile-header.png" alt="Nivedita's LinkedIn profile and writing trail" className="aspect-[2.35/1] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]" />
                <div className="flex items-center justify-between gap-5 border-t border-[#c8d9ef] p-4">
                  <div>
                    <SourceBadge source="LinkedIn" />
                    <h3 className="mt-2 max-w-[18ch] font-fraunces text-[clamp(1.7rem,2.5vw,2.45rem)] font-normal leading-[0.96] tracking-[-0.025em] text-[#19263a]">Career moves, startup stories, public proof.</h3>
                  </div>
                  <ArrowUpRight className="h-6 w-6 shrink-0 text-[#315d9f] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </motion.a>
              <div className="grid gap-3 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
                <ReadingCard item={substackFeature} onOpen={() => markTrail("read")} />
              </div>
            </div>
          </div>
        </section>

        <section id="trail-build" className="scroll-mt-20 border-b border-[#d8c08f] bg-[#f5efdf] px-5 py-12 sm:px-8 lg:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="font-mono text-[0.66rem] font-bold uppercase tracking-[0.18em] text-[#4f7658]">03 · Build</p>
                <h2 className="mt-3 font-fraunces text-[clamp(2.35rem,4vw,4rem)] font-normal leading-[0.92] tracking-[-0.04em] text-[#20261f]">Things I built for the plot.</h2>
              </div>
              <p className="max-w-[34rem] text-sm leading-6 text-[#596657] lg:text-right">{trailCopy.build}</p>
            </div>
            <div className="space-y-4">
              {buildQuests.map((item, index) => (
                <BuildQuest key={item.id} item={item} index={index} onOpen={() => markTrail("build")} />
              ))}
            </div>
          </div>
        </section>

        <div onMouseEnter={() => setActiveTrail("offline")} onFocusCapture={() => setActiveTrail("offline")}>
          <InTheWild />
        </div>

        <section className="mx-auto mt-10 max-w-7xl px-5 sm:px-8">
          <div className="relative overflow-hidden border border-[#271f18] bg-[#211f1a] px-6 py-8 text-[#fff8e8] sm:px-8 lg:px-10">
            <div aria-hidden="true" className="absolute right-0 top-0 grid grid-cols-4">
              <span className="h-4 w-8 bg-[#f45117]" />
              <span className="h-4 w-8 bg-[#ff8105]" />
              <span className="h-4 w-8 bg-[#ffd06a]" />
              <span className="h-4 w-8 bg-[#df5279]" />
            </div>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
              <div>
                <p className="font-mono text-[0.64rem] font-bold uppercase tracking-[0.18em] text-[#ffd06a]">Trail log</p>
                <h2 className="mt-3 font-fraunces text-[clamp(2.6rem,5vw,4.8rem)] font-normal leading-[0.92] tracking-[-0.035em]">You found the edges.</h2>
                <p className="mt-4 max-w-[38rem] text-sm leading-6 text-[#d9cdbd]">
                  {visitedTrails.length === 4 ? "All four trails explored. Curiosity officially confirmed." : `${visitedTrails.length} of 4 trails explored. The rest can wait, or not.`}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => { setVisitedTrails([]); setActiveTrail("watch"); }}
                  className="inline-flex min-h-11 items-center gap-2 border border-[#6e6254] px-4 font-mono text-[0.65rem] font-bold uppercase tracking-[0.12em] transition-colors hover:border-[#ffd06a] hover:text-[#ffd06a] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd06a]"
                >
                  <RotateCcw className="h-4 w-4" /> Reset trails
                </button>
                <a href={siteConfig.links.instagram} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 bg-[#f45117] px-4 font-mono text-[0.65rem] font-bold uppercase tracking-[0.12em] transition-colors hover:bg-[#ff681f] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd06a]">
                  <Sparkles className="h-4 w-4" /> Instagram
                </a>
                <a href={siteConfig.links.github} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 bg-[#fff8e8] px-4 font-mono text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[#211f1a] transition-colors hover:bg-[#ffd06a] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd06a]">
                  <Github className="h-4 w-4" /> GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </BackgroundComponents>
  );
}
