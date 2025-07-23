import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  id: string;
  title: string;
  tags: string;
}

interface Slide {
  img: string;
  blurb: string;
}

interface DaniStyleProjectCardProps {
  project: Project;
  slides: Slide[];
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export function DaniStyleProjectCard({
  project,
  slides,
  isOpen,
  onMouseEnter,
  onMouseLeave,
}: DaniStyleProjectCardProps) {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      tabIndex={0}
      role="button"
      aria-label={`Show details for ${project.title}`}
    >
      <img
        src={slides[0]?.img}
        alt={project.title}
        className="w-full h-64 object-cover rounded-2xl transition-all duration-500"
      />
      <div className="absolute top-4 right-4 bg-accent opacity-90 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
        Shipped
      </div>
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
} 