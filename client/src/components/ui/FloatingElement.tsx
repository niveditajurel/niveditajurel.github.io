import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FloatingElementProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
    yOffset?: number;
    className?: string;
}

export const FloatingElement = ({
    children,
    delay = 0,
    duration = 3,
    yOffset = 10,
    className,
}: FloatingElementProps) => {
    return (
        <motion.div
            animate={{
                y: [0, -yOffset, 0],
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: delay,
            }}
            className={cn("absolute", className)}
        >
            {children}
        </motion.div>
    );
};
