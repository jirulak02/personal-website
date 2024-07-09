"use client";

import {
  animate,
  motion,
  useAnimation,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Circle({ amount, name }: { amount: number; name: string }) {
  const [isClient, setIsClient] = useState(false);
  const circleRef = useRef(null);
  const isInView = useInView(circleRef, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const controls = useAnimation();

  useEffect(() => {
    controls.set("hidden");
    setIsClient(true);
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!prefersReducedMotion) {
      if (isInView) {
        controls.start("visible");
        const animation = animate(count, amount, {
          duration: 2,
          delay: 0.25,
        });

        return () => animation.stop();
      }
    } else {
      count.set(amount);
      controls.set("visible");
    }
  }, [isInView, controls, count, amount, setIsClient]);

  return (
    <div className="w-32">
      <h3>{name}</h3>
      <div className="relative flex justify-center">
        <motion.div
          ref={circleRef}
          className="absolute m-0.5 flex h-24 w-24 items-center justify-center text-2xl"
        >
          {isClient ? rounded : amount}
        </motion.div>
        <motion.svg width="100" height="100" initial="visible" animate={controls}>
          <motion.circle
            className="origin-center -rotate-90"
            stroke="rgb(var(--primary-rgb))"
            strokeWidth="20"
            fill="transparent"
            r="40"
            cx="50"
            cy="50"
            variants={{
              hidden: { pathLength: 0 },
              visible: {
                pathLength: amount / 100,
                transition: {
                  pathLength: {
                    delay: 0.25,
                    duration: 2,
                    bounce: 0,
                  },
                },
              },
            }}
          />
          <motion.circle
            stroke="rgb(var(--primary-rgb))"
            strokeWidth="2"
            fill="transparent"
            r="49"
            cx="50"
            cy="50"
          />
          <motion.circle
            stroke="rgb(var(--primary-rgb))"
            strokeWidth="2"
            fill="transparent"
            r="30"
            cx="50"
            cy="50"
          />
        </motion.svg>
      </div>
    </div>
  );
}
