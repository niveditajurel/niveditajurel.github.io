import { ArrowRight, ArrowUpRight } from "lucide-react";
import { BsLinkedin, BsMedium, BsSubstack } from "react-icons/bs";
import { Link } from "wouter";
import { PixelWalker } from "@/components/ui/PixelWalker";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { contentItems } from "@/data/content";

const videoCovers = [
  { src: "/video-learning-coordination-cover.png", alt: "Nivedita outdoors in a video about learning and coordination.", label: "Learning & coordination" },
  { src: "/video-graph-engineering-cover.png", alt: "Nivedita in a video about graph engineering.", label: "Graph engineering" },
  { src: "/video-ai-physics-cover.png", alt: "Nivedita in a video about AI and physics.", label: "AI & physics" },
] as const;

const instagram = contentItems.find((item) => item.id === "instagram-notes");
const linkedin = contentItems.find((item) => item.id === "linkedin-writing");
const archive = contentItems.find((item) => item.id === "writing-archive");
const substack = archive?.platformLinks?.find((link) => link.label === "Substack");
const medium = archive?.platformLinks?.find((link) => link.label === "Medium");
const essays = archive?.featuredPieces?.slice(0, 2) ?? [];

export const ContentPreview = () => {
  if (!instagram?.href || !linkedin?.href || !substack || !medium) return null;

  return (
    <section id="content-preview" className="mistral-section">
      <div className="mistral-section-shell">
        <PixelWalker duration={90} delay={2} wrench />
        <SectionIntro number="04" label="Beyond the work" title="More than the job title." description="The ideas I follow, the things I make, and the conversations I keep returning to—on and off the clock." icon="pen" headingStyle="editorial" />

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(19rem,0.7fr)] lg:gap-12">
          <div>
            <div className="grid grid-cols-3 items-start gap-2 sm:gap-3">
              {videoCovers.map((cover, index) => (
                <a key={cover.src} href={instagram.href} target="_blank" rel="noreferrer" aria-label={`See ${cover.label} on Instagram (opens in a new tab)`} className="group min-w-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--bp-cobalt)]">
                  <figure className="min-w-0">
                    <div className="overflow-hidden border border-[var(--bp-hairline)] bg-[#e8dfd1]">
                      <img src={cover.src} alt={cover.alt} loading="lazy" decoding="async" className="aspect-[3/4] w-full object-cover motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-[1.025]" />
                    </div>
                    <figcaption className="mt-2 hidden font-mono text-[0.63rem] uppercase tracking-[0.09em] text-[var(--bp-ink-muted)] sm:block">{String(index + 1).padStart(2, "0")} / {cover.label}</figcaption>
                  </figure>
                </a>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-[var(--bp-cobalt)]">On camera · Visual notes</p>
                <h3 className="font-fraunces mt-2 text-[clamp(1.55rem,2.4vw,2.1rem)] leading-[1.1] text-[var(--bp-ink)]">Curiosity, out loud.</h3>
                <p className="mt-2 max-w-[54ch] text-sm leading-6 text-[var(--bp-ink-muted)]">Short videos on what I’m learning in tech, alongside the people and communities that keep me curious.</p>
              </div>
              <a href={instagram.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 py-1 text-sm font-semibold text-[var(--bp-ink)] hover:text-[var(--bp-cobalt)]">Watch on Instagram <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></a>
            </div>
          </div>

          <div className="flex flex-col border-t border-[var(--bp-hairline)] pt-5 lg:border-t-0 lg:pt-0">
            <p className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-[var(--bp-cobalt)]">For the longer thoughts</p>
            <h3 className="font-fraunces mt-3 text-[clamp(1.65rem,2.5vw,2.25rem)] leading-[1.1] text-[var(--bp-ink)]">Ideas that need more room.</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--bp-ink-muted)]">Essays and notes where I follow an idea beyond a caption.</p>

            <div className="mt-7 border-t border-[var(--bp-hairline)] pt-5">
              <div className="flex items-center justify-between gap-3">
                <p className="inline-flex items-center gap-2 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-[var(--bp-ink)]"><BsSubstack aria-hidden="true" className="h-5 w-5 shrink-0 text-[#ff6719]" />Substack</p>
                <a href={substack.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--bp-ink)] hover:text-[var(--bp-cobalt)]">View Substack <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" /></a>
              </div>
              <div className="mt-3 space-y-3">
                {essays.map((piece) => (
                  <a key={piece.href} href={piece.href} target="_blank" rel="noreferrer" className="group flex items-start justify-between gap-3 text-sm leading-5 text-[var(--bp-ink)] hover:text-[var(--bp-cobalt)]">
                    <span>{piece.title}</span><ArrowUpRight aria-hidden="true" className="mt-0.5 h-3.5 w-3.5 shrink-0 motion-safe:transition-transform motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-6 border-t border-[var(--bp-hairline)] pt-5">
              <p className="inline-flex items-center gap-2 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-[var(--bp-ink)]"><BsMedium aria-hidden="true" className="h-5 w-5 shrink-0" />Medium</p>
              <a href={medium.href} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-2 font-fraunces text-[1.45rem] leading-[1.1] text-[var(--bp-ink)] hover:text-[var(--bp-cobalt)]">More notes from the archive <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" /></a>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-5 border-y border-[var(--bp-hairline)] py-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center lg:mt-10">
          <a href={linkedin.href} target="_blank" rel="noreferrer" className="group flex min-w-0 items-center gap-4 text-[var(--bp-ink)] hover:text-[var(--bp-cobalt)]">
            <img src="/linkedin-profile-header.png" alt="" loading="lazy" className="h-[4.5rem] w-[7.5rem] shrink-0 border border-[var(--bp-hairline)] object-cover object-top sm:h-[5rem] sm:w-[9rem]" />
            <span className="min-w-0"><span className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-[var(--bp-ink)]"><BsLinkedin aria-hidden="true" className="h-5 w-5 shrink-0 text-[#0a66c2]" />LinkedIn</span><span className="mt-1 flex items-center gap-2 text-sm font-semibold">Career notes & conversations <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" /></span></span>
          </a>
          <Link href="/fun" className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[var(--bp-ink)] hover:text-[var(--bp-cobalt)]">Explore the Fun page <ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>
        </div>
      </div>
    </section>
  );
};
