"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
};

/** Scroll-triggered fade + rise. Respects prefers-reduced-motion. */
export default function Reveal({
  children,
  delay = 0,
  y = 26,
  className,
  once = true,
}: Props) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y, filter: "blur(6px)" }}
      whileInView={
        reduce ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)" }
      }
      viewport={{ once, margin: "-80px" }}
      transition={{
        duration: 0.62,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
