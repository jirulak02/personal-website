"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

type RevealProps = {
	children: React.ReactNode;
	className?: string;
};

export default function Reveal({ children, className }: RevealProps) {
	const motionRef = useRef(null);
	const isInView = useInView(motionRef, { once: true });
	const controls = useAnimation();

	useEffect(() => {
		if (isInView) {
			controls.start("visible");
		}
	}, [isInView]);

	return (
		<motion.div
			className={className}
			ref={motionRef}
			variants={{
				hidden: { opacity: 0.5, y: 50 },
				visible: { opacity: 1, y: 0 },
			}}
			initial="hidden"
			animate={controls}
			transition={{ duration: 0.5, delay: 0.2 }}
		>
			{children}
		</motion.div>
	);
}
