"use client";

import React, { useRef, useEffect } from "react";
import {
	motion,
	useMotionValue,
	useInView,
	useTransform,
	animate,
	useAnimation,
} from "framer-motion";

type CircleProps = {
	amount: number;
	name: string;
};

export default function Circle({ amount, name }: CircleProps) {
	const circleRef = useRef(null);
	const isInView = useInView(circleRef, { once: true });
	const count = useMotionValue(0);
	const rounded = useTransform(count, Math.round);
	const controls = useAnimation();
	const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

	useEffect(() => {
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
	}, [isInView, controls, count, amount, prefersReducedMotion]);

	return (
		<div className="w-32">
			<h3>{name}</h3>
			<div className="relative flex justify-center">
				<motion.div
					ref={circleRef}
					className="absolute flex justify-center items-center text-2xl w-24 h-24 m-0.5"
				>
					{rounded}
				</motion.div>
				<motion.svg
					width="100"
					height="100"
					initial="hidden"
					animate={controls}
				>
					<motion.circle
						className="-rotate-90 origin-center"
						stroke="rgb(63 98 18)"
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
						stroke="rgb(63 98 18)"
						strokeWidth="2"
						fill="transparent"
						r="49"
						cx="50"
						cy="50"
					/>
					<motion.circle
						stroke="rgb(63 98 18)"
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
