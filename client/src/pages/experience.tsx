import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  GraduationCap,
  MapPin,
  Sparkles,
} from "lucide-react";
import { BackgroundComponents } from "@/components/ui/background-components";
import { cn } from "@/lib/utils";
import { education, experiences } from "@/data/experience";
import { siteConfig } from "@/data/site";

const journeyChapters = [
  {
    id: "current",
    eyebrow: "Current chapter",
    period: "2025 -> now",
    title: "AI-first product work grounded in calmer systems thinking.",
    description:
      "The work now is about reading messy product situations quickly, getting to the signal, and turning uncertainty into scope teams can actually ship.",
    bridge:
      "That chapter only works because the earlier ones built the systems fluency, operator empathy, and research habit underneath it.",
    gains: ["Clarity under ambiguity", "Stronger execution shape", "More intentional product judgment"],
    tone: "from-[#fff0e4] via-[#fff8f2] to-[#f4e3d3]",
    roles: [
      {
        role: "Product Consultant",
        company: "Anand PAG",
        detail: "Enterprise operations delivery",
      },
      {
        role: "Independent product work",
        company: "Case studies + self-initiated builds",
        detail: "Portfolio proof and AI-native product exploration",
      },
    ],
  },
  {
    id: "pm-sharpening",
    eyebrow: "Product stretch",
    period: "2024 -> 2025",
    title: "Consumer AI and fintech work sharpened the PM lens.",
    description:
      "This is where onboarding trust, recommendation quality, monetization, analytics, and launch tradeoffs became practical product decisions rather than abstract frameworks.",
    bridge:
      "Once the user and business tradeoffs got sharper, the next question became how to operate across more technical and operationally messy systems.",
    gains: ["Trust-sensitive product thinking", "Growth + activation instincts", "Founder-team decision support"],
    tone: "from-[#fbe9df] via-[#fff7f0] to-[#f3ddd1]",
    roles: [
      {
        role: "Product Manager",
        company: "Skingenius",
        detail: "Onboarding clarity and AI recommendation trust",
      },
      {
        role: "Consultant Product Manager",
        company: "Nomad AI",
        detail: "Pricing, analytics, and MVP structure",
      },
      {
        role: "Graduate school layer",
        company: "Northeastern University",
        detail: "Engineering management + product framing",
      },
    ],
  },
  {
    id: "systems-and-analytics",
    eyebrow: "Systems foundation",
    period: "2020 -> 2024",
    title: "Software, analytics, and delivery roles built the systems backbone.",
    description:
      "Work across data, health tech, and business analysis created the habit of translating between technical constraints, user context, and delivery reality.",
    bridge:
      "That translation layer made product management feel like the right long-term home, not just the next title.",
    gains: ["Technical fluency", "Cross-functional translation", "Operational reliability mindset"],
    tone: "from-[#eef2ea] via-[#f8fbf7] to-[#dfe8dc]",
    roles: [
      {
        role: "Business Analyst",
        company: "Cognizant",
        detail: "Agile backlog, data pipelines, and delivery cadence",
      },
      {
        role: "Product Manager",
        company: "Symbionic",
        detail: "Roadmaps, validation, and collaboration around health tech",
      },
      {
        role: "Data Scientist",
        company: "UNMITI",
        detail: "Analytics, modeling, and business insight work",
      },
    ],
  },
  {
    id: "early-foundation",
    eyebrow: "Early foundation",
    period: "2018 -> 2020",
    title: "Community-building and software roots created the original momentum.",
    description:
      "The start of the journey combined engineering training, entrepreneurship communities, and early cross-functional work. That mix made product feel less like a role change and more like a natural through-line.",
    bridge:
      "This is the part that made the later chapters possible: leadership, curiosity, and a bias toward building from messy beginnings.",
    gains: ["Community leadership", "Builder energy", "Early startup exposure"],
    tone: "from-[#f4ece2] via-[#fff7ef] to-[#eadccf]",
    roles: [
      {
        role: "Director of External Affairs",
        company: "Entrepreneurship Cell, VIT",
        detail: "Partnerships, programming, and startup-facing community work",
      },
      {
        role: "Product Marketing Manager",
        company: "LegalMind",
        detail: "Positioning and customer-facing product communication",
      },
      {
        role: "Intern",
        company: "Web Development & Data Science",
        detail: "Hands-on project work across software and analytics",
      },
    ],
  },
] as const;

