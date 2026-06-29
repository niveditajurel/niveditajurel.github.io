import { type ReactNode, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "wouter";
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
import { BackgroundComponents } from "@/components/ui/background-components";
import {
  EditorialThumbnailLink,
  ThumbnailPreviewMedia,
} from "@/components/ui/editorial-thumbnail-link";
import { AnimatedProjectThumbnail, type AnimatedThumbnailVariant } from "@/components/ui/AnimatedProjectThumbnail";
import {
  DoodleArrow,
  DoodleSpark,
  DoodleUnderline,
} from "@/components/ui/doodle-accents";
import { cn } from "@/lib/utils";
import { contentItems, type ContentItem } from "@/data/content";
import { education, experiences } from "@/data/experience";
import { experiments, type ExperimentItem } from "@/data/experiments";
import { projects, type ProjectData } from "@/data/projects";
import { aisliResearch } from "@/data/research";
import { siteConfig } from "@/data/site";

const sectionTabs = [
  { id: "featured-case-studies", label: "Featured case studies" },
  { id: "product-breakdowns", label: "Product breakdowns" },
  { id: "personal-projects", label: "Personal projects" },
  { id: "github-builds", label: "GitHub builds" },
  { id: "writing", label: "Writing" },
  { id: "research", label: "Research" },
] as const;

type SectionId = (typeof sectionTabs)[number]["id"];

const featuredCaseStudyIds = ["anand-pag", "skingenius", "nomad-ai"] as const;
const personalProjectIds = [
  "learning-council",
  "finwise",
] as const;

const caseStudyDisplay: Record<
  string,
  {
    title?: string;
    image?: string;
    videoSrc?: string;
    pill: string;
    imageClassName?: string;
    mediaPanelClassName?: string;
  }
> = {
  "anand-pag": {
    title: "Anand PAG",
    image: "/anand-workflow-system-map.png",
    videoSrc: "/thumbnail-previews/anand-workflow-system-map-preview.mp4",
    pill: "Delivery • Enterprise",
    imageClassName: "h-full w-full object-contain p-4 sm:p-5",
    mediaPanelClassName: "bg-white",
  },
  skingenius: {
    title: "Skingenius",
    image: "/teasers/skingenius1.jpg",
    videoSrc: "/thumbnail-previews/skingenius-preview.mp4",
    pill: "Growth • Consumer AI",
    imageClassName: "h-full w-full object-contain p-4 sm:p-5",
    mediaPanelClassName: "bg-[#edd5c6]",
  },
  "nomad-ai": {
    title: "Nomad AI",
    image: "/nomad-ai-dashboard.png",
    videoSrc: "/thumbnail-previews/nomad-ai-dashboard-preview.mp4",
    pill: "AI • B2B SaaS",
    imageClassName: "h-full w-full object-contain p-3 sm:p-4",
    mediaPanelClassName: "bg-[#050709]",
  },
};

type BreakdownTile = {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  href?: string;
  status: string;
  toneClassName: string;
  motif: "route" | "loop" | "stack" | "signal";
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
    id: "marketplace-patterns",
    title: "Marketplace patterns",
    eyebrow: "In progress",
    description:
      "Operator-facing product reads where incentives, workflows, and UX all collide.",
    status: "Archive building",
    toneClassName:
      "from-[#eef2e8] via-[#f6f8f2] to-[#dde7d7] text-[#1f241b]",
    motif: "loop",
  },
  {
    id: "ai-product-trust",
    title: "AI product trust",
    eyebrow: "In progress",
    description:
      "Breakdowns focused on framing, trust, onboarding, and whether the AI value actually lands.",
    status: "Queued next",
    toneClassName:
      "from-[#f4ece2] via-[#fbf6ef] to-[#e7ddd0] text-[#241b14]",
    motif: "stack",
  },
  {
    id: "growth-loops",
    title: "Growth loops",
    eyebrow: "In progress",
    description:
      "A working set of product reads around activation, repeat behavior, and what compounds post-onboarding.",
    status: "Work in progress",
    toneClassName:
      "from-[#ecd7d0] via-[#f7e8e2] to-[#dca092] text-[#2a1712]",
    motif: "signal",
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
  image: string;
  videoSrc?: string;
  imageClassName?: string;
  imagePanelClassName?: string;
};

const githubBuilds: GithubBuild[] = [
  {
    id: "future-financial-path",
    title: "Future Financial Path",
    eyebrow: "Public GitHub build",
    description:
      "The working FinWise product repo: onboarding, dashboard flows, Supabase-backed profiles, and assistant surfaces being rebuilt more cleanly.",
    href: "https://github.com/niveditajurel/future-financial-path",
    repoLabel: "niveditajurel/future-financial-path",
    status: "Product shell",
    tags: ["React + Supabase", "Finance UX"],
    image: "/case-study-thumbnails/finwise-panel.png",
    videoSrc: "/thumbnail-previews/finwise-preview.mp4",
    imagePanelClassName: "bg-[#eef3e8]",
    imageClassName: "h-full w-full object-cover object-center",
  },
  {
    id: "portfolio-codebase",
    title: "Portfolio system",
    eyebrow: "Public GitHub build",
    description:
      "The codebase behind this site: editorial landing surfaces, routed case studies, and custom portfolio storytelling components.",
    href: "https://github.com/niveditajurel/niveditajurel.github.io",
    repoLabel: "niveditajurel/niveditajurel.github.io",
    status: "Live site code",
    tags: ["React + Vite", "Editorial frontend"],
    image: "/case-study-thumbnails/portfolio-home-hero.png",
    videoSrc: "/thumbnail-previews/portfolio-home-preview.mp4",
    imagePanelClassName: "bg-[#ede3d7]",
    imageClassName: "h-full w-full object-cover object-[44%_14%]",
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

function pickProjects(ids: readonly string[]) {
  return ids
    .map((id) => projects.find((project) => project.id === id))
    .filter((project): project is ProjectData => Boolean(project));
}

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
  const featuredCaseStudies = pickProjects(featuredCaseStudyIds);
  const personalProjects = pickExperiments(personalProjectIds);
  const writingItems = pickContent([
    "linkedin-writing",
    "writing-archive",
    "instagram-notes",
  ]);
  const leadershipExperience = experiences.find(
    (experience) => experience.company === "Entrepreneurship Cell, VIT",
  );
  const graduateActivities = education[0]?.activities ?? [];
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
    leadershipExperience
      ? {
          title: leadershipExperience.role,
          meta: leadershipExperience.company,
          detail: leadershipExperience.duration,
        }
      : null,
    graduateActivities[0]
      ? {
          title: graduateActivities[0],
          meta: "Northeastern University",
          detail: "Community programming",
        }
      : null,
    graduateActivities[1]
      ? {
          title: graduateActivities[1],
          meta: "Northeastern University",
          detail: "Mentorship and leadership",
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
      <div className="px-3 pb-16 pt-3 sm:px-4 lg:px-6 lg:pb-24">
        <div className="mx-auto max-w-[1520px] rounded-[2rem] border border-[#dccbbb]/72 bg-[rgba(255,250,244,0.82)] shadow-[0_28px_90px_-60px_rgba(72,48,24,0.28)] backdrop-blur-sm">
          <div className="grid gap-0 xl:grid-cols-[minmax(0,1fr)_17.75rem]">
            <main className="min-w-0 p-5 sm:p-7 lg:p-8 xl:p-10">
              <section className="border-b border-[#dccbbb]/72 pb-8 sm:pb-10">
                <div className="grid gap-8 lg:grid-cols-[minmax(0,1.26fr)_minmax(13rem,0.48fr)] lg:items-center">
                  <motion.div
                    initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, ease: "easeOut" }}
                    className="space-y-5"
                  >
                    <p className="section-kicker text-[#b9653d]">Work</p>
                    <div className="relative max-w-[18ch]">
                      <h1
                        className={cn(
                          "max-w-[18ch] text-[clamp(1.95rem,4vw,4.35rem)] font-semibold leading-[0.92] tracking-[-0.06em] text-[#221913]",
                          isClayNotionMode && "font-editorial",
                        )}
                      >
                        <span className="block whitespace-nowrap">Solving meaningful</span>
                        <span className="block whitespace-nowrap">problems at</span>
                        <span className="block whitespace-nowrap">scale.</span>
                      </h1>
                      <DoodleUnderline className="mt-4 h-auto w-[10rem] text-[#d79b77]/85" />
                    </div>
                    <p className="max-w-2xl text-[1.02rem] leading-7 text-[#6d5b4c] sm:text-lg">
                      A selection of case studies, product thinking, and work in
                      progress.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }}
                    className="relative"
                  >
                    <div className="relative rounded-[1.9rem] bg-[radial-gradient(circle_at_50%_48%,rgba(255,255,255,0.82),rgba(255,255,255,0.12)_62%,transparent_84%)] px-2 py-3 sm:px-4">
                      <WorkLandscapeSketch reducedMotion={Boolean(prefersReducedMotion)} />
                      <div className="pointer-events-none absolute -bottom-1 left-0 hidden text-[#d68b63] sm:block">
                        <DoodleArrow className="h-auto w-24" delay={0.15} />
                      </div>
                      <div className="pointer-events-none absolute right-1 top-2 text-[#d6a07f]">
                        <DoodleSpark className="h-10 w-10" delay={0.22} />
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-2.5 sm:gap-3 lg:flex-nowrap">
                  {sectionTabs.map((section) => {
                    const isActive = activeSection === section.id;

                    return (
                      <button
                        key={section.id}
                        type="button"
                        onClick={() => scrollToSection(section.id)}
                        aria-current={isActive ? "true" : undefined}
                        className={cn(
                          "inline-flex min-h-11 items-center whitespace-nowrap rounded-full border px-3.5 py-2.5 text-[0.78rem] font-semibold transition duration-200 sm:px-4 sm:text-sm",
                          isActive
                            ? "border-[#c26a41] bg-[#c26a41] text-[#fff7ef] shadow-[0_12px_24px_-18px_rgba(194,106,65,0.9)]"
                            : "border-[#d9c8b8] bg-[rgba(255,250,244,0.9)] text-[#5d4a3a] hover:-translate-y-0.5 hover:border-[#c98a65] hover:text-[#241913]",
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
                className="scroll-mt-28 pt-8 sm:pt-10"
              >
                <SectionHeader
                  title="Featured case studies"
                  meta="3 live case studies"
                  isClayNotionMode={isClayNotionMode}
                />
                <div className="mt-5 grid gap-4 xl:grid-cols-3 xl:items-start">
                  {featuredCaseStudies.map((project, index) => (
                    <FeaturedCaseStudyCard
                      key={project.id}
                      project={project}
                      index={index}
                      isClayNotionMode={isClayNotionMode}
                    />
                  ))}
                </div>
              </section>

              <section
                id="product-breakdowns"
                className="scroll-mt-28 pt-8 sm:pt-10"
              >
                <SectionHeader
                  title="Product breakdowns"
                  meta="1 live, more being added"
                  isClayNotionMode={isClayNotionMode}
                />
                <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4 xl:items-start">
                  {productBreakdowns.map((tile, index) => (
                    <BreakdownCard key={tile.id} tile={tile} index={index} featured={tile.motif === "route"} />
                  ))}
                </div>
              </section>

              <section
                id="personal-projects"
                className="scroll-mt-28 pt-8 sm:pt-10"
              >
                <SectionHeader
                  title="Personal projects"
                  meta="2 active build streams"
                  isClayNotionMode={isClayNotionMode}
                />
                <div className="mt-5 grid gap-4 lg:grid-cols-2 lg:items-start">
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
                className="scroll-mt-28 pt-8 sm:pt-10"
              >
                <SectionHeader
                  title="GitHub builds"
                  meta="2 public repos worth opening"
                  isClayNotionMode={isClayNotionMode}
                />
                <div className="mt-5 grid gap-4 lg:grid-cols-2 lg:items-start">
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

              <section id="writing" className="scroll-mt-28 pt-8 sm:pt-10">
                <SectionHeader
                  title="Writing and content"
                  meta="LinkedIn, archive, and short-form notes"
                  isClayNotionMode={isClayNotionMode}
                />
                <div className="mt-5 grid gap-4 lg:grid-cols-3 lg:items-start">
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

              <section id="research" className="scroll-mt-28 pt-8 sm:pt-10">
                <SectionHeader
                  title="Research"
                  meta="1 published chapter"
                  isClayNotionMode={isClayNotionMode}
                />
                <div className="mt-5 grid gap-4 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.72fr)] lg:items-start">
                  <motion.article
                    initial={{ opacity: 0.72, y: prefersReducedMotion ? 0 : 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                    className="paper-panel relative overflow-hidden rounded-[1.9rem] p-6 sm:p-7"
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

                      <div className="relative mt-5 h-[14rem] overflow-hidden rounded-[1.2rem] sm:h-[18rem]">
                        <AnimatedProjectThumbnail variant="aisli-research" motion="hover" />
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
                      className="paper-panel rounded-[1.7rem] p-5"
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
                      className="paper-panel rounded-[1.7rem] p-5"
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

            <aside className="hidden min-w-0 border-t border-[#dccbbb]/72 px-5 py-6 sm:px-7 xl:block xl:h-fit xl:border-l xl:border-t-0 xl:px-8 xl:py-10">
              <div className="space-y-8 xl:sticky xl:top-28">
                <RailPanel
                  icon={FileText}
                  title="Research"
                  actionLabel="Open paper page"
                  href={aisliResearch.route}
                >
                  <p className="text-sm leading-6 text-[#6d5b4c]">
                    Co-authored a 2023 chapter on translating spoken English into
                    Indian Sign Language output using speech recognition, NLP,
                    and machine translation.
                  </p>
                  <a
                    href={aisliResearch.publisherUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#b9653d] transition-colors hover:text-[#8f5636]"
                  >
                    Open publisher page
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </RailPanel>

                <RailPanel
                  icon={PenSquare}
                  title="Selected writing"
                  actionLabel="View all writing"
                  href="/content"
                >
                  <div className="space-y-4">
                    {writingItems.slice(0, 3).map((item) =>
                      item.href ? (
                        <a
                          key={item.id}
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-start justify-between gap-3 text-sm text-[#221913] transition-colors hover:text-[#b9653d]"
                        >
                          <span className="leading-6">{item.title}</span>
                          <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0" />
                        </a>
                      ) : (
                        <Link key={item.id} href="/content">
                          <span className="flex cursor-pointer items-start justify-between gap-3 text-sm text-[#221913] transition-colors hover:text-[#b9653d]">
                            <span className="leading-6">{item.title}</span>
                            <ArrowRight className="mt-0.5 h-4 w-4 shrink-0" />
                          </span>
                        </Link>
                      ),
                    )}
                  </div>
                </RailPanel>

                <RailPanel icon={Users2} title="Community & leadership">
                  <div className="space-y-4">
                    {communitySignals.map((signal) => (
                      <div key={signal.title} className="space-y-1">
                        <p className="text-sm font-semibold text-[#221913]">
                          {signal.title}
                        </p>
                        <p className="text-sm text-[#6d5b4c]">{signal.meta}</p>
                        <p className="text-xs uppercase tracking-[0.18em] text-[#a17e67]">
                          {signal.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </RailPanel>
              </div>
            </aside>
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
          "max-w-[15ch] text-balance text-[clamp(1.95rem,3.1vw,3rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-[#221913]",
          isClayNotionMode && "font-editorial",
        )}
      >
        {title}
      </h2>
      <p className="text-sm font-semibold text-[#b9653d]">{meta}</p>
    </div>
  );
}

function FeaturedCaseStudyCard({
  project,
  index,
  isClayNotionMode,
}: {
  project: ProjectData;
  index: number;
  isClayNotionMode: boolean;
}) {
  const display = caseStudyDisplay[project.id];
  const imageSrc = display?.image ?? project.image;
  const previewVideoSrc = display?.videoSrc;
  const imageClassName =
    display?.imageClassName ??
    (project.imageMode === "contain"
      ? "h-full w-full object-contain p-8"
      : "h-full w-full object-cover object-center");
  const isDarkPanel = (display?.mediaPanelClassName ?? "").includes("#050709");

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="group self-start overflow-hidden rounded-[1.9rem] border border-[#d9c8b8]/70 bg-[#fffaf4] shadow-[0_20px_56px_-40px_rgba(63,42,20,0.26)] transition-shadow duration-300 hover:shadow-[0_28px_70px_-42px_rgba(63,42,20,0.28)]"
    >
      <EditorialThumbnailLink
        href={project.href}
        externalHref={project.externalHref}
        ctaLabel={project.externalHref ? "View product page" : "View case study"}
        tone={isDarkPanel ? "dark" : "light"}
        disableAmbientFloat
        panelClassName={cn(
          "relative h-[22rem] border-b border-[#d9c8b8]/70 sm:h-[26rem]",
          display?.mediaPanelClassName ?? "bg-[#f8efe4]",
        )}
      >
        <AnimatedProjectThumbnail variant={project.id as AnimatedThumbnailVariant} motion="hover" />
      </EditorialThumbnailLink>

      <div className="flex items-center justify-between gap-3 p-4 sm:p-5">
        <div className="flex items-center gap-2">
          <span className="rounded-full border border-[#d8c6b5] bg-white/82 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#6d5b4c]">
            {display?.pill ?? project.eyebrow}
          </span>
          <span className="rounded-full border border-[#ead8c5] bg-[#fff4e7] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#b9653d]">
            {project.period}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {project.externalHref ? (
            <a
              href={project.externalHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#d9c8b8] bg-white/82 px-3.5 py-2 text-[0.78rem] font-semibold text-[#241913] transition-colors duration-200 hover:border-[#b98c65]"
            >
              Website
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          ) : null}
          {project.href ? (
            <Link href={project.href}>
              <span className="inline-flex cursor-pointer items-center gap-1.5 rounded-full bg-[#1f1a14] px-3.5 py-2 text-[0.78rem] font-semibold text-[#fff8ef] transition-transform duration-200 hover:-translate-y-0.5">
                Case study
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ) : null}
        </div>
      </div>
    </motion.article>
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
  const card = (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
      whileHover={{ y: -3 }}
      className={cn(
        "group overflow-hidden rounded-[1.7rem] border border-[#d9c8b8]/72 bg-gradient-to-br p-5 shadow-[0_18px_40px_-36px_rgba(63,42,20,0.25)]",
        featured ? "min-h-[20rem] sm:col-span-2" : "min-h-[16.5rem]",
        tile.toneClassName,
      )}
    >
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
    </motion.article>
  );

  if (tile.href) {
    return <Link href={tile.href}>{card}</Link>;
  }

  return card;
}

function BreakdownPreview({ motif }: { motif: BreakdownTile["motif"] }) {
  const frameClassName =
    "rounded-[1.2rem] border border-black/8 bg-white/70 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.45)]";

  if (motif === "route") {
    return (
      <div className="overflow-hidden rounded-[1.2rem]">
        <div className="relative h-[14rem] overflow-hidden rounded-[1rem] sm:h-[16rem]">
          <AnimatedProjectThumbnail variant="uber-driver-navigation" motion="hover" />
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
      className="group self-start overflow-hidden rounded-[1.8rem] border border-[#d9c8b8]/72 bg-[#fffaf4] shadow-[0_18px_42px_-34px_rgba(63,42,20,0.18)] transition-shadow duration-300 hover:shadow-[0_24px_54px_-36px_rgba(63,42,20,0.24)]"
    >
      <EditorialThumbnailLink
        href={experiment.href}
        ctaLabel="View build"
        tone={isDarkThumbnail ? "dark" : "light"}
        disableAmbientFloat
        panelClassName={cn(
          "border-b border-[#dccbbb]/72 bg-gradient-to-br",
          (experiment.id === "learning-council" || experiment.id === "finwise") ? "min-h-[22rem]" : "min-h-[14rem]",
          display?.previewTone ?? "from-[#fff0e3] via-[#fff7f0] to-[#f5e4d2]",
        )}
      >
        <PersonalProjectPreview experiment={experiment} />
      </EditorialThumbnailLink>

      <div className="p-6">
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
            {experiment.company ? (
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
          <div className="mt-6 flex justify-end">
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
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: "easeOut" }}
      whileHover={{ y: -3 }}
      className="group self-start overflow-hidden rounded-[1.8rem] border border-[#d9c8b8]/72 bg-[#fffaf4] shadow-[0_18px_42px_-34px_rgba(63,42,20,0.18)] transition-shadow duration-300 hover:shadow-[0_24px_54px_-36px_rgba(63,42,20,0.24)]"
    >
      <EditorialThumbnailLink
        externalHref={build.href}
        ctaLabel="View repo"
        tone={(build.imagePanelClassName ?? "").includes("#050709") ? "dark" : "light"}
        disableAmbientFloat={Boolean(build.videoSrc)}
        panelClassName={cn(
          "relative h-[18rem] border-b border-[#dccbbb]/72 sm:h-[20rem]",
          build.imagePanelClassName ?? "bg-[#f3ebdf]",
        )}
      >
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
      </EditorialThumbnailLink>

      <div className="flex h-full flex-col p-6">
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
            <Github className="h-4 w-4" />
            View repo
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.article>
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
  const card = (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.05, ease: "easeOut" }}
      whileHover={{ y: -3 }}
      className="group self-start flex flex-col justify-between overflow-hidden rounded-[1.7rem] border border-[#d9c8b8]/72 bg-[#fffaf4] shadow-[0_18px_42px_-34px_rgba(63,42,20,0.14)]"
    >
      <div
        className={cn(
          "border-b border-[#dccbbb]/72 bg-gradient-to-br p-4",
          display?.previewTone ?? "from-[#fff0e3] via-[#fff8f1] to-[#f3e3d4]",
        )}
      >
        <WritingPreview item={item} />
      </div>

      <div className="flex flex-1 flex-col justify-between p-5">
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
    return (
      <a href={item.href} target="_blank" rel="noreferrer">
        {card}
      </a>
    );
  }

  return <Link href="/content">{card}</Link>;
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
    <section className="border-b border-[#dccbbb]/72 pb-8 last:border-b-0 last:pb-0">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f3e6d7] text-[#b9653d]">
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="text-[1.75rem] font-semibold leading-[0.96] tracking-[-0.04em] text-[#221913] font-editorial">
          {title}
        </h3>
      </div>

      <div className="mt-4">{children}</div>

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

function WorkLandscapeSketch({
  reducedMotion,
}: {
  reducedMotion: boolean;
}) {
  return (
    <div className="relative h-[7rem] sm:h-[13rem] lg:h-[18rem]">
      <motion.div
        className="absolute right-[20%] top-[14%] h-5 w-5 rounded-full bg-[#d6794e] shadow-[0_0_30px_rgba(214,121,78,0.22)] sm:h-7 sm:w-7"
        animate={
          reducedMotion
            ? undefined
            : {
                y: [0, -5, 0],
                x: [0, 2, 0],
              }
        }
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.svg
        viewBox="0 0 560 320"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full text-[#baaf9f]"
        initial={{ opacity: 0, y: reducedMotion ? 0 : 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.path
          d="M48 212C82 196 104 182 142 154C175 130 193 98 224 86C260 73 275 114 304 138C326 156 353 169 390 175C423 180 454 171 512 144"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.05, ease: "easeInOut" }}
        />
        <motion.path
          d="M74 212C111 190 148 146 172 126C198 104 215 86 236 92C263 100 284 142 312 166C338 188 365 195 402 197C432 199 462 191 507 167"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.2, delay: 0.08, ease: "easeInOut" }}
        />
        <motion.path
          d="M138 214C168 167 194 128 225 100C238 88 252 82 264 90C284 104 287 144 315 176"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.85, delay: 0.18, ease: "easeInOut" }}
        />
        <motion.path
          d="M252 206C275 175 302 127 337 93C355 76 372 76 389 93C415 120 417 169 452 188"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.92, delay: 0.24, ease: "easeInOut" }}
        />
        <motion.path
          d="M100 250C142 241 185 247 222 241C256 236 284 220 312 214C346 207 382 214 442 234"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.88, delay: 0.28, ease: "easeInOut" }}
        />
        <motion.path
          d="M168 241C190 229 212 222 244 218C277 214 300 220 329 236"
          stroke="currentColor"
          strokeWidth="1.45"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.36, ease: "easeInOut" }}
        />
      </motion.svg>
    </div>
  );
}
