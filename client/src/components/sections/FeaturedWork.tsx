import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";
import { projects } from "@/data/projects";

const featuredProjectMeta: Record<
  string,
  {
    roleLabel: string;
    visualNote: string;
    overlayTone: string;
    displayTitle?: string;
    displayPeriod?: string;
  }
> = {
  "anand-pag": {
    roleLabel: "Builder PM",
    visualNote: "Systems before screens",
    overlayTone: "from-[#16120f]/20 via-[#16120f]/35 to-[#16120f]/62",
    displayTitle: "Anand PAG",
    displayPeriod: "2025 - Present",
  },
  "nomad-ai": {
    roleLabel: "Product Manager",
    visualNote: "AI-native financial product",
    overlayTone: "from-[#111827]/18 via-[#101827]/32 to-[#101827]/56",
  },
  skingenius: {
    roleLabel: "Product Manager",
    visualNote: "AI recommendations + onboarding",
    overlayTone: "from-[#2f1714]/18 via-[#2f1714]/30 to-[#2f1714]/52",
  },
};

const featuredProjects = projects.flatMap((project) => {
  const meta = featuredProjectMeta[project.id];
  return meta ? [{ project, meta }] : [];
});

export const FeaturedWork = () => {
  const isClayNotionMode = siteConfig.experiments.clayNotionLanding;

  return (
    <section id="featured-work" className="bg-transparent px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
      <div className="mx-auto max-w-7xl border-t border-border/70 pt-8">
        <div className="mb-8 space-y-3 lg:mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Featured Work
          </p>
          <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
            <h2
              className={cn(
                "clay-section-heading max-w-[13ch] text-foreground md:text-[2.7rem]",
                isClayNotionMode && "font-editorial",
              )}
            >
              Product work to open first.
            </h2>
            <p className="max-w-[38rem] text-base leading-7 text-muted-foreground xl:text-right">
              Start with the product itself, then open the case study for the product decisions,
              execution details, and role context behind it.
            </p>
          </div>
        </div>

        <div className="grid gap-5 xl:grid-cols-3">
          {featuredProjects.map(({ project, meta }, index) => (
            <FeaturedWorkTile
              key={project.id}
              project={project}
              roleLabel={meta.roleLabel}
              visualNote={meta.visualNote}
              overlayTone={meta.overlayTone}
              displayTitle={meta.displayTitle}
              displayPeriod={meta.displayPeriod}
              index={index}
              isClayNotionMode={isClayNotionMode}
            />
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <Link href="/projects">
            <span className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border/65 bg-[#fffaf2]/78 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/35 hover:bg-[#fff6e9] hover:text-primary">
              View more case studies
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

function FeaturedWorkTile({
  project,
  roleLabel,
  visualNote,
  overlayTone,
  displayTitle,
  displayPeriod,
  index,
  isClayNotionMode,
}: {
  project: (typeof featuredProjects)[number]["project"];
  roleLabel: string;
  visualNote: string;
  overlayTone: string;
  displayTitle?: string;
  displayPeriod?: string;
  index: number;
  isClayNotionMode: boolean;
}) {
  const imageClassName =
    project.imageMode === "contain"
      ? "h-full w-full object-contain p-6"
      : "h-full w-full object-cover object-center";

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -3 }}
      className={cn(
        "group relative flex h-full min-h-[32rem] flex-col overflow-hidden rounded-[2rem] border border-border/70 bg-[#fffdf8]/84 shadow-[0_20px_60px_-44px_rgba(15,23,42,0.18)] backdrop-blur-sm",
        isClayNotionMode && "shadow-[0_22px_56px_-40px_rgba(81,57,24,0.15)]",
      )}
    >
      <div className="relative min-h-[19rem] overflow-hidden border-b border-border/55 bg-[#f7efe4] sm:min-h-[20rem]">
        {project.image && project.imageMode !== "none" ? (
          <img src={project.image} alt={project.title} className={cn(imageClassName, "transition-transform duration-500 group-hover:scale-[1.02]")} />
        ) : (
          <div className={cn(`absolute inset-0 bg-gradient-to-br ${project.theme.surface}`)}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.3),transparent_28%),radial-gradient(circle_at_82%_16%,rgba(255,255,255,0.2),transparent_22%)]" />
          </div>
        )}

        <div className={cn(`absolute inset-0 bg-gradient-to-b ${overlayTone}`)} />

        <div className="absolute inset-x-5 top-5 flex items-start justify-between gap-4">
          <span className="inline-flex items-center rounded-full border border-white/22 bg-white/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/92 backdrop-blur-sm">
            {project.eyebrow}
          </span>
        </div>

        <div className="absolute inset-x-5 bottom-5 space-y-3">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white/88 backdrop-blur-sm">
              {roleLabel}
            </span>
          </div>
          <p className="max-w-[28ch] text-[0.88rem] font-medium leading-6 text-white/90">
            {visualNote}
          </p>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between gap-6 p-5 sm:p-6">
        <div className="space-y-4">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {displayPeriod ?? project.period}
          </p>
          <h3
            className={cn(
              "max-w-[14ch] text-balance text-[1.65rem] font-semibold leading-[1.08] tracking-[-0.03em] text-foreground sm:text-[1.78rem]",
              isClayNotionMode && "font-editorial text-[1.82rem]",
            )}
          >
            {displayTitle ?? project.title}
          </h3>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          {project.externalHref ? (
            <a
              href={project.externalHref}
              target="_blank"
              rel="noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="inline-flex items-center gap-2 rounded-full border border-border/65 bg-[#fffaf2]/82 px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/35 hover:bg-[#fff4e2] hover:text-primary"
            >
              View product page
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : null}

          {project.href ? (
            <Link href={project.href}>
              <span
                onClick={(event) => event.stopPropagation()}
                className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#1f1a14] px-4 py-2.5 text-sm font-semibold text-[#fff8ef] transition-transform hover:-translate-y-0.5"
              >
                View case study
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
