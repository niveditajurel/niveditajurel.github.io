import { motion } from "framer-motion";
import { PixelWalker } from "@/components/ui/PixelWalker";

const wildShots = [
  {
    src: "/wild/crowd.jpg",
    alt: "Techstars Startup Weekend cohort group photo",
    caption: "▸ community unlocked",
    location: "startup weekend cohort",
  },
  {
    src: "/wild/whiteboard.jpg",
    alt: "Nivedita sketching product flows on a whiteboard",
    caption: "▸ ideas becoming systems",
    location: "whiteboard session",
  },
  {
    src: "/wild/portrait.jpg",
    alt: "Nivedita at Techstars Startup Weekend Boston",
    caption: "▸ builder energy, offline",
    location: "techstars · boston",
  },
];

export const InTheWild = () => {
  return (
    <section id="in-the-wild" className="bg-transparent px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
      <div className="relative mx-auto max-w-7xl border-t border-[var(--bp-hairline)] pt-6 lg:pt-7">
        <PixelWalker duration={81} delay={1} />
        <div className="mb-6 space-y-3">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.24em] text-[var(--bp-ink-muted)]">
            In the wild
          </p>
          <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
            <h2 className="font-fraunces max-w-[16ch] text-[clamp(2.35rem,4vw,4rem)] font-normal leading-[0.92] tracking-[-0.04em] text-[var(--bp-ink)]">
              Offline counts too.
            </h2>
            <p className="max-w-[38rem] text-[1rem] leading-7 text-[var(--bp-ink-muted)] xl:text-right">
              {"The rooms, people, and whiteboards behind the polished output."}
            </p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {wildShots.map((shot, index) => (
            <motion.figure
              key={shot.src}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
              className="group overflow-hidden border border-[var(--bp-hairline)] bg-white"
            >
              <div className="overflow-hidden bg-[var(--bp-cobalt-subtle)]/40">
                <img
                  src={shot.src}
                  alt={shot.alt}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
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
