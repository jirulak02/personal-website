import Image from "next/image";

import Card from "../ui/Card";
import Reveal from "../animations/Reveal";

export default function GroupProjects() {
	return (
		<section className="mt-20">
			<h2 className="font-semibold ml-4 text-center md:text-left">
				Top 3 group projects
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-2">
				<Reveal>
					<Card className="max-w-sm mx-auto">
						<div className="flex items-center space-x-1">
							<Image
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
								width="25"
								height="25"
								alt="JavaScript language logo"
							/>
							<h4>Rugby Říčany</h4>
						</div>
						<div className="flex justify-center">
							<Image
								style={{ width: "280px" }}
								src="/ProjectsPage/Rugby ricany.png"
								width="840"
								height="414"
								alt="Display of previous matches on the website"
								placeholder="blur"
								blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
							/>
						</div>
						<p>
							A website for our local rugby team. My part was
							loading matches from Google Sheets with limited code
							capabilities, because of the CMS resources.
						</p>
						<a
							href="https://github.com/jirulak02/Rugby-ricany"
							className="underline block"
							target="_blank"
							rel="noopener noreferrer"
						>
							View the code{">"}
						</a>
						<a
							href="https://zwa7y.solidpixels.com/zapasy"
							className="underline"
							target="_blank"
						>
							Visit the website{">"}
						</a>
					</Card>
				</Reveal>
				<Reveal>
					<Card className="max-w-sm mx-auto">
						<div className="flex items-center space-x-1">
							<Image
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
								width="25"
								height="25"
								alt="C language logo"
							/>
							<h4>Bsq</h4>
						</div>
						<div className="flex justify-between min-w-max">
							<Image
								style={{ width: "128px" }}
								src="/ProjectsPage/Bsq 1.png"
								width="384"
								height="543"
								alt="Display of a map in terminal made of dots and zeros"
								placeholder="blur"
								blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
							/>
							<Image
								style={{ width: "140px" }}
								src="/ProjectsPage/Bsq 2.png"
								width="420"
								height="543"
								alt="The same map filled with x's in place of the biggest gap"
								placeholder="blur"
								blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
							/>
						</div>
						<p className="pb-4">
							A program that finds space for the largest square
							and inserts 'x' characters in it's place.
						</p>
						<a
							href="https://github.com/jirulak02/42-piscine/tree/main/bsq"
							className="underline"
							target="_blank"
							rel="noopener noreferrer"
						>
							View the code{">"}
						</a>
					</Card>
				</Reveal>
				<Reveal>
					<Card className="max-w-sm mx-auto">
						<div className="flex items-center space-x-1">
							<Image
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
								width="25"
								height="25"
								alt="C language logo"
							/>
							<h4>Skyscrapers solver</h4>
						</div>
						<div className="flex flex-col items-center">
							<Image
								style={{ width: "280px" }}
								src="/ProjectsPage/Rush-01 1.png"
								width="840"
								height="60"
								alt="Display of the input for skyscrapers game"
								placeholder="blur"
								blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
							/>
							<Image
								style={{ width: "113px" }}
								src="/ProjectsPage/Rush-01 2.png"
								width="339"
								height="372"
								alt="Solved 4x4 skyscrapers grid"
								placeholder="blur"
								blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
							/>
						</div>
						<p className="pb-4">
							A program that solves a 4x4 map of skyscrapers
							inputted as an argument in the format of "4x up 4x
							down 4x left 4x right", reading from up to down and
							left to right.
						</p>
						<a
							href="https://github.com/jirulak02/42-piscine/tree/main/rush01/ex00"
							className="underline"
							target="_blank"
							rel="noopener noreferrer"
						>
							View the code{">"}
						</a>
					</Card>
				</Reveal>
			</div>
		</section>
	);
}
