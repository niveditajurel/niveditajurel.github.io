import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight, Sparkles, Heart, Target, Zap, Users, Coffee, Code, Lightbulb, Rocket, Palette, Gamepad2, Users2, Monitor, Brain, Palette as PaintBrush, Users as Community } from "lucide-react";
import { useRef } from "react";

// Illustration Components
const HeroIllustration = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, delay: 0.5 }}
    className="relative w-64 h-64 mx-auto mb-8"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-flair/20 rounded-full blur-3xl"></div>
    <div className="relative bg-card/50 backdrop-blur-sm rounded-full p-8 border border-border/50">
      <motion.div
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="flex items-center justify-center h-full"
      >
        <div className="relative">
          <Monitor className="w-16 h-16 text-accent mb-4" />
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-2 -right-2 w-6 h-6 bg-flair rounded-full flex items-center justify-center"
          >
            <Brain className="w-3 h-3 text-white" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  </motion.div>
);

const TimelineIllustration = ({ step, index }: { step: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: step.delay + 0.2 }}
    className="relative w-32 h-32"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-flair/10 rounded-2xl blur-2xl"></div>
    <motion.div
      whileHover={{ scale: 1.1, rotate: 5 }}
      className="relative bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 h-full flex items-center justify-center"
    >
      <motion.div
        animate={{ 
          y: [0, -5, 0],
          rotate: [0, 2, -2, 0]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          delay: index * 0.5,
          ease: "easeInOut" 
        }}
      >
        <step.icon className={`w-8 h-8 ${step.color}`} />
      </motion.div>
    </motion.div>
  </motion.div>
);

const ValueIllustration = ({ value, index }: { value: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
    className="relative w-24 h-24 mb-6"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-flair/10 rounded-xl blur-xl"></div>
    <motion.div
      whileHover={{ scale: 1.15, rotate: 10 }}
      className="relative bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border/50 h-full flex items-center justify-center"
    >
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          delay: index * 0.3,
          ease: "easeInOut" 
        }}
      >
        <value.icon className={`w-6 h-6 ${value.color}`} />
      </motion.div>
    </motion.div>
  </motion.div>
);

const InterestIllustration = ({ interest, index }: { interest: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
    className="relative w-20 h-20 mx-auto mb-4"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-flair/10 rounded-full blur-lg"></div>
    <motion.div
      whileHover={{ scale: 1.2, rotate: 15 }}
      className="relative bg-card/50 backdrop-blur-sm rounded-full p-4 border border-border/50 h-full flex items-center justify-center"
    >
      <motion.div
        animate={{ 
          y: [0, -3, 0],
          rotate: [0, 3, -3, 0]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          delay: index * 0.5,
          ease: "easeInOut" 
        }}
      >
        <interest.icon className={`w-5 h-5 ${interest.color}`} />
      </motion.div>
    </motion.div>
  </motion.div>
);

const QuoteIllustration = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    className="relative w-32 h-32 mx-auto mb-8"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-flair/20 rounded-full blur-3xl"></div>
    <motion.div
      animate={{ 
        rotate: [0, 360],
        scale: [1, 1.1, 1]
      }}
      transition={{ 
        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
        scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
      }}
      className="relative bg-card/50 backdrop-blur-sm rounded-full p-6 border border-border/50 h-full flex items-center justify-center"
    >
      <Sparkles className="w-8 h-8 text-accent" />
    </motion.div>
  </motion.div>
);

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroRef = useScrollAnimation();
  const journeyRef = useScrollAnimation();
  const drivesRef = useScrollAnimation();
  const outsideRef = useScrollAnimation();
  const inspirationRef = useScrollAnimation();
  const ctaRef = useScrollAnimation();

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const storySteps = [
    {
      icon: Code,
      title: "The Code Writer",
      description: "Started as a developer, writing lines of code that made machines dance.",
      color: "text-blue-500",
      delay: 0.1
    },
    {
      icon: Lightbulb,
      title: "The Aha Moment",
      description: "Hackathon weekend changed everything. Building for real people, not just functionality.",
      color: "text-yellow-500",
      delay: 0.2
    },
    {
      icon: Heart,
      title: "The Empathy Switch",
      description: "Heard 'this would actually help me' and realized tech's true purpose.",
      color: "text-red-500",
      delay: 0.3
    },
    {
      icon: Rocket,
      title: "The Product Journey",
      description: "Now shipping products that users choose and stakeholders trust.",
      color: "text-green-500",
      delay: 0.4
    }
  ];

