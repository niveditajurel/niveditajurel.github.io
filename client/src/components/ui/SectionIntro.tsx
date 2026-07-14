import { PixelIcon, type PixelIconName } from "@/components/ui/PixelIcon";
import { PixelArt, type PixelArtName } from "@/components/ui/PixelArt";
import { cn } from "@/lib/utils";

const chapterSprites: Partial<Record<PixelIconName, PixelArtName>> = {
  case: "briefcase",
  flask: "code",
  chip: "gear",
  pen: "globe",
};

export type SectionIntroProps = {
  number: string;
  label: string;
  title: string;
  description?: string;
  icon: PixelIconName;
  compact?: boolean;
  headingStyle?: "statement" | "editorial";
};

export function SectionIntro({
  number,
  label,
  title,
  description,
  icon,
  compact = false,
  headingStyle = "statement",
}: SectionIntroProps) {
  const chapterSprite = chapterSprites[icon];

  return (
    <div
      className={cn(
        "relative mb-7 grid gap-4 lg:mb-9 lg:grid-cols-[minmax(0,0.88fr)_minmax(20rem,1fr)] lg:items-end",
        compact && "mb-5 gap-2 sm:grid-cols-[minmax(0,0.9fr)_minmax(18rem,1fr)] lg:mb-6",
      )}
    >
      {chapterSprite ? (
        <PixelArt
          name={chapterSprite}
          size={compact ? 38 : 52}
          className="absolute right-0 top-0 hidden lg:inline-grid"
        />
      ) : null}
      <div>
        <p className="mistral-section-label">
          <PixelIcon name={icon} size={12} color="var(--bp-cobalt)" />
          <span className="text-[var(--bp-cobalt)]">{number}</span>
          <span aria-hidden="true">/</span>
          <span>{label}</span>
        </p>
        <h2
          className={cn(
            "mt-3 max-w-[18ch] text-[clamp(2rem,4vw,3rem)] leading-[0.98] tracking-[-0.035em] text-[var(--bp-ink)]",
            headingStyle === "editorial" ? "font-fraunces font-normal" : "font-statement font-semibold",
            compact && "mt-2 text-[clamp(1.55rem,3vw,2rem)]",
          )}
        >
          {title}
        </h2>
      </div>
      {description ? (
        <p
          className={cn(
            "max-w-[42rem] text-[0.98rem] leading-7 text-[var(--bp-ink-muted)] lg:justify-self-end lg:pr-16 lg:text-right",
            compact && "text-[0.84rem] leading-6 lg:pr-12",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
