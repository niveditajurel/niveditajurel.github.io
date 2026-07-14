import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowDownRight, ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "wouter";
import { BackgroundComponents } from "@/components/ui/background-components";
import { PixelArt, type PixelArtName } from "@/components/ui/PixelArt";
import { PixelWalker } from "@/components/ui/PixelWalker";
import { experiences } from "@/data/experience";

type StoryChapter = {
  id: string;
  period: string;
  place: string;
  title: string;
  story: string;
  turn: string;
  evidence: string[];
  icon: PixelArtName;
  visual: "current" | "ai" | "boston" | "early";
};

const storyChapters: StoryChapter[] = [
  {
    id: "now",
    period: "2025 — now",
    place: "USA",
    title: "Now I work where the mess is structural.",
    story:
      "At Anand PAG, I work on an enterprise vendor-operations system where workflow states, integrations, handoffs, QA, and launch readiness all affect one another. It is the kind of work I enjoy most: the problem is not one screen. It is the system behind the screen.",
    turn:
      "Alongside that work, I keep building AI product concepts, testing new workflows, writing product notes, and staying close enough to execution that an idea can become something real.",
    evidence: [
      "Anand PAG Inc. · Product Manager",
      "Enterprise workflows and integrations",
      "Independent AI builds and product experiments",
      "Current communities · Women Applying AI + Rewriting the Code",
    ],
    icon: "presentation",
    visual: "current",
  },
  {
    id: "ai-startups",
    period: "2024",
    place: "Boston, MA, USA",
    title: "Early-stage AI made every product choice feel immediate.",
    story:
      "With Nomad AI and Skingenius, there was very little distance between a decision and its consequence. I worked on pricing, analytics, MVP structure, onboarding, and recommendation trust — the decisions a lean team has to make before the product has room to hide behind process.",
    turn:
      "Those teams sharpened a question I still carry: how do you make an intelligent system useful without making the human work harder or the product harder to trust?",
    evidence: [
      "Nomad AI · Product Manager",
      "Skingenius · Product Manager",
      "AI strategy, trust, onboarding, and launch",
    ],
    icon: "code",
    visual: "ai",
  },
  {
    id: "boston",
    period: "2022 — 2024",
    place: "Boston, MA, USA",
    title: "The classroom helped. The builder rooms changed the pace.",
    story:
      "During my master’s in Engineering Management at Northeastern, I gained stronger language for product strategy, systems, and business decisions. Outside class, I stayed close to Boston’s startup community — attending founder events, organizing Techstars Startup Weekend, and meeting people who were actively trying to build something from nothing.",
    turn:
      "I also kept consulting with startups on technology, product, and strategy. Learning became less about collecting frameworks and more about seeing how different builders used them under real constraints.",
    evidence: [
      "Northeastern · MS Engineering Management",
      "Techstars Startup Weekend Boston",
      "Startup consulting · product, technology, strategy",
    ],
    icon: "presentation",
    visual: "boston",
  },
  {
    id: "early-teams",
    period: "2019 — 2022",
    place: "India",
    title: "Before I had one title, I kept following the product problem.",
    story:
      "I worked with early teams and companies across legal tech, health tech, data, and EdTech — from various startups to Symbionic and Cognizant. The roles changed, but I kept moving toward the same work: understanding the user, translating technical constraints, and helping a team decide what to do next.",
    turn:
      "That cross-sector range is where software stopped feeling like the destination. I became more interested in why something should exist, how it should work for people, and what it would take to bring it to life.",
    evidence: [
      "Various startups · product, marketing, web, and data",
      "Symbionic · health-tech product",
      "Cognizant · business analysis and EdTech",
    ],
    icon: "gear",
    visual: "early",
  },
];

const storyEase = [0.22, 1, 0.36, 1] as const;

export default function Experience() {
  const prefersReducedMotion = useReducedMotion();
  const reduced = Boolean(prefersReducedMotion);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <BackgroundComponents
      variant="concentric-squares"
      className="min-h-screen bg-[var(--bp-paper)]"
      contentClassName="relative"
    >
      <main className="overflow-hidden">
        <JourneyHero reduced={reduced} />
        <StoryTrail reduced={reduced} />
        <BuilderThread reduced={reduced} />
        <RouteLog reduced={reduced} />
        <FoundationChapter reduced={reduced} />
      </main>
    </BackgroundComponents>
  );
}

