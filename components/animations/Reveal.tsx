"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Reveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const motionRef = useRef(null);
  const isInView = useInView(motionRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    controls.set("hidden");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!prefersReducedMotion) {
      if (isInView) {
        controls.start("visible");
      }
    } else {
      controls.set("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      className={className}
      ref={motionRef}
      variants={{
        hidden: { opacity: 0.5, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="visible"
      animate={controls}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
