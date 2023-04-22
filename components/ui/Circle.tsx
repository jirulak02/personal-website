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
				<div className="absolute flex justify-center items-center text-2xl w-24 h-24 m-0.5">
					{amount}
				</div>
				<svg width="100" height="100">
					<circle
						className="-rotate-90 origin-center"
						stroke="rgb(63 98 18)"
						strokeDasharray="251.32, 251.32"
						strokeDashoffset={offset}
						strokeWidth="20"
						fill="transparent"
						r="40"
						cx="50"
						cy="50"
					/>
					<circle
						stroke="rgb(63 98 18)"
						strokeWidth="2"
						fill="transparent"
						r="49"
						cx="50"
						cy="50"
					/>
					<circle
						stroke="rgb(63 98 18)"
						strokeWidth="2"
						fill="transparent"
						r="30"
						cx="50"
						cy="50"
					/>
				</svg>
			</div>
		</div>
	);
}
