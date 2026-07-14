import { useEffect } from "react";
import { Link } from "wouter";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ClipboardList,
  Clock3,
  LayoutTemplate,
  Sparkles,
  TrendingUp,
  UserRoundSearch,
  WandSparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { BackgroundComponents } from "@/components/ui/background-components";
import { siteConfig } from "@/data/site";

const heroMetrics = [
  { label: "Engagement", value: "+30%", note: "Lift during the project window" },
  { label: "Quiz completion", value: "+25%", note: "From onboarding and quiz improvements" },
  { label: "Release efficiency", value: "+33%", note: "Faster cross-functional delivery rhythm" },
];

const snapshotFacts = [
  { label: "Role", value: "Product Manager" },
  { label: "Product", value: "AI-powered skincare recommendation platform" },
  { label: "Focus", value: "Onboarding clarity, recommendation trust, and first-session value" },
  { label: "Timeline", value: "Aug 2024 to Dec 2024" },
];

const frictionPoints = [
  "Onboarding asked for commitment before users understood what the product would do for them.",
  "Recommendations could feel generic, which weakened trust in the AI layer.",
  "The first session needed to feel lighter, clearer, and more useful much earlier.",
];

const ownershipAreas: Array<{
  title: string;
  body: string;
  icon: LucideIcon;
}> = [
  {
    title: "Onboarding clarity",
    body: "Reviewed the quiz and onboarding journey to find where users dropped off and where the product was asking too much too early.",
    icon: ClipboardList,
  },
  {
    title: "Recommendation framing",
    body: "Refined how product suggestions were explained so the experience felt more personalized, specific, and worth trusting.",
    icon: WandSparkles,
  },
  {
    title: "Delivery rhythm",
    body: "Managed agile roadmaps in Jira and tightened execution loops so the team could ship improvements faster and learn sooner.",
    icon: Clock3,
  },
];

const productMoves = [
  {
    title: "Reduce onboarding friction",
    body: "Simplified the way the quiz progressed so the user could move forward with less hesitation and better context.",
  },
  {
    title: "Make recommendations feel earned",
    body: "Improved how the product connected inputs, skin profile cues, and suggested routines so the output felt less generic.",
  },
  {
    title: "Track trust and completion signals",
    body: "Used engagement and completion metrics to evaluate whether the first-run journey was getting easier to finish and easier to believe.",
  },
];

const pmJudgment = [
  {
    title: "Trust before sophistication",
    body: "The product did not need to feel more complex. It needed to feel more understandable. The first session had to explain value clearly before the AI layer could feel impressive.",
  },
  {
    title: "Less friction, not less personalization",
    body: "The goal was not to remove important user inputs. It was to sequence them better so personalization still felt credible without overwhelming the user.",
  },
  {
    title: "Shipping pace matters in consumer AI",
    body: "The recommendation experience improves through iteration. A faster product-delivery loop mattered because it let the team refine trust signals and onboarding quality continuously.",
  },
];

const measuredResults = [
  "Engagement increased by 30% during the project window.",
  "Quiz completion improved by 25% after onboarding changes.",
  "Release efficiency improved by 33% through clearer agile planning and iteration.",
];

const learnings = [
  "For consumer AI products, onboarding is part of the product promise, not just setup.",
  "Recommendation quality is partly model quality and partly explanation quality.",
  "Product managers can improve perceived intelligence by clarifying flow, framing, and timing, not only by asking for more features.",
];

const nextSteps = [
  "Add clearer explanation layers for why a recommendation matches the user profile.",
  "Measure which onboarding steps create the most hesitation and whether they can be deferred.",
  "Test how routine-building and follow-up usage cues affect retention after the first session.",
];

const visualGallery = [
  {
    title: "Mobile onboarding flow",
    caption: "A clearer quiz path makes the first session easier to finish.",
    src: "/teasers/skingenius2.jpg",
    alt: "Skingenius onboarding flow showing an allergy-selection screen in the mobile app.",
  },
  {
    title: "Recommendation detail",
    caption: "The product page starts explaining fit, benefits, and how to use the recommendation.",
    src: "/teasers/skingenius3.jpg",
    alt: "Skingenius recommendation detail view showing product benefits and usage guidance.",
  },
  {
    title: "Earlier concept view",
    caption: "An earlier dashboard-style concept helped clarify which signals actually needed to surface in the product.",
    src: "/teasers/skingenius4.jpg",
    alt: "Earlier Skingenius wireframe dashboard showing skincare goals, compatibility, and new product matches.",
  },
];

