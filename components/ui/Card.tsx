export type CardProps = {
	children: React.ReactNode;
	className?: string;
	white?: boolean;
	noPadding?: boolean;
};

export default function Card({
	children,
	className,
	white,
	noPadding,
}: CardProps) {
	return (
		<div className={className}>
			<div
				className={`space-y-4 rounded-3xl shadow-lg shadow-neutral-400 bg-neutral-${
					white ? "1" : "2"
				}00 ${noPadding ? "" : "p-6"}`}
			>
				{children}
			</div>
		</div>
	);
}
