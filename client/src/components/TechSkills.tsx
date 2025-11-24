import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  BarChart3,
  Users,
  TrendingUp,
  Target,
  Zap,
  Shield,
  Lightbulb,
  GitBranch
} from 'lucide-react';

const skills = [
  {
    category: "Product Strategy",
    icon: Target,
    description: "Roadmapping, prioritization, and strategic planning",
  },
  {
    category: "User Research",
    icon: Users,
    description: "Interviews, surveys, and usability testing",
  },
  {
    category: "Data Insight",
    icon: BarChart3,
    description: "Metrics, A/B testing, and user behavior insights",
  },
  {
    category: "Technical Fluency",
    icon: Zap,
    description: "APIs, analytics, and product/platform fundamentals",
  },
  {
    category: "Stakeholder Alignment",
    icon: Shield,
    description: "Clear comms, decision-making, and collaboration",
  },
  {
    category: "Agile Delivery",
    icon: GitBranch,
    description: "Sprint planning, retros, and execution",
  },
];

export function TechSkills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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
    <section className="py-16 bg-gradient-to-b from-base to-secondary/20 dark:from-ink dark:to-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl lg:text-4xl font-semibold mb-4 text-ink dark:text-base"
          >
            Core strengths I bring
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Skills that bridge user insight, business impact, and technical execution.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={skill.category}
                variants={itemVariants}
                className="group relative p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer project-card-hover"
              >
                {/* Subtle 1-tone accent background */}
                <div className="absolute inset-0 rounded-2xl bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon */}
                <div className="relative z-10 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-accent/80" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold mb-2 text-ink dark:text-base group-hover:text-accent transition-colors duration-300">
                    {skill.category}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[hsl(var(--accent))]/20 rounded-2xl transition-all duration-500" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}