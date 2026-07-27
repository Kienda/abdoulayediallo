// src/components/motion/Motion.tsx
"use client";

import {
  motion,
  useInView,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";
import { useRef, type ReactNode, type Ref } from "react";

// ─── Shared motion constants ──────────────────────────────────────────────────
// Short and quiet on purpose: content should never be waited on.
const RISE = 16;            // px of upward travel on reveal
const DURATION = 0.4;       // s — reveal
const HOVER_DURATION = 0.2; // s — hover/tap
const STAGGER = 0.08;       // s between siblings
const EASE = "easeOut" as const;

// Trigger slightly before the element is fully on screen, and only once.
const VIEWPORT = { once: true, margin: "-80px" } as const;

const itemVariants: Variants = {
  hidden: { opacity: 0, y: RISE },
  visible: { opacity: 1, y: 0 },
};

type Tag = "div" | "span";

/**
 * Renders a motion element as either a div or a span. Both branches reference
 * module-level components, so nothing is created during render.
 */
function MotionBox({
  as = "div",
  ...rest
}: HTMLMotionProps<"div"> & { as?: Tag; ref?: Ref<HTMLDivElement> }) {
  if (as === "span") {
    return <motion.span {...(rest as HTMLMotionProps<"span">)} />;
  }
  return <motion.div {...rest} />;
}

type BaseProps = {
  children: ReactNode;
  className?: string;
  as?: Tag;
};

/**
 * Standalone scroll reveal: fade in with a small upward rise, once.
 *
 * Note on reduced motion: `initial` is intentionally NOT branched on
 * `useReducedMotion()` — that hook only resolves on the client, so branching it
 * here would produce a server/client markup mismatch. Instead the duration is
 * zeroed here, and `globals.css` hard-forces `opacity: 1 / transform: none` on
 * `[data-motion]` under `prefers-reduced-motion`, which also keeps content
 * visible if JavaScript never runs.
 */
export function Reveal({
  children,
  className,
  as,
  delay = 0,
}: BaseProps & { delay?: number }) {
  const reduce = useReducedMotion();

  return (
    <MotionBox
      as={as}
      data-motion
      className={className}
      initial={{ opacity: 0, y: RISE }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={reduce ? { duration: 0 } : { duration: DURATION, ease: EASE, delay }}
    >
      {children}
    </MotionBox>
  );
}

/**
 * Parent for a grid/list whose children are <RevealItem>s. Children appear in a
 * quick sequence rather than all at once.
 *
 * `trigger="mount"` runs once on page load (used by the hero); the default
 * `"view"` waits until the group scrolls into view.
 *
 * Uses `useInView` + a persistent `animate` variant rather than `whileInView`.
 * `whileInView` with `once: true` is a one-shot gesture: after it fires it stops
 * driving the subtree, so any child that mounts LATER (e.g. a list re-rendering
 * after a filter change) inherits `initial="hidden"` and is never animated to
 * visible — it just stays at opacity 0. A latched `animate` state keeps working
 * for children that arrive after the group first appeared.
 */
export function RevealGroup({
  children,
  className,
  as,
  stagger = STAGGER,
  trigger = "view",
}: BaseProps & { stagger?: number; trigger?: "view" | "mount" }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, VIEWPORT);
  const shown = trigger === "mount" || inView;

  const variants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: reduce ? 0 : stagger } },
  };

  return (
    <MotionBox
      ref={ref}
      as={as}
      className={className}
      variants={variants}
      initial="hidden"
      animate={shown ? "visible" : "hidden"}
    >
      {children}
    </MotionBox>
  );
}

/** A child of <RevealGroup>. Same reveal as <Reveal>, sequenced by the parent. */
export function RevealItem({ children, className, as }: BaseProps) {
  const reduce = useReducedMotion();

  return (
    <MotionBox
      as={as}
      data-motion
      className={className}
      variants={itemVariants}
      transition={reduce ? { duration: 0 } : { duration: DURATION, ease: EASE }}
    >
      {children}
    </MotionBox>
  );
}

/**
 * Hover affordance for interactive cards: a small lift, nothing more.
 * Sets no `initial` style, so it is hydration-safe and can carry the card's own
 * classes — it replaces the card root instead of adding a wrapper node.
 */
export function HoverLift({ children, className, as }: BaseProps) {
  const reduce = useReducedMotion();

  return (
    <MotionBox
      as={as}
      className={className}
      whileHover={reduce ? undefined : { y: -4, scale: 1.02 }}
      whileTap={reduce ? undefined : { scale: 0.99 }}
      transition={{ duration: HOVER_DURATION, ease: EASE }}
    >
      {children}
    </MotionBox>
  );
}
