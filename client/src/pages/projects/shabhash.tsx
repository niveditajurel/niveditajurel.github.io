import { useEffect } from "react";
import { Link } from "wouter";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  ChevronRight,
  CircleDollarSign,
  Code2,
  HeartHandshake,
  Languages,
  Layers3,
  Megaphone,
  MessageSquareText,
  Mic2,
  MonitorSmartphone,
  Network,
  ShieldAlert,
  SlidersHorizontal,
  Sparkles,
  Stethoscope,
  UsersRound,
  Volume2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { BackgroundComponents } from "@/components/ui/background-components";

const ventureFacts = [
  { label: "Role", value: "Co-founder and product lead" },
  { label: "Year", value: "2019" },
  { label: "Stage", value: "Discovery, MVP planning, and investor pitch" },
  { label: "Focus", value: "Assistive communication for children" },
];

const discoverySignals = [
  {
    title: "Lived problem exposure",
    body: "NGO and school visits exposed the everyday cost of not being able to express a need, choice, or feeling.",
    icon: HeartHandshake,
  },
  {
    title: "Stakeholder conversations",
    body: "Doctors, psychiatrists, NGO workers, and school administrators helped pressure-test the need and usage context.",
    icon: Stethoscope,
  },
  {
    title: "Early product validation",
    body: "Open conversations and basic surveys separated essential communication support from avoidable training burden.",
    icon: MessageSquareText,
  },
];

const pivots = [
  {
    signal: "Language barriers were part of the problem.",
    decision: "Plan multilingual support for regional contexts.",
    icon: Languages,
  },
  {
    signal: "Separate aided-language training felt like extra work.",
    decision: "Move guidance into the product experience.",
    icon: Sparkles,
  },
  {
    signal: "Caregivers needed a faster emergency path.",
    decision: "Add an alert action with caregiver notification.",
    icon: ShieldAlert,
  },
  {
    signal: "A phone could be too complex for some children.",
    decision: "Explore a simpler dedicated-device direction.",
    icon: Building2,
  },
];

const founderWork: Array<{
  step: string;
  title: string;
  body: string;
  icon: LucideIcon;
}> = [
  {
    step: "01",
    title: "Frame the need",
    body: "Defined the communication problem, target users, caregivers, and the AAC product thesis.",
    icon: MessageSquareText,
  },
  {
    step: "02",
    title: "Test assumptions",
    body: "Used field exposure and stakeholder conversations to refine the product and its delivery context.",
    icon: UsersRound,
  },
  {
    step: "03",
    title: "Shape the MVP",
    body: "Mapped picture vocabulary, sentence building, speech output, customization, and caregiver support.",
    icon: Mic2,
  },
  {
    step: "04",
    title: "Form the team",
    body: "Recruited a small developer team and translated the idea into product and technology requirements.",
    icon: BriefcaseBusiness,
  },
  {
    step: "05",
    title: "Build the venture case",
    body: "Prepared an investor pitch, five-year plan, funding assumptions, go-to-market approach, and milestones.",
    icon: CircleDollarSign,
  },
];

const jumpLinks = [
  { id: "discovery", label: "Discovery" },
  { id: "concept", label: "Product" },
  { id: "development", label: "Development" },
  { id: "pivots", label: "Pivots" },
  { id: "venture", label: "Venture" },
];

const productStory = [
  {
    number: "01",
    label: "Observe",
    title: "Communication breaks down",
    body: "A child may know what they want to say but lack an accessible way to express it.",
  },
  {
    number: "02",
    label: "Learn",
    title: "The support system matters",
    body: "Caregivers, clinicians, schools, and NGOs shape setup, trust, and continued use.",
  },
  {
    number: "03",
    label: "Build",
    title: "Reduce the core action",
    body: "Choose a picture or type, build a phrase, and play it aloud.",
  },
  {
    number: "04",
    label: "Venture",
    title: "Plan a path to delivery",
    body: "Recruit developers, define an alpha, and turn the concept into an investor-ready plan.",
  },
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
    <div className="max-w-3xl">
      <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#8c5c36]">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-editorial text-[clamp(2.2rem,4vw,4.1rem)] font-medium leading-[0.93] tracking-[-0.055em] text-[#20362f]">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-7 text-[#55635e] sm:text-lg sm:leading-8">
        {description}
      </p>
    </div>
  );
}

