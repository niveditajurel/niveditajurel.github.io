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
    color: "from-blue-500 to-purple-600"
  },
  {
    category: "Data Analysis",
    icon: BarChart3,
    description: "Metrics, A/B testing, and user behavior insights",
    color: "from-green-500 to-teal-600"
  },
  {
    category: "User Research",
    icon: Users,
    description: "Interviews, surveys, and usability testing",
    color: "from-orange-500 to-red-600"
  },
  {
    category: "Growth Hacking",
    icon: TrendingUp,
    description: "Acquisition, retention, and conversion optimization",
    color: "from-purple-500 to-pink-600"
  },
  {
    category: "Technical Skills",
    icon: Zap,
    description: "SQL, analytics tools, and product management platforms",
    color: "from-yellow-500 to-orange-600"
  },
  {
    category: "Stakeholder Management",
    icon: Shield,
    description: "Cross-functional collaboration and communication",
    color: "from-indigo-500 to-blue-600"
  },
  {
    category: "Innovation",
    icon: Lightbulb,
    description: "Creative problem-solving and feature ideation",
    color: "from-pink-500 to-rose-600"
  },
  {
    category: "Agile & Scrum",
    icon: GitBranch,
    description: "Sprint planning, retrospectives, and team leadership",
    color: "from-emerald-500 to-green-600"
  }
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
    <section className="py-24 bg-gradient-to-b from-base to-secondary/20 dark:from-ink dark:to-secondary/10">
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
            I've got your back with…
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Digital aesthetics that engage and emotionally connect with your users
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
        >
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={skill.category}
                variants={itemVariants}
                className="group relative p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer project-card-hover"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className="relative z-10 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
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