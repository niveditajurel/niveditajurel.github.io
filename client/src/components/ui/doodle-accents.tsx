import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface DoodleProps {
  className?: string;
  delay?: number;
}

export function DoodleSpark({ className, delay = 0 }: DoodleProps) {
  return (
    <motion.svg
      viewBox="0 0 44 44"
      fill="none"
      aria-hidden="true"
      className={cn("overflow-visible", className)}
      initial={{ opacity: 0, scale: 0.92, rotate: -8 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      <motion.path
        d="M22 4L24.8 16.8L38 19.6L24.8 22.4L22 35.6L19.2 22.4L6 19.6L19.2 16.8L22 4Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.9, delay: delay + 0.05, ease: "easeInOut" }}
      />
      <motion.path
        d="M33.5 6.5L34.4 10.4L38.3 11.3L34.4 12.1L33.5 16L32.7 12.1L28.8 11.3L32.7 10.4L33.5 6.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7, delay: delay + 0.22, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}

export function DoodleUnderline({ className, delay = 0 }: DoodleProps) {
  return (
    <motion.svg
      viewBox="0 0 186 24"
      fill="none"
      aria-hidden="true"
      className={cn("overflow-visible", className)}
      initial={{ opacity: 0, y: 4 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
    >
      <motion.path
        d="M4 12.8C28.9 7.1 57.2 20.5 82.5 14.1C107 7.9 129 9.4 152.9 13.4C162.6 15 172 15.5 182 10.8"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.95, delay: delay + 0.05, ease: "easeInOut" }}
      />
      <motion.path
        d="M24.1 18.6C47.8 14.7 69.7 17.7 92.3 17.2C109.4 16.9 126.3 20 148.5 18.8"
        stroke="currentColor"
        strokeWidth="1.85"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8, delay: delay + 0.16, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}

export function DoodleArrow({ className, delay = 0 }: DoodleProps) {
  return (
    <motion.svg
      viewBox="0 0 112 44"
      fill="none"
      aria-hidden="true"
      className={cn("overflow-visible", className)}
      initial={{ opacity: 0, x: -6 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      <motion.path
        d="M4 34.4C20.4 26.7 31.8 20 47.8 14.8C64.3 9.4 74.7 8.7 94 11"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8, delay: delay + 0.04, ease: "easeInOut" }}
      />
      <motion.path
        d="M86.5 5.8C92.1 8.9 96.8 12.7 101.7 17.3"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.38, delay: delay + 0.5, ease: "easeInOut" }}
      />
      <motion.path
        d="M88.3 20.1C94.2 17.8 97.9 16.7 105.6 15"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.34, delay: delay + 0.58, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}
