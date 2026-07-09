import { motion } from "framer-motion";
import { PixelWalker } from "@/components/ui/PixelWalker";

const wildShots = [
  {
    src: "/wild/whiteboard.jpg",
    alt: "Nivedita sketching product flows on a whiteboard",
    caption: "▸ ideating on projects",
    location: "whiteboard session",
    span: "lg:row-span-2",
  },
  {
    src: "/wild/portrait.jpg",
    alt: "Nivedita at Techstars Startup Weekend Boston",
    caption: "▸ attending events",
    location: "techstars · boston",
    span: "",
  },
  {
    src: "/wild/crowd.jpg",
    alt: "Techstars Startup Weekend cohort group photo",
    caption: "▸ organizing hackathons",
    location: "startup weekend cohort",
    span: "",
  },
];

export const InTheWild = () => {
  return (
    <section id="in-the-wild" className="bg-transparent px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
      <div className="relative mx-auto max-w-7xl border-t border-[var(--bp-hairline)] pt-6 lg:pt-7">
        <PixelWalker duration={54} delay={1} />
        <div className="mb-6 space-y-3">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.24em] text-[var(--bp-ink-muted)]">
            In the wild
          </p>
          <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
            <h2 className="font-fraunces max-w-[16ch] text-4xl font-semibold leading-[1.05] tracking-tight text-[var(--bp-ink)] md:text-[2.6rem]">
              Real rooms, real whiteboards.
            </h2>
            <p className="max-w-[38rem] text-[1rem] leading-7 text-[var(--bp-ink-muted)] xl:text-right">
              Field documentation — product flows getting sketched, communities getting built,
              events getting shipped.
            </p>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[minmax(0,11fr)_minmax(0,9fr)] lg:grid-rows-2">
          {wildShots.map((shot, index) => (
            <motion.figure
              key={shot.src}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
              className={`group overflow-hidden rounded-xl border border-[var(--bp-hairline)] bg-white ${shot.span}`}
            >
              <div className="h-full overflow-hidden bg-[var(--bp-cobalt-subtle)]/40">
                <img
                  src={shot.src}
                  alt={shot.alt}
                  loading="lazy"
                  className="h-full min-h-[14rem] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  onError={(event) => {
                    (event.currentTarget.parentElement?.parentElement as HTMLElement)?.style.setProperty(
                      "display",
                      "none",
                    );
                  }}
                />
              </div>
              <figcaption className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-t border-[var(--bp-hairline)] px-4 py-3 font-mono text-[0.7rem]">
                <span className="text-[var(--bp-ink)]">{shot.caption}</span>
                <span className="text-[var(--bp-ink-muted)]">{shot.location}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};
