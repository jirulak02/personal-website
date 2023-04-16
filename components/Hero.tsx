import Image from "next/image";

export default function Hero() {
	return (
		<section>
			<div className="grid grid-cols-7 gap-4 pt-16">
				<div className="col-span-4 bg-blue-200 text-center mt-32 space-y-3">
					<h1 className="text-6xl font-medium">
						/the_next generati*n of tech t^lent.
					</h1>
					<h2 className="text-3xl">Jiří Šimeček</h2>
					<button className="rounded-3xl bg-lime-800 w-52 text-3xl py-2 text-white">
						Contact me
					</button>
				</div>
				<div className="col-span-3 bg-red-200">
					<img
						src="/Profile picture.png"
						width="436"
						height="436"
						alt="profile picture"
						className="float-right"
					/>
				</div>
			</div>
			<div className="h-24 bg-lime-200 pr-12">
				<img
					src="/42Prague logo.png"
					width="148"
					height="84"
					alt="profile picture"
					className="float-right"
				/>
				<img
					src="/VSE logo.png"
					width="182"
					height="37"
					alt="profile picture"
					className="float-right pt-5"
				/>
			</div>
		</section>
	);
}
