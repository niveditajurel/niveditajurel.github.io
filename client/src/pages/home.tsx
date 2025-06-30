import { Hero } from "@/components/Hero";
import { TechSkills } from "@/components/TechSkills";
import { DaniStyleWork } from "@/components/DaniStyleWork";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Daniella-style Work Section */}
      <DaniStyleWork />

      {/* Skills Section */}
      <TechSkills />
    </div>
  );
}