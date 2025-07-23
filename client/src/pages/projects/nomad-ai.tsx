"use client";

import { useRef, useState, useEffect } from "react";
// Use standard <img> since not Next.js
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { useTheme, ThemeProvider } from "@/components/ThemeProvider";
import { ArrowUp } from "lucide-react";

// --- MetricCard ---
interface MetricCardProps {
  value: string;
  label: string;
  note?: string;
}
const MetricCard = ({ value, label, note }: MetricCardProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center bg-muted rounded-2xl shadow p-6 min-w-[140px] min-h-[120px]"
      tabIndex={0}
      aria-label={label}
    >
      <span className="text-3xl font-bold text-primary">{value}</span>
      <span className="text-base font-medium text-foreground">{label}</span>
      {note && <span className="text-xs text-muted-foreground mt-1">{note}</span>}
    </motion.div>
  );
};

// --- Timeline ---
const milestones = [
  { date: "May ’24", label: "Kick‑off" },
  { date: "Jun ’24", label: "8 broker interviews" },
  { date: "Jul ’24", label: "Pricing PRD + GTM brief" },
  { date: "Aug ’24", label: "MVP valuation engine" },
  { date: "Nov ’24", label: "608 users" },
];
const Timeline = () => (
  <TooltipProvider>
    <div className="flex items-center gap-0 overflow-x-auto scrollbar-none snap-x snap-mandatory py-6 px-2">
      {milestones.map((m, i) => (
        <div key={i} className="flex flex-col items-center snap-center min-w-[120px] relative">
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                className="w-6 h-6 rounded-full bg-primary border-4 border-background shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
                tabIndex={0}
                aria-label={m.label}
              />
            </TooltipTrigger>
            <TooltipContent side="top">{m.label}</TooltipContent>
          </Tooltip>
          <span className="text-xs text-muted-foreground mt-2">{m.date}</span>
          {i < milestones.length - 1 && (
            <div className="absolute top-3 left-full w-16 h-1 bg-muted rounded-full z-0" />
          )}
        </div>
      ))}
    </div>
  </TooltipProvider>
);

// --- Accordion Section ---
const accordionData = [
  {
    value: "snapshot",
    title: "Snapshot",
    content: (
      <div>
        <p>
          <strong>AI‑driven valuations in minutes</strong> for 12 M+ small‑business owners facing a $10 T succession wave.
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>
            <strong>Role:</strong> Solo PM consultant for a 4‑person engineering founding team
          </li>
          <li>
            <strong>Highlight:</strong> Contributed to <b>+865 % user growth</b> (63 → 608) between Jul – Nov 2024
          </li>
          <li>
            <strong>Mission:</strong> Turn $5 k manual broker reports into a self‑serve SaaS checkout
          </li>
        </ul>
      </div>
    ),
  },
  {
    value: "problem",
    title: "Problem",
    content: (
      <p>
        SMB owners need quick, credible valuations; existing options are expensive, slow, and buyer‑oriented.
      </p>
    ),
  },
  {
    value: "actions",
    title: "Actions",
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>
          <b>Research:</b> JTBD & price‑sensitivity interviews with brokers
        </li>
        <li>
          <b>Strategy:</b> Authored 4‑tier pricing PRD + ROI model (benefit‑cost ratio ≈ 13:1)
        </li>
        <li>
          <b>Analytics:</b> Implemented AARRR funnels & OMTM via Vercel
        </li>
        <li>
          <b>Data:</b> Automated ETL from Xero/QuickBooks with Mage AI (&lt;2 h latency)
        </li>
        <li>
          <b>Execution:</b> Jira roadmap shaved 32 % off time‑to‑market
        </li>
        <li>
          <b>UX:</b> Clickable Figma flows; prioritised ROI call‑outs
        </li>
      </ul>
    ),
  },
  {
    value: "impact",
    title: "Impact Metrics",
    content: (
      <div className="overflow-x-auto">
        <table className="min-w-[320px] w-full text-sm border-separate border-spacing-y-2">
          <thead>
            <tr>
              <th className="text-left font-semibold px-2 py-1">KPI</th>
              <th className="text-left font-semibold px-2 py-1">Jul ’24</th>
              <th className="text-left font-semibold px-2 py-1">Nov ’24</th>
              <th className="text-left font-semibold px-2 py-1">Δ</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-muted rounded-2xl">
              <td className="px-2 py-2 font-medium">Users</td>
              <td className="px-2 py-2">63</td>
              <td className="px-2 py-2">608</td>
              <td className="px-2 py-2 font-bold text-green-600 dark:text-green-400">+865 %</td>
            </tr>
            <tr className="bg-muted rounded-2xl">
              <td className="px-2 py-2 font-medium">Conv. (model)</td>
              <td className="px-2 py-2">8 %</td>
              <td className="px-2 py-2">–</td>
              <td className="px-2 py-2">Test Jan ’25</td>
            </tr>
            <tr className="bg-muted rounded-2xl">
              <td className="px-2 py-2 font-medium">MRR</td>
              <td className="px-2 py-2">$0</td>
              <td className="px-2 py-2">–</td>
              <td className="px-2 py-2">Tiers go live Q1 ’25</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    value: "next",
    title: "Next Steps",
    content: (
      <p>
        Validate live pricing, add Shopify/Stripe connectors, and layer an advisor marketplace for high‑touch upsell.
      </p>
    ),
  },
];

