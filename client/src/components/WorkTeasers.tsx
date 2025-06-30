import { useState } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { trackEvent } from '@/utils/analytics';
import teasersData from '@/data/teasers.json';
import { ProjectCard } from './ProjectCard';

export function WorkTeasers() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const handleProjectClick = (projectId: string) => {
    trackEvent('Project Click', { project: projectId });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-24 bg-base dark:bg-ink">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl lg:text-4xl font-semibold mb-4 text-ink dark:text-base"
          >
            Tiny fraction of my work
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Teaming with founders to propel their next product breakthrough – design that's both functional and great looking
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {teasersData.map((project) => (
            <ProjectCard key={project.id} project={project} variants={itemVariants} />
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            There's a product case study as well. Feel free to get in touch to check it out.
          </p>
          <Link href="/projects">
            <button className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-ink dark:bg-base text-base dark:text-ink shadow-lg hover:shadow-xl transition-all duration-300 font-medium">
              View all projects
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}