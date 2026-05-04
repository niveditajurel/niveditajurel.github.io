import { Hero } from "@/components/sections/Hero";
import { TheLab } from "@/components/sections/TheLab";
import { JourneyPreview } from "@/components/sections/JourneyPreview";
import { BackgroundComponents } from "@/components/ui/background-components";
import { siteConfig } from "@/data/site";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
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
      <TheLab />
      <JourneyPreview />
    </BackgroundComponents>
  );
}
