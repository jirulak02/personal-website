import Image from "next/image";

import Card from "../ui/Card";

export default function SoloProjects() {
	return (
		<section className="mt-8 lg:mt-12">
			<h2 className="font-semibold ml-4 text-center md:text-left">
				Top 3 solo projects
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-2">
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
							src="/ProjectsPage/Sudoku 1.png"
							width="140"
							height="184"
							alt="Playing sudoku"
						/>
						<Image
							src="/ProjectsPage/Sudoku 2.png"
							width="139"
							height="184"
							alt="Victory screen of sudoku app"
						/>
					</div>
					<p className="pb-4">
						A fully functional Sudoku game application for Windows.
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
							<div className="text-lg sm:text-xl md:text-2xl py-2 rounded-3xl bg-lime-800 text-white border-2 border-lime-800 hover:bg-neutral-200 hover:text-lime-800">
								Download game
							</div>
						</a>
					</div>
				</Card>
				<Card className="max-w-sm mx-auto">
					<div className="flex items-center space-x-1">
						<Image
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
							width="25"
							height="25"
							alt="Nextjs language logo"
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
							src="/ProjectsPage/Personal website.png"
							width="280"
							height="140"
							alt="Playing sudoku"
						/>
					</div>
					<p className="pb-4">
						The very same website you are on right now.
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
				<Card className="max-w-sm mx-auto">
					<div className="flex items-center space-x-1">
						<Image
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
							width="25"
							height="25"
							alt="Python language logo"
						/>
						<h4>YouTube downloader</h4>
					</div>
					<div className="flex justify-center">
						<Image
							src="/ProjectsPage/Ytb.png"
							width="141"
							height="162"
							alt="YouTube to MP4"
						/>
					</div>
					<p className="pb-4">
						A script that can download videos or entire playlists of
						videos from YouTube in the MP4 format.
					</p>
					<a
						href="https://github.com/jirulak02/YouTube-downloader"
						className="underline"
						target="_blank"
						rel="noopener noreferrer"
					>
						View the code{">"}
					</a>
				</Card>
			</div>
		</section>
	);
}
