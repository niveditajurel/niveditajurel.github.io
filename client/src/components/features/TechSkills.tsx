import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  BarChart3,
  Users,
  Target,
  Zap,
  Shield,
  GitBranch,
  Brain,
  Code,
  Database
} from 'lucide-react';
import { cn } from '@/lib/utils';

const skills = [
  {
    category: "Product Strategy",
    icon: Target,
    description: "Roadmapping, prioritization, and 0→1 strategic planning.",
    className: "md:col-span-2",
    gradient: "from-blue-500/20 to-purple-500/20"
  },
  {
    category: "User Research",
    icon: Users,
    description: "Deep empathy through interviews & usability testing.",
    className: "md:col-span-1",
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    category: "AI & LLMs",
    icon: Brain,
    description: "Prompt engineering, RAG, and AI product integration.",
    className: "md:col-span-1",
    gradient: "from-orange-500/20 to-red-500/20"
  },
  {
    category: "Technical Fluency",
    icon: Code,
    description: "I speak API, SQL, and System Design.",
    className: "md:col-span-2",
    gradient: "from-cyan-500/20 to-blue-500/20"
  },
  {
    category: "Data Insight",
    icon: BarChart3,
    description: "Metrics, A/B testing, and SQL queries.",
    className: "md:col-span-1",
    gradient: "from-pink-500/20 to-rose-500/20"
  },
  {
    category: "Agile Delivery",
    icon: GitBranch,
    description: "Sprint planning and execution.",
    className: "md:col-span-1",
    gradient: "from-yellow-500/20 to-amber-500/20"
  },
  {
    category: "Stakeholder Alignment",
    icon: Shield,
    description: "Clear comms & decision frameworks.",
    className: "md:col-span-1",
    gradient: "from-indigo-500/20 to-violet-500/20"
  },
];

export function TechSkills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl lg:text-5xl font-display font-bold mb-6 text-foreground"
          >
            My Builder Stack
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-2xl mx-auto font-light"
          >
            A mix of strategic thinking, technical depth, and hands-on execution.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto"
        >
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={skill.category}
                variants={itemVariants}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className={cn(
                  "group relative p-8 rounded-3xl bg-card/80 dark:bg-card/40 backdrop-blur-sm border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between",
                  skill.className
                )}
              >
                {/* Gradient Background on Hover */}
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                  skill.gradient
                )} />

                {/* Content */}
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/50 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-foreground group-hover:text-foreground" />
                  </div>

                  <h3 className="text-2xl font-display font-bold mb-3 text-foreground">
                    {skill.category}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    {skill.description}
                  </p>
                </div>

                {/* Decorative Corner Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-20 transition-opacity duration-300 transform translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0">
                  <IconComponent className="w-24 h-24" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
