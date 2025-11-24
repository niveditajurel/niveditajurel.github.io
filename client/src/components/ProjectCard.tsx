import { useState } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { trackEvent } from '@/utils/analytics';
import { Badge } from '@/components/ui/badge';

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
      className="group relative flex flex-col h-full overflow-hidden rounded-2xl bg-card dark:bg-card/50 border border-border/50 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => handleProjectClick(project.id)}
      whileHover={{ y: -8 }}
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.thumb}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

        {/* Floating Tags on Image */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2 transform translate-y-0 transition-transform duration-500">
          {project.tags.split(', ').slice(0, 2).map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-white/20 backdrop-blur-md text-white border-white/20 shadow-sm"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* View Case Study Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100">
          <div className="px-6 py-3 bg-white/90 dark:bg-ink/90 backdrop-blur-md rounded-full font-semibold text-sm text-foreground shadow-lg flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
            View Case Study <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-6 relative z-10 bg-card dark:bg-card">
        <h3 className="text-2xl font-display font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-6 line-clamp-3 text-base leading-relaxed flex-grow">
          {project.summary}
        </p>

        <div className="mt-auto pt-4 border-t border-border/50 flex justify-between items-center">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Case Study
          </span>
          <Link href={project.href}>
            <div className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-300 group/link">
              Read more
              <ExternalLink className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
            </div>
          </Link>
        </div>
      </div>

      {/* Hover Glow Border Effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/10 rounded-2xl transition-colors duration-500 pointer-events-none" />
    </motion.div>
  );
} 