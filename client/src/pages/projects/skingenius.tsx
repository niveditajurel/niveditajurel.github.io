"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { useTheme, ThemeProvider } from "@/components/ThemeProvider";
import { ArrowUp, TrendingUp, Users, Clock, Target, Sparkles } from "lucide-react";

// --- Enhanced MetricCard with better contrast ---
interface MetricCardProps {
  value: string;
  label: string;
  note?: string;
  icon?: React.ReactNode;
}
const MetricCard = ({ value, label, note, icon }: MetricCardProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group relative overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 min-h-[140px]"
      tabIndex={0}
      aria-label={label}
    >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#4A9A8F]/10 to-[#E85A7A]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        {icon && (
          <div className="mb-3 p-3 rounded-xl bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
            {icon}
          </div>
        )}
        <span className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{value}</span>
        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 text-center leading-tight">{label}</span>
        {note && (
          <span className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center font-medium">{note}</span>
        )}
      </div>
    </motion.div>
  );
};

// --- Enhanced Timeline with better contrast ---
const milestones = [
  { date: "Phase 1", label: "Research & Discovery", icon: "🔍" },
  { date: "Phase 2", label: "Design & Prototyping", icon: "🎨" },
  { date: "Phase 3", label: "Development & Testing", icon: "⚙️" },
  { date: "Phase 4", label: "Launch & Optimization", icon: "🚀" },
  { date: "Phase 5", label: "Scale & Growth", icon: "📈" },
];
const Timeline = () => (
  <TooltipProvider>
    <div className="relative">
                                     <div className="absolute top-6 left-0 right-0 h-1 bg-gray-300 rounded-full opacity-60" />
      <div className="flex items-center justify-between gap-4 overflow-x-auto scrollbar-none snap-x snap-mandatory py-8 px-2">
        {milestones.map((m, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col items-center snap-center min-w-[120px] relative"
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                                     className="w-12 h-12 rounded-full bg-black border-2 border-gray-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-200 flex items-center justify-center text-white text-lg font-bold"
                  tabIndex={0}
                  aria-label={m.label}
                >
                  {m.icon}
                </motion.button>
              </TooltipTrigger>
              <TooltipContent side="top" className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-xl">
                <div className="text-center">
                  <div className="font-semibold text-gray-900 dark:text-white">{m.label}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">{m.date}</div>
                </div>
              </TooltipContent>
            </Tooltip>
            <span className="text-xs text-gray-600 dark:text-gray-400 mt-3 font-semibold">{m.date}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </TooltipProvider>
);

// --- Enhanced Accordion Section with better contrast ---
const accordionData = [
  {
    value: "snapshot",
    title: "📊 Snapshot",
    content: (
      <div className="space-y-4">
        <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
          <strong className="text-blue-600 dark:text-blue-400">AI-powered skincare platform</strong> that provides personalized recommendations and treatment plans based on skin analysis and user preferences.
        </p>
        <div className="grid gap-3">
          <div className="flex items-start gap-3 p-4 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800">
            <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
            <div className="text-gray-800 dark:text-gray-200">
              <strong className="text-blue-700 dark:text-blue-300">Role:</strong> Product Manager for a cross-functional team
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-xl bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800">
            <div className="w-2 h-2 rounded-full bg-green-600 mt-2 flex-shrink-0" />
            <div className="text-gray-800 dark:text-gray-200">
              <strong className="text-green-700 dark:text-green-300">Highlight:</strong> Led development of AI-powered skin analysis and recommendation engine
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-xl bg-[#4A9A8F]/10 border border-[#4A9A8F]/20">
            <div className="w-2 h-2 rounded-full bg-[#4A9A8F] mt-2 flex-shrink-0" />
            <div className="text-gray-800">
              <strong className="text-[#4A9A8F]">Mission:</strong> Democratize personalized skincare through AI and data-driven insights
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    value: "problem",
    title: "🎯 Problem",
    content: (
      <div className="space-y-4">
        <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
          Users struggle to find the right skincare products and routines due to overwhelming choices and lack of personalized guidance.
        </p>
        <div className="grid gap-3">
          <div className="flex items-start gap-3 p-4 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800">
            <div className="w-2 h-2 rounded-full bg-red-600 mt-2 flex-shrink-0" />
            <div className="text-gray-800 dark:text-gray-200">
              <strong className="text-red-700 dark:text-red-300">Pain Point:</strong> Information overload and conflicting advice
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-xl bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800">
            <div className="w-2 h-2 rounded-full bg-orange-600 mt-2 flex-shrink-0" />
            <div className="text-gray-800 dark:text-gray-200">
              <strong className="text-orange-700 dark:text-orange-300">Market Gap:</strong> No comprehensive AI-powered skincare platform
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    value: "actions",
    title: "⚡ Actions",
    content: (
      <div className="space-y-4">
        <div className="grid gap-3">
          <div className="flex items-start gap-3 p-4 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800">
            <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
            <div className="text-gray-800 dark:text-gray-200">
              <strong className="text-blue-700 dark:text-blue-300">Research:</strong> User interviews and market analysis
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-xl bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800">
            <div className="w-2 h-2 rounded-full bg-green-600 mt-2 flex-shrink-0" />
            <div className="text-gray-800 dark:text-gray-200">
              <strong className="text-green-700 dark:text-green-300">Strategy:</strong> AI-powered recommendation engine development
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-xl bg-[#E85A7A]/10 border border-[#E85A7A]/20">
            <div className="w-2 h-2 rounded-full bg-[#E85A7A] mt-2 flex-shrink-0" />
            <div className="text-gray-800">
              <strong className="text-[#E85A7A]">Analytics:</strong> User behavior tracking and A/B testing
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-xl bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800">
            <div className="w-2 h-2 rounded-full bg-orange-600 mt-2 flex-shrink-0" />
            <div className="text-gray-800 dark:text-gray-200">
              <strong className="text-orange-700 dark:text-orange-300">Data:</strong> Skin analysis and product recommendation algorithms
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-xl bg-[#4A9A8F]/10 border border-[#4A9A8F]/20">
            <div className="w-2 h-2 rounded-full bg-[#4A9A8F] mt-2 flex-shrink-0" />
            <div className="text-gray-800">
              <strong className="text-[#4A9A8F]">Execution:</strong> Agile development with continuous user feedback
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-xl bg-pink-50 dark:bg-pink-950/30 border border-pink-200 dark:border-pink-800">
            <div className="w-2 h-2 rounded-full bg-pink-600 mt-2 flex-shrink-0" />
            <div className="text-gray-800 dark:text-gray-200">
              <strong className="text-pink-700 dark:text-pink-300">Wireframes:</strong> User journey mapping and interface design
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    value: "impact",
    title: "📈 Impact Metrics",
    content: (
      <div className="space-y-4">
        <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
          During the project timeline, we established key metrics to track success and user engagement:
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-[320px] w-full text-sm border-separate border-spacing-y-2">
            <thead>
              <tr>
                <th className="text-left font-semibold px-3 py-2 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 rounded-l-lg">KPI</th>
                <th className="text-left font-semibold px-3 py-2 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800">Baseline</th>
                <th className="text-left font-semibold px-3 py-2 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800">Target</th>
                <th className="text-left font-semibold px-3 py-2 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 rounded-r-lg">Impact</th>
              </tr>
            </thead>
            <tbody>
                             <tr className="bg-gradient-to-r from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30 rounded-lg">
                 <td className="px-3 py-3 font-semibold rounded-l-lg text-green-800 dark:text-green-300">User Engagement</td>
                 <td className="px-3 py-3 text-gray-800 dark:text-gray-200">Session duration tracking</td>
                 <td className="px-3 py-3 text-gray-800 dark:text-gray-200">Feature adoption rates</td>
                 <td className="px-3 py-3 font-bold text-green-600 dark:text-green-400 rounded-r-lg">Core focus</td>
               </tr>
               <tr className="bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 rounded-lg">
                 <td className="px-3 py-3 font-semibold rounded-l-lg text-blue-800 dark:text-blue-300">Recommendation Accuracy</td>
                 <td className="px-3 py-3 text-gray-800 dark:text-gray-200">AI model training</td>
                 <td className="px-3 py-3 text-gray-800 dark:text-gray-200">Prediction validation</td>
                 <td className="px-3 py-3 text-blue-600 dark:text-blue-400 rounded-r-lg">Primary KPI</td>
               </tr>
               <tr className="bg-gradient-to-r from-[#4A9A8F]/20 to-[#4A9A8F]/30 rounded-lg">
                 <td className="px-3 py-3 font-semibold rounded-l-lg text-[#4A9A8F]">User Retention</td>
                 <td className="px-3 py-3 text-gray-800">30-day retention</td>
                 <td className="px-3 py-3 text-gray-800">90-day retention</td>
                 <td className="px-3 py-3 text-[#4A9A8F] rounded-r-lg">Growth indicator</td>
               </tr>
            </tbody>
          </table>
        </div>
                 <div className="mt-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
           <p className="text-sm text-gray-700 dark:text-gray-300">
             <strong className="text-blue-600 dark:text-blue-400">Focus:</strong> These metrics were the primary KPIs tracked throughout the project development and launch phases.
           </p>
         </div>
      </div>
    ),
  },
];

// --- Enhanced Back to Top Button ---
const BackToTopButton = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return show ? (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
    >
      <Button
        className="fixed bottom-6 right-6 z-50 rounded-full shadow-lg bg-gradient-to-r from-[#4A9A8F] to-[#E85A7A] text-white hover:shadow-xl transition-all duration-300"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        tabIndex={0}
        size="icon"
      >
        <ArrowUp className="w-5 h-5" />
      </Button>
    </motion.div>
  ) : null;
};

// --- Enhanced Theme Toggle ---
function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="rounded-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-lg hover:shadow-xl transition-all duration-300"
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      tabIndex={0}
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </motion.button>
  );
}

// --- Main Component ---
export default function SkingeniusCaseStudy() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#F8FAFC] text-[#111827] px-6 md:px-16 py-8 font-sans">

        {/* Enhanced Hero / Snapshot */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: 'easeOut' }} 
          className="w-full rounded-3xl bg-white border border-gray-100 shadow-lg mb-16 p-8 md:p-16 flex flex-col items-center gap-8 relative overflow-hidden"
        >
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-4 text-[#111827] leading-relaxed pb-2">
            <a 
              href="https://skingenius.io/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#4A9A8F] transition-colors duration-300"
            >
              Skingenius
            </a> – Personalized Skincare Platform
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-4 font-medium">
            <em>Product Manager</em>
          </p>
          <p className="text-xl md:text-2xl text-gray-700 font-semibold text-center mb-6 max-w-4xl leading-relaxed">
            AI-driven skincare recommendations and personalized treatment plans for users seeking effective, science-backed skincare solutions.
          </p>
          <motion.div 
            className="w-full flex justify-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative group">
              <img
                src="/teasers/skingenius1.jpg"
                alt="Skingenius platform interface showing skin analysis and product recommendations"
                width={900}
                height={400}
                className="rounded-3xl shadow-2xl object-cover group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105 border-2 border-gray-200"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </motion.div>
        </motion.section>



        {/* Enhanced Key Wins */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: 'easeOut' }} 
          className="mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-bold mb-12 text-center text-[#111827]"
          >
            Key Wins at a Glance
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group relative overflow-hidden bg-white border border-gray-100 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 p-8"
            >
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-4 p-4 rounded-2xl bg-[#4A9A8F]/15">
                  <TrendingUp className="w-8 h-8 text-[#4A9A8F]" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-[#111827]">User Engagement</h3>
                <p className="text-gray-800 mb-3 text-sm font-medium">Session duration & feature adoption</p>
                <span className="text-xs text-[#4A9A8F] font-semibold bg-[#4A9A8F]/25 px-3 py-1 rounded-full">Core focus metric</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group relative overflow-hidden bg-white border border-gray-100 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 p-8"
            >
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-4 p-4 rounded-2xl bg-[#E85A7A]/15">
                  <Target className="w-8 h-8 text-[#E85A7A]" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-[#111827]">Recommendation Accuracy</h3>
                <p className="text-gray-800 mb-3 text-sm font-medium">AI prediction success rate</p>
                <span className="text-xs text-[#E85A7A] font-semibold bg-[#E85A7A]/25 px-3 py-1 rounded-full">Primary KPI</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group relative overflow-hidden bg-white border border-gray-100 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 p-8"
            >
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-4 p-4 rounded-2xl bg-[#4A9A8F]/15">
                  <Users className="w-8 h-8 text-[#4A9A8F]" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-[#111827]">User Retention</h3>
                <p className="text-gray-800 mb-3 text-sm font-medium">30-day & 90-day retention</p>
                <span className="text-xs text-[#4A9A8F] font-semibold bg-[#4A9A8F]/25 px-3 py-1 rounded-full">Growth indicator</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group relative overflow-hidden bg-white border border-gray-100 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 p-8"
            >
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-4 p-4 rounded-2xl bg-[#E85A7A]/15">
                  <Clock className="w-8 h-8 text-[#E85A7A]" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-[#111827]">Conversion Rate</h3>
                <p className="text-gray-800 mb-3 text-sm font-medium">Free to paid conversion</p>
                <span className="text-xs text-[#E85A7A] font-semibold bg-[#E85A7A]/25 px-3 py-1 rounded-full">Revenue metric</span>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Enhanced Timeline */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: 'easeOut' }} 
          className="mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl font-bold mb-8 text-center text-[#111827]"
          >
            Product Journey Timeline
          </motion.h2>
          <Timeline />
        </motion.section>

        {/* Enhanced Accordion Deep Dive */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: 'easeOut' }} 
          className="mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl font-bold mb-8 text-center text-[#111827]"
          >
            Deep‑Dive (click to expand)
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            <Accordion type="multiple" defaultValue={["snapshot"]} className="w-full">
              {accordionData.map(({ value, title, content }) => (
                <AccordionItem key={value} value={value} className="mb-4">
                  <AccordionTrigger
                    tabIndex={0}
                    aria-expanded={value === "snapshot"}
                    className="flex items-center justify-between p-6 rounded-lg bg-white border border-gray-100 hover:bg-gray-50 transition-all duration-300 text-left"
                  >
                    <span className="text-lg font-semibold text-[#111827]">{title}</span>
                  </AccordionTrigger>
                  <AccordionContent className="p-6 bg-gray-50 rounded-b-lg border-x border-b border-gray-100">
                    {content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.section>

        {/* Project Documentation */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: 'easeOut' }} 
          className="mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center p-8 rounded-3xl bg-white border border-gray-100 shadow-xl"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#111827]">
              Project Documentation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="p-4 rounded-xl bg-[#4A9A8F]/15 border border-[#4A9A8F]/25">
                <h3 className="font-semibold text-[#4A9A8F] mb-2">Product Requirements</h3>
                <p className="text-sm text-gray-700">Detailed specifications and feature requirements</p>
              </div>
              <div className="p-4 rounded-xl bg-[#E85A7A]/15 border border-[#E85A7A]/25">
                <h3 className="font-semibold text-[#E85A7A] mb-2">User Research</h3>
                <p className="text-sm text-gray-700">Interviews, surveys, and user behavior analysis</p>
              </div>
              <div className="p-4 rounded-xl bg-[#4A9A8F]/15 border border-[#4A9A8F]/25">
                <h3 className="font-semibold text-[#4A9A8F] mb-2">Wireframes</h3>
                <p className="text-sm text-gray-700">User interface designs and interaction flows</p>
              </div>
              <div className="p-4 rounded-xl bg-[#E85A7A]/15 border border-[#E85A7A]/25">
                <h3 className="font-semibold text-[#E85A7A] mb-2">Technical Specifications</h3>
                <p className="text-sm text-gray-700">AI algorithms and system architecture</p>
              </div>
              <div className="p-4 rounded-xl bg-[#4A9A8F]/15 border border-[#4A9A8F]/25">
                <h3 className="font-semibold text-[#4A9A8F] mb-2">Analytics Dashboard</h3>
                <p className="text-sm text-gray-700">User behavior tracking and metrics</p>
              </div>
              <div className="p-4 rounded-xl bg-[#E85A7A]/15 border border-[#E85A7A]/25">
                <h3 className="font-semibold text-[#E85A7A] mb-2">Launch Strategy</h3>
                <p className="text-sm text-gray-700">Go-to-market plan and rollout timeline</p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Platform Evolution - Moved to end for better story flow */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: 'easeOut' }} 
          className="mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl font-bold mb-8 text-center text-[#111827]"
          >
            Platform Evolution
          </motion.h2>
          
          {/* App Screenshots & Wireframes */}
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col lg:flex-row gap-6"
            >
              {/* Left Side - Current App Screenshots */}
              <div className="lg:w-2/3">
                <div className="mb-3">
                  <div className="text-left">
                    <h4 className="font-semibold text-[#111827] mb-1">Current App Screenshots</h4>
                    <p className="text-sm text-gray-600">Latest platform design with enhanced features</p>
                  </div>
                </div>
                <div className="flex flex-row gap-11">
                  <div className="group">
                    <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 max-w-[200px]">
                      <img
                        src="/teasers/skingenius2.jpg"
                        alt="Skingenius platform - Current app screenshot 1"
                        className="w-full object-contain group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h4 className="font-semibold text-sm">Current App Screenshot</h4>
                        <p className="text-xs text-gray-200">Latest platform design</p>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 max-w-[200px]">
                      <img
                        src="/teasers/skingenius3.jpg"
                        alt="Skingenius platform - Current app screenshot 2"
                        className="w-full object-contain group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h4 className="font-semibold text-sm">Current App Screenshot</h4>
                        <p className="text-xs text-gray-200">Latest platform design</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Landscape Image - Wireframes */}
              <div className="group lg:w-1/3">
                <div className="mb-3 text-center">
                  <h4 className="font-semibold text-[#111827] mb-1">Old Wireframe Dashboard</h4>
                  <p className="text-sm text-gray-600">Early design concept and user journey mapping</p>
                </div>
                <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-500">
                  <img
                    src="/teasers/skingenius4.jpg"
                    alt="Skingenius platform - Original wireframes"
                    className="w-full object-contain group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h4 className="font-semibold text-sm">Old Wireframe Dashboard</h4>
                    <p className="text-xs text-gray-200">Early design concept</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <BackToTopButton />
      </div>
    </ThemeProvider>
  );
} 