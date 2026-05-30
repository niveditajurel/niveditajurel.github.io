import { useEffect, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  AlertTriangle,
  ArrowRight,
  AudioLines,
  BarChart3,
  BrainCircuit,
  CarFront,
  ChevronRight,
  Clock3,
  Compass,
  Gauge,
  Layers3,
  Map,
  MessageSquare,
  PauseCircle,
  Route,
  ShieldCheck,
  Signal,
  TimerReset,
  Volume2,
  Waypoints,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const sectionLinks = [
  { id: "friction", label: "Moment" },
  { id: "problem", label: "Problem" },
  { id: "impact", label: "Impact" },
  { id: "research", label: "Research" },
  { id: "field-notes", label: "Field notes" },
  { id: "root-causes", label: "Root Causes" },
  { id: "judgment", label: "Judgment" },
  { id: "alternatives", label: "Alternatives" },
  { id: "mvp", label: "MVP" },
  { id: "metrics", label: "Metrics" },
  { id: "thinking", label: "PM Thinking" },
  { id: "builder", label: "Builder" },
  { id: "takeaway", label: "Takeaway" },
] as const;

const heroTakeaways = [
  {
    title: "Reframed problem",
    body: "This is an interruption-timing problem, not just a card-size issue.",
    icon: BrainCircuit,
  },
  {
    title: "Cross-market signal",
    body: "The same tension showed up on US highways and in dense Indian city turns.",
    icon: Signal,
  },
  {
    title: "Recommended direction",
    body: "Keep back-to-back trips, but change timing and detail based on risk.",
    icon: Workflow,
  },
] as const;

const whyItMatters = [
  {
    title: "Safety",
    body: "Visual distraction during high-attention driving moments.",
  },
  {
    title: "Driver experience",
    body: "Stress, annoyance, missed turns, and decision pressure.",
  },
  {
    title: "Rider experience",
    body: "Rerouting, longer ETA, and reduced trust.",
  },
  {
    title: "Marketplace",
    body: "Acceptance rate, request timeout, driver earnings, and rider wait time.",
  },
] as const;

const researchCards = [
  {
    title: "United States",
    label: "Uber Driver User Interviews - Informal Field Notes: United States",
    context: "Highway trips with exits and lane changes.",
    pain: "Incoming requests can occupy much of the lower map and maneuver area during exits and lane changes.",
    behavior: "Drivers either ignore the request or react quickly under timer pressure.",
    insight:
      "The driver is making an economic decision while still managing speed, lane position, rider safety, and route execution.",
  },
  {
    title: "India",
    label: "Uber Driver User Interviews - Informal Field Notes: India",
    context: "Dense urban trips with narrow roads, flyovers, and frequent requests.",
    pain: "Repeated popups make it harder to keep the map visible during complex city navigation.",
    behavior: "Drivers may accept quickly, complain, or miss turns when requests repeat.",
    insight:
      "In dense markets, the issue is the stack of high request frequency, tight roads, and time pressure.",
  },
  {
    title: "Cross-market pattern",
    label: "Cross-Market Pattern",
    context: "Synthesis across both observed markets.",
    pain: "The same request UI can become risky when attention is already saturated.",
    behavior: "Drivers either defer the request or respond quickly under pressure when navigation and dispatch overlap.",
    insight:
      "The core question is when the system should ask for attention, and how much it should demand.",
  },
] as const;

const evidenceRows = [
  {
    type: "Field observations",
    support: "US highway and India dense-city contexts show the same tension in different road conditions.",
  },
  {
    type: "Official Uber docs",
    support: "Back-to-back requests during active trips are intentional marketplace behavior.",
  },
  {
    type: "Trip Radar precedent",
    support: "Uber already uses speed-aware request presentation elsewhere in the driver ecosystem.",
  },
  {
    type: "Driver complaints",
    support: "Public forums show qualitative evidence of navigation obstruction during active trips.",
  },
  {
    type: "NHTSA / DOT / VTTI / IIHS",
    support: "Visual-manual distraction and eyes-off-road behavior can raise safety risk.",
  },
  {
    type: "Google automotive UX",
    support: "Driving-related information should stay primary and notifications should be reduced during maneuvers.",
  },
] as const;

const avoidChoices = [
  "I would not remove back-to-back requests because they support driver earnings and marketplace liquidity.",
  "I would not simply make the card smaller because the core issue is timing and attention demand.",
  "I would not rely only on a driver setting because safety-sensitive defaults should work without configuration.",
  "I would not use audio as the only solution because rider presence, noise, and language localization make it inconsistent.",
] as const;

const solutionComparisonCards = [
  {
    title: "Maneuver Shield",
    mode: "shield" as const,
    bestFor: "Exits, turns, merges, and roundabouts.",
    tradeoff: "May delay requests by a few seconds.",
  },
  {
    title: "Compact Banner Mode",
    mode: "banner" as const,
    bestFor: "Moving state with no immediate maneuver.",
    tradeoff: "Shows less request detail.",
  },
  {
    title: "Audio-first Request",
    mode: "audio" as const,
    bestFor: "High-speed or straight-road contexts.",
    tradeoff: "Awkward with a rider, noise, and localization.",
  },
  {
    title: "Timer Protection",
    mode: "timer" as const,
    bestFor: "Exclusive requests during risky moments.",
    tradeoff: "Can affect marketplace timing.",
  },
  {
    title: "Adaptive Request UI",
    mode: "adaptive" as const,
    bestFor: "Best overall system direction.",
    tradeoff: "Adds more states to design, QA, and instrument.",
  },
] as const;

const assumptionConstraints = [
  "The platform still needs to preserve back-to-back matching efficiency.",
  "Drivers need enough request detail to make an earning decision.",
  "The system should avoid hiding requests so often that drivers lose trust.",
  "Any timer pause must avoid creating unfair marketplace delays.",
  "Thresholds should differ by market, road type, and driver state.",
] as const;

const citationGroups = [
  {
    title: "Uber official product behavior",
    tone: "light",
    items: [
      {
        source: "Uber driver help on back-to-back trips",
        note: "Supports the claim that requests may arrive before the current trip ends.",
        href: "https://www.uber.com/en-NZ/blog/back-to-back-trips/",
      },
      {
        source: "Uber Trip Radar announcement",
        note: "Shows speed-aware request presentation already exists in the driver ecosystem.",
        href: "https://www.uber.com/en-NZ/blog/trip-radar/",
      },
      {
        source: "Uber help on acceptance and cancellation rates",
        note: "Supports the claim that acceptance behavior affects dispatch outcomes.",
        href: "https://help.uber.com/driving-and-delivering/article/understanding-your-acceptance-and-cancellation-rates?nodeId=0f105eaf-1345-4f59-8f94-3f13b7a53f0b",
      },
    ],
  },
  {
    title: "Driver complaints and anecdotal evidence",
    tone: "light",
    items: [
      {
        source: "Uber Drivers Forum thread about requests blocking GPS while driving",
        note: "Qualitative complaint signal consistent with the field observations.",
        href: "https://www.uberpeople.net/threads/requests-popping-up-and-then-blocking-your-navigation-while-driving.419094/",
      },
      {
        source: "Uber Drivers Forum thread on requests appearing at the worst moment while turning",
        note: "Another anecdotal example of bad request timing during turns.",
        href: "https://www.uberpeople.net/threads/how-do-i-stop-the-request-overlay-from-covering-my-map.452190/",
      },
      {
        source: "Reddit discussion on Uber Eats requests obstructing built-in navigation",
        note: "Public complaint signal about navigation being obscured mid-trip.",
        href: "https://www.reddit.com/r/UberEATSDrivers/comments/197x3vw/new_order_popup_obstructs_navigation/",
      },
    ],
  },
  {
    title: "Safety and cognitive load research",
    tone: "dark",
    items: [
      {
        source: "NHTSA distracted driving overview",
        note: "Supports the distracted-driving framing used in the case study.",
        href: "https://www.nhtsa.gov/risky-driving/distracted-driving",
      },
      {
        source: "US DOT and NHTSA guidance on visual-manual distraction",
        note: "Supports minimizing non-driving tasks that pull attention from the road.",
        href: "https://www.nhtsa.gov/document/visual-manual-nhtsa-driver-distraction-guidelines-portable-and-aftermarket-devices",
      },
      {
        source: "Virginia Tech Transportation Institute on driver distraction",
        note: "Supports the claim that driving is a visual task and eyes-off-road activity is risky.",
        href: "https://vtti.vt.edu/research/driver-distraction/",
      },
      {
        source: "IIHS overview of distracted driving",
        note: "Supports the broader link between phone interaction and crash risk.",
        href: "https://www.iihs.org/topics/distracted-driving",
      },
    ],
  },
  {
    title: "Automotive UX precedent",
    tone: "dark",
    items: [
      {
        source: "Android for Cars design guidance",
        note: "Supports keeping navigation primary over unrelated content.",
        href: "https://developer.android.com/design/ui/cars/guides/templates/navigation-template",
      },
      {
        source: "Google design for driving principles",
        note: "Supports suppressing or reducing notifications during maneuvers.",
        href: "https://developer.android.com/design/ui/cars/guides/design-for-driving",
      },
      {
        source: "Android Automotive OS UX restrictions",
        note: "Shows that automotive systems already restrict complexity by driving state.",
        href: "https://source.android.com/docs/automotive/driver_distraction/car_uxr",
      },
    ],
  },
] as const;

const rootCauses = [
  {
    title: "Timing conflict",
    body: "Requests can arrive during exits, merges, turns, or dense intersections when route attention is highest.",
  },
  {
    title: "Visual hierarchy conflict",
    body: "Navigation is primary, but the request card can become the dominant layer at the wrong moment.",
  },
  {
    title: "Decision pressure",
    body: "Exclusive requests create timer pressure while the driver should still be focused on the current trip.",
  },
  {
    title: "Market-density mismatch",
    body: "Highway and dense-city contexts create different risks, but the same request UI can treat them too similarly.",
  },
] as const;

const solutionAlternatives = [
  {
    name: "Maneuver Shield",
    mode: "shield" as const,
    description:
      "Suppress the full card during maneuver-critical windows and queue it until the route is safer to process.",
    pros: [
      "Keeps much more of the lower map and maneuver context clear during exits, merges, and turns.",
      "Matches established automotive patterns for reducing notification complexity during maneuvers.",
    ],
    tradeoffs: [
      "A slight response delay can slow dispatch by a few seconds.",
      "Requires reliable maneuver detection and threshold tuning across markets.",
    ],
  },
  {
    name: "Compact Banner Mode",
    mode: "banner" as const,
    description:
      "Replace the full card with a glanceable moving-state banner that preserves more of the map.",
    pros: [
      "Lower engineering lift than full suppression.",
      "Reduces map obstruction while preserving request visibility.",
    ],
    tradeoffs: [
      "Still creates some visual distraction.",
      "Less detail can make acceptance confidence weaker in time-sensitive decisions.",
    ],
  },
  {
    name: "Audio-first Request",
    mode: "audio" as const,
    description:
      "Use audio when the driver is moving quickly or nearing a complex maneuver, while the screen stays minimal.",
    pros: [
      "Cuts down on eyes-off-road demand.",
      "Useful for highway driving and longer straight-road contexts.",
    ],
    tradeoffs: [
      "Audio may be awkward with a rider in the vehicle.",
      "Localization and noisy road environments make execution more complex.",
    ],
  },
  {
    name: "Adaptive Request UI",
    mode: "adaptive" as const,
    description:
      "Change the request presentation by speed and maneuver risk: fuller when safe, lighter when risky.",
    pros: [
      "Best balance of safety protection and marketplace continuity.",
      "Builds on the speed-aware precedent already seen in Trip Radar.",
    ],
    tradeoffs: [
      "Introduces more UI states to design, QA, and explain clearly.",
      "Needs strong telemetry so the team understands where thresholds should shift.",
    ],
  },
] as const;

const metricGroups = [
  {
    title: "Safety proxies",
    icon: ShieldCheck,
    items: [
      "Missed turns after request display",
      "Missed exits after request display",
      "Hard braking after request display",
      "Screen interaction time while moving",
    ],
  },
  {
    title: "Marketplace guardrails",
    icon: BarChart3,
    items: [
      "Acceptance rate",
      "Request timeout rate",
      "Back-to-back trip conversion",
      "Driver earnings per active hour",
      "Rider wait time",
    ],
  },
  {
    title: "Driver and rider experience",
    icon: MessageSquare,
    items: [
      "Driver complaints about map obstruction",
      "ETA accuracy",
      "Reroute frequency",
      "Trip duration variance",
    ],
  },
] as const;

const experiments = [
  {
    title: "Experiment 1: Maneuver Shield",
    control: "Current full request card behavior.",
    variant: "Suppress the full card during maneuver-critical windows and show a queued or compact state.",
    hypothesis:
      "Suppressing full request cards during maneuver windows can reduce route deviations and missed turns without materially reducing acceptance rate.",
    metrics: ["Route deviations", "Missed turns", "Acceptance rate", "Request timeout rate"],
  },
  {
    title: "Experiment 2: Banner vs Full Card",
    control: "Full bottom request card while the vehicle is moving.",
    variant: "Thin banner while the vehicle is moving, preserving a larger map and navigation zone.",
    hypothesis:
      "A banner can preserve request awareness while reducing navigation obstruction and interaction time.",
    metrics: ["Screen interaction time", "Route deviations", "Acceptance rate", "Driver complaints"],
  },
  {
    title: "Experiment 3: Timer Pause",
    control: "Standard countdown timer for exclusive requests.",
    variant: "Acceptance timer pauses or extends during maneuver-critical moments, then resumes after the maneuver window ends.",
    hypothesis:
      "Timer extension can reduce unsafe quick taps and improve decision quality without meaningfully hurting marketplace speed.",
    metrics: ["Post-maneuver acceptance", "Request timeout rate", "Route deviations", "Rider wait time"],
  },
] as const;

const pmPrinciples = [
  {
    title: "Safety vs marketplace speed",
    body: "A small matching delay is acceptable if it lowers unsafe interaction during route-critical moments.",
  },
  {
    title: "Information richness vs glanceability",
    body: "Show less while moving. Restore richer detail when the driver is stopped or clear of the maneuver.",
  },
  {
    title: "Default safety vs driver control",
    body: "A future Focus Mode can help, but safer interruption handling should come from defaults first.",
  },
  {
    title: "Global consistency vs local tuning",
    body: "Use one interaction model globally, then tune thresholds by market context.",
  },
] as const;

const buildPhases = [
  "Phase 1: Instrument request display events near maneuver windows.",
  "Phase 2: Test compact moving-state banner against the current full card.",
  "Phase 3: Add maneuver shielding for high-risk moments.",
  "Phase 4: Pause or extend the acceptance timer for exclusive requests during maneuver windows.",
  "Phase 5: Tune thresholds by market, road type, and driver behavior.",
] as const;

type PhoneMode = "current" | "shield" | "banner" | "audio" | "compact" | "full" | "queued";

const reveal = {
  initial: { opacity: 0.96, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.42, ease: "easeOut" as const },
};

export default function UberDriverNavigationCaseStudy() {
  const [activeSection, setActiveSection] = useState<string>(sectionLinks[0].id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });

    const sections = sectionLinks
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));
    const updateActiveSection = () => {
      const offset = 180;
      let current: string = sectionLinks[0].id;

      for (const section of sections) {
        if (section.getBoundingClientRect().top - offset <= 0) {
          current = section.id;
        } else {
          break;
        }
      }

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="relative overflow-hidden bg-[#f3eee5] text-[#15120f]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(50,42,33,0.09),transparent_34%),radial-gradient(circle_at_80%_14%,rgba(102,84,53,0.1),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.36),rgba(243,238,229,0.96)_18%,rgba(243,238,229,1)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[26rem] bg-[linear-gradient(180deg,rgba(18,16,14,0.92),rgba(18,16,14,0.2)_62%,transparent)]" />

      <div className="relative mx-auto max-w-[96rem] px-4 pb-24 pt-8 sm:px-6 lg:px-8">
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="rounded-[2.6rem] border border-white/12 bg-[#12100e] px-6 py-7 text-[#f4eee7] shadow-[0_42px_120px_-56px_rgba(17,14,11,0.78)] lg:px-10 lg:py-9"
        >
          <div className="grid gap-8 xl:grid-cols-[39rem_minmax(0,1fr)] xl:items-start">
            <div className="space-y-3.5">
              <div className="flex flex-wrap gap-2.5">
                {["Independent case study", "Driver safety", "Dispatch UX"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/12 bg-white/6 px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#ddd2c2]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <p className="max-w-[29rem] text-[0.78rem] leading-6 text-[#ccbfae]">
                Independent case study based on public research, field observations, and product
                analysis. Not affiliated with Uber.
              </p>

              <div className="space-y-2.5">
                <h1 className="font-editorial text-[clamp(2.55rem,3.8vw,4rem)] font-medium leading-[0.88] tracking-[-0.06em] text-[#fbf6ef]">
                  <span className="block">When Dispatch</span>
                  <span className="block">Competes With</span>
                  <span className="block">Navigation</span>
                </h1>
                <p className="max-w-[31rem] text-[0.94rem] leading-7 text-[#e4d7c6] sm:text-[0.99rem]">
                  Incoming ride requests can interrupt turn-by-turn guidance during active trips. I
                  explored how dispatch prompts can become more context-aware without hurting
                  marketplace efficiency.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 xl:flex-nowrap">
                <button
                  type="button"
                  onClick={() => scrollToSection("friction")}
                  className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-[#f4eee6] px-5 py-3 text-sm font-semibold text-[#17120f] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  See the moment
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection("mvp")}
                  className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-white/14 bg-white/6 px-5 py-3 text-sm font-semibold text-[#f0e5d7] transition-colors duration-200 hover:bg-white/10"
                >
                  See recommended MVP
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              <div className="flex flex-wrap gap-2 pt-1 xl:flex-nowrap">
                {[
                  ["Seen in", "US + India"],
                  ["Users", "Drivers + riders"],
                  ["Direction", "Context-aware dispatch"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-3.5 py-2.5"
                  >
                    <p className="text-[0.56rem] font-semibold uppercase tracking-[0.18em] text-[#cbb89d]">
                      {label}
                    </p>
                    <p className="text-[0.82rem] leading-5 text-[#f1e5d6]">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(250,244,235,0.08),rgba(255,255,255,0.02))] p-5 shadow-[0_22px_60px_-38px_rgba(4,3,2,0.75)] xl:p-6">
              <div className="grid gap-5 lg:grid-cols-[21.75rem_minmax(0,16rem)] lg:grid-rows-[auto_1fr] lg:items-start lg:justify-between">
                <div className="lg:row-span-2">
                  <HeroScenarioFrame />
                </div>

                <div className="space-y-3 lg:col-start-2">
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#ccb89d]">
                      Current-state scenario
                    </p>
                    <div className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-[#f3e8da]">
                      First-view tension
                    </div>
                  </div>

                  <p className="max-w-[14rem] text-[0.88rem] leading-6 text-[#efe4d6]">
                    A rider is still in the vehicle. Near an exit, the next request can occupy the
                    lower map space the driver still needs.
                  </p>
                </div>

                <div className="flex flex-col gap-3 lg:col-start-2 lg:self-stretch">
                  <div className="rounded-[1.3rem] border border-white/12 bg-[#221d18] p-3.5">
                    <p className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-[#d1bc9d]">
                      Current task
                    </p>
                    <p className="mt-2 text-[0.88rem] leading-6 text-[#f2e7d8]">
                      Lower map and next-turn context.
                    </p>
                  </div>
                  <div className="rounded-[1.3rem] border border-white/12 bg-[#221d18] p-3.5">
                    <p className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-[#d1bc9d]">
                      Competing prompt
                    </p>
                    <p className="mt-2 text-[0.88rem] leading-6 text-[#f2e7d8]">
                      Fare, pickup, destination, timer.
                    </p>
                  </div>
                  <div className="rounded-[1.35rem] border border-[#b69362]/30 bg-[#241c15] p-3.5">
                    <p className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-[#d1bc9d]">
                      Core tension
                    </p>
                    <p className="mt-2 text-[0.88rem] leading-6 text-[#f5eadb]">
                      One screen asks the driver to navigate and judge the next trip at once.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <div className="mt-8 grid gap-8 xl:grid-cols-[15.5rem_minmax(0,1fr)] xl:items-start">
          <aside className="hidden xl:block">
            <div className="sticky top-28">
              <OnThisPageRail
                activeSection={activeSection}
                onSelect={scrollToSection}
              />
            </div>
          </aside>

          <main className="space-y-8">
            <SectionCard
              id="friction"
              eyebrow="The Moment of Friction"
              title="The request can take over much of the lower screen right when navigation matters most."
              description="A rider is still in the vehicle. The driver is approaching an exit. A full request card can occupy roughly the lower third to half of the screen once fare, pickup, destination, and action details appear."
            >
              <div className="space-y-4">
                <div className="grid gap-3 md:grid-cols-3">
                  <ScenarioChip
                    eyebrow="Active trip"
                    title="Rider still in vehicle"
                    body="The driver is still responsible for the current trip and the live route."
                  />
                  <ScenarioChip
                    eyebrow="Maneuver"
                    title="Exit is approaching"
                    body="The driver still needs much of the lower map and maneuver context to plan the next move."
                  />
                  <ScenarioChip
                    eyebrow="Interruption"
                    title="Request overlaps guidance"
                    body="Dispatch now pushes fare, pickup, destination, timer, and actions into the same constrained space."
                  />
                </div>

                <div className="rounded-[1.8rem] border border-[#1d1813] bg-[#171310] p-5 text-[#f6eee4]">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#d2bd9d]">
                    Why this moment matters
                  </p>
                  <p className="mt-3 text-[1rem] leading-7 text-[#e6d9c8]">
                    The issue is not a thin overlay. A full request card can occupy much of the lower
                    screen while the driver still needs map, lane, and maneuver context to stay visible.
                  </p>
                </div>

                <InterruptionStoryboard />
              </div>
            </SectionCard>

            <SectionCard
              id="problem"
              eyebrow="Reframed Problem"
              title="This is an interruption-timing problem, not just a card-size problem."
              description="Back-to-back trips are valuable. The interruption timing needs more context."
            >
              <div className="grid gap-4 xl:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
                <div className="rounded-[2rem] border border-[#d0b287] bg-[#fffaf3] p-6 shadow-[0_26px_58px_-38px_rgba(101,72,29,0.24)]">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#8d6f49]">
                    Product framing
                  </p>
                  <p className="mt-4 font-editorial text-[clamp(2.1rem,4vw,3rem)] leading-[0.95] tracking-[-0.05em] text-[#1c1712]">
                    When is it safe and useful to interrupt a driver?
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <ProblemSignalCard
                    title="Back-to-back value"
                    body="Back-to-back trips support driver earnings and marketplace efficiency."
                  />
                  <ProblemSignalCard
                    title="Where the risk appears"
                    body="The same request UI can become risky when it surfaces during a maneuver-critical moment."
                  />
                  <ProblemSignalCard
                    title="Design principle"
                    body="Navigation should stay primary while the vehicle is moving."
                  />
                  <ProblemSignalCard
                    title="Direction"
                    body="Change request presentation based on speed, maneuver risk, and driver state."
                  />
                </div>
              </div>
            </SectionCard>

            <SectionCard
              id="impact"
              eyebrow="Why It Matters"
              title="One prompt can affect safety, trust, and marketplace flow."
            >
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {whyItMatters.map((item, index) => (
                  <ImpactCard key={item.title} title={item.title} body={item.body} tone={index} />
                ))}
              </div>
            </SectionCard>

            <SectionCard
              id="research"
              eyebrow="Research Signal"
              title="The signal is consistent across product behavior, field observations, and safety guidance."
              description="Public forum evidence is treated as qualitative signal, not prevalence data."
            >
              <div className="space-y-5">
                <div className="overflow-hidden rounded-[2rem] border border-[#d8ccb6] bg-[#fffaf3]">
                  <div className="grid grid-cols-[minmax(0,0.34fr)_minmax(0,1fr)] border-b border-[#dfd2c0] bg-[#f5ede1] px-5 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#7f6540]">
                    <div>Evidence type</div>
                    <div>What it supports</div>
                  </div>
                  {evidenceRows.map((row, index) => (
                    <div
                      key={row.type}
                      className={cn(
                        "grid grid-cols-[minmax(0,0.34fr)_minmax(0,1fr)] gap-4 px-5 py-4 text-sm leading-7 text-[#3f352c]",
                        index !== evidenceRows.length - 1 && "border-b border-[#e7dccd]",
                      )}
                    >
                      <div className="font-semibold text-[#1e1813]">{row.type}</div>
                      <div>{row.support}</div>
                    </div>
                  ))}
                </div>

                <details className="rounded-[2rem] border border-[#d8ccb6] bg-[#f9f3ea] p-5">
                  <summary className="cursor-pointer list-none text-sm font-semibold uppercase tracking-[0.16em] text-[#846741]">
                    Deep Dive: Research Notes and Citations
                  </summary>
                  <div className="mt-5 grid gap-4 xl:grid-cols-2">
                    {citationGroups.map((group) => (
                      <div
                        key={group.title}
                        className={cn(
                          "rounded-[1.7rem] border p-5",
                          group.tone === "dark"
                            ? "border-[#201912] bg-[#171310] text-[#f5ede2]"
                            : "border-[#d8ccb6] bg-white/72 text-[#221b14]",
                        )}
                      >
                        <p
                          className={cn(
                            "text-[0.72rem] font-semibold uppercase tracking-[0.18em]",
                            group.tone === "dark" ? "text-[#ceb99d]" : "text-[#8a6d46]",
                          )}
                        >
                          {group.title}
                        </p>
                        <div className="mt-4 space-y-3">
                          {group.items.map((item) => (
                            <a
                              key={item.href}
                              href={item.href}
                              target="_blank"
                              rel="noreferrer"
                              className={cn(
                                "block rounded-[1.25rem] border px-4 py-4 transition-transform duration-200 hover:-translate-y-0.5",
                                group.tone === "dark"
                                  ? "border-white/10 bg-white/5 hover:bg-white/7"
                                  : "border-[#e2d5c3] bg-[#faf6f0] hover:bg-white",
                              )}
                            >
                              <p className="text-sm font-semibold leading-6">{item.source}</p>
                              <p
                                className={cn(
                                  "mt-2 text-sm leading-6",
                                  group.tone === "dark" ? "text-[#d8ccbc]" : "text-[#53483d]",
                                )}
                              >
                                {item.note}
                              </p>
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </details>
              </div>
            </SectionCard>

            <SectionCard
              id="field-notes"
              eyebrow="User Research"
              title="Informal field notes show the same interruption pattern across different road contexts."
              description="These notes are based on informal driver conversations and field observations, not structured usability research."
            >
              <div className="grid gap-4 xl:grid-cols-3">
                {researchCards.map((card, index) => (
                  <FieldNoteCard key={card.label} card={card} index={index + 1} />
                ))}
              </div>
            </SectionCard>

            <SectionCard
              id="root-causes"
              eyebrow="Root Cause Analysis"
              title="Four product conditions create the risk."
            >
              <div className="grid gap-4 lg:grid-cols-2">
                {rootCauses.map((cause, index) => (
                  <motion.div
                    key={cause.title}
                    {...reveal}
                    transition={{ ...reveal.transition, delay: index * 0.05 }}
                    className="rounded-[2rem] border border-[#d8cbb8] bg-[#f9f3ea] p-6"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <p className="font-editorial text-[2rem] leading-[0.95] tracking-[-0.04em] text-[#1b1712]">
                        {cause.title}
                      </p>
                      <span className="rounded-full border border-[#ccb592] bg-[#efe3d4] px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[#7d633d]">
                        0{index + 1}
                      </span>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-[#473c30]">{cause.body}</p>
                  </motion.div>
                ))}
              </div>
            </SectionCard>

            <SectionCard
              id="judgment"
              eyebrow="What I Would Not Do"
              title="Some obvious fixes solve the wrong layer of the problem."
            >
              <div className="grid gap-4 md:grid-cols-2">
                {avoidChoices.map((item, index) => (
                  <div
                    key={item}
                    className="rounded-[1.8rem] border border-[#d8ccb8] bg-[#f9f3ea] p-5"
                  >
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#88693f]">
                      Judgment 0{index + 1}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[#473c31]">{item}</p>
                  </div>
                ))}
              </div>
            </SectionCard>

            <SectionCard
              id="alternatives"
              eyebrow="Solution Alternatives"
              title="Several tactics help, but one system direction stands out."
              description="The goal is not to remove requests. It is to change how they surface in risky moments."
            >
              <div className="grid gap-4 lg:grid-cols-2 2xl:grid-cols-3">
                {solutionComparisonCards.map((card) => (
                  <AlternativeCard key={card.title} card={card} />
                ))}
              </div>
            </SectionCard>

            <SectionCard
              id="mvp"
              eyebrow="Recommended MVP"
              title="Recommended MVP: Maneuver-Aware Compact Request Mode"
              description="The MVP should preserve back-to-back trips but change how requests appear based on driver state."
            >
              <div className="space-y-5">
                <AdaptivePolicyStrip />

                <div className="grid gap-5 xl:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] xl:items-start">
                  <div className="rounded-[2rem] border border-[#1f1913] bg-[#171310] p-6 text-[#f7f0e6]">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#d3bd9d]">
                      State model
                    </p>
                    <div className="mt-5 grid gap-3">
                      <LogicStep title="Stopped" detail="Full request card." tone="light" />
                      <LogicStep title="Moving slowly" detail="Compact request card." tone="light" />
                      <LogicStep title="Moving fast" detail="Audio summary plus thin banner." tone="light" />
                      <LogicStep title="Critical maneuver approaching" detail="Queue the full card and protect the timer." tone="accent" />
                      <LogicStep title="After the maneuver" detail="Restore the full request UI." tone="light" />
                    </div>
                  </div>

                  <div className="rounded-[2rem] border border-[#d8ccb8] bg-[#faf5ed] p-6">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#8d6f49]">
                      Product-builder reasoning
                    </p>
                    <p className="mt-4 text-[1rem] leading-8 text-[#43382d]">
                      I would start with a rule-based MVP instead of a heavy ML model because the first
                      goal is to prove that presentation changes reduce route deviations near request
                      events. Once the team validates the signal, the policy can evolve into a more
                      personalized or predictive model.
                    </p>
                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      <SummaryBlock
                        title="What v1 proves"
                        body="Whether timing-aware presentation can reduce route disruption without hurting matching efficiency."
                      />
                      <SummaryBlock
                        title="What comes later"
                        body="Threshold tuning, market-specific policies, and more predictive or personalized logic."
                      />
                    </div>
                  </div>
                </div>

                <div className="rounded-[2rem] border border-[#d8ccb8] bg-[#f8f2e9] p-6">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#8d6f49]">
                    Before vs after
                  </p>
                  <div className="mt-5 grid gap-4 lg:grid-cols-2">
                    <ComparisonPanel
                      label="Before"
                      description="The same request UI appears regardless of driving context."
                    >
                      <DriverPhoneMockup
                        mode="current"
                        instruction="Take exit in 0.3 mi"
                        subInstruction="I-80 West / Downtown"
                        bannerText="$18.50 | 7 min pickup"
                        bottomTitle="New ride request"
                        bottomSubtitle="Downtown to Airport"
                        detailItems={["1.8 mi away", "Drop-off preview", "8 sec timer"]}
                        footerNote="Full request card can cover much of the lower screen"
                        readable
                        size="feature"
                      />
                    </ComparisonPanel>
                    <ComparisonPanel
                      label="After"
                      description="The request adapts based on speed, maneuver risk, and interaction safety."
                    >
                      <DriverPhoneMockup
                        mode="shield"
                        instruction="Take exit in 0.3 mi"
                        subInstruction="I-80 West / Downtown"
                        bannerText="$18.50 | 7 min pickup"
                        bottomTitle="Focus mode"
                        bottomSubtitle="Request queued until after turn"
                        footerNote="Request is minimized during the maneuver, then restored"
                        readable
                        size="feature"
                      />
                    </ComparisonPanel>
                  </div>
                </div>

                <div className="rounded-[2rem] border border-[#d8ccb8] bg-[#faf5ed] p-6">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#8d6f49]">
                    Assumptions and constraints
                  </p>
                  <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
                    {assumptionConstraints.map((item) => (
                      <div
                        key={item}
                        className="rounded-[1.35rem] border border-[#e2d5c3] bg-white/75 px-4 py-4 text-sm leading-6 text-[#473c31]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SectionCard>

            <SectionCard
              id="metrics"
              eyebrow="Metrics and Experiment Plan"
              title="Validate whether safer presentation reduces route disruption near request events."
            >
              <div className="grid gap-5 xl:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
                <div className="rounded-[2rem] border border-[#1e1813] bg-[#171310] p-6 text-[#f6eee3]">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#d1bc9e]">
                    Primary success metric
                  </p>
                  <p className="mt-4 font-editorial text-[2.35rem] leading-[0.94] tracking-[-0.05em] text-[#fbf6ef]">
                    Reduction in route deviations near request events.
                  </p>
                  <p className="mt-4 text-sm leading-7 text-[#d8cbba]">
                    Defined as a request event followed by a nearby maneuver, a route deviation, and a reroute.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  {metricGroups.map((group) => (
                    <MetricGroup key={group.title} group={group} />
                  ))}
                </div>
              </div>

              <div className="mt-5 grid gap-4 xl:grid-cols-3">
                {experiments.map((experiment) => (
                  <ExperimentCard key={experiment.title} experiment={experiment} />
                ))}
              </div>
            </SectionCard>

            <SectionCard
              id="thinking"
              eyebrow="PM Thinking"
              title="The right framing is interruption management, not cosmetic cleanup."
              description="This is a product policy problem before it is a visual design problem."
            >
              <div className="grid gap-5 xl:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
                <div className="rounded-[2rem] border border-[#1f1913] bg-[#171310] p-6 text-[#f6eee4]">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#d2bd9d]">
                    Product framing
                  </p>
                  <p className="mt-4 text-[1.05rem] leading-8 text-[#f4ebdf]">
                    Back-to-back requests are valuable. The better move is not to remove them, but to redesign
                    when and how the product asks for attention.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {pmPrinciples.map((principle) => (
                    <div
                      key={principle.title}
                      className="rounded-[2rem] border border-[#d8ccb8] bg-[#f9f3ea] p-5"
                    >
                      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#88693f]">
                        {principle.title}
                      </p>
                      <p className="mt-3 text-sm leading-7 text-[#473c31]">{principle.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </SectionCard>

            <SectionCard
              id="builder"
              eyebrow="Product Builder Thinking"
              title="Roll it out in phases, then tune the policy."
              description="The first goal is not perfect intelligence. It is a reliable policy with measurable behavior change."
            >
              <div className="grid gap-5 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
                <div className="space-y-3">
                  {buildPhases.map((phase, index) => (
                    <PhaseCard key={phase} phase={phase} index={index + 1} />
                  ))}
                </div>

                <div className="rounded-[2rem] border border-[#1f1913] bg-[#171310] p-6 text-[#f7efe3]">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#d2bd9d]">
                    Small systems view
                  </p>
                  <div className="mt-5 grid gap-4">
                    <BuilderSystem
                      icon={Gauge}
                      title="State inputs"
                      body="Speed, maneuver proximity, road type, and request urgency."
                    />
                    <BuilderSystem
                      icon={Map}
                      title="Display policy"
                      body="Choose full card, compact card, banner, audio summary, or queued state."
                    />
                    <BuilderSystem
                      icon={BarChart3}
                      title="Measurement"
                      body="Track display mode, route deviation, interaction while moving, and marketplace impact."
                    />
                  </div>
                </div>
              </div>
            </SectionCard>

            <motion.section
              id="takeaway"
              {...reveal}
              className="scroll-mt-32 rounded-[2.4rem] border border-[#1d1813] bg-[#171310] px-6 py-8 text-[#f6eee2] shadow-[0_28px_90px_-52px_rgba(13,11,8,0.84)] lg:px-8 lg:scroll-mt-36"
            >
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#d0bb9d]">
                Final Takeaway
              </p>
              <div className="mt-5 grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-end">
                <div>
                  <p className="max-w-[12ch] font-editorial text-[clamp(2.45rem,5vw,4rem)] leading-[0.9] tracking-[-0.05em] text-[#fbf6ef]">
                    Dispatch should adapt to the driver&apos;s attention state, not compete with it.
                  </p>
                </div>
                <div className="space-y-4 text-sm leading-7 text-[#d8ccbb]">
                  <p>
                    The strongest driver experience is not the one that shows the most information fastest.
                    It is the one that understands when the driver can safely process it.
                  </p>
                </div>
              </div>
            </motion.section>
          </main>

        </div>
      </div>

    </div>
  );
}

function OnThisPageRail({
  activeSection,
  onSelect,
}: {
  activeSection: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="rounded-[2rem] border border-[#d8cbb6] bg-[#fbf7f0]/96 p-4 shadow-[0_20px_42px_-38px_rgba(77,56,29,0.2)] backdrop-blur-md">
      <p className="px-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#8b6d45]">
        On this page
      </p>
      <div className="mt-3 space-y-1.5">
        {sectionLinks.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onSelect(item.id)}
            className={cn(
              "flex w-full items-center justify-between rounded-[1.1rem] px-3 py-2.5 text-left text-sm font-medium transition-colors duration-200",
              activeSection === item.id
                ? "bg-[#1c1713] text-[#f8f0e5]"
                : "text-[#4b4034] hover:bg-[#f0e7db]",
            )}
          >
            <span>{item.label}</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        ))}
      </div>
    </div>
  );
}

function SectionCard({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <motion.section
      id={id}
      {...reveal}
      className="scroll-mt-32 rounded-[2.3rem] border border-[#d8cbb7] bg-[#f6f0e7]/94 px-5 py-6 shadow-[0_24px_50px_-42px_rgba(75,54,27,0.14)] backdrop-blur-sm sm:px-6 lg:px-8 lg:scroll-mt-36 lg:py-7"
    >
      <div className="max-w-[62rem]">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#896b42]">{eyebrow}</p>
        <h2 className="mt-3 max-w-[24ch] font-editorial text-[clamp(2rem,3.1vw,3.2rem)] font-medium leading-[0.95] tracking-[-0.05em] text-[#1a1612]">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 max-w-[46rem] text-[0.98rem] leading-7 text-[#40362b]">
            {description}
          </p>
        ) : null}
      </div>
      <div className="mt-6">{children}</div>
    </motion.section>
  );
}

function HighlightCard({
  title,
  body,
  icon: Icon,
}: {
  title: string;
  body: string;
  icon: LucideIcon;
}) {
  return (
    <div className="rounded-[1.55rem] border border-white/10 bg-white/6 p-4 shadow-[0_18px_36px_-28px_rgba(0,0,0,0.55)]">
      <div className="flex items-center gap-3">
        <div className="rounded-full border border-white/12 bg-white/10 p-2.5 text-[#f5ede2]">
          <Icon className="h-4 w-4" />
        </div>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#f5ebdf]">{title}</p>
      </div>
      <p className="mt-3 text-sm leading-6 text-[#ebe0d1]">{body}</p>
    </div>
  );
}

function ScenarioChip({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-[1.6rem] border border-[#e0d3c2] bg-white/78 p-4 shadow-[0_18px_36px_-30px_rgba(77,56,29,0.12)]">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#b18a58]">{eyebrow}</p>
      <p className="mt-2 text-lg font-semibold tracking-[-0.03em] text-[#1f1a15]">{title}</p>
      <p className="mt-2 text-sm leading-6 text-[#584b3d]">{body}</p>
    </div>
  );
}

function SummaryBlock({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-[1.6rem] border border-[#dfd3c1] bg-white/72 p-5">
      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[#86683f]">{title}</p>
      <p className="mt-3 text-sm leading-6 text-[#453a2f]">{body}</p>
    </div>
  );
}

function ProblemSignalCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-[1.7rem] border border-[#d7bc95] bg-[#fff8ef] p-5 shadow-[0_18px_42px_-32px_rgba(119,82,31,0.18)]">
      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#8d6a38]">{title}</p>
      <p className="mt-4 text-[1.02rem] leading-8 text-[#42362b]">{body}</p>
    </div>
  );
}

function ImpactCard({
  title,
  body,
  tone,
}: {
  title: string;
  body: string;
  tone: number;
}) {
  const toneClasses = [
    "border-[#d7b585] bg-[#fff7ed] shadow-[0_18px_40px_-30px_rgba(186,130,60,0.18)]",
    "border-[#d7c0a2] bg-[#fbf1e6] shadow-[0_18px_40px_-30px_rgba(120,86,45,0.14)]",
    "border-[#cdbba3] bg-[#f7efe8] shadow-[0_18px_40px_-30px_rgba(92,70,44,0.12)]",
    "border-[#cba978] bg-[#f8ede0] shadow-[0_18px_40px_-30px_rgba(165,118,54,0.16)]",
  ] as const;

  return (
    <div className={cn("rounded-[1.75rem] border p-5", toneClasses[tone % toneClasses.length])}>
      <p className="text-[0.76rem] font-semibold uppercase tracking-[0.18em] text-[#9a733d]">{title}</p>
      <p className="mt-4 text-[1.02rem] leading-8 text-[#46392d]">{body}</p>
    </div>
  );
}

function InterruptionStoryboard() {
  const steps = [
    {
      icon: Map,
      title: "Navigate",
      body: "Track route, lane position, and the next turn.",
    },
    {
      icon: Clock3,
      title: "Request appears",
      body: "A limited-time earning prompt enters the same screen.",
    },
    {
      icon: BrainCircuit,
      title: "Attention splits",
      body: "The driver scans both the map and the request.",
    },
    {
      icon: AlertTriangle,
      title: "Route quality drops",
      body: "Missed turns, late exits, or abrupt rerouting become more likely.",
    },
  ] as const;

  return (
    <div className="rounded-[2rem] border border-[#dccfbd] bg-[#fbf6ee] p-5 shadow-[0_18px_46px_-34px_rgba(77,56,29,0.12)]">
      <div className="flex items-center justify-between gap-4">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#87693f]">
          Attention storyboard
        </p>
        <p className="font-hand text-[1.15rem] leading-none text-[#b4793b]">
          same screen, two jobs
        </p>
      </div>

      <div className="mt-4 grid gap-3 lg:grid-cols-4">
        {steps.map((step, index) => (
          <StoryboardStep key={step.title} {...step} index={index + 1} />
        ))}
      </div>
    </div>
  );
}

function HeroScenarioFrame() {
  return (
    <div className="flex justify-center lg:justify-start">
      <div className="w-full max-w-[21.75rem]">
        <div className="rounded-[2.7rem] border border-[#2a241d] bg-[#0f0d0b] p-2 shadow-[0_34px_82px_-44px_rgba(8,7,6,0.92)]">
          <div className="overflow-hidden rounded-[1.95rem] border border-white/10 bg-[#e8ddd0]">
            <div className="flex items-center justify-between bg-[#0f0d0c] px-4 py-2 text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-[#f2e8d9]">
              <span>Driver app</span>
              <span>Active trip</span>
            </div>

            <div className="relative h-[32.4rem] overflow-hidden bg-[#d9deea]">
              <MapArtwork />

              <div className="absolute left-4 right-4 top-4 rounded-[1.35rem] border border-white/45 bg-[#f5ede2]/92 px-4 py-3.5 text-[#1f1a16] shadow-[0_16px_30px_-18px_rgba(0,0,0,0.28)] backdrop-blur-md">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-[#9f672c]">
                      Next maneuver
                    </p>
                    <p className="mt-1 text-[1.04rem] font-semibold leading-6 tracking-[-0.02em] text-[#231b14]">
                      Take exit in 0.3 mi
                    </p>
                    <p className="mt-1 text-[0.8rem] leading-5 text-[#7c6242]">I-80 West / Downtown</p>
                  </div>
                  <div className="rounded-full border border-white/35 bg-[#2b231c] p-2.5 text-[#f4eadc]">
                    <Route className="h-4 w-4" />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-[11.85rem] border-t border-white/18 bg-[#171310] px-4 pb-4 pt-3.5 text-[#f6eee3] shadow-[0_-26px_40px_-34px_rgba(14,11,8,0.95)]">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-[#e4caa3]">
                      New ride request
                    </p>
                    <p className="mt-2 text-[1.04rem] font-semibold leading-6 text-[#fff7ec]">$18.50 | 7 min pickup</p>
                    <p className="mt-1 text-[0.88rem] leading-5 text-[#e6d9c8]">Downtown to Airport</p>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/8 p-2.5 text-[#ede1d2]">
                    <Clock3 className="h-4 w-4" />
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-[#e7d8c4]">
                  <span>1.8 mi away</span>
                  <span className="text-white/30">•</span>
                  <span>Drop-off preview</span>
                  <span className="text-white/30">•</span>
                  <span>8 sec timer</span>
                </div>

                <div className="mt-3 flex items-center gap-2.5">
                  <button
                    type="button"
                    className="flex-1 rounded-full border border-white/14 px-3 py-2.5 text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-[#e8dccb]"
                  >
                    Decline
                  </button>
                  <button
                    type="button"
                    className="flex-1 rounded-full bg-[#f5ede2] px-3 py-2.5 text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-[#16120f]"
                  >
                    Accept
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StoryboardStep({
  icon: Icon,
  title,
  body,
  index,
}: {
  icon: LucideIcon;
  title: string;
  body: string;
  index: number;
}) {
  return (
    <div className="relative rounded-[1.45rem] border border-[#e3d6c7] bg-white/85 p-4">
      <div className="flex items-center justify-between gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dbc9b2] bg-[#f4e8d8] text-[#755c3e]">
          <Icon className="h-4 w-4" />
        </div>
        <span className="rounded-full border border-[#e2d4c2] bg-[#fff7ee] px-2 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#8d6d42]">
          0{index}
        </span>
      </div>
      <p className="mt-4 text-base font-semibold tracking-[-0.03em] text-[#1c1712]">{title}</p>
      <p className="mt-2 text-sm leading-6 text-[#54473a]">{body}</p>
    </div>
  );
}

function FieldNoteCard({
  card,
  index,
}: {
  card: (typeof researchCards)[number];
  index: number;
}) {
  const compactTitleClass =
    card.title === "Cross-market pattern"
      ? "text-[clamp(1.52rem,1.95vw,1.82rem)]"
      : card.title === "United States"
        ? "text-[clamp(1.75rem,2.3vw,2.05rem)] md:whitespace-nowrap"
        : "text-[clamp(1.85rem,2.5vw,2.2rem)]";

  return (
    <motion.article
      {...reveal}
      transition={{ ...reveal.transition, delay: index * 0.05 }}
      className="flex h-full flex-col rounded-[2rem] border border-[#d8ccb8] bg-[#f9f4ec] p-6"
    >
      <div className="space-y-4">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
          <p className="max-w-[17rem] text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#8a6d44]">
            {card.label}
          </p>
          <span className="inline-flex min-w-[6.85rem] shrink-0 items-center justify-center whitespace-nowrap rounded-full border border-[#c9b393] bg-[#efe5d6] px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#7f6540]">
            Note {String(index).padStart(2, "0")}
          </span>
        </div>

        <h3
          className={cn(
            "max-w-[18.5rem] font-editorial leading-[0.95] tracking-[-0.04em] text-[#1b1712]",
            compactTitleClass,
          )}
        >
          {card.title}
        </h3>
      </div>

      <div className="mt-5 space-y-3">
        <ResearchLine label="Context" value={card.context} />
        <ResearchLine label="Pain observed" value={card.pain} />
        <ResearchLine label="Behavior observed" value={card.behavior} />
      </div>

      <div className="mt-auto pt-5">
        <div className="rounded-[1.45rem] border border-[#b99b70] bg-[#2d241b] p-4 text-[#f6eee4]">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#d2bd9d]">
            Key insight
          </p>
          <p className="mt-3 text-sm leading-7">{card.insight}</p>
        </div>
      </div>
    </motion.article>
  );
}

function ResearchLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.25rem] border border-[#e3d7c8] bg-white/60 px-4 py-3">
      <p className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-[#886b42]">{label}</p>
      <p className="mt-2 text-sm leading-7 text-[#3f352c]">{value}</p>
    </div>
  );
}

function ScopeTile({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-[1.5rem] border border-[#ddd0be] bg-white/78 p-4">
      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[#886a40]">{title}</p>
      <p className="mt-2.5 text-sm leading-6 text-[#43382d]">{body}</p>
    </div>
  );
}

function InsightFlag({ label, body }: { label: string; body: string }) {
  return (
    <div className="rounded-[1.5rem] border border-[#dfd2c1] bg-white/74 p-4">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#896b43]">{label}</p>
      <p className="mt-3 text-sm leading-7 text-[#463b30]">{body}</p>
    </div>
  );
}

function ConflictBlock({
  icon: Icon,
  title,
  body,
}: {
  icon: LucideIcon;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-4">
      <div className="flex items-center gap-3">
        <div className="rounded-full border border-white/10 bg-white/8 p-2.5 text-[#eee2d2]">
          <Icon className="h-4 w-4" />
        </div>
        <p className="text-lg font-semibold tracking-[-0.03em] text-[#faf4ed]">{title}</p>
      </div>
      <p className="mt-3 text-sm leading-6 text-[#d6cab9]">{body}</p>
    </div>
  );
}

function AttentionNode({
  icon: Icon,
  title,
  body,
}: {
  icon: LucideIcon;
  title: string;
  body: string;
}) {
  return (
    <div className="flex h-full flex-col rounded-[1.55rem] border border-[#dfd4c4] bg-white/76 p-5">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#ddd1bf] bg-[#f5ece0] text-[#735b3d]">
        <Icon className="h-4 w-4" />
      </div>
      <p className="mt-5 text-[1.08rem] font-semibold leading-6 tracking-[-0.03em] text-[#7d613b]">{title}</p>
      <p className="mt-2 text-[0.98rem] leading-8 text-[#483d31]">{body}</p>
    </div>
  );
}

function SystemsNode({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-4">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#d3bd9d]">{title}</p>
      <p className="mt-3 text-sm leading-7 text-[#e3d7c7]">{body}</p>
    </div>
  );
}

function Connector() {
  return (
    <div className="hidden justify-center lg:flex">
      <div className="rounded-full border border-white/10 bg-white/5 p-3 text-[#d5c7b6]">
        <ArrowRight className="h-4 w-4" />
      </div>
    </div>
  );
}

function TensionCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-[1.45rem] border border-[#dfd3c3] bg-white/74 p-4">
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#876a40]">{title}</p>
      <p className="mt-3 text-sm leading-6 text-[#463b30]">{body}</p>
    </div>
  );
}

function PainPointCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="h-full rounded-[1.45rem] border border-[#8f6f48]/35 bg-[#211912] px-4 py-4 shadow-[0_20px_36px_-26px_rgba(0,0,0,0.72)]">
      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#e0c296]">{title}</p>
      <p className="mt-3 text-[0.98rem] leading-8 text-[#f6ebdd]">{body}</p>
    </div>
  );
}

function AlternativeCard({
  card,
}: {
  card: (typeof solutionComparisonCards)[number];
}) {
  const isRecommended = card.title === "Adaptive Request UI";

  return (
    <div
      className={cn(
        "rounded-[1.8rem] border p-5",
        isRecommended
          ? "border-[#1f1913] bg-[#171310] text-[#f6eee4]"
          : "border-[#d8ccb8] bg-[#f9f3ea] text-[#1f1913]",
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <p
          className={cn(
            "font-editorial text-[1.45rem] leading-[0.98] tracking-[-0.04em]",
            isRecommended ? "text-[#fbf6ef]" : "text-[#1c1712]",
          )}
        >
          {card.title}
        </p>
        {isRecommended ? (
          <span className="rounded-full border border-white/12 bg-white/6 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-[#eadfcf]">
            Best overall
          </span>
        ) : null}
      </div>
      <div className="mt-4">
        <AlternativeConceptPreview mode={card.mode} recommended={isRecommended} />
      </div>
      <div className="mt-5 space-y-3">
        <AlternativeBullet
          label="Best for"
          value={card.bestFor}
          dark={isRecommended}
        />
        <AlternativeBullet
          label="Tradeoff"
          value={card.tradeoff}
          dark={isRecommended}
        />
      </div>
    </div>
  );
}

function AlternativeBullet({
  label,
  value,
  dark,
}: {
  label: string;
  value: string;
  dark: boolean;
}) {
  return (
    <div className="flex items-start gap-3">
      <span
        className={cn(
          "mt-[0.45rem] h-2.5 w-2.5 rounded-full",
          dark ? "bg-[#d6b281]" : "bg-[#b68545]",
        )}
      />
      <div>
        <p
          className={cn(
            "text-[0.72rem] font-semibold uppercase tracking-[0.18em]",
            dark ? "text-[#d8c3a3]" : "text-[#88693f]",
          )}
        >
          {label}
        </p>
        <p className={cn("mt-1 text-sm leading-7", dark ? "text-[#efe3d4]" : "text-[#463b30]")}>
          {value}
        </p>
      </div>
    </div>
  );
}

function AlternativeConceptPreview({
  mode,
  recommended,
}: {
  mode: (typeof solutionComparisonCards)[number]["mode"];
  recommended: boolean;
}) {
  const dark = recommended;
  const noteText =
    mode === "shield"
      ? "safe after turn"
      : mode === "banner"
        ? "thin while moving"
        : mode === "audio"
          ? "audio carries detail"
          : mode === "timer"
            ? "hold timer"
            : "state-based rules";

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.45rem] border p-4",
        dark
          ? "border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))]"
          : "border-[#dfd2c1] bg-[#fffaf3]",
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute bottom-3 right-3 z-10 rounded-full border px-3 py-1 font-hand text-[1.02rem] leading-none shadow-[0_12px_26px_-18px_rgba(82,54,18,0.45)]",
          dark
            ? "border-[#755634] bg-[#251b13] text-[#efc48f]"
            : "border-[#e3c39b] bg-[#fff5e8] text-[#a46126]",
        )}
      >
        {noteText}
      </div>

      <div
        className={cn(
          "relative h-[9.8rem] overflow-hidden rounded-[1.2rem] border",
          dark ? "border-white/10 bg-[#1f1914]" : "border-[#e4d7c7] bg-[#f7efe4]",
        )}
      >
        {mode !== "adaptive" ? (
          <div
            className={cn(
              "absolute inset-x-5 top-4 h-12 rounded-[1rem] border",
              dark ? "border-white/18 bg-white/8" : "border-[#e0d3c1] bg-white/80",
            )}
          />
        ) : null}
        <div
          className={cn(
            "absolute left-1/2 top-0 h-full w-[0.38rem] -translate-x-1/2 rounded-full",
            dark ? "bg-[#2fb56e]/80" : "bg-[#30b56f]/65",
          )}
        />

        {mode === "shield" ? (
          <>
            <div className="absolute inset-x-5 bottom-6 rounded-[1rem] border border-dashed border-[#b99263] bg-[#241c15] px-4 py-3 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-[#eedfc9]">
              Request queued until after turn
            </div>
          </>
        ) : null}

        {mode === "banner" ? (
          <>
            <div className="absolute left-5 right-5 top-4 rounded-full border border-[#dac8b3] bg-[#17120f] px-4 py-2.5 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-[#f4eadb]">
              New request | minimal banner
            </div>
            <div className="absolute inset-x-5 bottom-6 rounded-[1rem] border border-[#e0d3c1] bg-white/78 px-4 py-3 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-[#866543]">
              More map stays visible
            </div>
          </>
        ) : null}

        {mode === "audio" ? (
          <>
            <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#17120f] text-[#f5ecdf]">
              <Volume2 className="h-4.5 w-4.5" />
            </div>
            <div className="absolute left-[4.6rem] top-[1.45rem] text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-[#6b5640]">
              Audio summary playing
            </div>
            <div className="absolute inset-x-5 bottom-6 rounded-[1rem] border border-[#e0d3c1] bg-white/78 px-4 py-3 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-[#7b603f]">
              Visual demand reduced
            </div>
          </>
        ) : null}

        {mode === "timer" ? (
          <>
            <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-[#d7c5ae] bg-white/76 text-[#6c563d]">
              <TimerReset className="h-4 w-4" />
            </div>
            <div className="absolute inset-x-5 bottom-6 rounded-[1rem] border border-[#e0d3c1] bg-white/78 px-4 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-[#7b603f]">
              Acceptance window paused
            </div>
          </>
        ) : null}

        {mode === "adaptive" ? (
          <div className="absolute inset-x-5 bottom-5 grid grid-cols-2 gap-2">
            {["Stop", "Slow", "Fast", "Turn"].map((item) => (
              <div
                key={item}
                className={cn(
                  "rounded-[0.95rem] border px-2 py-2.5 text-center text-[0.68rem] font-semibold uppercase tracking-[0.14em]",
                  dark
                    ? "border-white/14 bg-white/8 text-[#f3e8d9]"
                    : "border-[#decfbb] bg-white/80 text-[#7b603f]",
                )}
              >
                {item}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function SolutionOption({
  option,
  reverse,
}: {
  option: (typeof solutionAlternatives)[number];
  reverse?: boolean;
}) {
  const isAdaptive = option.mode === "adaptive";

  if (isAdaptive) {
    return (
      <motion.article
        {...reveal}
        className="rounded-[2rem] border border-[#d8ccb8] bg-[#faf5ed] p-5 sm:p-6"
      >
        <div className="space-y-6">
          <div className="grid gap-5 xl:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] xl:items-start">
            <div className="space-y-4">
              <div>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#896c43]">
                  Concept
                </p>
                <h3 className="mt-3 font-editorial text-[2.45rem] leading-[0.95] tracking-[-0.04em] text-[#1b1712]">
                  {option.name}
                </h3>
                <p className="mt-4 max-w-[36rem] text-sm leading-6 text-[#453a2f]">
                  {option.description}
                </p>
              </div>

              <div className="grid gap-4 lg:grid-cols-2">
                <ProsConsCard title="Pros" items={option.pros} />
                <ProsConsCard title="Tradeoffs" items={option.tradeoffs} />
              </div>
            </div>

            <div className="rounded-[1.8rem] border border-[#ddd0be] bg-white/72 p-5">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[#87693f]">
                Interaction model
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <ScopeTile
                  title="Stopped"
                  body="Show a full request card because the driver can safely process destination, pickup time, and fare detail."
                />
                <ScopeTile
                  title="Slow"
                  body="Reduce the card density but keep the next earning opportunity visible and actionable."
                />
                <ScopeTile
                  title="Fast"
                  body="Use audio plus a lightweight banner so navigation keeps the visual priority."
                />
                <ScopeTile
                  title="Maneuver"
                  body="Queue the richer request state until the exit, turn, or merge has passed."
                />
              </div>
            </div>
          </div>

          <AdaptiveMockupGrid />
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      {...reveal}
      className="rounded-[2rem] border border-[#d8ccb8] bg-[#faf5ed] p-5 sm:p-6"
    >
      <div
        className={cn(
          "grid gap-6 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] xl:items-start",
          reverse && "xl:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]",
        )}
      >
        <div className={cn(reverse && "xl:order-2")}>
          <div className="mx-auto max-w-[25rem]">
            <DriverPhoneMockup
              mode={mapOptionMode(option.mode)}
              instruction={mockupInstruction(option.mode)}
              subInstruction={mockupSubInstruction(option.mode)}
              bannerText="$18.50 | 7 min pickup"
              bottomTitle={mockupTitle(option.mode)}
              bottomSubtitle={mockupSubtitle(option.mode)}
              footerNote={mockupFooter(option.mode)}
              size="feature"
            />
          </div>
        </div>
        <div className={cn("space-y-4 self-start", reverse && "xl:order-1")}>
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#896c43]">Concept</p>
            <h3 className="mt-3 font-editorial text-[2.45rem] leading-[0.95] tracking-[-0.04em] text-[#1b1712]">
              {option.name}
            </h3>
            <p className="mt-4 max-w-[35rem] text-sm leading-6 text-[#453a2f]">{option.description}</p>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            <ProsConsCard title="Pros" items={option.pros} />
            <ProsConsCard title="Tradeoffs" items={option.tradeoffs} />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function ComparisonPanel({
  label,
  description,
  children,
}: {
  label: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <div className="flex h-full flex-col rounded-[1.7rem] border border-[#dfd3c2] bg-white/74 p-4">
      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[#88693f]">{label}</p>
      <p className="mt-2 text-sm leading-6 text-[#4a3f33]">{description}</p>
      <div className="mt-4 flex flex-1 items-center justify-center">{children}</div>
    </div>
  );
}

function AdaptivePolicyStrip() {
  const states = [
    { title: "Stopped", note: "Full card", icon: PauseCircle },
    { title: "Slow", note: "Compact card", icon: Gauge },
    { title: "Fast", note: "Audio + banner", icon: AudioLines },
    { title: "Turn", note: "Queue + protect timer", icon: TimerReset },
    { title: "After", note: "Restore full card", icon: Route },
  ] as const;

  return (
    <div className="rounded-[2rem] border border-[#dccfbd] bg-[#fbf6ee] p-5 shadow-[0_18px_46px_-34px_rgba(77,56,29,0.12)]">
      <div className="flex items-center justify-between gap-4">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#87693f]">
          Visual policy sketch
        </p>
        <p className="font-hand text-[1.15rem] leading-none text-[#b4793b]">
          request changes with context
        </p>
      </div>

      <div className="mt-4 grid gap-3 lg:grid-cols-5">
        {states.map((state, index) => {
          const Icon = state.icon;
          return (
            <div
              key={state.title}
              className="relative rounded-[1.4rem] border border-[#e2d6c7] bg-white/82 p-4"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#dbc9b2] bg-[#f4e8d8] text-[#755c3e]">
                  <Icon className="h-4 w-4" />
                </div>
                <span className="rounded-full border border-[#e2d4c2] bg-[#fff7ee] px-2 py-1 text-[0.56rem] font-semibold uppercase tracking-[0.14em] text-[#8d6d42]">
                  0{index + 1}
                </span>
              </div>
              <p className="mt-4 text-base font-semibold tracking-[-0.03em] text-[#1c1712]">{state.title}</p>
              <p className="mt-2 text-sm leading-6 text-[#54473a]">{state.note}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function LogicStep({
  title,
  detail,
  tone,
}: {
  title: string;
  detail: string;
  tone: "light" | "accent";
}) {
  return (
    <div
      className={cn(
        "rounded-[1.4rem] border px-4 py-4",
        tone === "accent"
          ? "border-[#b69362] bg-[#2a2219] text-[#f5ebde]"
          : "border-white/10 bg-white/5 text-[#f1e6d7]",
      )}
    >
      <p className={cn("text-[0.68rem] font-semibold uppercase tracking-[0.16em]", tone === "accent" ? "text-[#d7c2a3]" : "text-[#cfba9e]")}>
        {title}
      </p>
      <p className="mt-2 text-sm leading-6">{detail}</p>
    </div>
  );
}

function FlowLine({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-[1.5rem] border border-white/12 bg-[#211912] p-4">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#d1bc9d]">{title}</p>
      <p className="mt-3 text-sm leading-6 text-[#f2e7d9]">{body}</p>
    </div>
  );
}

function MetricGroup({
  group,
}: {
  group: (typeof metricGroups)[number];
}) {
  const Icon = group.icon;
  return (
    <div className="rounded-[1.8rem] border border-[#d8ccb8] bg-[#faf5ed] p-5">
      <div className="flex items-center gap-3">
        <div className="rounded-full border border-[#d9c9b3] bg-[#efe4d5] p-2.5 text-[#755d3e]">
          <Icon className="h-4 w-4" />
        </div>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#886b41]">{group.title}</p>
      </div>
      <div className="mt-4 space-y-2.5">
        {group.items.map((item) => (
          <div
            key={item}
            className="rounded-[1.1rem] border border-[#e5d9c9] bg-white/75 px-4 py-3 text-sm leading-6 text-[#463b30]"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function DataLine({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#87693f]">{label}</p>
      <p className="mt-1">{value}</p>
    </div>
  );
}

function ExperimentCard({
  experiment,
}: {
  experiment: (typeof experiments)[number];
}) {
  return (
    <div className="rounded-[2rem] border border-[#d8ccb8] bg-[#faf4eb] p-6">
      <p className="font-editorial text-[1.85rem] leading-[0.98] tracking-[-0.04em] text-[#1c1713]">
        {experiment.title}
      </p>
      <div className="mt-4 space-y-3 text-sm leading-7 text-[#463b30]">
        <DataLine label="Control" value={experiment.control} />
        <DataLine label="Variant" value={experiment.variant} />
        <DataLine label="Hypothesis" value={experiment.hypothesis} />
      </div>
      <div className="mt-5">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#86683f]">
          Key metrics
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {experiment.metrics.map((metric) => (
            <span
              key={metric}
              className="rounded-full border border-[#ddcfbb] bg-white/75 px-3 py-1 text-xs font-semibold text-[#57493c]"
            >
              {metric}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ThinkingChip({
  icon: Icon,
  title,
  body,
}: {
  icon: LucideIcon;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-[1.4rem] border border-white/10 bg-white/5 p-4">
      <div className="flex items-center gap-3">
        <div className="rounded-full border border-white/10 bg-white/8 p-2.5 text-[#e8ddcd]">
          <Icon className="h-4 w-4" />
        </div>
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#d2bc9d]">{title}</p>
      </div>
      <p className="mt-3 text-sm leading-6 text-[#e7dccc]">{body}</p>
    </div>
  );
}

function BuilderSystem({
  icon: Icon,
  title,
  body,
}: {
  icon: LucideIcon;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-[1.45rem] border border-white/10 bg-white/5 p-4">
      <div className="flex items-center gap-3">
        <div className="rounded-full border border-white/10 bg-white/8 p-2.5 text-[#e7dbc9]">
          <Icon className="h-4 w-4" />
        </div>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#d1bc9c]">{title}</p>
      </div>
      <p className="mt-3 text-sm leading-6 text-[#e9dece]">{body}</p>
    </div>
  );
}

function PhaseCard({ phase, index }: { phase: string; index: number }) {
  return (
    <div className="rounded-[1.5rem] border border-[#e2d5c4] bg-white/72 p-4">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#87693f]">
        Phase 0{index}
      </p>
      <p className="mt-2 text-sm leading-7 text-[#463b30]">{phase.replace(/^Phase \d+:\s*/, "")}</p>
    </div>
  );
}

function ProsConsCard({
  title,
  items,
}: {
  title: string;
  items: readonly string[];
}) {
  return (
    <div className="rounded-[1.55rem] border border-[#dfd2c1] bg-white/72 p-4">
      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[#86683f]">{title}</p>
      <div className="mt-3 space-y-2.5">
        {items.map((item) => (
          <div
            key={item}
            className="rounded-[1.1rem] border border-[#e6dccc] bg-[#faf6f0] px-3 py-3 text-sm leading-6 text-[#483d31]"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function DriverPhoneMockup({
  mode,
  instruction,
  subInstruction,
  bannerText,
  bottomTitle,
  bottomSubtitle,
  detailItems,
  footerNote,
  compact,
  readable,
  size = "default",
}: {
  mode: PhoneMode;
  instruction: string;
  subInstruction: string;
  bannerText: string;
  bottomTitle: string;
  bottomSubtitle: string;
  detailItems?: string[];
  footerNote: string;
  compact?: boolean;
  readable?: boolean;
  size?: "compact" | "default" | "feature" | "showcase" | "hero";
}) {
  const isReadable = Boolean(readable);
  const isCompact = size === "compact" || compact;
  const isFeature = size === "feature";
  const isShowcase = size === "showcase";
  const isHero = size === "hero";

  return (
    <div
      className={cn(
        "rounded-[2.6rem] border border-[#2a241d] bg-[#0f0d0b] p-2.5 shadow-[0_28px_80px_-42px_rgba(8,7,6,0.9)]",
        isHero
          ? "max-w-[23rem]"
          : isShowcase
          ? "max-w-[21.25rem]"
          : isFeature
            ? "max-w-[18.75rem]"
            : isReadable
              ? "max-w-[17.25rem]"
              : isCompact
                ? "max-w-[14rem]"
                : "",
      )}
    >
      <div className="overflow-hidden rounded-[2rem] border border-white/8 bg-[#e8ddd0]">
        <div className="flex items-center justify-between bg-[#0f0d0c] px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#f2e8d9]">
          <span>Driver app</span>
          <span>Live trip</span>
        </div>
        <div
          className={cn(
            "relative overflow-hidden bg-[#d9deea]",
            isHero
              ? "h-[41rem]"
              : isShowcase
              ? "h-[38rem]"
              : isFeature
                ? "h-[34rem]"
                : isReadable
                  ? "h-[30rem]"
                  : isCompact
                    ? "h-[28rem]"
                    : "h-[34rem]",
          )}
        >
          <MapArtwork />

          {mode === "banner" && (
            <div className="absolute left-3 right-3 top-3 rounded-[1.1rem] border border-[#3d3327]/18 bg-[#f6efe6]/96 px-3 py-2.5 shadow-[0_16px_26px_-20px_rgba(49,35,20,0.45)]">
              <div className="flex items-center justify-between gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[#3f3429]">
                <span>{bannerText}</span>
                <span className="rounded-full bg-[#111010] px-2 py-1 text-[0.6rem] text-[#f5ece0]">Tap later</span>
              </div>
            </div>
          )}

          {mode === "audio" && (
            <div className="absolute left-3 right-3 top-3 rounded-[1.1rem] border border-[#3d3327]/18 bg-[#f6efe6]/96 px-3 py-2.5 shadow-[0_16px_26px_-20px_rgba(49,35,20,0.45)]">
              <div className="flex items-center gap-3 text-[#3f3429]">
                <div className="rounded-full bg-[#111010] p-2 text-[#f7efe5]">
                  <Volume2 className="h-3.5 w-3.5" />
                </div>
                <div>
                  <div className="text-[0.72rem] font-semibold uppercase tracking-[0.14em]">Audio summary playing</div>
                  <div className="text-xs text-[#625448]">Pickup 7 min away. Accept after the turn.</div>
                </div>
              </div>
            </div>
          )}

          <div
            className={cn(
              "absolute left-4 right-4 rounded-[1.4rem] border border-white/45 bg-[#f5ede2]/90 text-[#1f1a16] shadow-[0_16px_30px_-18px_rgba(0,0,0,0.28)] backdrop-blur-md",
              isHero
                ? "top-16 px-5 py-4.5"
                : isShowcase
                ? "top-16 px-5 py-4"
                : isReadable
                  ? "top-14 px-4 py-3.5"
                  : "top-16 px-4 py-3",
            )}
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#9f672c]">
                  Next maneuver
                </p>
                <p
                  className={cn(
                    "mt-1 font-semibold leading-6 tracking-[-0.02em] text-[#231b14]",
                    isHero
                      ? "text-[1.42rem]"
                      : isShowcase
                        ? "text-[1.28rem]"
                        : isReadable
                          ? "text-[1.08rem]"
                          : "text-base",
                  )}
                >
                  {instruction}
                </p>
                <p
                  className={cn(
                    "mt-1 text-[#7c6242]",
                    isHero
                      ? "text-[0.98rem] leading-6"
                      : isShowcase
                      ? "text-[0.9rem] leading-6"
                      : isReadable
                        ? "text-[0.82rem] leading-5"
                        : "text-xs",
                  )}
                >
                  {subInstruction}
                </p>
              </div>
              <div className="rounded-full border border-white/35 bg-[#2b231c] p-3 text-[#f4eadc]">
                <Route className="h-4 w-4" />
              </div>
            </div>
          </div>

          {(mode === "current" || mode === "compact" || mode === "full") && (
            <BottomRequestCard
              title={bottomTitle}
              subtitle={bottomSubtitle}
              bannerText={bannerText}
              detailItems={detailItems}
              height={mode === "compact" ? "compact" : "full"}
              readable={isReadable}
              size={isHero ? "hero" : isShowcase ? "showcase" : "default"}
            />
          )}

          {mode === "shield" && (
            <BottomFocusCard title={bottomTitle} subtitle={bottomSubtitle} icon={PauseCircle} />
          )}

          {mode === "queued" && (
            <BottomFocusCard title={bottomTitle} subtitle={bottomSubtitle} icon={TimerReset} />
          )}

          {mode === "audio" && (
            <BottomFocusCard title="New request available" subtitle="Minimal banner only while maneuver is active" icon={AudioLines} />
          )}

          {mode === "banner" && (
            <div className="absolute bottom-4 left-4 right-4 rounded-[1.2rem] border border-white/18 bg-[#15120f]/96 px-4 py-3 text-[#f7f0e5] shadow-[0_22px_40px_-30px_rgba(16,12,8,0.92)]">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#ccb79b]">
                    Compact request
                  </p>
                  <p className="mt-1 text-sm font-medium">{bottomSubtitle}</p>
                </div>
                <span className="rounded-full bg-[#f5ede2] px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[#17120f]">
                  Later
                </span>
              </div>
            </div>
          )}
        </div>
        <div className="border-t border-[#d8ccbc] bg-[#f6efe5] px-4 py-3">
          <p className="text-center text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#6e5940]">
            {footerNote}
          </p>
        </div>
      </div>
    </div>
  );
}

function MapArtwork() {
  return (
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(255,255,255,0.9),transparent_22%),linear-gradient(180deg,rgba(217,222,234,0.94),rgba(217,225,235,0.92)_54%,rgba(226,232,239,0.96))]">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 320 620" fill="none">
        <path d="M-20 120L160 180L340 110" stroke="#f7f4ef" strokeWidth="16" strokeLinecap="round" />
        <path d="M40 0L92 220L26 420L62 620" stroke="#f2efe8" strokeWidth="14" strokeLinecap="round" />
        <path d="M240 -10L224 170L286 302L240 620" stroke="#f7f4ef" strokeWidth="14" strokeLinecap="round" />
        <path d="M0 270L116 314L194 294L320 360" stroke="#f5f2eb" strokeWidth="12" strokeLinecap="round" />
        <path d="M160 44L178 180L138 340L182 560" stroke="#29b16a" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="160" cy="210" r="10" fill="#111010" />
        <circle cx="160" cy="210" r="5" fill="#f4eee4" />
        <rect x="214" y="72" width="54" height="22" rx="11" fill="#111010" fillOpacity="0.84" />
        <text x="241" y="87" textAnchor="middle" fontSize="10" fill="#F3EBDD" fontFamily="Arial, sans-serif">
          I-80 W
        </text>
        <rect x="50" y="390" width="68" height="22" rx="11" fill="#111010" fillOpacity="0.84" />
        <text x="84" y="405" textAnchor="middle" fontSize="10" fill="#F3EBDD" fontFamily="Arial, sans-serif">
          Downtown
        </text>
        <rect x="182" y="468" width="78" height="22" rx="11" fill="#111010" fillOpacity="0.84" />
        <text x="221" y="483" textAnchor="middle" fontSize="10" fill="#F3EBDD" fontFamily="Arial, sans-serif">
          Airport
        </text>
      </svg>
    </div>
  );
}

function BottomRequestCard({
  title,
  subtitle,
  bannerText,
  detailItems,
  height,
  readable,
  size = "default",
}: {
  title: string;
  subtitle: string;
  bannerText: string;
  detailItems?: string[];
  height: "full" | "compact";
  readable?: boolean;
  size?: "default" | "showcase" | "hero";
}) {
  const isHero = size === "hero";
  const isShowcase = size === "showcase";
  const hasDetails = Boolean(detailItems?.length);

  return (
    <div
      className={cn(
        "absolute bottom-0 left-0 right-0 border-t border-white/18 bg-[#171310]/95 px-4 text-[#f6eee3] shadow-[0_-26px_40px_-34px_rgba(14,11,8,0.95)]",
        height === "full"
          ? isHero
            ? "pb-6 pt-5"
            : isShowcase
            ? "pb-6 pt-5"
            : hasDetails
              ? "pb-5 pt-[1.125rem]"
              : "pb-5 pt-4"
          : "pb-4 pt-3.5",
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#e4caa3]">{title}</p>
          <p
            className={cn(
              "mt-2 font-semibold leading-6 text-[#fff7ec]",
              isHero
                ? "text-[1.42rem]"
                : isShowcase
                  ? "text-[1.32rem]"
                  : readable
                    ? "text-[1.08rem]"
                    : "text-[1rem]",
            )}
          >
            {bannerText}
          </p>
          <p
            className={cn(
              "mt-1 leading-5 text-[#e6d9c8]",
              isHero
                ? "text-[1.04rem] leading-6"
                : isShowcase
                  ? "text-[1rem] leading-6"
                  : readable
                    ? "text-[0.95rem]"
                    : "text-[0.9rem]",
            )}
          >
            {subtitle}
          </p>
        </div>
        <div className="rounded-full border border-white/10 bg-white/8 p-2.5 text-[#ede1d2]">
          <Clock3 className="h-4 w-4" />
        </div>
      </div>
      {detailItems?.length ? (
        <div className="mt-3 grid gap-2 sm:grid-cols-3">
          {detailItems.map((item) => (
            <div
              key={item}
              className={cn(
                "rounded-full border border-white/10 bg-white/6 px-3 py-2 text-[0.64rem] font-semibold uppercase tracking-[0.13em] text-[#e4d6c2]",
                isHero || isShowcase ? "text-[0.66rem]" : "",
              )}
            >
              {item}
            </div>
          ))}
        </div>
      ) : null}
      <div className="mt-4 flex items-center gap-3">
        <button
          type="button"
          className="flex-1 rounded-full border border-white/14 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#e8dccb]"
        >
          Decline
        </button>
        <button
          type="button"
          className="flex-1 rounded-full bg-[#f5ede2] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#16120f]"
        >
          Accept
        </button>
      </div>
    </div>
  );
}

function BottomFocusCard({
  title,
  subtitle,
  icon: Icon,
}: {
  title: string;
  subtitle: string;
  icon: LucideIcon;
}) {
  return (
    <div className="absolute bottom-4 left-4 right-4 rounded-[1.25rem] border border-[#d3bb98]/28 bg-[#17120f] px-4 py-3 text-[#f7efe4] shadow-[0_20px_38px_-28px_rgba(12,9,7,0.96)]">
      <div className="flex items-center gap-3">
        <div className="rounded-full border border-white/10 bg-[#241c15] p-2.5 text-[#f1e6d7]">
          <Icon className="h-4 w-4" />
        </div>
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#dcc5a4]">{title}</p>
          <p className="mt-1 text-sm leading-6 text-[#f5eadc]">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

function AdaptiveMockupGrid() {
  const miniStates = [
    {
      label: "Stopped",
      body: "Full card",
      mode: "full" as PhoneMode,
      instruction: "Continue 1.2 mi",
      sub: "Safe to show more detail",
      footer: "Stopped state",
      note: "Shows full request detail when the driver is stopped and can process more information safely.",
    },
    {
      label: "Slow",
      body: "Compact card",
      mode: "compact" as PhoneMode,
      instruction: "Turn left in 500 ft",
      sub: "Reduced detail",
      footer: "Low speed state",
      note: "Reduces information density while keeping the next earning opportunity visible and glanceable.",
    },
    {
      label: "Fast",
      body: "Audio + banner",
      mode: "audio" as PhoneMode,
      instruction: "Keep left in 0.5 mi",
      sub: "Minimal visual demand",
      footer: "High speed state",
      note: "Uses audio-first delivery plus a minimal state so the driver keeps attention on the road.",
    },
    {
      label: "Maneuver",
      body: "Queue request",
      mode: "shield" as PhoneMode,
      instruction: "Take exit in 0.2 mi",
      sub: "Protect map visibility",
      footer: "High risk state",
      note: "Queues the fuller request state until the maneuver is complete and the map can stay primary.",
    },
  ];

  return (
    <div className="rounded-[2rem] border border-[#201912] bg-[#171310] p-5 shadow-[0_28px_80px_-44px_rgba(10,8,6,0.9)] lg:p-6">
      <div className="grid gap-5 md:auto-rows-fr md:grid-cols-2">
        {miniStates.map((state) => (
          <div key={state.label} className="flex h-full flex-col rounded-[1.7rem] border border-white/12 bg-[#221a13] p-5">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#d7bf9d]">{state.label}</p>
              <span className="rounded-full border border-white/10 bg-white/8 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-[#fbf1e4]">
                {state.body}
              </span>
            </div>
            <div className="mx-auto w-full max-w-[18.25rem]">
              <DriverPhoneMockup
                mode={state.mode}
                instruction={state.instruction}
                subInstruction={state.sub}
                bannerText="$18.50 | 7 min pickup"
                bottomTitle={state.label === "Maneuver" ? "Focus mode" : "New ride request"}
                bottomSubtitle={state.label === "Maneuver" ? "Request queued" : "Downtown to Airport"}
                footerNote={state.footer}
                readable
                size="feature"
              />
            </div>
            <p className="mt-4 text-[0.92rem] leading-6 text-[#f2e6d8]">{state.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function MvpPreviewStrip() {
  const states = [
    {
      title: "Moving fast",
      label: "Audio + banner",
      body: "The request becomes a lightweight alert so the map stays dominant while the car is already moving.",
      mode: "audio" as PhoneMode,
      instruction: "Keep left in 0.5 mi",
      subInstruction: "Driver stays in the navigation task",
      bottomTitle: "New request available",
      bottomSubtitle: "Audio summary while the banner stays minimal",
      footerNote: "High-speed moving state",
    },
    {
      title: "Maneuver active",
      label: "Queue + timer pause",
      body: "The fuller request waits until the turn or exit is complete, and the accept window is protected.",
      mode: "queued" as PhoneMode,
      instruction: "Take exit in 0.2 mi",
      subInstruction: "Navigation remains primary",
      bottomTitle: "Request waiting",
      bottomSubtitle: "Accept window paused until after the maneuver",
      footerNote: "Maneuver-critical state",
    },
    {
      title: "After the turn",
      label: "Full card returns",
      body: "Once the risky moment passes, the richer decision state returns with full context.",
      mode: "full" as PhoneMode,
      instruction: "Continue 1.2 mi",
      subInstruction: "Safer moment to process details",
      bottomTitle: "New ride request",
      bottomSubtitle: "Downtown to Airport",
      footerNote: "Recovered interaction state",
    },
  ] as const;

  return (
    <div className="grid gap-4 xl:grid-cols-3 xl:auto-rows-fr">
      {states.map((state) => (
        <div key={state.title} className="flex h-full flex-col rounded-[1.75rem] border border-[#ddd0bf] bg-white/76 p-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#815f34]">{state.title}</p>
            <span className="rounded-full border border-[#dac8ad] bg-[#f2e8da] px-2.5 py-1 text-[0.63rem] font-semibold uppercase tracking-[0.14em] text-[#76583a]">
              {state.label}
            </span>
          </div>
          <div className="mt-4 flex flex-1 items-center justify-center">
            <DriverPhoneMockup
              mode={state.mode}
              instruction={state.instruction}
              subInstruction={state.subInstruction}
              bannerText="$18.50 | 7 min pickup"
              bottomTitle={state.bottomTitle}
              bottomSubtitle={state.bottomSubtitle}
              footerNote={state.footerNote}
              readable
              size="feature"
            />
          </div>
          <p className="mt-4 text-sm leading-6 text-[#43382d]">{state.body}</p>
        </div>
      ))}
    </div>
  );
}

function mapOptionMode(mode: (typeof solutionAlternatives)[number]["mode"]): PhoneMode {
  if (mode === "shield") return "shield";
  if (mode === "banner") return "banner";
  if (mode === "audio") return "audio";
  return "shield";
}

function mockupInstruction(mode: (typeof solutionAlternatives)[number]["mode"]) {
  if (mode === "audio") return "Keep left in 0.5 mi";
  if (mode === "banner") return "Take exit in 0.3 mi";
  return "Turn right in 300 ft";
}

function mockupSubInstruction(mode: (typeof solutionAlternatives)[number]["mode"]) {
  if (mode === "audio") return "Straight road, faster state";
  if (mode === "banner") return "Moderate speed, no immediate turn";
  return "Complex maneuver detected";
}

function mockupTitle(mode: (typeof solutionAlternatives)[number]["mode"]) {
  if (mode === "shield") return "Focus mode";
  if (mode === "banner") return "Compact request";
  return "New request available";
}

function mockupSubtitle(mode: (typeof solutionAlternatives)[number]["mode"]) {
  if (mode === "shield") return "Queued until after the maneuver";
  if (mode === "banner") return "Reduced request detail while moving";
  return "Audio summary while visual demand stays minimal";
}

function mockupFooter(mode: (typeof solutionAlternatives)[number]["mode"]) {
  if (mode === "shield") return "Full card suppressed during maneuver";
  if (mode === "banner") return "Banner preserves most of the map";
  return "Audio-first for high-speed states";
}