export default function Experience() {
  const isClayNotionMode = siteConfig.experiments.clayNotionLanding;
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <BackgroundComponents
      variant={isClayNotionMode ? "clay-notion-paper" : "concentric-squares"}
      className="min-h-screen bg-background"
      contentClassName="relative"
    >
      <div className="px-3 pb-16 pt-3 sm:px-4 lg:px-6 lg:pb-24">
        <div className="mx-auto max-w-[1480px] rounded-[2rem] border border-[#dccbbb]/72 bg-[rgba(255,250,244,0.82)] shadow-[0_28px_90px_-60px_rgba(72,48,24,0.28)] backdrop-blur-sm">
          <section className="border-b border-[#dccbbb]/72 px-5 py-8 sm:px-7 lg:px-10 lg:py-10">
            <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_21rem] xl:items-end">
              <motion.div
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className="space-y-5"
              >
                <p className="section-kicker text-[#b9653d]">Journey</p>
                <h1
                  className={cn(
                    "max-w-[11ch] text-[clamp(2.4rem,4.6vw,5rem)] font-semibold leading-[0.9] tracking-[-0.07em] text-[#221913]",
                    isClayNotionMode && "font-editorial",
                  )}
                >
                  Read the path from today back to the start.
                </h1>
                <p className="max-w-3xl text-[1rem] leading-7 text-[#6d5b4c] sm:text-[1.05rem]">
                  A cross-sector path through software, analytics, community building, and product
                  leadership that eventually sharpened into AI-first product work. This page is the
                  through-line, not just a stack of roles.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }}
                className="rounded-[1.8rem] border border-[#dccbbb]/72 bg-white/68 p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#b9653d]">
                      Where I am now
                    </p>
                    <p className="mt-3 text-[1.45rem] font-semibold leading-[1.02] tracking-[-0.04em] text-[#221913]">
                      Product Builder + Manager
                    </p>
                  </div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f3e6d7] text-[#b9653d]">
                    <Sparkles className="h-5 w-5" />
                  </span>
                </div>
                <p className="mt-4 text-sm leading-6 text-[#6d5b4c]">
                  Customer-first systems thinking for messy, high-context product work. Read this
                  page top to bottom to see how each layer of the journey led into the next one.
                </p>
                <div className="mt-5 space-y-2.5">
                  {["Now", "PM stretch", "Systems foundation", "Early foundation"].map((label, index) => (
                    <div key={label} className="flex items-center gap-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#fff4e7] text-[0.72rem] font-semibold text-[#b9653d]">
                        {index + 1}
                      </span>
                      <div className="h-2 flex-1 rounded-full bg-[#ead8c5]" />
                      <span className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[#8d745f]">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          <section className="px-5 py-8 sm:px-7 lg:px-10 lg:py-10">
            <div className="grid gap-8 xl:grid-cols-[18rem_minmax(0,1fr)]">
              <aside className="xl:sticky xl:top-28 xl:self-start">
                <div className="rounded-[1.8rem] border border-[#dccbbb]/72 bg-white/66 p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f3e6d7] text-[#b9653d]">
                      <BriefcaseBusiness className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="section-kicker text-[#b9653d]">Journey spine</p>
                      <p className="mt-1 text-sm leading-6 text-[#6d5b4c]">
                        Each chapter adds something, and the next chapter inherits it.
                      </p>
                    </div>
                  </div>
                </div>
              </aside>

              <div className="space-y-4">
                {journeyChapters.map((chapter, index) => (
                  <div key={chapter.id} className="space-y-4">
                    <motion.article
                      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.55, delay: index * 0.05, ease: "easeOut" }}
                      whileHover={isClayNotionMode ? { y: -3 } : undefined}
                      className={cn(
                        "overflow-hidden rounded-[1.9rem] border border-[#d9c8b8]/72 bg-gradient-to-br p-6 shadow-[0_20px_56px_-42px_rgba(63,42,20,0.2)] sm:p-7",
                        chapter.tone,
                      )}
                    >
                      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="rounded-full border border-[#ddc8b4] bg-white/78 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#b9653d]">
                              {chapter.eyebrow}
                            </span>
                            <span className="rounded-full border border-[#dfd2c6] bg-white/68 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#7a6757]">
                              {chapter.period}
                            </span>
                          </div>

                          <h2
                            className={cn(
                              "mt-4 max-w-[15ch] text-balance text-[clamp(1.9rem,3vw,2.9rem)] font-semibold leading-[0.94] tracking-[-0.05em] text-[#221913]",
                              isClayNotionMode && "font-editorial",
                            )}
                          >
                            {chapter.title}
                          </h2>

                          <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-[#5f4c3d]">
                            {chapter.description}
                          </p>

                          <div className="mt-5 flex flex-wrap gap-2">
                            {chapter.gains.map((gain) => (
                              <span
                                key={gain}
                                className="rounded-full border border-[#dcc9b8] bg-white/74 px-3 py-1.5 text-[0.72rem] font-semibold text-[#6d5b4c]"
                              >
                                {gain}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="rounded-[1.5rem] border border-[#ddcdbc]/72 bg-white/70 p-4">
                          <div className="flex items-center justify-between gap-3">
                            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#b9653d]">
                              Roles in this chapter
                            </p>
                            <MapPin className="h-4 w-4 text-[#b9653d]" />
                          </div>

                          <div className="mt-4 space-y-3">
                            {chapter.roles.map((role) => (
                              <div
                                key={`${chapter.id}-${role.company}`}
                                className="rounded-[1rem] border border-[#e6d8ca] bg-[#fffaf4] px-3.5 py-3"
                              >
                                <p className="text-sm font-semibold text-[#221913]">{role.role}</p>
                                <p className="mt-1 text-sm text-[#6d5b4c]">{role.company}</p>
                                <p className="mt-2 text-[0.76rem] uppercase tracking-[0.14em] text-[#9d7f68]">
                                  {role.detail}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.article>

                    {index < journeyChapters.length - 1 ? (
                      <div className="flex items-start gap-3 px-2 sm:px-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fff3e4] text-[#b9653d]">
                          <ArrowDownRight className="h-4.5 w-4.5" />
                        </div>
                        <div className="flex-1 rounded-[1.2rem] border border-[#e5d4c3]/72 bg-white/66 px-4 py-3 text-sm leading-6 text-[#6d5b4c]">
                          {chapter.bridge}
                        </div>
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="border-t border-[#dccbbb]/72 px-5 py-8 sm:px-7 lg:px-10 lg:py-10">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="section-kicker text-[#b9653d]">Education anchors</p>
                <h2
                  className={cn(
                    "mt-3 max-w-[14ch] text-balance text-[clamp(1.9rem,3vw,2.8rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-[#221913]",
                    isClayNotionMode && "font-editorial",
                  )}
                >
                  Formal training that shaped the product path.
                </h2>
              </div>
              <p className="max-w-[32rem] text-sm leading-6 text-[#6d5b4c]">
                The degrees matter less as isolated credentials and more as the places where the
                software, management, and entrepreneurship strands started to connect.
              </p>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              {education.map((item, index) => (
                <motion.article
                  key={item.institution}
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
                  className="rounded-[1.7rem] border border-[#dccbbb]/72 bg-white/72 p-5 shadow-[0_18px_44px_-38px_rgba(63,42,20,0.12)]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#b9653d]">
                        {item.duration}
                      </p>
                      <h3 className="mt-3 text-[1.45rem] font-semibold leading-[1.02] tracking-[-0.04em] text-[#221913]">
                        {item.institution}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-[#6d5b4c]">{item.degree}</p>
                    </div>
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f3e6d7] text-[#b9653d]">
                      <GraduationCap className="h-5 w-5" />
                    </span>
                  </div>

                  <div className="mt-5 space-y-4">
                    <div>
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#8d745f]">
                        Activities and leadership
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.activities.slice(0, 4).map((activity) => (
                          <span
                            key={activity}
                            className="rounded-full border border-[#e2d4c6] bg-[#fff8ef] px-3 py-1.5 text-[0.72rem] text-[#6d5b4c]"
                          >
                            {activity}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#8d745f]">
                        Coursework
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.coursework.slice(0, 4).map((course) => (
                          <span
                            key={course}
                            className="rounded-full border border-[#e2d4c6] bg-white/82 px-3 py-1.5 text-[0.72rem] text-[#6d5b4c]"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          <section className="border-t border-[#dccbbb]/72 px-5 py-8 sm:px-7 lg:px-10 lg:py-10">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="section-kicker text-[#b9653d]">Experience list</p>
                <h2
                  className={cn(
                    "mt-3 max-w-[14ch] text-balance text-[clamp(1.8rem,2.8vw,2.5rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-[#221913]",
                    isClayNotionMode && "font-editorial",
                  )}
                >
                  Full role timeline, kept compact.
                </h2>
              </div>
              <p className="max-w-[28rem] text-sm leading-6 text-[#6d5b4c]">
                The main story above shows the progression. This section keeps the complete role
                list available without turning the whole page back into a stack of oversized cards.
              </p>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              {experiences.map((experience, index) => (
                <motion.article
                  key={`${experience.company}-${experience.role}`}
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.48, delay: index * 0.03, ease: "easeOut" }}
                  className="rounded-[1.5rem] border border-[#dccbbb]/72 bg-white/68 p-4 shadow-[0_14px_34px_-30px_rgba(63,42,20,0.12)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-[#221913]">{experience.role}</p>
                      <p className="mt-1 text-sm text-[#6d5b4c]">{experience.company}</p>
                    </div>
                    {experience.cardHref ? (
                      <a
                        href={experience.cardHref}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${experience.company} website`}
                        className="text-[#b9653d] transition-colors hover:text-[#8f5636]"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    ) : null}
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[#9d7f68]">
                    <span>{experience.duration}</span>
                    <span>•</span>
                    <span>{experience.location}</span>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-[#6d5b4c]">{experience.description}</p>
                </motion.article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </BackgroundComponents>
  );
}
