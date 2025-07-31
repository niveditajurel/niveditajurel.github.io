import { Hero } from "@/components/Hero";
import { TechSkills } from "@/components/TechSkills";
import { DaniStyleWork } from "@/components/DaniStyleWork";
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
        <Hero />
      </motion.div>

      {/* Daniella-style Work Section */}
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}>
        <DaniStyleWork />
      </motion.div>

      {/* Skills Section */}
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}>
        <TechSkills />
      </motion.div>
    </div>
  );
}