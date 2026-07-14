import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import {
  RecentExperienceCard,
  recentExperienceEntries,
} from "@/components/RecentExperienceCard";
import { SectionIntro } from "@/components/ui/SectionIntro";

export const FeaturedWork = () => {
  return (
    <section id="featured-work" className="mistral-section pt-10 lg:pt-14">
      <div className="mistral-section-shell !border-t-0 !pt-0">
        <SectionIntro
          number="01"
          label="Recent experience"
          title="Recent chapters in product."
          description="Three roles that show how I frame systems, make product decisions, and move ambiguous work into delivery."
          icon="case"
          headingStyle="editorial"
        />

        <div className="grid gap-5 xl:grid-cols-3">
          {recentExperienceEntries.map((entry, index) => (
            <RecentExperienceCard
              key={entry.project.id}
              entry={entry}
              index={index}
            />
          ))}
        </div>

        <div className="mt-6 flex justify-end">
          <Link href="/projects">
            <span className="mistral-outline-action cursor-pointer">
              View more case studies
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};