const jumpLinks = [
  { id: "problem", label: "Problem" },
  { id: "scope", label: "Scope" },
  { id: "visuals", label: "Visuals" },
  { id: "results", label: "Results" },
];

function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl space-y-3">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8e684f]">{eyebrow}</p>
      <h2 className="font-editorial text-[clamp(2rem,3vw,3.05rem)] font-medium leading-[0.95] tracking-[-0.05em] text-[#1f1713]">
        {title}
      </h2>
      <p className="text-base leading-7 text-[#52443a]">{description}</p>
    </div>
  );
}

function FactTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.35rem] border border-[#dccbbb] bg-white/78 px-4 py-4">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#8e684f]">{label}</p>
      <p className="mt-2 text-sm leading-6 text-[#2d241c]">{value}</p>
    </div>
  );
}

function StatTile({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div className="rounded-[1.45rem] border border-[#d8c5b2] bg-[#fff8f1] px-4 py-4">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#8e684f]">{label}</p>
      <p className="mt-2 text-[1.35rem] font-semibold tracking-[-0.03em] text-[#1f1713]">{value}</p>
      <p className="mt-2 text-sm leading-6 text-[#5d4c41]">{note}</p>
    </div>
  );
}

export default function SkingeniusCaseStudy() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <BackgroundComponents variant="clay-notion-paper" className="min-h-screen bg-background" contentClassName="relative">
      <div className="case-study-page case-study-skingenius px-4 pb-20 pt-6 sm:px-6 lg:px-8 lg:pb-28 lg:pt-8">
        <section className="mx-auto max-w-7xl border-b border-border/65 pb-10 lg:pb-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] lg:items-start">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-[#8e684f]">
                <Link href="/work">
                  <span className="inline-flex cursor-pointer items-center gap-2 transition-colors hover:text-[#1f1713]">
                    <ArrowLeft className="h-4 w-4" />
                    Back to work
                  </span>
                </Link>
                <span className="h-1 w-1 rounded-full bg-border" />
                <span>Skingenius</span>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8e684f]">
                  AI consumer product case study
                </p>
                <h1 className="font-editorial text-[clamp(3rem,5vw,5.2rem)] font-medium leading-[0.9] tracking-[-0.07em] text-[#1f1713]">
                  Making AI skincare recommendations easier to trust from the first session.
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-[#52443a]">
                  I worked on an AI skincare platform where the key product problem was not only
                  recommendation logic. It was onboarding clarity, first-session trust, and making the
                  product feel useful early enough that users kept going.
                </p>
              </div>

              <div className="rounded-[1.9rem] border border-[#dfcdbc] bg-[#fff9f1] px-5 py-5 shadow-[0_18px_44px_-38px_rgba(89,64,43,0.14)] sm:px-6">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#8e684f]">
                  TL;DR
                </p>
                <p className="mt-3 text-base leading-7 text-[#52443a]">
                  I focused on the product layer between AI output and user trust: reduce onboarding
                  friction, sharpen recommendation framing, and give the team a faster way to iterate on
                  what users actually finished and engaged with.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {jumpLinks.map((link) => (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => scrollToSection(link.id)}
                    className="rounded-full border border-border/70 bg-background/82 px-4 py-2 text-sm font-semibold text-[#1f1713] transition-colors duration-200 hover:border-[#8e684f] hover:text-[#704f39]"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            <aside className="space-y-4">
              <div className="overflow-hidden rounded-[2rem] border border-[#dfcbb9] bg-[#c97852] shadow-[0_24px_70px_-46px_rgba(117,72,43,0.28)]">
                <img
                  src="/teasers/skingenius1.jpg"
                  alt="Skingenius landing screen showing a mobile product experience for personalized skincare."
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {snapshotFacts.map((fact) => (
                  <FactTile key={fact.label} label={fact.label} value={fact.value} />
                ))}
              </div>

              <div className="grid gap-3 md:grid-cols-3">
                {heroMetrics.map((metric) => (
                  <StatTile key={metric.label} label={metric.label} value={metric.value} note={metric.note} />
                ))}
              </div>
            </aside>
          </div>
        </section>

        <div className="mx-auto mt-10 max-w-7xl space-y-12 lg:space-y-16">
          <section id="problem" className="grid gap-6 lg:grid-cols-2">
            <div className="paper-panel rounded-[2rem] px-5 py-5 sm:px-6">
              <SectionIntro
                eyebrow="Problem"
                title="The product needed to feel useful before the user had to fully trust the AI."
                description="Skingenius was trying to personalize skincare routines, but early product friction made that promise harder to believe. The first session had to become clearer, quicker, and more obviously valuable."
              />
            </div>

            <div className="rounded-[2rem] border border-[#decdbc] bg-white/78 px-5 py-5 sm:px-6">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#8e684f]">
                Core friction
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-[#52443a] sm:text-base">
                {frictionPoints.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8e684f]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="rounded-[2rem] border border-[#decdbc] bg-[#fff8f1] px-5 py-5 sm:px-6">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#8e684f]">
              Recruiter signal
            </p>
              <p className="mt-4 text-base leading-7 text-[#52443a]">
                This case study shows B2C PM instincts: how to make personalization feel clearer, reduce
                onboarding abandonment, and turn AI value into a more believable first-run experience.
              </p>
            </section>

          <section id="scope" className="space-y-6">
            <SectionIntro
              eyebrow="What I Owned"
              title="The work sat at the boundary between product flow, recommendation trust, and delivery pace."
              description="I was not only improving screens. I was improving how the experience introduced itself, how recommendations felt, and how quickly the team could turn learnings into shipped changes."
            />

            <div className="grid gap-6 md:grid-cols-3">
              {ownershipAreas.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[2rem] border border-[#decdbc] bg-white/82 px-5 py-5 shadow-[0_18px_50px_-40px_rgba(89,64,43,0.16)] sm:px-6"
                  >
                    <div className="inline-flex rounded-full bg-[#f4e5d9] p-3 text-[#8e684f]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-[1.35rem] font-semibold tracking-[-0.04em] text-[#1f1713]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#52443a] sm:text-base">{item.body}</p>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="space-y-6">
            <SectionIntro
              eyebrow="Product Moves"
              title="The most important changes made the value of the system easier to understand."
              description="These were product decisions about sequencing, framing, and trust. They mattered because recommendation products fail when the output feels generic or the setup feels too heavy."
            />

            <div className="grid gap-6 lg:grid-cols-3">
              {productMoves.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-[#decdbc] bg-white/82 px-5 py-5 sm:px-6"
                >
                  <h3 className="text-[1.35rem] font-semibold tracking-[-0.04em] text-[#1f1713]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#52443a] sm:text-base">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="visuals" className="space-y-6">
            <SectionIntro
              eyebrow="Visual Evidence"
              title="The experience work spanned onboarding, recommendation detail, and earlier concept exploration."
              description="I kept this section visual on purpose. It shows the surfaces where the product had to earn clarity: what the user tells the system, what the system gives back, and how the product architecture evolved."
            />

            <div className="grid gap-6 lg:grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)]">
              <div className="rounded-[2rem] border border-[#decdbc] bg-white/82 p-5 shadow-[0_18px_50px_-40px_rgba(89,64,43,0.16)] sm:p-6">
                <div className="overflow-hidden rounded-[1.6rem] border border-[#e3d6c7] bg-[#f9f2ea]">
                  <img
                    src="/teasers/skingenius4.jpg"
                    alt="Earlier Skingenius concept dashboard."
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="mt-4 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#8e684f]">
                  Earlier concept
                </p>
                <p className="mt-2 text-sm leading-6 text-[#52443a]">
                  The earlier dashboard view helped test what information mattered, but the product
                  needed a more focused consumer flow to build trust faster.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {visualGallery.slice(0, 2).map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[2rem] border border-[#decdbc] bg-white/82 p-5 shadow-[0_18px_50px_-40px_rgba(89,64,43,0.16)] sm:p-6"
                  >
                    <div className="overflow-hidden rounded-[1.6rem] border border-[#e3d6c7] bg-[#f9f2ea]">
                      <img src={item.src} alt={item.alt} className="h-full w-full object-cover" />
                    </div>
                    <p className="mt-4 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#8e684f]">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[#52443a]">{item.caption}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <SectionIntro
              eyebrow="PM Judgment"
              title="The product needed more clarity, not more feature theater."
              description="That principle shaped how I approached the recommendation experience. The job was to make the system easier to understand and easier to finish, not only to make it look more intelligent."
            />

            <div className="grid gap-6 lg:grid-cols-3">
              {pmJudgment.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-[#decdbc] bg-[#fff8f1] px-5 py-5 sm:px-6"
                >
                  <h3 className="text-[1.32rem] font-semibold tracking-[-0.04em] text-[#1f1713]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#52443a] sm:text-base">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="results" className="space-y-6">
            <SectionIntro
              eyebrow="Results"
              title="The improvements showed up in both user behavior and team execution."
              description="That combination matters in consumer AI products. Better flows help users stay, and faster iteration helps the team keep improving the trust layer around the product."
            />

            <div className="grid gap-6 lg:grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)]">
              <div className="rounded-[2rem] border border-[#decdbc] bg-[#2d241b] px-5 py-5 text-[#fbf5eb] sm:px-6">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#d7bf9d]">
                  Key outcome
                </p>
                <p className="mt-4 font-editorial text-[clamp(2rem,3vw,3rem)] leading-[0.95] tracking-[-0.05em] text-[#fbf5eb]">
                  The first session became easier to complete and more convincing as a personalization experience.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {measuredResults.map((result) => (
                  <div
                    key={result}
                    className="rounded-[1.5rem] border border-[#decdbc] bg-white/82 px-4 py-4 text-sm leading-6 text-[#52443a]"
                  >
                    <div className="mb-3 inline-flex rounded-full bg-[#f4e5d9] p-2 text-[#8e684f]">
                      <TrendingUp className="h-4 w-4" />
                    </div>
                    {result}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-[#decdbc] bg-white/82 px-5 py-5 sm:px-6">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#8e684f]" />
                <h3 className="text-[1.5rem] font-semibold tracking-[-0.04em] text-[#1f1713]">What I learned</h3>
              </div>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-[#52443a] sm:text-base">
                {learnings.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8e684f]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-[#decdbc] bg-white/82 px-5 py-5 sm:px-6">
              <div className="flex items-center gap-3">
                <LayoutTemplate className="h-5 w-5 text-[#8e684f]" />
                <h3 className="text-[1.5rem] font-semibold tracking-[-0.04em] text-[#1f1713]">What I would do next</h3>
              </div>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-[#52443a] sm:text-base">
                {nextSteps.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8e684f]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="rounded-[2.2rem] border border-[#decdbc] bg-white/82 px-5 py-6 sm:px-6 lg:px-7">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8e684f]">
                  Closing Takeaway
                </p>
                <h2 className="font-editorial text-[clamp(1.9rem,3vw,2.8rem)] font-medium leading-[0.95] tracking-[-0.05em] text-[#1f1713]">
                  In consumer AI, product trust often improves through clearer sequencing and better explanation before it improves through more complexity.
                </h2>
              </div>

              <p className="text-base leading-7 text-[#52443a]">
                This case study shows how I approach consumer product problems: identify the moment
                where the product asks for too much trust, reduce the friction there, and give the team
                the signals and delivery rhythm needed to keep improving.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 border-t border-[#e3d6c8] pt-6">
              <Link href="/work">
                <span className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#ead8c7] px-6 py-3.5 text-sm font-semibold text-[#1f1713] shadow-[0_16px_36px_-26px_rgba(89,64,43,0.22)] transition-transform duration-200 hover:-translate-y-0.5">
                  Back to work archive
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
              <a
                href={siteConfig.links.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#decdbc] bg-white/82 px-6 py-3.5 text-sm font-semibold text-[#1f1713] transition-colors duration-200 hover:border-[#8e684f] hover:text-[#704f39]"
              >
                View resume
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </section>
        </div>
      </div>
    </BackgroundComponents>
  );
}
