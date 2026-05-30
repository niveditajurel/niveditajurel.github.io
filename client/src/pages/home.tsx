import { Hero } from "@/components/sections/Hero";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { BuildExperimentsPreview } from "@/components/sections/BuildExperimentsPreview";
import { ToolkitPreview } from "@/components/sections/ToolkitPreview";
import { ContentPreview } from "@/components/sections/ContentPreview";
import { JourneyPreview } from "@/components/sections/JourneyPreview";
import { BackgroundComponents } from "@/components/ui/background-components";
import { siteConfig } from "@/data/site";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    const targetId = window.sessionStorage.getItem("homeSectionTarget");
    if (!targetId) {
      return;
    }

    const timer = window.setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
      window.sessionStorage.removeItem("homeSectionTarget");
    }, 80);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!siteConfig.experiments.clayNotionLanding) {
      delete document.body.dataset.designMode;
      return;
    }

    document.body.dataset.designMode = "clay-notion";

    return () => {
      delete document.body.dataset.designMode;
    };
  }, []);

  return (
    <BackgroundComponents
      variant={siteConfig.experiments.clayNotionLanding ? "clay-notion-paper" : "concentric-squares"}
      className="min-h-screen bg-background"
      contentClassName="relative"
    >
      <Hero />
      <FeaturedWork />
      <BuildExperimentsPreview />
      <ToolkitPreview />
      <ContentPreview />
      <JourneyPreview />
    </BackgroundComponents>
  );
}
