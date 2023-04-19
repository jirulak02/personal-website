import Image from "next/image";

import Button from "../ui/Button";

export default function Hero() {
	return (
		<section>
			<div className="grid grid-cols-7 gap-4 mt-16">
				<div className="col-span-4 text-center mt-32 space-y-3">
					<h1>/the_next generati*n of tech t^lent.</h1>
					<h2>Jiří Šimeček</h2>
					<Button />
				</div>
				<div className="col-span-3">
					<div className="float-right">
						<Image
							src="/HomePage/Profile picture.png"
							width="436"
							height="436"
							alt="A handsome young man in a grass field."
						/>
					</div>
				</div>
			</div>
			<div className="h-10 pr-16 mt-5">
				<div className="float-right">
					<Image
						src="/HomePage/42Prague logo.png"
						width="96"
						height="37"
						alt="Logo of 42 Prague school."
					/>
				</div>
				<div className="float-right mr-4">
					<Image
						src="/HomePage/VSE logo.png"
						width="182"
						height="37"
						alt="Logo of Prague University of Economics and Business."
					/>
				</div>
			</div>
		</section>
	);
}