function JourneyHero({ reduced }: { reduced: boolean }) {
  return (
    <section className="relative mx-auto max-w-[1480px] border-x border-b border-[#e1cda3] bg-[#fff8e8]">
      <div aria-hidden="true" className="absolute left-0 top-0 z-10 grid grid-cols-3 grid-rows-2">
        <span className="h-4 w-6 bg-[#f45117]" />
        <span className="h-4 w-6 bg-[#ff8105]" />
        <span className="col-span-3 h-4 bg-[#ffd06a]" />
      </div>

      <div className="grid lg:min-h-[42rem] lg:grid-cols-[minmax(0,1.08fr)_minmax(24rem,0.72fr)] lg:items-center">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, ease: storyEase }}
          className="flex flex-col justify-center px-6 pb-12 pt-24 sm:px-10 lg:px-16 lg:py-20"
        >
          <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#b84b22]">
            My route · told backwards
          </p>
          <h1 className="mt-5 max-w-[15ch] font-fraunces text-[clamp(3.15rem,5vw,5.4rem)] leading-[0.88] tracking-[-0.055em] text-[#211b16]">
            <span className="block whitespace-nowrap">Let me tell you</span>
            <span className="block whitespace-nowrap">how I got here.</span>
          </h1>
          <p className="mt-7 max-w-[39rem] text-[1.05rem] font-medium leading-7 text-[#5b4939] sm:text-[1.16rem] sm:leading-8">
            I started in software, found product through startup communities, and kept choosing work where people, systems, and ambiguity meet. The longer version is below. We’re walking backward.
          </p>
          <a
            href="#journey-trail"
            className="mt-9 inline-flex w-fit items-center gap-3 border-b border-[#b84b22] pb-2 font-mono text-[0.72rem] font-bold uppercase tracking-[0.16em] text-[#9f3d18] transition-colors hover:text-[#d04a15]"
          >
            Start with now <ArrowDown className="h-4 w-4" />
          </a>
        </motion.div>

        <motion.figure
          initial={reduced ? false : { opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.82, delay: 0.08, ease: storyEase }}
          className="relative mx-5 mb-6 overflow-hidden border border-[#d9bd88] bg-[#ead2bd] sm:mx-10 lg:mx-0 lg:mb-0 lg:mr-10"
        >
          <img
            src="/pixel-portrait.png"
            alt="Pixel portrait of Nivedita surrounded by product-building doodles"
            className="aspect-[5/4] w-full object-cover object-top"
          />
          <figcaption className="flex items-end justify-between gap-5 border-t border-[#d9bd88] bg-[#fff0d6] px-5 py-4 text-[#2d241b]">
            <p className="max-w-[18ch] font-fraunces text-[clamp(1.25rem,2vw,1.8rem)] leading-[0.96] tracking-[-0.035em]">
              The route was never linear. The through-line was.
            </p>
            <span className="font-mono text-[0.56rem] font-bold uppercase tracking-[0.16em] text-[#a74923]">
              Product · systems · builder
            </span>
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}

function StoryTrail({ reduced }: { reduced: boolean }) {
  return (
    <section id="journey-trail" className="relative mx-auto max-w-[1480px] border-x border-[#e1cda3] bg-[#fffaf0] px-5 py-12 sm:px-8 lg:px-12 lg:py-20">
      <PixelWalker duration={92} delay={2} wrench />
      <header className="mx-auto mb-14 max-w-[1280px] sm:mb-16 lg:mb-20">
        <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#b84b22]">Now → origin</p>
        <div className="mt-4 grid gap-5 lg:grid-cols-[minmax(0,0.85fr)_minmax(22rem,0.65fr)] lg:items-end">
          <h2 className="max-w-[18ch] font-fraunces text-[clamp(2.7rem,4.8vw,5.2rem)] leading-[0.9] tracking-[-0.045em] text-[#241d17]">
            <span className="block whitespace-nowrap">Every stop changed</span>
            <span className="block whitespace-nowrap">the next one.</span>
          </h2>
          <p className="max-w-[34rem] text-base leading-7 text-[#695444] lg:justify-self-end lg:text-right">
            This is not a list of titles. It is the sequence of rooms, problems, and people that moved me closer to product work.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-[1280px]">
        {storyChapters.map((chapter, index) => (
          <StoryStation
            key={chapter.id}
            chapter={chapter}
            index={index}
            reduced={reduced}
            last={index === storyChapters.length - 1}
          />
        ))}
      </div>
    </section>
  );
}

