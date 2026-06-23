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
    <div className={cn("relative min-h-screen w-full overflow-hidden bg-background text-foreground", className)}>
      {variant === "soft-yellow-glow" ? (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(246,239,227,0.98), rgba(240,244,237,0.92) 48%, rgba(248,241,231,0.96))",
          }}
        />
      ) : variant === "concentric-squares" ? (
        <>
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, rgba(248,241,231,0.96), rgba(237,244,239,0.88) 48%, rgba(250,246,237,0.98))",
            }}
          />
          <div
            className="absolute inset-0 z-0 pointer-events-none opacity-50"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(43, 35, 25, 0.045) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(43, 35, 25, 0.045) 1px, transparent 1px),
                linear-gradient(to right, rgba(36, 55, 44, 0.035) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(36, 55, 44, 0.035) 1px, transparent 1px)
              `,
              backgroundSize: "48px 48px, 48px 48px, 192px 192px, 192px 192px",
              backgroundPosition: "center center, center center, center center, center center",
            }}
          />
          <div
            className="absolute inset-0 z-0 pointer-events-none opacity-[0.18]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(115deg, rgba(34,25,20,0.08) 0, rgba(34,25,20,0.08) 1px, transparent 1px, transparent 7px)",
              mixBlendMode: "multiply",
            }}
          />
        </>
      ) : (
        <>
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(130deg, rgba(248,241,231,0.98) 0%, rgba(242,238,226,0.96) 36%, rgba(231,237,229,0.9) 72%, rgba(250,246,237,0.98) 100%)",
            }}
          />
          <div
            className="absolute inset-0 z-0 pointer-events-none opacity-50"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(43, 35, 25, 0.04) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(43, 35, 25, 0.04) 1px, transparent 1px)
              `,
              backgroundSize: "64px 64px, 64px 64px",
            }}
          />
          <div
            className="absolute inset-0 z-0 pointer-events-none opacity-[0.16]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(110deg, rgba(34,25,20,0.08) 0, rgba(34,25,20,0.08) 1px, transparent 1px, transparent 8px)",
              mixBlendMode: "multiply",
            }}
          />
        </>
      )}

      <div className={cn("relative z-10", contentClassName)}>{children}</div>
    </div>
  );
}

export default BackgroundComponents;
