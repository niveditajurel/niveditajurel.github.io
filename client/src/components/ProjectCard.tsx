import { useState } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { trackEvent } from '@/utils/analytics';

interface Project {
  id: string;
  title: string;
  tags: string;
  thumb: string;
  summary: string;
  href: string;
}

interface ProjectCardProps {
  project: Project;
  variants: {
    hidden: { opacity: number; y: number };
    visible: {
      opacity: number;
      y: number;
      transition: { duration: number; ease: string };
    };
  };
}

export function ProjectCard({ project, variants }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleProjectClick = (projectId: string) => {
    trackEvent('Project Click', { project: projectId });
  };

  return (
    <motion.div
      key={project.id}
      variants={variants}
      className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => handleProjectClick(project.id)}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.thumb}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
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
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0">
          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
            <ArrowRight className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-ink dark:text-base group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {project.summary}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.split(', ').map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-medium bg-[hsl(var(--accent))]/10 text-accent rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link href={project.href}>
          <div className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors duration-300">
            View case study
            <ExternalLink className="w-4 h-4" />
          </div>
        </Link>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--accent))]/5 to-[hsl(var(--flair))]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
} 