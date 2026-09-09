import { type ReactNode, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link, useLocation } from "wouter";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  FileText,
  FlaskConical,
  Github,
  PenSquare,
  Users2,
} from "lucide-react";
import { BsMedium, BsSubstack } from "react-icons/bs";
import {
  RecentExperienceCard,
  recentExperienceEntries,
} from "@/components/RecentExperienceCard";
import { BackgroundComponents } from "@/components/ui/background-components";
import {
  EditorialThumbnailLink,
  ThumbnailPreviewMedia,
} from "@/components/ui/editorial-thumbnail-link";
import { AnimatedProjectThumbnail } from "@/components/ui/AnimatedProjectThumbnail";
import { DoodleUnderline } from "@/components/ui/doodle-accents";
import { cn } from "@/lib/utils";
import { contentItems, type ContentItem } from "@/data/content";
import { experiences } from "@/data/experience";
import { experiments, type ExperimentItem } from "@/data/experiments";
import { aisliResearch } from "@/data/research";
import { siteConfig } from "@/data/site";

const sectionTabs = [
  { id: "featured-case-studies", label: "Recent product experience" },
  { id: "product-breakdowns", label: "Product breakdowns" },
  { id: "personal-projects", label: "Personal projects" },
  { id: "github-builds", label: "GitHub builds" },
  { id: "writing", label: "Writing" },
  { id: "research", label: "Research" },
] as const;

type SectionId = (typeof sectionTabs)[number]["id"];

const personalProjectIds = [
  "learning-council",
  "finwise",
] as const;

type BreakdownTile = {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  href?: string;
  status: string;
  toneClassName: string;
  motif: "route" | "voice" | "loop" | "stack" | "signal";
};

const productBreakdowns: BreakdownTile[] = [
  {
    id: "uber-driver-navigation",
    title: "Uber",
    eyebrow: "Live breakdown",
    description:
      "Dispatch versus navigation, framed as a safety and marketplace systems problem.",
    href: "/projects/uber-driver-navigation",
    status: "Marketplace UX",
    toneClassName:
      "from-[#f7ecdf] via-[#fbf4ea] to-[#ead7c0] text-[#221913]",
    motif: "route",
  },
  {
    id: "shabhash",
    title: "Shabhash",
    eyebrow: "2019 founder venture",
    description:
      "An AAC communication concept shaped through field conversations, product pivots, a small developer team, and an investor-ready operating plan.",
    href: "/projects/shabhash",
    status: "Assistive technology",
    toneClassName:
      "from-[#fff3da] via-[#fffaf0] to-[#e6f0e9] text-[#231d18]",
    motif: "voice",
  },
];

const experimentDisplay: Record<
  string,
  {
    previewTone: string;
    accentTone: string;
  }
> = {
  "learning-council": {
    previewTone: "from-[#eef4ec] via-[#f8fbf6] to-[#dfeada]",
    accentTone: "text-[#52754b]",
  },
  finwise: {
    previewTone: "from-[#e8eef8] via-[#f6f9fe] to-[#d7e1f0]",
    accentTone: "text-[#4e6b98]",
  },
};

type GithubBuild = {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  href: string;
  repoLabel: string;
  status: string;
  tags: string[];
  image?: string;
  videoSrc?: string;
  imageClassName?: string;
  imagePanelClassName?: string;
  wordmark?: string;
  ctaLabel?: string;
};

const githubBuilds: GithubBuild[] = [
  {
    id: "sclera-recognition",
    title: "Sclera Recognition Security System",
    eyebrow: "Public GitHub build",
    description:
      "A MATLAB biometric-security prototype that processes eye images from a Kaggle sclera database, segments the sclera region, extracts vessel features, and converts the pattern into an enrolment template for recognition.",
    href: "https://github.com/niveditajurel/sclera_recog",
    repoLabel: "niveditajurel/sclera_recog",
    status: "MATLAB biometrics",
    tags: ["Sclera Recognition", "Image Processing", "Kaggle Dataset"],
    wordmark: "SC",
  },
  {
    id: "diabetic-retinopathy",
    title: "Diabetic Retinopathy Detection",
    eyebrow: "Public GitHub build",
    description:
      "A deep learning pipeline that classifies diabetic retinopathy severity from retinal scan images — a CNN-based computer vision exploration into accessible medical screening.",
    href: "https://github.com/niveditajurel/diabetic-retinopathy-using-deep-learning",
    repoLabel: "niveditajurel/diabetic-retinopathy-using-deep-learning",
    status: "ML research build",
    tags: ["Deep Learning", "Computer Vision"],
    imagePanelClassName: "bg-[#0d1115]",
    wordmark: "DR",
  },
  {
    id: "geeksprint",
    title: "GeekSprint",
    eyebrow: "Side build",
    description:
      "A flashcard-style interview prep app built around continuous, bite-sized learning instead of cramming. An AI-assessed proficiency layer personalizes each question and ramps up difficulty as you improve.",
    href: "https://www.linkedin.com/posts/geeksprint-continuouslearning-skillenhancement-ugcPost-7170110106708201472-7ZwS/?utm_source=share&utm_medium=member_desktop&rcm=ACoAACVNmIkBHnsJjB5ISKB-xaD3ZBkfxd-1Gp8",
    repoLabel: "geeksprint · product launch",
    status: "Concept app",
    tags: ["Flashcards", "AI-personalized"],
    wordmark: "GS",
    ctaLabel: "View launch post",
  },
];

const writingDisplay: Record<
  string,
  {
    previewKind: "linkedin" | "archive" | "instagram";
    previewTone: string;
    accentTone: string;
  }
> = {
  "linkedin-writing": {
    previewKind: "linkedin",
    previewTone: "from-[#e9f0ff] via-[#f4f8ff] to-[#dde9ff]",
    accentTone: "text-[#4168b6]",
  },
  "writing-archive": {
    previewKind: "archive",
    previewTone: "from-[#fff0e3] via-[#fff8f1] to-[#f3e3d4]",
    accentTone: "text-[#a86840]",
  },
  "instagram-notes": {
    previewKind: "instagram",
    previewTone: "from-[#ffe8d8] via-[#fff4e8] to-[#e6efdb]",
    accentTone: "text-[#b46448]",
  },
};

function pickExperiments(ids: readonly string[]) {
  return ids
    .map((id) => experiments.find((experiment) => experiment.id === id))
    .filter((experiment): experiment is ExperimentItem => Boolean(experiment));
}

function pickContent(ids: readonly string[]) {
  return ids
    .map((id) => contentItems.find((item) => item.id === id))
    .filter((item): item is ContentItem => Boolean(item));
}

