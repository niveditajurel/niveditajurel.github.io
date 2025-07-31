import React, { useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { DaniStyleProjectCard } from './DaniStyleProjectCard';
import workData from '@/data/dani-style-work.json';

const { projectSlides, teasersData } = workData;

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
          {teasersData.map((project) => (
            <DaniStyleProjectCard
                key={project.id}
              project={project}
              slides={projectSlides[project.id as keyof typeof projectSlides] || []}
              isOpen={hoveredId === project.id}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <Link href="/projects">
            <button className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-black text-white shadow-lg hover:shadow-xl transition-all duration-300 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-accent" aria-label="View all projects" tabIndex={0}>
              View all projects
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
} 