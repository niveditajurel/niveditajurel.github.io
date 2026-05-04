import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type BackgroundVariant = "soft-yellow-glow" | "concentric-squares" | "clay-notion-paper";

interface BackgroundComponentsProps {
  children?: ReactNode;
  className?: string;
  contentClassName?: string;
  variant?: BackgroundVariant;
}

export function BackgroundComponents({
  children,
  className,
  contentClassName,
  variant = "soft-yellow-glow",
}: BackgroundComponentsProps) {
  return (
    <div className={cn("relative min-h-screen w-full bg-[#fcfcfa] text-gray-800", className)}>
      {variant === "soft-yellow-glow" ? (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "radial-gradient(circle at center, #FFF991 0%, transparent 70%)",
            opacity: 0.42,
            mixBlendMode: "multiply",
          }}
        />
      ) : variant === "concentric-squares" ? (
        <>
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              backgroundImage: `
                radial-gradient(circle at 18% 10%, rgba(255, 244, 166, 0.22) 0%, transparent 30%),
                radial-gradient(circle at 78% 16%, rgba(255, 233, 168, 0.16) 0%, transparent 24%),
                radial-gradient(circle at 52% 44%, rgba(255, 255, 255, 0.72) 0%, transparent 52%)
              `,
            }}
          />
          <div
            className="absolute inset-0 z-0 pointer-events-none opacity-60"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(148, 163, 184, 0.045) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(148, 163, 184, 0.045) 1px, transparent 1px),
                linear-gradient(to right, rgba(148, 163, 184, 0.02) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(148, 163, 184, 0.02) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px, 40px 40px, 120px 120px, 120px 120px",
              backgroundPosition: "center center, center center, center center, center center",
            }}
          />
        </>
      ) : (
        <>
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              backgroundImage: `
                radial-gradient(circle at 14% 10%, rgba(255, 225, 168, 0.42) 0%, transparent 28%),
                radial-gradient(circle at 82% 14%, rgba(202, 230, 196, 0.28) 0%, transparent 24%),
                radial-gradient(circle at 55% 32%, rgba(255, 255, 255, 0.8) 0%, transparent 44%),
                linear-gradient(180deg, rgba(255,250,241,0.94) 0%, rgba(251,247,239,0.88) 46%, rgba(248,243,235,0.94) 100%)
              `,
            }}
          />
          <div
            className="absolute inset-0 z-0 pointer-events-none opacity-45"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(168, 162, 158, 0.045) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(168, 162, 158, 0.045) 1px, transparent 1px)
              `,
              backgroundSize: "72px 72px, 72px 72px",
            }}
          />
        </>
      )}

      <div className={cn("relative z-10", contentClassName)}>{children}</div>
    </div>
  );
}

export default BackgroundComponents;
