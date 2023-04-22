type TitleLoaderProps = {
	title: string;
};

export default function TitleLoader({ title }: TitleLoaderProps) {
	return (
		<div className="relative h-24 sm:h-36 md:h-48 lg:h-56">
			<div className="absolute z-10 text-neutral-800 w-full h-full flex items-center justify-center">
				<h1 className="pb-5">{title}</h1>
			</div>
			<div className="bg-neutral-300 animate-pulse w-full h-full"></div>
		</div>
	);
}