const values = [
  {
    icon: Heart,
      title: "User-First",
      description: "Every roadmap starts with listening, not features.",
    color: "text-red-500",
      metaphor: "Like a detective, I listen for clues in user feedback"
  },
  {
    icon: Target,
      title: "Human-Centred Simplicity",
      description: "Turn complexity into clarity people enjoy.",
    color: "text-blue-500",
      metaphor: "Like a translator, I make complex things feel simple"
    },
    {
      icon: Zap,
      title: "Resource-Aware Experimentation",
      description: "Bias for action while respecting constraints.",
    color: "text-yellow-500",
      metaphor: "Like a chef, I work with what I have to create something amazing"
  },
  {
    icon: Users,
      title: "Curiosity for Emerging Tech",
      description: "I explore AI tools daily and adopt only what serves users.",
    color: "text-green-500",
      metaphor: "Like a scientist, I experiment but only use what works"
    }
  ];

  const interests = [
    {
      icon: PaintBrush,
      title: "Weekend Painter",
      description: "Sketch-note experimenter who believes creativity fuels product thinking",
      color: "text-purple-500"
    },
    {
      icon: Gamepad2,
      title: "Amateur Chess Learner",
      description: "Strategy keeps my product brain sharp and teaches patience",
      color: "text-indigo-500"
    },
    {
      icon: Community,
      title: "Community Builder",
      description: "Co-organised hackathons and startup-weekend events",
      color: "text-pink-500"
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen pt-16 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-background via-accent/5 to-flair/5"
        style={{ y: backgroundY }}
      />
      
      <motion.main 
        className="relative px-6 lg:px-0 container mx-auto py-24 space-y-40 text-ink dark:text-base"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Hero - Personal Introduction */}
        <motion.section 
            ref={heroRef.ref}
            className={`max-w-5xl mx-auto text-center ${heroRef.isVisible ? "visible" : ""}`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
            className="mb-12"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 mx-auto mb-8 bg-gradient-to-r from-accent to-flair rounded-full flex items-center justify-center"
            >
              <Sparkles className="w-8 h-8 text-white" />
            </motion.div>
            
            <h1 className="text-6xl lg:text-8xl font-bold mb-8">
              <span className="bg-gradient-to-r from-ink via-accent to-flair bg-clip-text text-transparent dark:from-base">
                Hey, I'm Nivedita
              </span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroRef.isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-2xl lg:text-3xl leading-relaxed mb-8">
              I used to write code that made machines happy. 
              <br />
              Now I write stories that make <span className="font-bold text-accent">people's lives better</span>.
            </p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroRef.isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 inline-block"
            >
              <p className="text-lg text-muted-foreground">
                <Coffee className="inline w-5 h-5 mr-2 text-accent" />
                Product Manager by day, creative problem-solver by night
              </p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Story Journey - Visual Timeline */}
        <motion.section 
          ref={journeyRef.ref}
          className={`max-w-6xl mx-auto ${journeyRef.isVisible ? "visible" : ""}`}
        >
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold mb-16 text-center text-gradient"
            initial={{ opacity: 0, y: 30 }}
            animate={journeyRef.isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            How I Became a Storyteller
          </motion.h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-flair to-accent transform -translate-x-1/2 rounded-full"></div>
            
            <div className="space-y-20">
              {storySteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={journeyRef.isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: step.delay }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10 w-12 h-12 bg-accent rounded-full border-4 border-background shadow-lg flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Content Card */}
                  <motion.div
                    className={`flex-1 ${index % 2 === 0 ? 'ml-8' : 'mr-8'}`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:shadow-2xl transition-all duration-500 group">
                      <div className="flex items-start gap-6">
                        <TimelineIllustration step={step} index={index} />
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                            {step.title}
                          </h3>
                          <p className="text-lg text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                            {step.description}
              </p>
            </div>
          </div>
        </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* What Drives Me - Interactive Metaphors */}
        <motion.section 
          ref={drivesRef.ref}
          className={`${drivesRef.isVisible ? "visible" : ""}`}
        >
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold mb-16 text-center text-gradient"
            initial={{ opacity: 0, y: 30 }}
            animate={drivesRef.isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            My Product Philosophy
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={drivesRef.isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group relative overflow-hidden rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 p-6 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-flair/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <ValueIllustration value={value} index={index} />
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors duration-300">
                        {value.title}
                      </h3>
                  <p className="text-lg text-muted-foreground mb-4 group-hover:text-foreground transition-colors duration-300">
                        {value.description}
                      </p>
                  <p className="text-sm text-accent font-medium italic">
                    {value.metaphor}
                      </p>
                    </div>
                

              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Outside the Backlog - Personal Interests */}
        <motion.section 
          ref={outsideRef.ref}
          className={`max-w-5xl mx-auto ${outsideRef.isVisible ? "visible" : ""}`}
        >
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold mb-16 text-center text-gradient"
            initial={{ opacity: 0, y: 30 }}
            animate={outsideRef.isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            When I'm Not Building Products
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={outsideRef.isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-card/30 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-border/50"
          >
            <div className="grid md:grid-cols-3 gap-8">
              {interests.map((interest, index) => (
                <motion.div
                key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={outsideRef.isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center group"
                >
                  <InterestIllustration interest={interest} index={index} />
                  <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                    {interest.title}
                </h3>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {interest.description}
                  </p>
                </motion.div>
                  ))}
                </div>
          </motion.div>
        </motion.section>

        {/* Inspiration - Enhanced Quotes */}
        <motion.section 
          ref={inspirationRef.ref}
          className={`relative max-w-5xl mx-auto ${inspirationRef.isVisible ? "visible" : ""}`}
        >
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold mb-16 text-center text-gradient"
            initial={{ opacity: 0, y: 30 }}
            animate={inspirationRef.isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Words That Shape My Thinking
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inspirationRef.isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-flair/10 rounded-3xl blur-3xl"></div>
            <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 lg:p-12">
              <QuoteIllustration />
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={inspirationRef.isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="group hover:bg-muted/30 p-6 rounded-2xl transition-all duration-300"
                >
                  <p className="text-2xl lg:text-3xl italic font-medium text-center">
                    <span className="text-4xl text-accent mr-3">"</span>
                    Escape competition through authenticity.
                    <span className="text-4xl text-accent ml-3">"</span>
                  </p>
                  <p className="text-center text-muted-foreground mt-4 text-lg">— Naval Ravikant</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={inspirationRef.isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="group hover:bg-muted/30 p-6 rounded-2xl transition-all duration-300"
                >
                  <p className="text-2xl lg:text-3xl italic font-medium text-center">
                    <span className="text-4xl text-accent mr-3">"</span>
                    The willingness to fail gives us the freedom to succeed.
                    <span className="text-4xl text-accent ml-3">"</span>
                  </p>
                  <p className="text-center text-muted-foreground mt-4 text-lg">— Charlie Munger</p>
                </motion.div>
              </div>
          </div>
          </motion.div>
        </motion.section>

        {/* CTA - Personal Invitation */}
        <motion.section 
          ref={ctaRef.ref}
          className={`max-w-3xl mx-auto text-center ${ctaRef.isVisible ? "visible" : ""}`}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={ctaRef.isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-flair/5 rounded-3xl blur-3xl"></div>
            <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 lg:p-12">
              <motion.h2 
                className="text-3xl lg:text-4xl font-bold mb-6 text-gradient"
                initial={{ opacity: 0, y: 20 }}
                animate={ctaRef.isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Ready to Build Something Amazing?
              </motion.h2>
              
              <motion.p 
                className="text-xl mb-8 text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={ctaRef.isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                I'm always excited to connect with fellow product enthusiasts and explore new opportunities.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-6 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={ctaRef.isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.a 
                  href="https://drive.google.com/file/d/1RJoTocjJjHskvaqAdWpVu4aGavceRWwi/view" 
                  className="btn-primary group relative overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-accent bg-black text-white hover:bg-neutral-900" 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }} 
                  target="_blank" rel="noopener noreferrer" 
                  aria-label="Download my resume PDF" 
                  tabIndex={0}
                >
                  <span className="relative z-10">Download My Resume</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-flair opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.a>
                
                <motion.a 
                  href="https://linkedin.com/in/nivedita-niv" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-secondary group relative overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-accent bg-black text-white hover:bg-neutral-900" 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }} 
                  aria-label="Connect with me on LinkedIn" 
                  tabIndex={0}
                >
                  <span className="relative z-10">Let's Connect</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-muted to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.a>
              </motion.div>
        </div>
          </motion.div>
        </motion.section>
      </motion.main>
    </div>
  );
};

export default About;