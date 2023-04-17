import Image from "next/image";

import Button from "../ui/Button";

export default function Hero() {
	return (
		<section>
			<div className="grid grid-cols-7 gap-4 mt-16">
				<div className="col-span-4 text-center mt-32 space-y-3">
					<h1>/the_next generati*n of tech t^lent.</h1>
					<h2 className="font-normal">Jiří Šimeček</h2>
					<Button />
				</div>
				<div className="col-span-3">
					<div className="float-right">
						<Image
							src="/Profile picture.png"
							width="436"
							height="436"
							alt="profile picture"
						/>
					</div>
				</div>
			</div>
			<div className="h-10 pr-16 mt-5">
				<div className="float-right">
					<Image
						src="/42Prague logo.png"
						width="96"
						height="37"
						alt="42 Prague school logo"
					/>
				</div>
				<div className="float-right mr-4">
					<Image
						src="/VSE logo.png"
						width="182"
						height="37"
						alt="VSE school logo"
					/>
				</div>
			</div>
		</section>
	);
}