// --- Back to Top Button ---
const BackToTopButton = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return show ? (
    <Button
      className="fixed bottom-6 right-6 z-50 rounded-full shadow-lg"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      tabIndex={0}
      variant="secondary"
      size="icon"
    >
      <ArrowUp className="w-5 h-5" />
    </Button>
  ) : null;
};

// --- Theme Toggle ---
function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      className="rounded-full px-3 py-2 border border-muted bg-background text-foreground shadow hover:bg-muted transition"
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      tabIndex={0}
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}

// --- Main Component ---
export default function NomadAiCaseStudy() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground px-6 md:px-16 py-8">
        <div className="flex justify-end mb-4">
          <ThemeToggleButton />
        </div>

        {/* Hero / Snapshot */}
        <section className="w-full rounded-2xl bg-gradient-to-br from-primary/10 via-background to-primary/5 shadow-xl mb-12 p-8 md:p-16 flex flex-col items-center gap-6">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-2">
            Nomad AI – AI‑powered SMB Valuation & Exit‑Planning Platform
          </h1>
          <p className="text-base text-muted-foreground mb-2">
            <em>(Consultant Product Manager, May – July 2024)</em>
          </p>
          <p className="text-lg md:text-2xl text-primary font-semibold text-center mb-4">
            AI‑driven valuations in minutes for 12 M+ small‑business owners facing a $10 T succession wave.
          </p>
          <Button
            asChild
            className="rounded-xl px-6 py-2 text-base font-semibold shadow-md"
          >
            <a href="mailto:nivedita@example.com" aria-label="Contact Nivedita about Nomad AI">
              Contact Me
            </a>
          </Button>
          <div className="w-full flex justify-center mt-6">
            <img
              src="/placeholders/valuation_dashboard.png"
              alt="Nomad AI valuation dashboard"
              width={900}
              height={400}
              className="rounded-2xl shadow-lg object-cover"
              loading="lazy"
            />
          </div>
        </section>

        {/* Key Wins */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Key Wins at a Glance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <MetricCard value="+865 %" label="Registered‑user growth" note="Jul–Nov 2024" />
            <MetricCard value="42 %" label="Projected lift in free‑→‑paid conversion" note="From pricing elasticity survey" />
            <MetricCard value="28 %" label="Projected MRR uplift" note="Tiered + usage‑based blend" />
            <MetricCard value="32 %" label="Faster ship cycles" note="After roadmap rescope & 2‑week sprints" />
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Product Journey Timeline</h2>
          <Timeline />
        </section>

        {/* Accordion Deep Dive */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Deep‑Dive (click to expand)</h2>
          <Accordion type="multiple" defaultValue={["snapshot"]} className="w-full max-w-2xl mx-auto">
            {accordionData.map(({ value, title, content }) => (
              <AccordionItem key={value} value={value}>
                <AccordionTrigger
                  tabIndex={0}
                  aria-expanded={value === "snapshot"}
                  className="flex items-center justify-between"
                >
                  {title}
                </AccordionTrigger>
                <AccordionContent>{content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Artifacts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-2 text-center">Artifacts (gated)</h2>
          <p className="text-center text-muted-foreground mb-2">
            Pricing PRD • GTM brief • Wireframes
          </p>
          <p className="text-center text-xs text-muted-foreground">
            <em>Request access for confidential docs.</em>
          </p>
        </section>

        <BackToTopButton />
      </div>
    </ThemeProvider>
  );
} 