export default function Projects() {
  const isClayNotionMode = siteConfig.experiments.clayNotionLanding;
  const prefersReducedMotion = useReducedMotion();
  const personalProjects = pickExperiments(personalProjectIds);
  const writingItems = pickContent([
    "linkedin-writing",
    "writing-archive",
    "instagram-notes",
  ]);
  const leadershipExperience = experiences.find(
    (experience) => experience.company === "Entrepreneurship Cell, VIT",
  );
  const [activeSection, setActiveSection] = useState<SectionId>(
    sectionTabs[0].id,
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    const sections = sectionTabs
      .map((section) => document.getElementById(section.id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((entryA, entryB) => entryB.intersectionRatio - entryA.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id as SectionId);
        }
      },
      {
        rootMargin: "-28% 0px -54% 0px",
        threshold: [0.2, 0.45, 0.65],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: SectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  const communitySignals = [
    {
      title: "Techstars Startup Weekend Boston '24",
      meta: "Hackathon organizer",
      detail: "Community programming",
    },
    {
      title: "Women Applying AI",
      meta: "Community member",
      detail: "AI community",
    },
    {
      title: "Rewriting the Code",
      meta: "Community member",
      detail: "Women in tech",
    },
    leadershipExperience
      ? {
          title: leadershipExperience.role,
          meta: leadershipExperience.company,
          detail: leadershipExperience.duration,
        }
      : null,
  ].filter(Boolean) as Array<{
    title: string;
    meta: string;
    detail: string;
  }>;

  return (
    <BackgroundComponents
      variant={isClayNotionMode ? "clay-notion-paper" : "concentric-squares"}
      className="min-h-screen bg-background"
      contentClassName="relative"
    >
      <div className="pb-20 lg:pb-28">
        <div className="relative mx-auto max-w-[1480px] overflow-hidden border-x border-b border-[#d8c08f] bg-[#fffaf0]">
          <div aria-hidden="true" className="absolute left-0 top-0 z-10 grid grid-cols-3 grid-rows-2">
            <span className="h-4 w-6 bg-[#f45117]" />
            <span className="h-4 w-6 bg-[#ff8105]" />
            <span className="col-span-3 h-4 bg-[#ffd06a]" />
          </div>
          <div>
            <main className="mx-auto min-w-0 max-w-[1280px] p-5 pt-10 sm:p-8 sm:pt-14 lg:px-12 lg:pb-20 lg:pt-16">
              <section className="border-b border-[#d8c08f] pb-7 sm:pb-9">
                <motion.div
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="grid min-w-0 gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(22rem,0.7fr)] lg:items-end lg:gap-12"
                >
                  <div>
                    <p className="section-kicker text-[#b9653d]">Work</p>
                    <div className="relative mt-3 max-w-[18ch] sm:max-w-[20ch]">
                      <h1
                        className={cn(
                          "max-w-[18ch] text-[clamp(2.05rem,10vw,3.5rem)] font-normal leading-[1] tracking-[-0.01em] text-[#221913] sm:max-w-[20ch] sm:leading-[0.98] sm:tracking-[-0.015em]",
                          isClayNotionMode && "font-editorial",
                        )}
                      >
                        <span className="block sm:whitespace-nowrap">Solving meaningful</span>
                        <span className="block sm:whitespace-nowrap">problems at scale.</span>
                      </h1>
                      <DoodleUnderline className="mt-2 h-auto w-[8rem] text-[#d79b77]/85" />
                    </div>
                  </div>
                  <p className="max-w-[22rem] overflow-hidden text-[0.95rem] leading-7 text-[#6d5b4c] lg:max-w-[38rem] lg:justify-self-end lg:text-right">
                      A selection of case studies, product thinking, and work in
                      progress.
                  </p>
                </motion.div>

                <div className="-mx-5 mt-6 flex overflow-x-auto border-y border-[#d8c08f] bg-[#fff8e8] px-5 [scrollbar-width:none] after:block after:w-5 after:shrink-0 after:content-[''] sm:mx-0 sm:px-0 sm:after:hidden [&::-webkit-scrollbar]:hidden">
                  {sectionTabs.map((section) => {
                    const isActive = activeSection === section.id;

                    return (
                      <button
                        key={section.id}
                        type="button"
                        onClick={() => scrollToSection(section.id)}
                        aria-current={isActive ? "true" : undefined}
                        className={cn(
                          "inline-flex min-h-12 shrink-0 items-center whitespace-nowrap border-r border-[#d8c08f] px-3.5 py-3 font-mono text-[0.62rem] font-bold uppercase tracking-[0.08em] transition-colors duration-200 sm:px-5 sm:text-[0.66rem] sm:tracking-[0.1em]",
                          isActive
                            ? "bg-[#211f1a] text-[#fff8e8]"
                            : "bg-[#fff8e8] text-[#6a5545] hover:bg-[#ffe8c2] hover:text-[#241913]",
                        )}
                      >
                        {section.label}
                      </button>
                    );
                  })}
                </div>
              </section>

              <section
                id="featured-case-studies"
                className="scroll-mt-28 pt-9 sm:pt-11"
              >
                <SectionHeader
                  title="Recent product experience"
                  meta="3 recent roles"
                  isClayNotionMode={isClayNotionMode}
                />
                <div className="mt-5 grid gap-4 xl:grid-cols-3">
                  {recentExperienceEntries.map((entry, index) => (
                    <RecentExperienceCard
                      key={entry.project.id}
                      entry={entry}
                      index={index}
                    />
                  ))}
                </div>
              </section>

              <section className="mt-12 border-y border-[#d8c08f] py-8 sm:mt-16 sm:py-10">
                <div className="mb-5 flex items-end justify-between gap-4">
                  <div>
                    <p className="font-mono text-[0.64rem] font-bold uppercase tracking-[0.16em] text-[#b84b22]">Proof beyond the cards</p>
                    <h2 className="mt-2 font-fraunces text-[clamp(2rem,3vw,3rem)] font-normal leading-[0.96] tracking-[-0.02em] text-[#221913]">Research, writing, and community.</h2>
                  </div>
                </div>
                <div className="grid gap-4 lg:grid-cols-3">
                  <RailPanel
                    icon={FileText}
                    title="Research"
                    actionLabel="Open paper page"
                    href={aisliResearch.route}
                  >
                    <p className="text-sm leading-6 text-[#6d5b4c]">
                      A published chapter spanning speech recognition, NLP, and Indian Sign Language output.
                    </p>
                  </RailPanel>

                  <RailPanel
                    icon={PenSquare}
                    title="Selected writing"
                    actionLabel="View all writing"
                    href="/content"
                  >
                    <div className="space-y-3">
                      {writingItems.slice(0, 2).map((item) => (
                        <p key={item.id} className="text-sm leading-6 text-[#5f4a3b]">{item.title}</p>
                      ))}
                    </div>
                  </RailPanel>

                  <RailPanel icon={Users2} title="Community & leadership">
                    <div className="space-y-3">
                      {communitySignals.slice(0, 3).map((signal) => (
                        <div key={signal.title}>
                          <p className="text-sm font-semibold text-[#221913]">{signal.title}</p>
                          <p className="mt-0.5 text-xs uppercase tracking-[0.12em] text-[#9a745c]">{signal.meta}</p>
                        </div>
                      ))}
                    </div>
                  </RailPanel>
                </div>
              </section>

              <section
                id="product-breakdowns"
                className="mt-12 scroll-mt-28 border-t border-[#d8c08f] pt-12 sm:mt-16 sm:pt-16"
              >
                <SectionHeader
                  title="Product breakdowns"
                  meta="2 product stories"
                  isClayNotionMode={isClayNotionMode}
                />
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {productBreakdowns.map((tile, index) => (
                    <BreakdownCard key={tile.id} tile={tile} index={index} featured />
                  ))}
                </div>
              </section>

              <section
                id="personal-projects"
                className="mt-12 scroll-mt-28 border-t border-[#d8c08f] pt-12 sm:mt-16 sm:pt-16"
              >
                <SectionHeader
                  title="Personal projects"
                  meta="2 active build streams"
                  isClayNotionMode={isClayNotionMode}
                />
                <div className="mt-5 grid gap-4 lg:grid-cols-2">
                  {personalProjects.map((experiment, index) => (
                    <PersonalProjectCard
                      key={experiment.id}
                      experiment={experiment}
                      index={index}
                      isClayNotionMode={isClayNotionMode}
                    />
                  ))}
                </div>
              </section>

              <section
                id="github-builds"
                className="mt-12 scroll-mt-28 border-t border-[#d8c08f] pt-12 sm:mt-16 sm:pt-16"
              >
                <SectionHeader
                  title="GitHub builds"
                  meta="3 builds worth opening"
                  isClayNotionMode={isClayNotionMode}
                />
                <div className="mt-5 grid gap-4 lg:grid-cols-2">
                  {githubBuilds.map((build, index) => (
                    <GithubBuildCard
                      key={build.id}
                      build={build}
                      index={index}
                      isClayNotionMode={isClayNotionMode}
                    />
                  ))}
                </div>
              </section>

              <section id="writing" className="mt-12 scroll-mt-28 border-t border-[#d8c08f] pt-12 sm:mt-16 sm:pt-16">
                <SectionHeader
                  title="Writing and content"
                  meta="LinkedIn, archive, and short-form notes"
                  isClayNotionMode={isClayNotionMode}
                />
                <div className="mt-5 grid gap-4 lg:grid-cols-3">
                  {writingItems.map((item, index) => (
                    <WritingCard
                      key={item.id}
                      item={item}
                      index={index}
                      isClayNotionMode={isClayNotionMode}
                    />
                  ))}
                </div>
              </section>

              <section id="research" className="mt-12 scroll-mt-28 border-t border-[#d8c08f] pt-12 sm:mt-16 sm:pt-16">
                <SectionHeader
                  title="Research"
                  meta="1 published chapter"
                  isClayNotionMode={isClayNotionMode}
                />
                <div className="mt-5 grid gap-4 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
                  <motion.article
                    initial={{ opacity: 0.72, y: prefersReducedMotion ? 0 : 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                    className="paper-panel relative overflow-hidden border border-[#d8c08f] p-6 shadow-none sm:p-7"
                  >
                    <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#edd3bb]/30 blur-3xl" />
                    <div className="relative">
                      <div className="flex items-center gap-3">
                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f3e6d7] text-[#b9653d]">
                          <FileText className="h-5 w-5" />
                        </span>
                        <div>
                          <p className="section-kicker text-[#b9653d]">
                            Published research
                          </p>
                          <h3
                            className={cn(
                              "mt-2 max-w-[16ch] text-balance text-[clamp(1.9rem,3vw,2.8rem)] font-semibold leading-[0.94] tracking-[-0.05em] text-[#221913]",
                              isClayNotionMode && "font-editorial",
                            )}
                          >
                            {aisliResearch.shortTitle}
                          </h3>
                        </div>
                      </div>

                      <div className="relative mt-5 h-[20rem] overflow-hidden border border-[#d8c08f] sm:h-[25rem] lg:h-[31rem]">
                        <AnimatedProjectThumbnail variant="aisli-research" motion="always" />
                      </div>

                      <p className="mt-5 max-w-2xl text-[0.98rem] leading-7 text-[#6d5b4c]">
                        {aisliResearch.summary}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        <span className="clay-notion-tag border-black/8 bg-white/70 text-[#5d4a3a] shadow-none">
                          {aisliResearch.year}
                        </span>
                        <span className="clay-notion-tag border-black/8 bg-white/70 text-[#5d4a3a] shadow-none">
                          {aisliResearch.format}
                        </span>
                        <span className="clay-notion-tag border-black/8 bg-white/70 text-[#5d4a3a] shadow-none">
                          Accessibility + NLP
                        </span>
                      </div>

                      <div className="mt-6 flex flex-wrap gap-3">
                        <Link href={aisliResearch.route}>
                          <span className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#c26a41] px-4 py-2.5 text-sm font-semibold text-[#fff7ef] shadow-[0_12px_24px_-18px_rgba(194,106,65,0.9)] transition-transform duration-200 hover:-translate-y-0.5">
                            Open paper page
                            <ArrowRight className="h-4 w-4 text-[#fff7ef]" />
                          </span>
                        </Link>
                        <a
                          href={aisliResearch.publisherUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-[#d9c8b8] bg-white/76 px-4 py-2.5 text-sm font-semibold text-[#5d4a3a] transition-colors duration-200 hover:border-[#c98a65] hover:text-[#241913]"
                        >
                          Publisher page
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </motion.article>

                  <div className="grid gap-4">
                    <motion.article
                      initial={{ opacity: 0.72, y: prefersReducedMotion ? 0 : 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.55, delay: 0.05, ease: "easeOut" }}
                      className="paper-panel border border-[#d8c08f] p-5 shadow-none"
                    >
                      <p className="section-kicker text-[#b9653d]">
                        Publication details
                      </p>
                      <p className="mt-3 text-sm leading-6 text-[#6d5b4c]">
                        {aisliResearch.containerTitle}: {aisliResearch.containerSubtitle}.
                      </p>
                      <p className="mt-3 text-sm leading-6 text-[#6d5b4c]">
                        {aisliResearch.publisher} · pp. {aisliResearch.pages}
                      </p>
                    </motion.article>

                    <motion.article
                      initial={{ opacity: 0.72, y: prefersReducedMotion ? 0 : 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
                      className="paper-panel border border-[#d8c08f] p-5 shadow-none"
                    >
                      <p className="section-kicker text-[#b9653d]">
                        Source and authors
                      </p>
                      <p className="mt-3 text-sm leading-6 text-[#6d5b4c]">
                        {aisliResearch.authors.join(" and ")}
                      </p>
                      <a
                        href={aisliResearch.doiUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#b9653d] transition-colors hover:text-[#8f5636]"
                      >
                        View DOI
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </motion.article>
                  </div>
                </div>
              </section>
            </main>

          </div>
        </div>
      </div>
    </BackgroundComponents>
  );
}

function SectionHeader({
  title,
  meta,
  isClayNotionMode,
}: {
  title: string;
  meta: string;
  isClayNotionMode: boolean;
}) {
  return (
    <div className="flex flex-col items-start gap-1.5 sm:flex-row sm:items-end sm:justify-between sm:gap-3">
      <h2
        className={cn(
          "max-w-[18ch] text-balance text-[clamp(2.25rem,3.4vw,3.35rem)] font-normal leading-[0.98] tracking-[-0.02em] text-[#221913]",
          isClayNotionMode && "font-editorial",
        )}
      >
        {title}
      </h2>
      <p className="text-sm font-semibold text-[#b9653d]">{meta}</p>
    </div>
  );
}

function BreakdownCard({
  tile,
  index,
  featured,
}: {
  tile: BreakdownTile;
  index: number;
  featured?: boolean;
}) {
  const isFeaturedRoute = Boolean(featured && tile.motif === "route");
  const isFeaturedVoice = Boolean(featured && tile.motif === "voice");
  const card = (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
      whileHover={{ y: -3 }}
      className={cn(
        "group overflow-hidden border border-[#d8c08f] bg-gradient-to-br",
        featured ? "min-h-[20rem] sm:col-span-2" : "min-h-[16.5rem]",
        isFeaturedRoute ? "p-4 sm:p-5" : "p-5",
        tile.toneClassName,
      )}
    >
      {isFeaturedRoute || isFeaturedVoice ? (
        <div className="grid gap-4 lg:grid-cols-[minmax(0,0.34fr)_minmax(0,0.66fr)] lg:items-stretch">
          <div className="flex min-w-0 flex-col rounded-[1.35rem] border border-black/8 bg-white/42 p-5 sm:p-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="section-kicker text-current/70">{tile.eyebrow}</p>
                <h3 className="mt-3 max-w-[7ch] text-balance text-[clamp(2.25rem,3vw,3rem)] font-semibold leading-[0.94] tracking-[-0.05em] text-current">
                  {tile.title}
                </h3>
              </div>
              <span className="rounded-full border border-black/10 bg-white/68 px-3 py-1 text-[0.68rem] font-semibold text-current/75">
                {tile.status}
              </span>
            </div>

            <p className="mt-5 max-w-[26ch] text-[0.98rem] leading-7 text-current/82">
              {tile.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {(isFeaturedVoice
                ? ["AAC product concept", "Founder discovery"]
                : ["Dispatch vs navigation", "Safety + marketplace"]
              ).map((label) => (
                <span key={label} className="rounded-full border border-black/10 bg-white/62 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-current/72">
                  {label}
                </span>
              ))}
            </div>

            <div className="mt-auto flex items-end justify-between gap-4 pt-8">
              <p className="max-w-[18ch] text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-current/58">
                Open the full breakdown
              </p>
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/84 text-current shadow-sm transition-transform duration-200 group-hover:translate-x-0.5">
                <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </div>

          <div className="min-w-0 rounded-[1.35rem] border border-black/8 bg-black/4 p-2.5">
            <BreakdownPreview motif={tile.motif} featured />
          </div>
        </div>
      ) : (
        <div className="flex h-full flex-col justify-between">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="section-kicker text-current/70">{tile.eyebrow}</p>
              <h3 className="mt-3 max-w-[10ch] text-balance text-[1.8rem] font-semibold leading-[0.96] tracking-[-0.04em] text-current">
                {tile.title}
              </h3>
            </div>
            <span className="rounded-full border border-black/10 bg-white/55 px-3 py-1 text-[0.68rem] font-semibold text-current/75">
              {tile.status}
            </span>
          </div>

          <div className="mt-4 space-y-4">
            <BreakdownPreview motif={tile.motif} />
            <p className="max-w-[24ch] text-sm leading-6 text-current/80">
              {tile.description}
            </p>
            <div className="flex justify-end">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/82 text-current shadow-sm transition-transform duration-200 group-hover:translate-x-0.5">
                <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        </div>
      )}
    </motion.article>
  );

  if (tile.href) {
    return (
      <Link href={tile.href} className={cn("block", featured && "sm:col-span-2")}>
        {card}
      </Link>
    );
  }

  return card;
}

function BreakdownPreview({
  motif,
  featured = false,
}: {
  motif: BreakdownTile["motif"];
  featured?: boolean;
}) {
  const frameClassName =
    "rounded-[1.2rem] border border-black/8 bg-white/70 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.45)]";

  if (motif === "route") {
    return (
      <div className="overflow-hidden rounded-[1.2rem]">
        <div
          className={cn(
            "relative overflow-hidden rounded-[1rem]",
            featured ? "h-[17.5rem] sm:h-[19rem]" : "h-[14rem] sm:h-[16rem]",
          )}
        >
          <AnimatedProjectThumbnail variant="uber-driver-navigation" motion="hover" />
        </div>
      </div>
    );
  }

  if (motif === "voice") {
    const words = ["I", "want", "water"];
    const categories = ["Food", "Feelings", "People", "Activities"];

    return (
      <div className="relative h-[17.5rem] overflow-hidden rounded-[1rem] bg-[#23433b] p-4 text-[#1f2d29] sm:h-[19rem] sm:p-5">
        <div className="absolute -right-10 -top-12 h-36 w-36 rounded-full bg-[#f7c76d]/32 blur-2xl" />
        <div className="relative mx-auto flex h-full max-w-[35rem] flex-col rounded-[1.45rem] border border-white/30 bg-[#fffaf0] p-4 shadow-[0_24px_50px_-32px_rgba(0,0,0,0.7)] sm:p-5">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.16em] text-[#7b6a58]">Phrase builder</p>
              <p className="mt-1 text-sm font-semibold text-[#22352f]">Tap pictures. Build a sentence. Speak.</p>
            </div>
            <span className="rounded-full bg-[#23433b] px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-[#fff7e8]">Speak</span>
          </div>
          <div className="mt-4 flex gap-2 rounded-[1rem] border border-[#e7d9c3] bg-white p-2.5">
            {words.map((word, index) => (
              <span key={word} className={cn("rounded-lg px-3 py-2 text-sm font-semibold", index === 2 ? "bg-[#f8c96f] text-[#3c2d14]" : "bg-[#eef2eb] text-[#34413a]")}>{word}</span>
            ))}
          </div>
          <div className="mt-3 grid flex-1 grid-cols-2 gap-2 sm:grid-cols-4">
            {categories.map((category, index) => (
              <div key={category} className={cn("flex items-end rounded-[1rem] p-3", index === 0 ? "bg-[#fbe4aa]" : index === 1 ? "bg-[#f2d7da]" : index === 2 ? "bg-[#d9e8df]" : "bg-[#dbe4f1]")}>
                <span className="text-xs font-semibold">{category}</span>
              </div>
            ))}
          </div>
          <p className="mt-3 font-mono text-[0.58rem] uppercase tracking-[0.13em] text-[#806e5d]">Concept reconstruction from 2019 venture notes</p>
        </div>
      </div>
    );
  }

  if (motif === "loop") {
    return (
      <div className={frameClassName}>
        <div className="grid gap-2.5">
          {["Signal", "Workflow", "Incentive"].map((label, index) => (
            <motion.div key={label} className="flex items-center gap-2.5"
              initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ delay: index * 0.12, duration: 0.35 }}>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#dce8d8] text-[0.72rem] font-semibold text-[#38533a]">
                {index + 1}
              </span>
              <div className="relative h-2 flex-1 overflow-hidden rounded-full bg-[#dce8d8]/50">
                <motion.div
                  className="absolute left-0 top-0 h-full rounded-full bg-[#dce8d8]"
                  initial={{ width: "0%" }}
                  whileInView={{ width: ["0%", "72%", "56%", "88%"][index + 1] }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 + 0.18, duration: 0.55, ease: "easeOut" }}
                />
              </div>
              <span className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[#4b5d4a]">
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  if (motif === "stack") {
    return (
      <div className={frameClassName}>
        <div className="space-y-2.5">
          {[0, 1, 2].map((row) => (
            <motion.div
              key={row}
              className={cn(
                "rounded-[0.95rem] border border-[#d9c8b8] bg-white/82 px-3 py-2.5",
                row === 1 && "ml-4",
                row === 2 && "ml-8",
              )}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: row * 0.1, duration: 0.35, ease: "easeOut" }}
            >
              <div className="flex items-center justify-between">
                <div className="h-2.5 w-20 rounded-full bg-[#ead8c5]" />
                <div className="h-2.5 w-10 rounded-full bg-[#f3e7d9]" />
              </div>
              <div className="mt-2 h-2 rounded-full bg-[#f6eee4]" />
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  // signal motif
  const signalPoints = { xs: [14, 54, 94, 134, 174, 206], ys: [70, 52, 56, 24, 34, 12] };
  return (
    <div className={frameClassName}>
      <div className="rounded-[1rem] bg-[#fff8ef] p-3">
        <svg viewBox="0 0 220 86" aria-hidden="true" className="h-16 w-full">
          <motion.path
            d="M14 70L54 52L94 56L134 24L174 34L206 12"
            fill="none"
            stroke="#cb8656"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
          />
          {signalPoints.xs.map((x, index) => (
            <motion.circle
              key={x}
              cx={x}
              cy={signalPoints.ys[index]}
              fill={index === 3 ? "#1f1a14" : "#f0c5a4"}
              initial={{ r: 0 }}
              whileInView={{ r: 5.5 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.25 }}
            />
          ))}
        </svg>
      </div>
    </div>
  );
}

function PersonalProjectCard({
  experiment,
  index,
  isClayNotionMode,
}: {
  experiment: ExperimentItem;
  index: number;
  isClayNotionMode: boolean;
}) {
  const display = experimentDisplay[experiment.id];
  const summary = experiment.description ?? experiment.caseStudyTitle;
  const isDarkThumbnail =
    experiment.thumbnail?.panelClassName?.includes("#120f0d") ?? false;

  const card = (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: "easeOut" }}
      whileHover={{ y: -3 }}
      className="group flex h-full flex-col"
    >
      <EditorialThumbnailLink
        href={experiment.href}
        ctaLabel="View build"
        tone={isDarkThumbnail ? "dark" : "light"}
        disableAmbientFloat
        panelClassName={cn(
          "overflow-hidden border border-[#d8c08f] bg-gradient-to-br",
          (experiment.id === "learning-council" || experiment.id === "finwise") ? "min-h-[22rem]" : "min-h-[14rem]",
          display?.previewTone ?? "from-[#fff0e3] via-[#fff7f0] to-[#f5e4d2]",
        )}
      >
        <PersonalProjectPreview experiment={experiment} />
      </EditorialThumbnailLink>

      <div className="flex flex-1 flex-col pt-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="section-kicker text-[#b9653d]">{experiment.eyebrow}</p>
            <h3
              className={cn(
                "mt-3 max-w-[14ch] text-balance text-[clamp(1.7rem,2.7vw,2.35rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-[#221913]",
                isClayNotionMode && "font-editorial",
              )}
            >
              {experiment.title}
            </h3>
            {experiment.company &&
            !experiment.eyebrow?.toLowerCase().includes(experiment.company.toLowerCase()) ? (
              <p className="mt-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#8d745f]">
                {experiment.company}
              </p>
            ) : null}
          </div>
          <span
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-full bg-white/82 shadow-sm",
              display?.accentTone ?? "text-[#b9653d]",
            )}
          >
            <FlaskConical className="h-5 w-5" />
          </span>
        </div>

        {summary ? (
          <p className="mt-4 text-sm leading-6 text-[#6d5b4c]">
            {summary}
          </p>
        ) : null}

        <div className="mt-5 flex flex-wrap gap-2">
          {experiment.status ? (
            <span className="clay-notion-tag border-black/8 bg-white/68 text-[#5d4a3a] shadow-none">
              {experiment.status}
            </span>
          ) : null}
        </div>

        {experiment.href ? (
          <div className="mt-auto flex justify-end pt-6">
            <Link href={experiment.href}>
              <span className="inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-[#b9653d] transition-colors duration-200 group-hover:text-[#8f5636]">
                Open project
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </span>
            </Link>
          </div>
        ) : null}
      </div>
    </motion.article>
  );

  return card;
}

function PersonalProjectPreview({ experiment }: { experiment: ExperimentItem }) {
  const animatedVariant =
    experiment.id === "learning-council" ? "learning-council" :
    experiment.id === "finwise" ? "finwise" :
    null;

  if (animatedVariant) {
    return <AnimatedProjectThumbnail variant={animatedVariant} motion="hover" />;
  }

  if (experiment.thumbnail) {
    return (
      <div className="overflow-hidden rounded-[1.2rem] border border-white/55 bg-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.45)]">
        <div
          className={cn(
            "relative aspect-[16/10] overflow-hidden",
            experiment.thumbnail.panelClassName ?? "bg-[#f3ede3]",
          )}
        >
          <ThumbnailPreviewMedia
            imageSrc={experiment.thumbnail.src}
            videoSrc={experiment.thumbnail.videoSrc}
            alt={experiment.thumbnail.alt}
            imageClassName={cn(
              "transition-transform duration-700 group-hover/thumbnail:scale-[1.03]",
              experiment.thumbnail.imageClassName ?? "object-cover object-center",
            )}
            videoClassName={cn(
              "transition-transform duration-700 group-hover/thumbnail:scale-[1.03]",
              experiment.thumbnail.imageClassName ?? "object-cover object-center",
            )}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[1.2rem] border border-white/55 bg-white/72 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.45)]">
      <div className="grid gap-2.5 sm:grid-cols-3">
        {["Trust", "Pricing", "MVP"].map((label, index) => (
          <div key={label} className="rounded-[1rem] border border-[#edd8c4] bg-[#fff8ef] p-3">
            <div className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#b9653d]">
              0{index + 1}
            </div>
            <div className="mt-3 text-sm font-semibold text-[#221913]">{label}</div>
            <div className="mt-2 h-2 rounded-full bg-[#f3e0ce]" />
          </div>
        ))}
      </div>
    </div>
  );
}

function GithubBuildCard({
  build,
  index,
  isClayNotionMode,
}: {
  build: GithubBuild;
  index: number;
  isClayNotionMode: boolean;
}) {
  const usesCustomMedicalPreview =
    build.id === "sclera-recognition" || build.id === "diabetic-retinopathy";
  const customPreviewHeightClass = "h-[21.5rem] sm:h-[23.5rem]";

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: "easeOut" }}
      whileHover={{ y: -3 }}
      className="group flex h-full flex-col"
    >
      <EditorialThumbnailLink
        externalHref={build.href}
        ctaLabel={build.ctaLabel ?? "View repo"}
        tone={(build.imagePanelClassName ?? "").includes("#050709") ? "dark" : "light"}
        disableAmbientFloat={Boolean(build.videoSrc) || !build.image}
        panelClassName={cn(
          "relative overflow-hidden border border-[#d8c08f]",
          usesCustomMedicalPreview ? customPreviewHeightClass : "h-[18rem] sm:h-[20rem]",
          build.imagePanelClassName ?? "bg-[#f3ebdf]",
        )}
      >
        {build.id === "sclera-recognition" ? (
          <ScleraRecognitionPreview />
        ) : build.id === "diabetic-retinopathy" ? (
          <DiabeticRetinopathyPreview />
        ) : build.image ? (
          <ThumbnailPreviewMedia
            imageSrc={build.image}
            videoSrc={build.videoSrc}
            alt={build.title}
            imageClassName={cn(
              "ease-snappy transition-transform duration-700 group-hover/thumbnail:scale-[1.04]",
              build.imageClassName ?? "object-cover object-center",
            )}
            videoClassName={cn(
              "ease-snappy transition-transform duration-700 group-hover/thumbnail:scale-[1.04]",
              build.imageClassName ?? "object-cover object-center",
            )}
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-[#221913]">
            <span className="font-sans text-[5rem] font-semibold tracking-[-0.06em] text-white/90 sm:text-[6rem]">
              {build.wordmark ?? build.title.slice(0, 2).toUpperCase()}
            </span>
          </div>
        )}
      </EditorialThumbnailLink>

      <div className="flex flex-1 flex-col pt-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="section-kicker text-[#b9653d]">{build.eyebrow}</p>
            <h3
              className={cn(
                "mt-3 max-w-[14ch] text-balance text-[clamp(1.7rem,2.7vw,2.35rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-[#221913]",
                isClayNotionMode && "font-editorial",
              )}
            >
              {build.title}
            </h3>
          </div>
          <span className="rounded-full border border-[#e6d6c7] bg-white/84 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#8f6c53]">
            {build.status}
          </span>
        </div>

        <p className="mt-4 text-sm leading-6 text-[#6d5b4c]">
          {build.description}
        </p>

        <p className="mt-4 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#8d745f]">
          {build.repoLabel}
        </p>

        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          {build.tags.map((tag) => (
            <span
              key={`${build.id}-${tag}`}
              className="rounded-full border border-[#e8dacc] bg-[#fff9f2] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[#8f6c53]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex justify-end">
          <a
            href={build.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#d9c8b8] bg-white/82 px-4 py-2.5 text-sm font-semibold text-[#241913] transition-colors duration-200 hover:border-[#b98c65] hover:text-[#8f5636]"
          >
            {build.href.includes("github.com") ? <Github className="h-4 w-4" /> : null}
            {build.ctaLabel ?? "View repo"}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function ScleraRecognitionPreview() {
  const pipelineSteps = ["Input", "Segment", "Vessels", "Template"];

  return (
    <div className="relative h-full overflow-hidden bg-[#0f1715] px-4 py-4 sm:px-5 sm:py-5 text-[#ecfff6]">
      <div className="absolute inset-0 opacity-35">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(122,210,178,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(122,210,178,0.1)_1px,transparent_1px)] bg-[size:2.25rem_2.25rem]" />
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2dd4bf]/12 blur-3xl" />
      </div>

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[#8ee8c7]">
            MATLAB / BIOMETRIC SECURITY
          </p>
          <h4 className="mt-2 max-w-[12ch] font-fraunces text-[clamp(1.55rem,3vw,2.2rem)] font-semibold leading-[0.92] tracking-[-0.04em] text-[#f5fff8]">
            Sclera vein recognition
          </h4>
        </div>
        <div className="rounded-full border border-[#8ee8c7]/35 bg-[#17231f] px-3 py-1 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#b7f6dd]">
          Kaggle data
        </div>
      </div>

      <div className="relative mt-4 grid min-h-[8rem] place-items-center sm:min-h-[9rem]">
        <svg
          viewBox="0 0 360 180"
          role="img"
          aria-label="Eye image processing pipeline showing sclera segmentation and vessel-template extraction"
          className="h-[8.6rem] w-full max-w-[28rem] sm:h-[9.8rem]"
        >
          <defs>
            <linearGradient id="scleraEyeFill" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f8fff9" />
              <stop offset="58%" stopColor="#cceee2" />
              <stop offset="100%" stopColor="#85d9ba" />
            </linearGradient>
            <radialGradient id="scleraIris" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#07110f" />
              <stop offset="48%" stopColor="#145b52" />
              <stop offset="100%" stopColor="#38b798" />
            </radialGradient>
            <filter id="scleraGlow">
              <feGaussianBlur stdDeviation="2.2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            d="M35 92C71 37 133 27 180 29c47 2 105 13 145 63-40 49-98 63-145 63S75 141 35 92Z"
            fill="url(#scleraEyeFill)"
            stroke="#8ee8c7"
            strokeWidth="3"
          />
          <circle cx="181" cy="92" r="39" fill="url(#scleraIris)" stroke="#d7fff1" strokeWidth="2" />
          <circle cx="181" cy="92" r="15" fill="#050b0a" />
          <circle cx="169" cy="78" r="5" fill="#f6fff9" opacity="0.9" />
          {[
            "M64 87C95 75 114 83 137 97",
            "M75 108C108 106 128 118 150 132",
            "M219 74C247 55 269 58 304 74",
            "M224 116C251 126 272 123 302 105",
            "M91 62C117 56 136 61 151 74",
            "M210 139C237 143 258 137 286 123",
          ].map((path, index) => (
            <motion.path
              key={path}
              d={path}
              fill="none"
              stroke={index % 2 ? "#2563eb" : "#f97316"}
              strokeLinecap="round"
              strokeWidth="3"
              opacity="0.8"
              filter="url(#scleraGlow)"
              initial={{ pathLength: 0, opacity: 0.25 }}
              whileInView={{ pathLength: 1, opacity: 0.8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.08, ease: "easeOut" }}
            />
          ))}
          <path
            d="M26 92h44M290 92h44"
            stroke="#f7c66f"
            strokeDasharray="6 8"
            strokeLinecap="round"
            strokeWidth="2"
            opacity="0.75"
          />
        </svg>
      </div>

      <div className="relative mt-3.5 grid grid-cols-4 gap-1.5 sm:mt-4 sm:gap-2">
        {pipelineSteps.map((step, index) => (
          <div key={step} className="border border-[#8ee8c7]/25 bg-[#17231f]/86 px-2 py-1.5 sm:py-2">
            <p className="font-mono text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-[#7ad2b2]">
              0{index + 1}
            </p>
            <p className="mt-1 text-[0.68rem] font-semibold leading-tight text-[#f5fff8] sm:text-[0.72rem]">
              {step}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function DiabeticRetinopathyPreview() {
  const gradeSteps = [
    { label: "Mild", width: "w-5/12", tone: "bg-[#f7c66f]" },
    { label: "Moderate", width: "w-8/12", tone: "bg-[#f28c52]" },
    { label: "Referable", width: "w-10/12", tone: "bg-[#dc5f52]" },
  ] as const;
  const lesionPoints = [
    { cx: 68, cy: 90, r: 8, fill: "#f7c66f" },
    { cx: 170, cy: 78, r: 7, fill: "#f08b59" },
    { cx: 188, cy: 162, r: 9, fill: "#dc5f52" },
    { cx: 112, cy: 182, r: 6, fill: "#ffd9b4" },
  ] as const;

  return (
    <div className="relative h-full overflow-hidden bg-[#0d1115] px-4 py-4 sm:px-5 sm:py-5 text-[#f6fbff]">
      <div className="absolute inset-0 opacity-35">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(120,201,244,0.11)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,201,244,0.08)_1px,transparent_1px)] bg-[size:2.5rem_2.5rem]" />
        <div className="absolute left-[20%] top-[24%] h-40 w-40 rounded-full bg-[#d96c4c]/22 blur-3xl" />
        <div className="absolute right-[10%] top-[14%] h-32 w-32 rounded-full bg-[#49a7d8]/18 blur-3xl" />
      </div>

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[#8ed4f4]">
            CNN / RETINAL SCREENING
          </p>
          <h4 className="mt-2 max-w-[12ch] font-fraunces text-[clamp(1.55rem,3vw,2.2rem)] font-semibold leading-[0.92] tracking-[-0.04em] text-[#f8fbff]">
            Diabetic retinopathy grading
          </h4>
        </div>
        <div className="rounded-full border border-[#8ed4f4]/30 bg-[#142029] px-3 py-1 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#b8e7fb]">
          Severity model
        </div>
      </div>

      <div className="relative mt-4 grid gap-2.5 sm:grid-cols-[0.94fr_1.06fr] sm:items-center sm:gap-3">
        <div className="relative overflow-hidden rounded-[1.3rem] border border-[#8ed4f4]/18 bg-[#111820]/90 p-2.5 sm:p-3">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(248,187,127,0.16),transparent_58%)]" />
          <svg
            viewBox="0 0 260 260"
            role="img"
            aria-label="Stylized retinal scan with highlighted lesion markers for diabetic retinopathy detection"
            className="relative mx-auto h-[8.8rem] w-[8.8rem] sm:h-[9.8rem] sm:w-[9.8rem]"
          >
            <defs>
              <radialGradient id="retinaField" cx="50%" cy="46%" r="52%">
                <stop offset="0%" stopColor="#ffb372" />
                <stop offset="48%" stopColor="#da674b" />
                <stop offset="100%" stopColor="#4e191c" />
              </radialGradient>
              <radialGradient id="opticDisc" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffe4ae" />
                <stop offset="100%" stopColor="#f5a95d" />
              </radialGradient>
            </defs>
            <circle cx="130" cy="130" r="102" fill="url(#retinaField)" />
            <circle cx="130" cy="130" r="110" fill="none" stroke="#ffc483" strokeOpacity="0.4" strokeWidth="2.5" />
            <circle cx="86" cy="132" r="26" fill="url(#opticDisc)" opacity="0.95" />
            <circle cx="86" cy="132" r="10" fill="#fff2cc" opacity="0.9" />
            {[
              "M88 130C112 125 138 116 170 88",
              "M90 134C118 137 143 146 176 166",
              "M93 127C122 101 151 89 188 78",
              "M95 138C120 156 146 174 176 188",
              "M104 116C129 104 151 102 178 108",
              "M107 150C136 150 160 156 188 170",
            ].map((path, index) => (
              <motion.path
                key={path}
                d={path}
                fill="none"
                stroke={index % 2 ? "#ffd59c" : "#ffefcf"}
                strokeLinecap="round"
                strokeWidth="2.4"
                opacity="0.62"
                initial={{ pathLength: 0, opacity: 0.18 }}
                whileInView={{ pathLength: 1, opacity: 0.62 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, delay: index * 0.07, ease: "easeOut" }}
              />
            ))}
            {lesionPoints.map((point, index) => (
              <g key={`${point.cx}-${point.cy}`}>
                <motion.circle
                  cx={point.cx}
                  cy={point.cy}
                  r={point.r}
                  fill={point.fill}
                  initial={{ scale: 0.7, opacity: 0.32 }}
                  whileInView={{ scale: 1, opacity: 0.95 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.14 + index * 0.08, ease: "easeOut" }}
                />
                <circle cx={point.cx} cy={point.cy} r={point.r + 8} fill="none" stroke={point.fill} strokeOpacity="0.35" strokeWidth="1.5" />
              </g>
            ))}
          </svg>
        </div>

        <div className="rounded-[1.2rem] border border-[#8ed4f4]/18 bg-[#111820]/88 p-2.5 sm:p-3">
          <p className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#8ed4f4]">
            MODEL FLOW
          </p>
          <div className="mt-2.5 grid gap-1.5">
            {["Retinal image", "Lesion features", "Severity class"].map((step, index) => (
              <div key={step} className="flex items-center gap-2 rounded-full border border-[#24404f] bg-[#16222b] px-3 py-1.5 sm:py-2">
                <span className="font-mono text-[0.62rem] font-semibold text-[#8ed4f4]">
                  0{index + 1}
                </span>
                <span className="text-[0.72rem] font-semibold text-[#f4f9fd] sm:text-[0.76rem]">
                  {step}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-3 border-t border-[#28404c] pt-3">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#8ed4f4]">
                Grade signal
              </p>
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[#bfdcf0]">
                3 classes
              </span>
            </div>

            <div className="mt-2.5 space-y-1.5">
              {gradeSteps.map((step) => (
                <div key={step.label}>
                  <div className="flex items-center justify-between text-[0.68rem] font-semibold text-[#d8e9f4] sm:text-[0.72rem]">
                    <span>{step.label}</span>
                    <span className="text-[#8ed4f4]">{step.width.replace("w-", "")}</span>
                  </div>
                  <div className="mt-1 h-2 rounded-full bg-[#21313c]">
                    <div className={cn("h-full rounded-full", step.width, step.tone)} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WritingCard({
  item,
  index,
  isClayNotionMode,
}: {
  item: (typeof contentItems)[number];
  index: number;
  isClayNotionMode: boolean;
}) {
  const display = writingDisplay[item.id];
  const [, navigate] = useLocation();
  const card = (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.05, ease: "easeOut" }}
      whileHover={{ y: -3 }}
      className="group flex h-full flex-col justify-between"
    >
      <div
        className={cn(
          "overflow-hidden border border-[#d8c08f] bg-gradient-to-br p-4",
          display?.previewTone ?? "from-[#fff0e3] via-[#fff8f1] to-[#f3e3d4]",
        )}
      >
        <WritingPreview item={item} />
      </div>

      <div className="flex flex-1 flex-col justify-between pt-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="section-kicker text-[#b9653d]">{item.format}</p>
            <h3
              className={cn(
                "mt-3 max-w-[13ch] text-balance text-[1.55rem] font-semibold leading-[0.98] tracking-[-0.04em] text-[#221913]",
                isClayNotionMode && "font-editorial",
              )}
            >
              {item.title}
            </h3>
          </div>
          <span
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full bg-white/82 shadow-sm",
              display?.accentTone ?? "text-[#b9653d]",
            )}
          >
            <BookOpen className="h-4.5 w-4.5" />
          </span>
        </div>

        <p className="mt-4 text-sm leading-6 text-[#6d5b4c]">
          {item.description}
        </p>

        {item.featuredPieces?.length ? (
          <div className="mt-4 space-y-2">
            {item.featuredPieces.slice(0, 1).map((piece) => (
              <a
                key={`${piece.platform}-${piece.title}`}
                href={piece.href}
                target="_blank"
                rel="noreferrer"
                onClick={(event) => event.stopPropagation()}
                className="block text-sm leading-5 text-[#4c392d] transition-colors hover:text-[#8f5636]"
              >
                <span className="mr-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#b9653d]">
                  {piece.platform}
                </span>
                {piece.title}
              </a>
            ))}
          </div>
        ) : null}

        {item.platformLinks?.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {item.platformLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                onClick={(event) => event.stopPropagation()}
                className="inline-flex items-center gap-1 rounded-full border border-[#dccbbb] bg-white/86 px-3 py-1 text-[0.72rem] font-semibold text-[#8f5636] transition-colors hover:border-[#cfa885] hover:text-[#6f4127]"
              >
                {link.label}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        ) : null}

        <div className="mt-5 flex justify-end">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#b9653d] transition-colors group-hover:text-[#8f5636]">
            Open
            {item.href ? (
              <ArrowUpRight className="h-4 w-4" />
            ) : (
              <ArrowRight className="h-4 w-4" />
            )}
          </span>
        </div>
      </div>
    </motion.article>
  );

  if (item.href) {
    // Card body contains its own <a> links, so the whole-card link must not be an anchor
    return (
      <div
        role="link"
        tabIndex={0}
        aria-label={item.title}
        className="h-full cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#b9653d]"
        onClick={() => window.open(item.href, "_blank", "noopener,noreferrer")}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            window.open(item.href, "_blank", "noopener,noreferrer");
          }
        }}
      >
        {card}
      </div>
    );
  }

  // Preview body contains its own <a> links, so this wrapper must not be an anchor
  return (
    <div
      role="link"
      tabIndex={0}
      aria-label={item.title}
      className="h-full cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#b9653d]"
      onClick={() => navigate("/content")}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          navigate("/content");
        }
      }}
    >
      {card}
    </div>
  );
}

function WritingPreview({ item }: { item: (typeof contentItems)[number] }) {
  const display = writingDisplay[item.id];

  if (display?.previewKind === "linkedin") {
    return (
      <div className="rounded-[1.15rem] border border-white/65 bg-white/76 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.45)]">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-[#7da1eb]" />
          <div className="space-y-1">
            <div className="h-2.5 w-24 rounded-full bg-[#dbe6ff]" />
            <div className="h-2.5 w-32 rounded-full bg-[#edf3ff]" />
          </div>
        </div>
        <div className="mt-4 rounded-[1rem] bg-[#f7faff] p-3">
          <div className="h-2.5 w-4/5 rounded-full bg-[#d4e2ff]" />
          <div className="mt-2 h-2.5 w-3/5 rounded-full bg-[#e2ebff]" />
          <div className="mt-4 h-20 rounded-[0.9rem] bg-[linear-gradient(135deg,#d9e8ff,#edf5ff)]" />
        </div>
      </div>
    );
  }

  if (display?.previewKind === "instagram") {
    return (
      <div className="rounded-[1.15rem] border border-white/65 bg-white/72 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.45)]">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-[linear-gradient(135deg,#f7b18c,#d98d67)]" />
          <div className="h-2.5 w-24 rounded-full bg-[#f6d4bc]" />
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {["#f8c8ad", "#e0ddb9", "#f1d8c8", "#d8c3e3", "#c7e1d8", "#f5e2b6"].map((tone) => (
            <div
              key={tone}
              className="aspect-square rounded-[0.85rem]"
              style={{ backgroundColor: tone }}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[1.15rem] border border-white/65 bg-white/76 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.45)]">
      <div className="space-y-2">
        {(item.featuredPieces?.slice(0, 2) ?? []).map((piece) => (
          <a
            key={`${piece.platform}-${piece.title}`}
            href={piece.href}
            target="_blank"
            rel="noreferrer"
            onClick={(event) => event.stopPropagation()}
            className="flex items-center gap-3 rounded-[0.95rem] bg-[#fff7ef] p-3 transition-colors hover:bg-[#fff3e8]"
          >
            <div
              className="flex h-10 min-w-10 items-center justify-center rounded-[0.85rem] text-[#8f5636]"
              style={{ backgroundColor: piece.platform === "Medium" ? "#f2dcc7" : "#f4e4d2" }}
            >
              {piece.platform === "Medium" ? (
                <BsMedium className="h-4 w-4 text-[#171717]" />
              ) : piece.platform === "Substack" ? (
                <BsSubstack className="h-4 w-4 text-[#ff6719]" />
              ) : (
                <span className="text-[0.64rem] font-semibold uppercase tracking-[0.08em]">
                  {piece.platform.slice(0, 2)}
                </span>
              )}
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#8f5636]">
                {piece.platform}
              </div>
              <div className="mt-1 text-sm leading-5 text-[#5e4638]">{piece.title}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

function RailPanel({
  icon: Icon,
  title,
  children,
  actionLabel,
  href,
  onAction,
}: {
  icon: typeof FileText;
  title: string;
  children: ReactNode;
  actionLabel?: string;
  href?: string;
  onAction?: () => void;
}) {
  return (
    <section className="flex min-h-[17rem] flex-col border border-[#d8c08f] bg-[#fff8e8] p-5">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center bg-[#ffe4c4] text-[#b84b22]">
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="font-editorial text-[1.75rem] font-normal leading-[0.98] tracking-[-0.015em] text-[#221913]">
          {title}
        </h3>
      </div>

      <div className="mt-4 flex-1">{children}</div>

      {href ? (
        <Link href={href}>
          <span className="mt-4 inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-[#b9653d] transition-colors hover:text-[#8f5636]">
            {actionLabel}
            <ArrowRight className="h-4 w-4" />
          </span>
        </Link>
      ) : null}

      {onAction ? (
        <button
          type="button"
          onClick={onAction}
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#b9653d] transition-colors hover:text-[#8f5636]"
        >
          {actionLabel}
          <ArrowRight className="h-4 w-4" />
        </button>
      ) : null}
    </section>
  );
}
