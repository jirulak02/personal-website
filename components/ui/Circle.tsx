import classes from "./Circle.module.css";

type CircleProps = {
	name: string;
	amount: number;
};

export default function Circle({ name, amount }: CircleProps) {
	const offset = 251.32 - (amount / 100) * 251.32;

	return (
		<div className="w-32">
			<h3>{name}</h3>
			<div className="relative flex justify-center">
				<div className={classes.outer}>
					<div className={classes.inner}>{amount}</div>
				</div>
				<svg width="100" height="100">
					<circle
						className={classes.circle}
						stroke="rgb(63 98 18)"
						stroke-dasharray="251.32, 251.32"
						stroke-dashoffset={offset}
						stroke-width="20"
						fill="transparent"
						r="40"
						cx="50"
						cy="50"
					/>
				</svg>
			</div>
		</div>
	);
}
