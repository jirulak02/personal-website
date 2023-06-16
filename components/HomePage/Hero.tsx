import Image from "next/image";

import Button from "../ui/Button";

export default function Hero() {
	return (
		<section>
			<div className="grid grid-cols-1 sm:grid-cols-7 gap-4 mt-8 lg:mt-16">
				<div className="col-span-4 text-center sm:mt-32 space-y-3">
					<h1>/the_next generati*n of tech t^lent.</h1>
					<h2>Jiří Šimeček</h2>
					<Button />
				</div>
				<div className="order-first sm:order-last m-auto col-span-3 relative w-52 h-52 sm:w-full sm:h-full lg:h-96">
					<div className="sm:float-right m-auto absolute right-0 w-full h-full lg:h-96 lg:w-96">
						<Image
							src="/HomePage/Profile picture.png"
							fill
							sizes="872px"
							className="object-contain"
							alt="A handsome young man in a grass field."
							priority
							placeholder="blur"
							blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
						/>
					</div>
				</div>
			</div>
			<div className="h-10 lg:pr-8 mt-5 flex m-auto w-full justify-center items-center lg:justify-end">
				<div className="relative w-32 h-6 md:w-40 md:h-8 lg:w-48 lg:h-9">
					<Image
						src="/HomePage/VSE logo.png"
						fill
						sizes="360px"
						className="object-contain"
						alt="Logo of Prague University of Economics and Business."
						priority
						placeholder="blur"
						blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
					/>
				</div>
				<div className="relative ml-4 w-20 h-6 md:h-8 lg:w-28 lg:h-9">
					<Image
						src="/HomePage/42Prague logo.png"
						fill
						sizes="186px"
						className="object-contain"
						alt="Logo of 42 Prague school."
						priority
						placeholder="blur"
						blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
					/>
				</div>
			</div>
		</section>
	);
}
