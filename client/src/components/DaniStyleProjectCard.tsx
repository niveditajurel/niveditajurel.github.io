import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';

interface Project {
  id: string;
  title: string;
  tags: string;
  href?: string;
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
  // Check if this is the Nomad AI project
  const isNomadAI = project.id === 'nomad-ai';
  // Check if this is the Skingenius project
  const isSkingenius = project.id === 'skingenius';
  
  const CardContent = () => (
    <div
      className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${
        isNomadAI 
          ? 'bg-black dark:bg-black' 
          : isSkingenius
          ? 'bg-[#f5f6f6] dark:bg-[#f5f6f6] border-2 border-gray-300'
          : 'bg-white dark:bg-gray-900'
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      tabIndex={0}
      role="button"
      aria-label={`Show details for ${project.title}`}
    >
      <div className={`w-full h-64 flex items-center justify-center ${
        isNomadAI ? 'bg-black p-4' : ''
      }`}>
        <img
          src={slides[0]?.img}
          alt={project.title}
          className={`rounded-2xl transition-all duration-500 ${
            isNomadAI 
              ? 'w-3/4 h-48 object-contain' 
              : isSkingenius
              ? 'w-11/12 h-60 object-contain'
              : 'w-full h-64 object-cover'
          }`}
        />
      </div>

              <div className="absolute bottom-0 left-0 w-full p-4 flex flex-col gap-2 z-10">
          <h3 className={`text-lg font-semibold mb-1 drop-shadow-lg ${
            isSkingenius ? 'text-black' : 'text-white'
          }`}>{project.title}</h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.split(', ').map((tag) => (
              <span
                key={tag}
                className={`px-3 py-1 text-xs font-medium rounded-full border ${
                  isSkingenius 
                    ? 'bg-black/10 backdrop-blur-sm text-black border-black/30' 
                    : 'bg-white/20 backdrop-blur-sm text-white border-white/30'
                }`}
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
        style={{ 
          background: isNomadAI ? 'rgba(0,0,0,0.98)' : 'rgba(255,255,255,0.98)', 
          borderRadius: '1rem' 
        }}
      >
        <div className="flex flex-col items-center justify-center h-full px-8 text-center">
          <h3 className={`text-2xl font-bold mb-2 ${
            isNomadAI ? 'text-white' : 'text-ink dark:text-base'
          }`}>{project.title}</h3>
          <div className="flex flex-wrap gap-2 mb-4 justify-center">
            {project.tags.split(', ').map((tag) => (
              <span
                key={tag}
                className={`px-3 py-1 text-xs font-medium rounded-full border ${
                  isNomadAI 
                    ? 'bg-white/20 text-white border-white/30' 
                    : 'bg-accent/10 text-accent border-accent/20'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
          <p className={`text-lg max-w-md ${
            isNomadAI ? 'text-white/80' : 'text-ink/80 dark:text-base/80'
          }`}>
            {slides[0]?.blurb}
          </p>
        </div>
      </motion.div>
    </div>
  );

  if (project.href) {
    return (
      <Link href={project.href}>
        <a>
          <CardContent />
        </a>
      </Link>
    );
  }

  return <CardContent />;
} 