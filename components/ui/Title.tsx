import Image from "next/image";

type TitleProps = {
	title: string;
};

export default function Title({ title }: TitleProps) {
	return (
		<div className="relative h-24 sm:h-36 md:h-48 lg:h-56">
			<div className="absolute z-10 text-neutral-200 w-full h-full flex items-center justify-center">
				<h1 className="pb-5">{title}</h1>
			</div>
			<Image
				src="/Brick wall.png"
				fill
				alt="brick wall picture"
				priority
				placeholder="blur"
				blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
			/>
		</div>
	);
}
