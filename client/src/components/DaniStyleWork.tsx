import React, { useState } from 'react';
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

const projectSlides: { [key: string]: { img: string; blurb: string }[] } = {
  corti: [
    { img: "/public/teasers/corti.jpg", blurb: "Corti is a healthcare AI company that builds specialized language models to support medical professionals in real time." },
    { img: "/public/teasers/corti2.jpg", blurb: "I worked on product strategy and user research to help Corti scale their impact in medtech." }
  ],
  nomad: [
    { img: "/public/teasers/nomad.jpg", blurb: "Nomad is a travel tech platform connecting digital nomads with global workspaces and communities." },
    { img: "/public/teasers/nomad2.jpg", blurb: "I led the launch of new features to boost user engagement and retention." }
  ],
  skingenius: [
    { img: "/public/teasers/skingenius.jpg", blurb: "SkinGenius uses AI to provide personalized skincare recommendations." },
    { img: "/public/teasers/skingenius2.jpg", blurb: "I drove product-market fit through data analysis and rapid prototyping." }
  ],
  zapo: [
    { img: "/public/teasers/zapo.jpg", blurb: "Zapo is a B2B SaaS platform that drives growth for local businesses by generating high-quality leads." },
    { img: "/public/teasers/zapo2.jpg", blurb: "I worked on onboarding flows and growth strategy for Zapo's product team." }
  ],
};

const teasersData = [
  { id: "corti", title: "Corti.ai – Healthcare AI Assistant", tags: "medtech, ai" },
  { id: "nomad", title: "Nomad – Travel Tech Platform", tags: "travel, SaaS" },
  { id: "skingenius", title: "SkinGenius – AI Skincare", tags: "ai, health" },
  { id: "zapo", title: "Zapo – Team Management SaaS", tags: "b2b, SaaS" },
];

export function DaniStyleWork() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="py-24 bg-base dark:bg-ink">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold mb-4 text-ink dark:text-base">
            Fraction of my work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Real-world stories where clear insights meet human-centered design and ship.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {teasersData.map((project) => {
            const slides = projectSlides[project.id] || [];
            const isOpen = hoveredId === project.id;
            return (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                tabIndex={0}
                role="button"
                aria-label={`Show details for ${project.title}`}
              >
                <img
                  src={slides[0]?.img}
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-2xl transition-all duration-500"
                />
                {/* Badge */}
                <div className="absolute top-4 right-4 bg-accent/90 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  Shipped
                </div>
                {/* Project Title & Tags */}
                <div className="absolute bottom-0 left-0 w-full p-4 flex flex-col gap-2 z-10">
                  <h3 className="text-lg font-semibold text-white mb-1 drop-shadow-lg">{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.split(', ').map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {/* --- Dani-style sliding overlay --- */}
                <motion.div
                  initial={{ translateY: '100%', opacity: 0 }}
                  animate={isOpen ? { translateY: '0%', opacity: 1 } : { translateY: '100%', opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30, duration: 0.4 }}
                  className="absolute top-0 left-0 w-full h-full z-20 flex flex-col items-center justify-center"
                  style={{ background: 'rgba(255,255,255,0.98)', borderRadius: '1rem' }}
                >
                  <div className="flex flex-col items-center justify-center h-full px-8 text-center">
                    <h3 className="text-2xl font-bold mb-2 text-ink dark:text-base">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4 justify-center">
                      {project.tags.split(', ').map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full border border-accent/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-lg text-ink/80 dark:text-base/80 max-w-md">
                      {slides[0]?.blurb}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <Link href="/projects">
            <button className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-ink dark:bg-base text-base dark:text-ink shadow-lg hover:shadow-xl transition-all duration-300 font-medium">
              View all projects
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function KeenSliderSheet({ slides }: { slides: { img: string; blurb: string }[] }) {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
    drag: true,
    renderMode: 'performance',
  });
  return (
    <div ref={sliderRef} className="keen-slider h-64 flex items-center justify-center rounded-t-2xl">
      {slides.map((slide, i) => (
        <div className="keen-slider__slide flex items-center justify-center relative" key={i}>
          <img
            src={slide.img}
            alt="Project slide"
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col items-start">
            <p className="text-ink dark:text-base text-base font-medium drop-shadow-lg max-w-full mb-2 bg-white/80 rounded-lg px-2 py-1">
              {slide.blurb}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
} 