function PhraseBuilder({ compact = false }: { compact?: boolean }) {
  const choices = [
    { label: "Food", word: "water", tone: "bg-[#f7d77f]", symbol: "●" },
    { label: "Feelings", word: "happy", tone: "bg-[#f0c9c9]", symbol: "⌒" },
    { label: "People", word: "mom", tone: "bg-[#cfe2d6]", symbol: "◉" },
    { label: "Activities", word: "play", tone: "bg-[#cfdced]", symbol: "◆" },
  ];

  return (
    <div className="relative mx-auto w-full max-w-[39rem] overflow-hidden rounded-[2.1rem] border border-[#d6c7ad] bg-[#fffaf0] p-3 shadow-[0_30px_70px_-42px_rgba(23,48,40,0.55)] sm:p-4">
      <div className="overflow-hidden rounded-[1.55rem] border border-[#e4d7c2] bg-[#f9f2e5]">
        <div className="flex items-center justify-between border-b border-[#e4d7c2] bg-[#203c34] px-4 py-3 text-[#fff8ea] sm:px-5">
          <div>
            <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.16em] text-[#d9cab2]">
              Shabhash
            </p>
            <p className="mt-0.5 text-sm font-semibold">My words</p>
          </div>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f2bd59] text-[#20362f]">
            <Volume2 className="h-4 w-4" />
          </span>
        </div>

        <div className={compact ? "p-3 sm:p-4" : "p-4 sm:p-5"}>
          <div className="rounded-[1.15rem] border border-[#e3d3b8] bg-white p-3">
            <p className="font-mono text-[0.56rem] font-bold uppercase tracking-[0.15em] text-[#8a735d]">
              Sentence
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {["I", "want", "water"].map((word, index) => (
                <span
                  key={word}
                  className={
                    index === 2
                      ? "rounded-lg bg-[#f7d77f] px-3 py-2 text-sm font-semibold text-[#3f331f]"
                      : "rounded-lg bg-[#edf1eb] px-3 py-2 text-sm font-semibold text-[#30423b]"
                  }
                >
                  {word}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {choices.map((choice) => (
              <div
                key={choice.label}
                className={`${choice.tone} flex min-h-[6.5rem] flex-col justify-between rounded-[1.15rem] p-3 text-[#2e382f]`}
              >
                <span className="text-2xl leading-none">{choice.symbol}</span>
                <div>
                  <p className="text-sm font-semibold">{choice.word}</p>
                  <p className="mt-0.5 font-mono text-[0.52rem] font-bold uppercase tracking-[0.12em] text-[#594f40]">
                    {choice.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {!compact ? (
            <div className="mt-3 flex items-center justify-between rounded-[1.05rem] border border-[#e3d3b8] bg-[#fffdf8] px-4 py-3">
              <p className="text-sm font-medium text-[#415049]">Tap a picture to keep building.</p>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full bg-[#203c34] px-4 py-2 text-xs font-semibold text-[#fff8ea]"
              >
                Speak
                <Volume2 className="h-3.5 w-3.5" />
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function ProductStoryline() {
  return (
    <div className="grid overflow-hidden rounded-[2rem] border border-[#d7c7aa] bg-[#fffaf2] md:grid-cols-4">
      {productStory.map((item, index) => (
        <article
          key={item.number}
          className="relative border-b border-[#ded1bc] p-5 last:border-b-0 md:min-h-[15rem] md:border-b-0 md:border-r md:last:border-r-0 sm:p-6"
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.17em] text-[#96643b]">
              {item.number}
            </span>
            {index < productStory.length - 1 ? (
              <ArrowRight className="h-4 w-4 rotate-90 text-[#b79d78] md:rotate-0" />
            ) : null}
          </div>
          <p className="mt-8 font-mono text-[0.58rem] font-bold uppercase tracking-[0.16em] text-[#8d6d4e]">
            {item.label}
          </p>
          <h3 className="mt-2 font-editorial text-2xl font-medium leading-[1] tracking-[-0.035em] text-[#20362f]">
            {item.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-[#5b6862]">{item.body}</p>
        </article>
      ))}
    </div>
  );
}

function MvpScopeBoard() {
  const columns = [
    {
      label: "Core interaction",
      title: "MVP",
      tone: "bg-[#203c34] text-[#fff8ea]",
      items: ["Picture or keyboard input", "Short phrase construction", "Text-to-speech output"],
    },
    {
      label: "Adoption essentials",
      title: "Include",
      tone: "bg-[#f3dfb1] text-[#263d35]",
      items: ["Custom vocabulary", "Familiar categories", "In-app guidance", "Regional languages"],
    },
    {
      label: "Validate later",
      title: "Not first",
      tone: "bg-[#dbe6df] text-[#263d35]",
      items: ["Progress analytics", "Predictive vocabulary", "Object recognition", "Dedicated hardware"],
    },
  ];

  return (
    <div className="grid gap-3 lg:grid-cols-3">
      {columns.map((column) => (
        <article key={column.title} className={`${column.tone} rounded-[1.6rem] p-5 sm:p-6`}>
          <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.17em] opacity-70">
            {column.label}
          </p>
          <h3 className="mt-2 font-editorial text-4xl font-medium tracking-[-0.045em]">{column.title}</h3>
          <ul className="mt-6 space-y-3">
            {column.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-6">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-current opacity-60" />
                {item}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

function DevelopmentBlueprint() {
  const layers = [
    {
      title: "Interaction",
      body: "Tablet-first phrase builder with picture and keyboard input.",
      icon: MonitorSmartphone,
    },
    {
      title: "Personalization",
      body: "Caregiver-managed vocabulary, categories, and frequent words.",
      icon: SlidersHorizontal,
    },
    {
      title: "Communication",
      body: "Speech output and the planned emergency alert path.",
      icon: Volume2,
    },
  ];

  return (
    <div className="overflow-hidden rounded-[2rem] bg-[#17352e] p-5 text-[#fff8ea] sm:p-7">
      <div className="grid gap-7 lg:grid-cols-[0.62fr_1.38fr] lg:items-center">
        <div>
          <p className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#f2bd59]">
            Planned product architecture
          </p>
          <h3 className="mt-3 font-editorial text-[clamp(2.2rem,3.4vw,3.7rem)] font-medium leading-[0.92] tracking-[-0.05em]">
            Translate one human need into a buildable system.
          </h3>
          <p className="mt-4 max-w-md text-sm leading-7 text-[#d9e2dd]">
            The development brief connected the child’s communication loop with caregiver setup,
            speech services, and a staged alpha plan.
          </p>
        </div>

        <div className="grid gap-3">
          {layers.map(({ title, body, icon: Icon }, index) => (
            <article
              key={title}
              className="grid grid-cols-[2.75rem_1fr] gap-4 rounded-[1.25rem] border border-white/16 bg-white/[0.06] p-4 sm:grid-cols-[2.75rem_8rem_1fr] sm:items-center"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f2bd59] text-[#17352e]">
                <Icon className="h-4.5 w-4.5" />
              </span>
              <p className="text-sm font-semibold">{title}</p>
              <p className="col-start-2 text-sm leading-6 text-[#d9e2dd] sm:col-start-3">{body}</p>
              {index < layers.length - 1 ? (
                <span className="absolute hidden" aria-hidden="true" />
              ) : null}
            </article>
          ))}
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              [Code2, "Small developer team"],
              [Network, "API and platform exploration"],
              [Layers3, "Alpha before public release"],
            ].map(([Icon, label]) => {
              const ItemIcon = Icon as LucideIcon;
              return (
                <div key={label as string} className="flex items-center gap-3 rounded-[1rem] bg-[#f6ead3] px-4 py-3 text-[#2d413a]">
                  <ItemIcon className="h-4 w-4 shrink-0 text-[#98643a]" />
                  <span className="text-xs font-semibold leading-5">{label as string}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ShabhashCaseStudy() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <BackgroundComponents
      variant="concentric-squares"
      className="min-h-screen bg-background"
      contentClassName="relative"
    >
      <div className="case-study-page px-4 pb-20 pt-6 sm:px-6 lg:px-8 lg:pb-28 lg:pt-8">
        <section className="mx-auto max-w-7xl overflow-hidden rounded-[2.4rem] border border-[#d7c7aa] bg-[#fff8e9]">
          <div className="grid lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
            <div className="flex flex-col px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
              <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-[#6d5a48]">
                <Link href="/work">
                  <span className="inline-flex cursor-pointer items-center gap-2 transition-colors hover:text-[#20362f]">
                    <ArrowLeft className="h-4 w-4" />
                    Back to work
                  </span>
                </Link>
                <span className="h-1 w-1 rounded-full bg-[#bda989]" />
                <span>Shabhash</span>
              </div>

              <div className="mt-10">
                <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#9a6638]">
                  Co-founder venture · 2019
                </p>
                <h1 className="mt-4 max-w-[10ch] font-editorial text-[clamp(3.4rem,6.2vw,6.8rem)] font-medium leading-[0.84] tracking-[-0.075em] text-[#20362f]">
                  Giving children another way to speak.
                </h1>
                <p className="mt-6 max-w-[34rem] text-lg leading-8 text-[#53615b]">
                  Shabhash was an AAC venture for children with complex communication needs. I led
                  the product from field discovery to an MVP brief, a small developer team, and an
                  investor-ready five-year plan.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {jumpLinks.map((link) => (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => scrollToSection(link.id)}
                    className="rounded-full border border-[#cbb995] bg-[#fffdf7] px-4 py-2 text-sm font-semibold text-[#30443c] transition-colors hover:border-[#203c34] hover:bg-[#203c34] hover:text-[#fff8ea]"
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              <div className="mt-auto grid grid-cols-2 gap-x-5 gap-y-4 pt-10">
                {ventureFacts.map((fact) => (
                  <div key={fact.label} className="border-t border-[#d8c8aa] pt-3">
                    <p className="font-mono text-[0.56rem] font-bold uppercase tracking-[0.16em] text-[#98683f]">
                      {fact.label}
                    </p>
                    <p className="mt-1.5 text-sm leading-5 text-[#3f4f48]">{fact.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex min-h-[38rem] items-center overflow-hidden bg-[#23433b] px-5 py-10 sm:px-8 lg:min-h-[47rem] lg:px-10">
              <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-[#f4c76b]/24 blur-3xl" />
              <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-[#b7d9c8]/22 blur-3xl" />
              <div className="relative w-full">
                <div className="mb-5 flex items-end justify-between gap-4 text-[#fff8ea]">
                  <div>
                    <p className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.17em] text-[#d8c9ad]">
                      Product concept
                    </p>
                    <p className="mt-2 max-w-[22rem] text-base leading-7 text-[#f5eddf]">
                      Pictures become words. Words become a sentence. The product speaks it aloud.
                    </p>
                  </div>
                  <Megaphone className="hidden h-8 w-8 text-[#f2bd59] sm:block" />
                </div>
                <PhraseBuilder />
                <p className="mt-4 text-center font-mono text-[0.58rem] font-bold uppercase tracking-[0.14em] text-[#cbbda7]">
                  Concept reconstruction from the 2019 venture plan
                </p>
              </div>
            </div>
          </div>
        </section>

        <main className="mx-auto mt-12 max-w-7xl space-y-16 sm:mt-16 sm:space-y-24">
          <section aria-labelledby="product-story-title">
            <div className="mb-7 grid gap-4 sm:grid-cols-[0.62fr_1fr] sm:items-end">
              <div>
                <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#8c5c36]">
                  Product story
                </p>
                <h2 id="product-story-title" className="mt-3 font-editorial text-[clamp(2.35rem,4vw,4rem)] font-medium leading-[0.93] tracking-[-0.055em] text-[#20362f]">
                  From a human barrier to a buildable venture.
                </h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-[#586660] sm:justify-self-end">
                The idea became sharper each time it moved closer to the people, routines, and
                systems that would determine whether it could work.
              </p>
            </div>
            <ProductStoryline />
          </section>

          <section id="discovery" className="scroll-mt-28">
            <SectionIntro
              eyebrow="The problem and discovery"
              title="A communication tool is also an adoption system."
              description="The product was designed for children who were non-speaking, had delayed or unclear speech, or used single words. Caregivers, educators, clinicians, NGOs, and schools shaped whether it could be set up, trusted, and used."
            />

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {discoverySignals.map(({ title, body, icon: Icon }, index) => (
                <article
                  key={title}
                  className={
                    index === 1
                      ? "rounded-[1.8rem] bg-[#203c34] p-6 text-[#fff8ea] sm:p-7"
                      : "rounded-[1.8rem] border border-[#d9cbb5] bg-[#fffaf2] p-6 sm:p-7"
                  }
                >
                  <Icon className={index === 1 ? "h-6 w-6 text-[#f2bd59]" : "h-6 w-6 text-[#8f623d]"} />
                  <h3 className={`mt-8 font-editorial text-3xl font-medium tracking-[-0.04em] ${index === 1 ? "text-[#fff8ea]" : "text-[#20362f]"}`}>
                    {title}
                  </h3>
                  <p className={`mt-3 text-sm leading-7 ${index === 1 ? "text-[#e8ded0]" : "text-[#596660]"}`}>
                    {body}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-8 grid gap-5 border-y border-[#d7c7aa] py-7 sm:grid-cols-[0.72fr_1.28fr] sm:items-center">
              <p className="font-editorial text-[clamp(2rem,3.3vw,3.6rem)] font-medium leading-[0.94] tracking-[-0.05em] text-[#20362f]">
                The child was the user. The surrounding adults shaped adoption, setup, and trust.
              </p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {["Caregivers", "Clinicians", "NGOs", "Schools"].map((label, index) => (
                  <div key={label} className="flex min-h-24 items-end rounded-[1.2rem] bg-[#f4ead8] p-4">
                    <span className="text-sm font-semibold text-[#405048]">{index + 1}. {label}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="concept" className="scroll-mt-28">
            <SectionIntro
              eyebrow="The product"
              title="Make the first useful communication loop simple."
              description="The core interaction was intentionally direct: choose a picture or type, build a short phrase, then play it aloud. The product was meant to support everyday expression, not replace clinical care."
            />

            <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(18rem,0.62fr)] lg:items-center">
              <div className="rounded-[2.2rem] bg-[#203c34] p-5 sm:p-8">
                <PhraseBuilder compact />
              </div>
              <div className="space-y-5">
                {[
                  ["01", "Choose", "Tap a familiar picture or use the keyboard."],
                  ["02", "Compose", "Combine words into a short, understandable phrase."],
                  ["03", "Speak", "Play the phrase aloud to communicate with someone nearby."],
                  ["04", "Personalize", "Adapt vocabulary and categories to the child’s routines."],
                ].map(([number, title, body]) => (
                  <div key={number} className="grid grid-cols-[2.4rem_1fr] gap-3 border-b border-[#d9cbb5] pb-5">
                    <span className="font-mono text-[0.68rem] font-bold text-[#9a6638]">{number}</span>
                    <div>
                      <h3 className="text-base font-semibold text-[#20362f]">{title}</h3>
                      <p className="mt-1 text-sm leading-6 text-[#596660]">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <div className="mb-5 max-w-2xl">
                <p className="font-mono text-[0.64rem] font-bold uppercase tracking-[0.18em] text-[#8c5c36]">
                  MVP scope
                </p>
                <h3 className="mt-2 font-editorial text-[clamp(2rem,3vw,3.25rem)] font-medium leading-[0.95] tracking-[-0.045em] text-[#20362f]">
                  Prove communication value before adding intelligence and hardware.
                </h3>
              </div>
              <MvpScopeBoard />
            </div>
          </section>

          <section id="development" className="scroll-mt-28">
            <SectionIntro
              eyebrow="Product development"
              title="The MVP needed a development brief, not a feature wish list."
              description="I translated the user journey into a tablet-first interaction model, recruited a small developer team, and planned an alpha release before broader distribution. The technology plan explored speech, cloud, and image services without making them prerequisites for the first useful version."
            />
            <div className="mt-8">
              <DevelopmentBlueprint />
            </div>
          </section>

          <section id="pivots" className="scroll-mt-28">
            <SectionIntro
              eyebrow="What changed after conversations"
              title="The useful work was not defending the first idea. It was changing it."
              description="Early feedback changed both the interface and the product model. These were direction-setting pivots, not proof of clinical efficacy or scaled adoption."
            />

            <div className="mt-8 divide-y divide-[#ddcfb8] border-y border-[#ddcfb8]">
              {pivots.map(({ signal, decision, icon: Icon }, index) => (
                <div key={signal} className="grid gap-4 py-5 sm:grid-cols-[3rem_1fr_2rem_1fr] sm:items-center sm:gap-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f5e6c6] text-[#8f623d]">
                    <Icon className="h-4 w-4" />
                  </span>
                  <p className="text-sm leading-6 text-[#64716b]">{signal}</p>
                  <ChevronRight className="hidden h-5 w-5 text-[#b18a5c] sm:block" />
                  <p className="text-base font-semibold leading-6 text-[#20362f]">{decision}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="venture" className="scroll-mt-28">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.76fr)_minmax(0,1.24fr)] lg:items-start">
              <SectionIntro
                eyebrow="Building the venture"
                title="Product decisions became company-building decisions."
                description="The venture plan connected discovery, scope, hiring, funding, distribution, and milestones. It explored NGO- and school-led reach, a freemium model, future hardware, and staged development."
              />

              <div className="overflow-hidden rounded-[2rem] border border-[#d5c5aa] bg-[#fffaf2]">
                {founderWork.map(({ step, title, body, icon: Icon }, index) => (
                  <div key={step} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-[#ded1bc] p-5 last:border-b-0 sm:grid-cols-[3rem_10rem_1fr] sm:items-center sm:px-6">
                    <span className="font-mono text-[0.66rem] font-bold text-[#9a6638]">{step}</span>
                    <div className="flex items-center gap-3">
                      <Icon className="h-4 w-4 text-[#31564a]" />
                      <h3 className="text-sm font-semibold text-[#20362f]">{title}</h3>
                    </div>
                    <p className="col-start-2 text-sm leading-6 text-[#5d6a64] sm:col-start-3">{body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 rounded-[2.2rem] bg-[#203c34] px-6 py-8 text-[#fff8ea] sm:px-9 sm:py-10">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-end">
                <div>
                  <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.19em] text-[#f2bd59]">
                    What this experience built
                  </p>
                  <h2 className="mt-3 font-editorial text-[clamp(2.5rem,4.5vw,4.8rem)] font-medium leading-[0.9] tracking-[-0.06em]">
                    My product instinct started before my product title.
                  </h2>
                </div>
                <div className="space-y-5 text-base leading-8 text-[#e7ded1]">
                  <p>
                    Shabhash taught me to begin with the human problem, bring domain voices into the
                    room early, and let evidence change the solution.
                  </p>
                  <p>
                    It also exposed the operating surface of a venture: form the team, protect the
                    MVP from over-scoping, plan distribution, and make the case coherent enough to pitch.
                  </p>
                  <p className="text-sm text-[#bfcfc7]">
                    This page reconstructs the 2019 venture from the original plan and firsthand
                    experience. It does not claim launch-scale adoption or clinical outcomes.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-5 border-t border-[#d7c7aa] pt-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#9a6638]">
                Continue exploring
              </p>
              <h2 className="mt-2 font-editorial text-4xl font-medium tracking-[-0.05em] text-[#20362f]">
                More product work
              </h2>
            </div>
            <Link href="/work">
              <span className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#203c34] px-5 py-3 text-sm font-semibold text-[#fff8ea] transition-transform hover:-translate-y-0.5">
                Back to Work
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </section>
        </main>
      </div>
    </BackgroundComponents>
  );
}