function StoryStation({
  chapter,
  index,
  reduced,
  last,
}: {
  chapter: StoryChapter;
  index: number;
  reduced: boolean;
  last: boolean;
}) {
  const storyOnRight = index % 2 === 1;

  return (
    <motion.article
      initial={reduced ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12%" }}
      transition={{ duration: 0.68, ease: storyEase }}
      className="relative grid gap-8 pb-20 pl-10 last:pb-4 md:grid-cols-[minmax(0,1fr)_4rem_minmax(0,1fr)] md:gap-6 md:pb-24 md:pl-0 lg:gap-10 lg:pb-28"
    >
      <span className="absolute bottom-0 left-[0.72rem] top-0 w-px bg-[#dfc79c] md:hidden" aria-hidden="true" />
      <span className="absolute left-[0.35rem] top-2 h-3 w-3 bg-[#f45117] shadow-[0_0_0_6px_#fffaf0] md:hidden" aria-hidden="true" />

      <div className={storyOnRight ? "md:col-start-3 md:row-start-1" : "md:col-start-1 md:row-start-1"}>
        <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#b84b22]">
          {chapter.period} · {chapter.place}
        </p>
        <h3 className="mt-4 max-w-[13ch] font-fraunces text-[clamp(2.4rem,4vw,4.5rem)] leading-[0.9] tracking-[-0.05em] text-[#251e18]">
          {chapter.title}
        </h3>
        <p className="mt-6 max-w-[39rem] text-[1rem] leading-7 text-[#5f4b3c] sm:text-[1.08rem] sm:leading-8">
          {chapter.story}
        </p>
        <blockquote className="mt-7 max-w-[37rem] border-l-2 border-[#f45117] pl-5 font-fraunces text-[1.45rem] leading-[1.08] tracking-[-0.025em] text-[#8e3f20] sm:text-[1.7rem]">
          {chapter.turn}
        </blockquote>
      </div>

      <TrailSegment index={index} last={last} reduced={reduced} />

      <div className={storyOnRight ? "md:col-start-1 md:row-start-1" : "md:col-start-3 md:row-start-1"}>
        <ChapterVisual chapter={chapter} reduced={reduced} />
        <div className="mt-5 flex items-start gap-4 border-t border-[#e1cda3] pt-5">
          <PixelArt name={chapter.icon} size={38} className="mt-0.5 shrink-0" />
          <div>
            <p className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#9e6a4e]">What was happening</p>
            <ul className="mt-3 space-y-2">
              {chapter.evidence.map((item) => (
                <li key={item} className="flex gap-2 text-sm leading-5 text-[#574438]">
                  <span className="mt-[0.42rem] h-1.5 w-1.5 shrink-0 bg-[#ff8105]" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function TrailSegment({ index, last, reduced }: { index: number; last: boolean; reduced: boolean }) {
  return (
    <div className="relative hidden min-h-full md:col-start-2 md:row-start-1 md:block" aria-hidden="true">
      <svg viewBox="0 0 80 520" preserveAspectRatio="none" className="absolute inset-0 h-full w-full overflow-visible">
        <motion.path
          d={index % 2 === 0 ? "M40 0 C12 132 68 260 40 520" : "M40 0 C68 132 12 260 40 520"}
          fill="none"
          stroke="#dfc79c"
          strokeWidth="2"
          strokeDasharray="5 9"
          initial={{ pathLength: reduced ? 1 : 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1.05, ease: storyEase }}
        />
      </svg>
      <motion.span
        initial={{ scale: reduced ? 1 : 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.32, delay: 0.2, ease: storyEase }}
        className="absolute left-1/2 top-1.5 grid h-8 w-8 -translate-x-1/2 place-items-center bg-[#fffaf0] shadow-[0_0_0_1px_#d9bc87]"
      >
        <span className="h-3 w-3 bg-[#f45117]" />
      </motion.span>
      {last ? <span className="absolute bottom-0 left-1/2 h-3 w-3 -translate-x-1/2 bg-[#ff8105]" /> : null}
    </div>
  );
}

function ChapterVisual({ chapter, reduced }: { chapter: StoryChapter; reduced: boolean }) {
  if (chapter.visual === "current") {
    return (
      <figure className="relative aspect-[4/3] overflow-hidden bg-[#d8d2c8]">
        <img src="/wild/whiteboard.jpg" alt="Nivedita mapping a product flow on a whiteboard" className="h-full w-full object-cover object-[42%_center]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgba(24,20,16,0.66))]" />
        <figcaption className="absolute bottom-4 left-4 right-4 font-mono text-[0.61rem] font-bold uppercase tracking-[0.15em] text-[#fff8e8]">
          Thinking in flows, states, and handoffs
        </figcaption>
      </figure>
    );
  }

  if (chapter.visual === "ai") {
    return (
      <div className="relative aspect-[4/3] overflow-hidden bg-[#202823] p-5 sm:p-7">
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:26px_26px]" />
        <motion.img
          src="/nomad-landing.png"
          alt="Nomad AI product preview"
          initial={reduced ? false : { opacity: 0, y: 14, rotate: -1 }}
          whileInView={{ opacity: 1, y: 0, rotate: -1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: storyEase }}
          className="absolute left-[7%] top-[10%] w-[72%] border-4 border-[#fff8e8] shadow-[0_24px_55px_-30px_rgba(0,0,0,0.72)]"
        />
        <motion.img
          src="/teasers/skingenius.jpg"
          alt="Skingenius product preview"
          initial={reduced ? false : { opacity: 0, y: 18, rotate: 2 }}
          whileInView={{ opacity: 1, y: 0, rotate: 2 }}
          viewport={{ once: true }}
          transition={{ duration: 0.62, delay: 0.12, ease: storyEase }}
          className="absolute bottom-[8%] right-[6%] w-[56%] border-4 border-[#fff8e8] shadow-[0_24px_55px_-30px_rgba(0,0,0,0.72)]"
        />
      </div>
    );
  }

  if (chapter.visual === "boston") {
    return (
      <div className="relative aspect-[4/3] bg-[#ffdb8c]">
        <motion.img
          src="/wild/crowd.jpg"
          alt="Techstars Startup Weekend Boston community gathering"
          initial={reduced ? false : { opacity: 0, x: -12, rotate: -2 }}
          whileInView={{ opacity: 1, x: 0, rotate: -2 }}
          viewport={{ once: true }}
          transition={{ duration: 0.58, ease: storyEase }}
          className="absolute bottom-[8%] left-[6%] h-[56%] w-[74%] object-cover shadow-[0_22px_44px_-28px_rgba(76,41,18,0.55)]"
        />
        <motion.img
          src="/wild/portrait.jpg"
          alt="Nivedita at Techstars Startup Weekend Boston"
          initial={reduced ? false : { opacity: 0, y: 14, rotate: 2 }}
          whileInView={{ opacity: 1, y: 0, rotate: 2 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: storyEase }}
          className="absolute right-[7%] top-[7%] h-[68%] w-[42%] object-cover object-[center_28%] shadow-[0_22px_44px_-28px_rgba(76,41,18,0.55)]"
        />
        <p className="absolute left-[8%] top-[9%] max-w-[8ch] font-fraunces text-[clamp(1.3rem,2.4vw,2rem)] leading-[0.9] tracking-[-0.04em] text-[#5b2b14]">Learning with people who build.</p>
      </div>
    );
  }

  return <SectorMap reduced={reduced} />;
}

function SectorMap({ reduced }: { reduced: boolean }) {
  const sectors = [
    { label: "Legal tech", x: "8%", y: "13%", color: "#ffd06a" },
    { label: "Health tech", x: "52%", y: "8%", color: "#8fc7a3" },
    { label: "Data", x: "18%", y: "54%", color: "#8db7dc" },
    { label: "EdTech", x: "61%", y: "59%", color: "#ff9d68" },
  ];

  return (
    <div className="relative aspect-[4/3] overflow-hidden bg-[#28374a]">
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:30px_30px]" />
      <svg viewBox="0 0 420 310" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <motion.path
          d="M58 68 C154 27 152 152 219 132 S319 83 368 183 C312 244 205 246 116 213"
          fill="none"
          stroke="#ffd06a"
          strokeWidth="3"
          strokeDasharray="4 10"
          initial={{ pathLength: reduced ? 1 : 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: storyEase }}
        />
      </svg>
      {sectors.map((sector, index) => (
        <motion.span
          key={sector.label}
          initial={reduced ? false : { opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.18 + index * 0.1, ease: storyEase }}
          className="absolute px-3 py-2 font-mono text-[0.62rem] font-bold uppercase tracking-[0.13em] text-[#1e2733]"
          style={{ left: sector.x, top: sector.y, backgroundColor: sector.color }}
        >
          {sector.label}
        </motion.span>
      ))}
      <p className="absolute bottom-5 left-5 max-w-[17ch] font-fraunces text-[1.55rem] leading-[0.94] tracking-[-0.04em] text-[#fff8e8]">
        Different sectors. The same pull toward product.
      </p>
    </div>
  );
}

function BuilderThread({ reduced }: { reduced: boolean }) {
  const threads = [
    ["Systems", "I like finding the logic beneath the visible problem."],
    ["Customer lens", "The system only works if people can understand and trust it."],
    ["Builder instinct", "I prototype, automate, and make ideas tangible early."],
    ["Community now", "Women Applying AI and Rewriting the Code keep the learning loop connected to people building alongside me."],
    ["Life outside work", "Painting, sketch notes, chess, and public writing keep the pattern-recognition muscle active."],
  ];

  return (
    <section className="mx-auto max-w-[1480px] border-x border-t border-[#e1cda3] bg-[#fff4dc] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-[1280px]">
        <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#b84b22]">The thread through all of it</p>
        <div className="mt-5 grid gap-8 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1fr)] lg:gap-16">
          <h2 className="max-w-[11ch] font-fraunces text-[clamp(2.8rem,5vw,5.7rem)] leading-[0.86] tracking-[-0.055em] text-[#241d17]">
            I keep moving closer to the real problem.
          </h2>
          <div className="border-y border-[#d9bd88]">
            {threads.map(([title, description], index) => (
              <motion.div
                key={title}
                initial={reduced ? false : { opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: index * 0.07, ease: storyEase }}
                className="grid gap-2 border-b border-[#dfc79c] py-5 last:border-b-0 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-6"
              >
                <h3 className="font-semibold text-[#2d241c]">{title}</h3>
                <p className="text-sm leading-6 text-[#695444]">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function RouteLog({ reduced }: { reduced: boolean }) {
  return (
    <section className="mx-auto max-w-[1480px] border-x border-t border-[#e1cda3] bg-[#fffaf0] px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
      <div className="mx-auto grid max-w-[1280px] gap-7 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1fr)] lg:gap-14">
        <div>
          <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#b84b22]">The complete route</p>
          <h2 className="mt-3 max-w-[11ch] font-fraunces text-[clamp(2.3rem,4vw,4.2rem)] leading-[0.9] tracking-[-0.05em] text-[#2d241b]">
            The story first. The résumé if you want it.
          </h2>
        </div>
        <details className="group border-y border-[#d9bd88]">
          <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 font-semibold text-[#2d241b] marker:hidden">
            <span>Open every role and date</span>
            <ArrowDownRight className="h-4 w-4 text-[#b84b22] transition-transform duration-300 group-open:rotate-90" />
          </summary>
          <div className="border-t border-[#dfc79c]">
            {experiences.map((experience, index) => (
              <motion.article
                key={`${experience.company}-${experience.role}`}
                initial={reduced ? false : { opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: Math.min(index * 0.025, 0.18), ease: storyEase }}
                className="grid gap-2 border-b border-[#e7d5b4] py-4 last:border-b-0 sm:grid-cols-[minmax(0,1fr)_9rem] sm:gap-5"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-sm font-semibold text-[#2d241b]">{experience.role}</p>
                    {experience.cardHref ? (
                      <a href={experience.cardHref} target="_blank" rel="noreferrer" aria-label={`Open ${experience.company} website`} className="text-[#b84b22] hover:text-[#8f3d1b]">
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    ) : null}
                  </div>
                  <p className="mt-1 text-sm text-[#6a5545]">
                    {experience.company}
                  </p>
                  <p className="mt-2 max-w-[44rem] text-sm leading-6 text-[#6a5545]">{experience.description}</p>
                </div>
                <div className="flex items-start gap-2 font-mono text-[0.6rem] font-bold uppercase tracking-[0.11em] text-[#92705a] sm:flex-col sm:gap-1">
                  <span>{experience.duration}</span>
                  <span className="sm:hidden">·</span>
                  <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {experience.location}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </details>
      </div>
    </section>
  );
}

function FoundationChapter({ reduced }: { reduced: boolean }) {
  return (
    <section className="relative mx-auto max-w-[1480px] overflow-hidden border-x border-y border-[#d65d14] bg-[#ff8105] text-[#251b13]">
      <PixelWalker duration={72} delay={3} hearts />
      <div aria-hidden="true" className="absolute right-0 top-0 grid grid-cols-4 grid-rows-2">
        <span className="h-5 w-7 bg-[#211f1a]" />
        <span className="h-5 w-7 bg-[#f45117]" />
        <span className="h-5 w-7 bg-[#ffd06a]" />
        <span className="col-span-4 h-5 bg-[#fff4dc]" />
      </div>

      <div className="mx-auto grid min-h-[65svh] max-w-[1280px] gap-12 px-6 pb-12 pt-20 sm:px-10 sm:pb-14 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.52fr)] lg:items-end lg:px-12 lg:pb-16">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12%" }}
          transition={{ duration: 0.7, ease: storyEase }}
        >
          <p className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.22em]">2017 · India · the origin</p>
          <h2 className="mt-5 max-w-[21ch] font-fraunces text-[clamp(2.35rem,5.5vw,4.8rem)] leading-[0.9] tracking-[-0.045em]">
            <span className="block whitespace-nowrap">This is where product</span>
            <span className="block whitespace-nowrap">first found me.</span>
          </h2>
          <p className="mt-8 max-w-[47rem] text-[1.08rem] font-medium leading-8 sm:text-[1.22rem]">
            I started at Vellore Institute of Technology with software engineering and computer science. I liked learning how things were built. Then I joined the Entrepreneurship Cell and started working with startups through the community — organizing, partnering, listening, and watching ideas gather people around them.
          </p>
          <p className="mt-5 max-w-[47rem] font-fraunces text-[clamp(1.65rem,2.8vw,2.7rem)] leading-[1.02] tracking-[-0.035em]">
            The question changed from “Can I build this?” to “Should we build this, for whom, and how do we make it real?” That question became the route.
          </p>
        </motion.div>

        <motion.aside
          initial={reduced ? false : { opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.65, delay: 0.08, ease: storyEase }}
          className="border-t border-[#7f3b13] pt-6 lg:border-l lg:border-t-0 lg:pl-9 lg:pt-0"
        >
          <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.18em]">What began here</p>
          <ul className="mt-4 space-y-3 text-sm font-semibold leading-6">
            <li>Software engineering + computer science</li>
            <li>Entrepreneurship Cell, VIT</li>
            <li>Startup partnerships and community programs</li>
            <li>A builder mindset shaped by people, not only technology</li>
          </ul>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/projects"><span className="inline-flex min-h-11 cursor-pointer items-center bg-[#211f1a] px-5 py-3 font-mono text-[0.7rem] font-bold uppercase tracking-[0.12em] text-[#fff8e8]">See what I build now</span></Link>
            <Link href="/fun"><span className="inline-flex min-h-11 cursor-pointer items-center border border-[#603010] px-5 py-3 font-mono text-[0.7rem] font-bold uppercase tracking-[0.12em]">See the public trail</span></Link>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
