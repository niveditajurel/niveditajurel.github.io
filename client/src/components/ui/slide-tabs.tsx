import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { type LucideIcon } from "lucide-react";

type SlideTabItem = {
  name: string;
  href: string;
  icon?: LucideIcon;
};

type CursorPosition = {
  left: number;
  width: number;
  opacity: number;
};

type SlideTabsProps = {
  tabs: SlideTabItem[];
  activeHref: string;
  onNavigate?: (href: string) => void;
  className?: string;
};

export function SlideTabs({
  tabs,
  activeHref,
  onNavigate,
  className = "",
}: SlideTabsProps) {
  const [position, setPosition] = useState<CursorPosition>({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const tabsRef = useRef<Array<HTMLLIElement | null>>([]);

  const selectedIndex = Math.max(
    0,
    tabs.findIndex((tab) => activeHref === tab.href || (tab.href !== "/" && activeHref.startsWith(tab.href))),
  );

  useEffect(() => {
    const selectedTab = tabsRef.current[selectedIndex];
    if (!selectedTab) return;

    const { width } = selectedTab.getBoundingClientRect();
    setPosition({
      left: selectedTab.offsetLeft,
      width,
      opacity: 1,
    });
  }, [selectedIndex, tabs]);

  const resetToActive = () => {
    const selectedTab = tabsRef.current[selectedIndex];
    if (!selectedTab) return;

    const { width } = selectedTab.getBoundingClientRect();
    setPosition({
      left: selectedTab.offsetLeft,
      width,
      opacity: 1,
    });
  };

  return (
    <ul
      onMouseLeave={resetToActive}
      className={`relative mx-auto flex w-fit items-center rounded-full border-2 border-black bg-white p-1 ${className}`}
    >
      {tabs.map((tab, index) => (
        <SlideTab
          key={tab.name}
          item={tab}
          ref={(element) => {
            tabsRef.current[index] = element;
          }}
          isActive={index === selectedIndex}
          setPosition={setPosition}
          onNavigate={onNavigate}
        />
      ))}

      <Cursor position={position} />
    </ul>
  );
}

type SlideTabProps = {
  item: SlideTabItem;
  isActive: boolean;
  setPosition: React.Dispatch<React.SetStateAction<CursorPosition>>;
  onNavigate?: (href: string) => void;
};

const SlideTab = React.forwardRef<HTMLLIElement, SlideTabProps>(
  ({ item, isActive, setPosition, onNavigate }, ref) => {
    const innerRef = useRef<HTMLLIElement | null>(null);

    const attachRef = (node: HTMLLIElement | null) => {
      innerRef.current = node;
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    };

    const handleMouseEnter = () => {
      const node = innerRef.current;
      if (!node) return;

      const { width } = node.getBoundingClientRect();
      setPosition({
        left: node.offsetLeft,
        width,
        opacity: 1,
      });
    };

    const Icon = item.icon;

    return (
      <Link href={item.href}>
        <li
          ref={attachRef}
          onClick={() => onNavigate?.(item.href)}
          onMouseEnter={handleMouseEnter}
          className="relative z-10 block cursor-pointer px-4 py-2 text-sm font-medium text-white mix-blend-difference md:px-5 md:py-3"
        >
          <motion.span
            className="flex items-center gap-2"
            whileHover={{ y: -1 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
          >
            {Icon && (
              <motion.span
                animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0.82, scale: 0.96 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
              >
                <Icon className="h-4 w-4" />
              </motion.span>
            )}
            <span>{item.name}</span>
          </motion.span>
        </li>
      </Link>
    );
  },
);

SlideTab.displayName = "SlideTab";

function Cursor({ position }: { position: CursorPosition }) {
  return (
    <motion.li
      animate={{ ...position }}
      transition={{ type: "spring", stiffness: 320, damping: 28 }}
      className="absolute z-0 h-10 rounded-full bg-black md:h-12"
    />
  );
}
