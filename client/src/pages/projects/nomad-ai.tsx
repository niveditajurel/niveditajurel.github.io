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
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
  { date: "May '24", label: "Kick‑off & Broker Interviews", icon: "🚀" },
  { date: "Jun '24", label: "GTM Brief & Pricing PRD", icon: "📋" },
  { date: "Jul '24", label: "8 broker interviews completed", icon: "💬" },
  { date: "Aug '24", label: "MVP valuation engine", icon: "⚙️" },
  { date: "Nov '24", label: "608 users", icon: "📈" },
];
const Timeline = () => (
  <TooltipProvider>
    <div className="relative">
      <div className="absolute top-6 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full opacity-40" />
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
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 border-4 border-white dark:border-gray-900 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 flex items-center justify-center text-white text-lg font-bold"
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
          <strong className="text-blue-600 dark:text-blue-400">AI‑driven valuations in minutes</strong> for small‑business owners facing a $10 T succession wave (target market: 12 M+ SMB owners).
        </p>
        <div className="grid gap-3">
          <div className="flex items-start gap-3 p-4 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800">
            <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
            <div className="text-gray-800 dark:text-gray-200">
              <strong className="text-blue-700 dark:text-blue-300">Role:</strong> Product Manager for a 4‑person engineering founding team
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-xl bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800">
            <div className="w-2 h-2 rounded-full bg-green-600 mt-2 flex-shrink-0" />
            <div className="text-gray-800 dark:text-gray-200">
              <strong className="text-green-700 dark:text-green-300">Highlight:</strong> Contributed to <span className="font-bold text-green-600 dark:text-green-400">+865 % user growth</span> (63 → 608) between Jul – Nov 2024
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800">
            <div className="w-2 h-2 rounded-full bg-purple-600 mt-2 flex-shrink-0" />
            <div className="text-gray-800 dark:text-gray-200">
              <strong className="text-purple-700 dark:text-purple-300">Mission:</strong> Turn $5 k manual broker reports into a self‑serve SaaS checkout
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
          SMB owners need quick, credible valuations; existing options are expensive, slow, and buyer‑oriented.
        </p>
        <div className="grid gap-3">
          <div className="flex items-start gap-3 p-4 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800">
            <div className="w-2 h-2 rounded-full bg-red-600 mt-2 flex-shrink-0" />
            <div className="text-gray-800 dark:text-gray-200">
              <strong className="text-red-700 dark:text-red-300">Pain Point:</strong> Manual broker reports cost $5k+ and take weeks
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-xl bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800">
            <div className="w-2 h-2 rounded-full bg-orange-600 mt-2 flex-shrink-0" />
            <div className="text-gray-800 dark:text-gray-200">
              <strong className="text-orange-700 dark:text-orange-300">Market Gap:</strong> No self-serve solution for quick valuations
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
              <strong className="text-blue-700 dark:text-blue-300">Research:</strong> Broker interviews (May), GTM brief & Pricing PRD (May–June)
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-xl bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800">
            <div className="w-2 h-2 rounded-full bg-green-600 mt-2 flex-shrink-0" />
            <div className="text-gray-800 dark:text-gray-200">
              <strong className="text-green-700 dark:text-green-300">Strategy:</strong> Authored 4‑tier pricing PRD + ROI model (benefit‑cost ratio ≈ 13:1)
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800">
            <div className="w-2 h-2 rounded-full bg-purple-600 mt-2 flex-shrink-0" />
            <div className="text-gray-800 dark:text-gray-200">
              <strong className="text-purple-700 dark:text-purple-300">Analytics:</strong> Implemented AARRR funnels & OMTM via Vercel
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-xl bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800">
            <div className="w-2 h-2 rounded-full bg-orange-600 mt-2 flex-shrink-0" />
            <div className="text-gray-800 dark:text-gray-200">
              <strong className="text-orange-700 dark:text-orange-300">Data:</strong> Automated ETL from Xero/QuickBooks with Mage AI (&lt;2 h latency)
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800">
            <div className="w-2 h-2 rounded-full bg-indigo-600 mt-2 flex-shrink-0" />
            <div className="text-gray-800 dark:text-gray-200">
              <strong className="text-indigo-700 dark:text-indigo-300">Execution:</strong> Jira roadmap shaved 32 % off time‑to‑market
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-xl bg-pink-50 dark:bg-pink-950/30 border border-pink-200 dark:border-pink-800">
            <div className="w-2 h-2 rounded-full bg-pink-600 mt-2 flex-shrink-0" />
            <div className="text-gray-800 dark:text-gray-200">
              <strong className="text-pink-700 dark:text-pink-300">Wireframes:</strong> Produced detailed wireframes for MVP flows and ROI call‑outs
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
          During my time (May-July 2024), I established tracking for key metrics that would later show significant growth:
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-[320px] w-full text-sm border-separate border-spacing-y-2">
            <thead>
              <tr>
                <th className="text-left font-semibold px-3 py-2 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 rounded-l-lg">KPI</th>
                <th className="text-left font-semibold px-3 py-2 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800">When I Left (Jul '24)</th>
                <th className="text-left font-semibold px-3 py-2 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800">Later Growth (Nov '24)</th>
                <th className="text-left font-semibold px-3 py-2 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 rounded-r-lg">Impact</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gradient-to-r from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30 rounded-lg">
                <td className="px-3 py-3 font-semibold rounded-l-lg text-green-800 dark:text-green-300">Users</td>
                <td className="px-3 py-3 text-gray-800 dark:text-gray-200">63</td>
                <td className="px-3 py-3 text-gray-800 dark:text-gray-200">608</td>
                <td className="px-3 py-3 font-bold text-green-600 dark:text-green-400 rounded-r-lg">+865 %</td>
              </tr>
              <tr className="bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 rounded-lg">
                <td className="px-3 py-3 font-semibold rounded-l-lg text-blue-800 dark:text-blue-300">Conversion Model</td>
                <td className="px-3 py-3 text-gray-800 dark:text-gray-200">8 % baseline</td>
                <td className="px-3 py-3 text-gray-800 dark:text-gray-200">–</td>
                <td className="px-3 py-3 text-blue-600 dark:text-blue-400 rounded-r-lg">Test Jan '25</td>
              </tr>
              <tr className="bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 rounded-lg">
                <td className="px-3 py-3 font-semibold rounded-l-lg text-purple-800 dark:text-purple-300">MRR</td>
                <td className="px-3 py-3 text-gray-800 dark:text-gray-200">$0 (free tier)</td>
                <td className="px-3 py-3 text-gray-800 dark:text-gray-200">–</td>
                <td className="px-3 py-3 text-purple-600 dark:text-purple-400 rounded-r-lg">Tiers go live Q1 '25</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <strong className="text-blue-600 dark:text-blue-400">Note:</strong> While I left in July 2024, the foundation I built (pricing strategy, analytics setup, user research) contributed to the significant growth that followed.
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
        className="fixed bottom-6 right-6 z-50 rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl transition-all duration-300"
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
export default function NomadAiCaseStudy() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white px-6 md:px-16 py-8 font-serif">
        <div className="flex justify-end mb-6">
          <ThemeToggleButton />
        </div>

        {/* Enhanced Hero / Snapshot */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: 'easeOut' }} 
          className="w-full rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-2xl mb-16 p-8 md:p-16 flex flex-col items-center gap-8"
        >

          
          <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-4 text-gray-900 dark:text-white leading-relaxed pb-2 font-serif">
            Nomad AI – AI‑powered SMB Valuation & Exit‑Planning Platform
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-4 font-serif">
            <em>Product Manager</em>
          </p>
          <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-semibold text-center mb-6 max-w-4xl leading-relaxed font-serif">
            AI‑driven valuations in minutes for small‑business owners facing a $10 T succession wave (target market: 12 M+ SMB owners).
          </p>
          <motion.div 
            className="w-full flex justify-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img
              src="/nomad-ai-dashboard.png"
              alt="Nomad AI valuation dashboard showing business performance tracking, revenue change scores, and transaction management interface"
              width={900}
              height={400}
              className="rounded-2xl shadow-2xl object-cover hover:shadow-3xl transition-all duration-500"
              loading="lazy"
            />
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
            className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
          >
            Key Wins at a Glance
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard value="+865 %" label="Registered‑user growth" note="Jul–Nov 2024" icon={<TrendingUp className="w-5 h-5" />} />
            <MetricCard value="42 %" label="Projected lift in free‑→‑paid conversion" note="From pricing elasticity survey" icon={<Target className="w-5 h-5" />} />
            <MetricCard value="28 %" label="Projected MRR uplift" note="Tiered + usage‑based blend" icon={<TrendingUp className="w-5 h-5" />} />
            <MetricCard value="32 %" label="Faster ship cycles" note="After roadmap rescope & 2‑week sprints" icon={<Clock className="w-5 h-5" />} />
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
            className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
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
            className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
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
                    className="flex items-center justify-between p-6 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 text-left"
                  >
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">{title}</span>
                  </AccordionTrigger>
                  <AccordionContent className="p-6 bg-gray-50 dark:bg-gray-800 rounded-b-lg border-x border-b border-gray-200 dark:border-gray-700">
                    {content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.section>

        {/* Enhanced Artifacts */}
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
            className="text-center p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-xl"
          >
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Artifacts (gated)
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              Pricing PRD • GTM brief • Wireframes
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              <em>Request access for confidential docs.</em>
            </p>
          </motion.div>
        </motion.section>

        <BackToTopButton />
      </div>
    </ThemeProvider>
  );
} 