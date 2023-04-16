export type CardProps = {
	children: React.ReactNode;
	className?: string;
	white?: boolean;
};

export default function Card({ children, className, white }: CardProps) {
	let classes =
		"bg-neutral-200 p-6 space-y-4 rounded-3xl shadow-lg shadow-neutral-400";

	if (white) {
		classes =
			"bg-neutral-100 p-6 space-y-4 rounded-3xl shadow-lg shadow-neutral-400";
	}

	return (
		<div className={className}>
			<div className={classes}>{children}</div>
		</div>
	);
}
