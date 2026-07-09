import { motion } from 'framer-motion';

// Organic floating shapes inspired by hellodani.co
export const FloatingShapes = () => (
  <>
    {/* Large organic shape - top right */}
    <motion.div
      className="absolute -top-20 -right-20 w-96 h-96 opacity-20 pointer-events-none"
      animate={{
        rotate: [0, 360],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <path
          d="M40,100 Q60,20 100,40 Q180,60 160,100 Q140,180 100,160 Q20,140 40,100"
          fill="url(#organic1)"
        />
        <defs>
          <radialGradient id="organic1">
            <stop offset="0%" stopColor="#5B8DEF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#F89676" stopOpacity="0.1" />
          </radialGradient>
        </defs>
      </svg>
    </motion.div>

    {/* Medium organic shape - bottom left */}
    <motion.div
      className="absolute -bottom-32 -left-32 w-80 h-80 opacity-15 pointer-events-none"
      animate={{
        rotate: [360, 0],
        scale: [1, 0.9, 1],
      }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <path
          d="M50,100 Q70,30 100,50 Q170,70 150,100 Q130,170 100,150 Q30,130 50,100"
          fill="url(#organic2)"
        />
        <defs>
          <radialGradient id="organic2">
            <stop offset="0%" stopColor="#4ADE80" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#5B8DEF" stopOpacity="0.1" />
          </radialGradient>
        </defs>
      </svg>
    </motion.div>

    {/* Small floating circles */}
    <motion.div
      className="absolute top-1/4 right-1/4 w-16 h-16 bg-accent/20 rounded-full opacity-60 pointer-events-none"
      animate={{
        y: [0, -20, 0],
        x: [0, 10, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    
    <motion.div
      className="absolute bottom-1/4 left-1/3 w-12 h-12 bg-flair/25 rounded-full opacity-50 pointer-events-none"
      animate={{
        y: [0, 15, 0],
        x: [0, -8, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2
      }}
    />
  </>
);

// Tech-themed floating icons
export const FloatingTechIcons = () => (
  <>
    <motion.div
      className="absolute top-1/3 right-1/5 opacity-20 pointer-events-none"
      animate={{
        y: [0, -15, 0],
        rotate: [0, 5, 0],
      }}
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L13.09 8.26L19 7L14.74 12L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12L5 7L10.91 8.26L12 2Z"/>
      </svg>
    </motion.div>

    <motion.div
      className="absolute bottom-1/3 left-1/5 opacity-15 pointer-events-none"
      animate={{
        y: [0, 12, 0],
        rotate: [0, -3, 0],
      }}
      transition={{
        duration: 9,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }}
    >
      <svg className="w-6 h-6 text-flair" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8-1.41-1.42z"/>
      </svg>
    </motion.div>
  </>
);