import {
  type ComponentType,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { ArrowUpRight, Eye, type LucideProps } from "lucide-react";

type HoverCursorKind =
  | "case-study"
  | "overview"
  | "build"
  | "project"
  | "repo"
  | "site";

const CURSOR_COPY: Record<HoverCursorKind, string> = {
  "case-study": "View case study",
  overview: "View overview",
  build: "View build",
  project: "Open project",
  repo: "View repo",
  site: "Visit site",
};

function normalizeCursorKind(value?: string | null): HoverCursorKind {
  switch (value) {
    case "overview":
    case "build":
    case "project":
    case "repo":
    case "site":
      return value;
    case "case-study":
    default:
      return "case-study";
  }
}

function resolveCursorTarget(target: EventTarget | null) {
  if (!(target instanceof Element)) {
    return null;
  }

  const node = target.closest<HTMLElement>("[data-cursor], [data-cursor-label]");

  if (!node) {
    return null;
  }

  const kind = normalizeCursorKind(node.dataset.cursor);
  return {
    kind,
    label: node.dataset.cursorLabel?.trim() || CURSOR_COPY[kind],
  };
}

function HoverCursorIcon({
  kind,
  className,
}: {
  kind: HoverCursorKind;
  className?: string;
}) {
  const Icon: ComponentType<LucideProps> =
    kind === "site" || kind === "repo" ? ArrowUpRight : Eye;

  return <Icon className={className} />;
}

export function HoverCursor() {
  const shouldReduceMotion = !!useReducedMotion();
  const x = useMotionValue(-160);
  const y = useMotionValue(-160);
  const springX = useSpring(x, {
    stiffness: 460,
    damping: 38,
    mass: 0.4,
  });
  const springY = useSpring(y, {
    stiffness: 460,
    damping: 38,
    mass: 0.4,
  });
  const activeSignatureRef = useRef<string | null>(null);
  const measureRef = useRef<HTMLDivElement | null>(null);
  const [supportsFinePointer, setSupportsFinePointer] = useState(false);
  const [cursorState, setCursorState] = useState<{
    active: boolean;
    kind: HoverCursorKind;
    label: string;
  }>({
    active: false,
    kind: "case-study",
    label: CURSOR_COPY["case-study"],
  });
  const [expandedWidth, setExpandedWidth] = useState(196);

  useLayoutEffect(() => {
    if (!measureRef.current) {
      return;
    }

    const nextWidth = Math.ceil(measureRef.current.getBoundingClientRect().width);

    if (nextWidth > 0) {
      setExpandedWidth(nextWidth);
    }
  }, [cursorState.kind, cursorState.label]);

  useEffect(() => {
    if (typeof window === "undefined" || shouldReduceMotion) {
      setSupportsFinePointer(false);
      return;
    }

    const mediaQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );

    const sync = () => {
      setSupportsFinePointer(mediaQuery.matches);
    };

    sync();
    mediaQuery.addEventListener("change", sync);
    return () => mediaQuery.removeEventListener("change", sync);
  }, [shouldReduceMotion]);

  useEffect(() => {
    if (!supportsFinePointer) {
      activeSignatureRef.current = null;
      setCursorState((current) =>
        current.active ? { ...current, active: false } : current,
      );
      return;
    }

    const clearCursor = () => {
      if (activeSignatureRef.current === null) {
        return;
      }

      activeSignatureRef.current = null;
      setCursorState((current) =>
        current.active ? { ...current, active: false } : current,
      );
    };

    const handlePointerMove = (event: PointerEvent) => {
      x.set(event.clientX + 18);
      y.set(event.clientY - 10);

      const target = resolveCursorTarget(event.target);

      if (!target) {
        clearCursor();
        return;
      }

      const signature = `${target.kind}:${target.label}`;

      if (signature === activeSignatureRef.current) {
        return;
      }

      activeSignatureRef.current = signature;
      setCursorState({
        active: true,
        kind: target.kind,
        label: target.label,
      });
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("blur", clearCursor);
    window.addEventListener("scroll", clearCursor, { passive: true });
    document.documentElement.addEventListener("mouseleave", clearCursor);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("blur", clearCursor);
      window.removeEventListener("scroll", clearCursor);
      document.documentElement.removeEventListener("mouseleave", clearCursor);
    };
  }, [supportsFinePointer, x, y]);

  if (!supportsFinePointer) {
    return null;
  }

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[90] hidden items-center md:flex"
        style={{ x: springX, y: springY }}
        animate={{
          opacity: cursorState.active ? 1 : 0,
          scale: cursorState.active ? 1 : 0.92,
        }}
        transition={{
          duration: 0.16,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <motion.div
          className="flex items-center justify-start overflow-hidden border border-[#d77447]/90 bg-[#c86a40] text-[#fff8ef]"
          animate={{
            width: cursorState.active ? expandedWidth : 18,
            height: cursorState.active ? 52 : 18,
            paddingLeft: cursorState.active ? 14 : 0,
            paddingRight: cursorState.active ? 18 : 0,
            gap: cursorState.active ? 10 : 0,
            borderRadius: 999,
            boxShadow: cursorState.active
              ? "0 18px 38px -24px rgba(96, 46, 17, 0.48)"
              : "0 0 0 rgba(96, 46, 17, 0)",
          }}
          transition={{
            duration: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.span
            className="flex h-5 w-5 shrink-0 items-center justify-center"
            animate={{
              opacity: cursorState.active ? 1 : 0,
              scale: cursorState.active ? 1 : 0.86,
              x: cursorState.active ? 0 : -4,
            }}
            transition={{
              duration: 0.18,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <HoverCursorIcon
              kind={cursorState.kind}
              className="h-[1.125rem] w-[1.125rem]"
            />
          </motion.span>

          <motion.span
            className="whitespace-nowrap font-mono text-[0.78rem] font-medium uppercase tracking-[0.16em]"
            animate={{
              opacity: cursorState.active ? 1 : 0,
              x: cursorState.active ? 0 : -8,
            }}
            transition={{
              duration: 0.18,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {cursorState.label}
          </motion.span>
        </motion.div>
      </motion.div>

      <div
        aria-hidden="true"
        className="pointer-events-none fixed left-[-9999px] top-[-9999px] opacity-0"
      >
        <div
          ref={measureRef}
          className="inline-flex items-center gap-[10px] rounded-full border border-[#d77447]/90 px-[14px] pr-[18px] py-[14px] font-mono text-[0.78rem] font-medium uppercase tracking-[0.16em]"
        >
          <span className="flex h-5 w-5 shrink-0 items-center justify-center">
            <HoverCursorIcon
              kind={cursorState.kind}
              className="h-[1.125rem] w-[1.125rem]"
            />
          </span>
          <span>{cursorState.label}</span>
        </div>
      </div>
    </>
  );
}
