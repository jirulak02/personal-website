import Image from "next/image";

import Card from "../ui/Card";
import Reveal from "../animations/Reveal";

export default function SoloProjects() {
	return (
		<section className="mt-8 lg:mt-12">
			<h2 className="font-semibold ml-4 text-center md:text-left">
				Top 3 solo projects
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-2">
				<Reveal>
					<Card className="max-w-sm mx-auto">
						<div className="flex items-center space-x-1">
							<Image
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
								width="25"
								height="25"
								alt="Python language logo"
							/>
							<h4>Sudoku app</h4>
						</div>
						<div className="flex justify-between min-w-max">
							<Image
								style={{ width: "140px" }}
								src="/ProjectsPage/Sudoku 1.png"
								width="420"
								height="552"
								alt="Playing sudoku"
								placeholder="blur"
								blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
							/>
							<Image
								style={{ width: "139px" }}
								src="/ProjectsPage/Sudoku 2.png"
								width="417"
								height="552"
								alt="Victory screen of sudoku app"
								placeholder="blur"
								blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
							/>
						</div>
						<p className="pb-4">
							A fully functional Sudoku game application for
							Windows.
						</p>
						<a
							href="https://github.com/jirulak02/Sudoku"
							className="underline"
							target="_blank"
							rel="noopener noreferrer"
						>
							View the code{">"}
						</a>
						<div className="text-center">
							<a
								href="https://github.com/jirulak02/Sudoku/raw/main/Sudoku.exe"
								className="w-48 md:w-56 rounded-3xl inline-block"
							>
								<div className="text-lg sm:text-xl md:text-2xl py-2 rounded-3xl bg-lime-800 text-neutral-200 border-2 border-lime-800 hover:bg-neutral-200 hover:text-lime-800">
									Download game
								</div>
							</a>
						</div>
					</Card>
				</Reveal>
				<Reveal>
					<Card className="max-w-sm mx-auto">
						<div className="flex items-center space-x-1">
							<Image
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
								width="25"
								height="25"
								alt="Nextjs logo"
							/>
							<Image
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
								width="25"
								height="25"
								alt="TypeScript language logo"
							/>
							<h4>Personal website</h4>
						</div>
						<div className="flex justify-center min-w-max">
							<Image
								style={{ width: "280px" }}
								src="/ProjectsPage/Personal website.png"
								width="840"
								height="399"
								alt="Home page of this website"
								placeholder="blur"
								blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
							/>
						</div>
						<p className="pb-4">
							The very same personal website you are on right now.
						</p>
						<a
							href="https://github.com/jirulak02/Personal-website"
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
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
								width="25"
								height="25"
								alt="Nextjs logo"
							/>
							<Image
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
								width="25"
								height="25"
								alt="TypeScript language logo"
							/>
							<h4>Zelene staveni</h4>
						</div>
						<div className="flex justify-center">
							<Image
								style={{ width: "280px" }}
								src="/ProjectsPage/Zelene staveni.png"
								width="840"
								height="412"
								alt="Business website for a client"
								placeholder="blur"
								blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
							/>
						</div>
						<p>
							A business website for a client, who specialises in
							building green roofs.
						</p>
						<a
							href="https://github.com/jirulak02/Zelene-staveni"
							className="underline block"
							target="_blank"
							rel="noopener noreferrer"
						>
							View the code{">"}
						</a>
						<a
							href="https://www.zelenestaveni.cz/"
							className="underline"
							target="_blank"
						>
							Visit the website{">"}
						</a>
					</Card>
				</Reveal>
			</div>
		</section>
	);
}
