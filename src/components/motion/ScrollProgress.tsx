"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const reduce = useReducedMotion();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.25 });

  if (reduce) return null;

  return <motion.div aria-hidden className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" style={{ scaleX }} />;
}
