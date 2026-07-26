// src/components/motion/MotionProvider.tsx
"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Global safety net: `reducedMotion="user"` makes every motion component in the
 * tree skip transform animations when the OS asks for reduced motion, even if a
 * component forgets to check the hook itself. Children stay Server Components —
 * they are passed through, not imported.
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
