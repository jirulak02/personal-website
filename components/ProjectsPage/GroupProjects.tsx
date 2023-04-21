import Image from "next/image";

import Card from "../ui/Card";

export default function GroupProjects() {
	return (
		<section className="mt-20">
			<h2 className="font-semibold ml-4 text-center md:text-left">
				Top 3 group projects
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-2">
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
							src="/ProjectsPage/Bsq 1.png"
							width="135"
							height="180"
							alt="Display of a map in terminal made of dots and zeros"
						/>
						<Image
							src="/ProjectsPage/Bsq 2.png"
							width="140"
							height="180"
							alt="The same map filled with x's in place of the biggest gap"
						/>
					</div>
					<p className="pb-4">
						A program that finds space for the largest rectangle and
						inserts 'x' characters in it's place.
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
				<Card className="max-w-sm mx-auto">
					<div className="flex items-center space-x-1">
						<Image
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
							width="25"
							height="25"
							alt="C language logo"
						/>
						<h4>Number converter</h4>
					</div>
					<div className="flex justify-center min-w-max">
						<Image
							src="/ProjectsPage/Rush-02.png"
							width="280"
							height="130"
							alt="Translating numbers into words in terminal"
						/>
					</div>
					<p className="pb-4">
						A program that converts a number into a string of words
						based on a dictionary and allocates memory for it.
					</p>
					<a
						href="https://github.com/jirulak02/42-piscine/tree/main/rush02/ex00"
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
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
							width="25"
							height="25"
							alt="C language logo"
						/>
						<h4>Skyscrapers solver</h4>
					</div>
					<div className="flex flex-col items-center">
						<Image
							src="/ProjectsPage/Rush-01 1.png"
							width="305"
							height="22"
							alt="Display of the input for skyscrapers game"
						/>
						<Image
							src="/ProjectsPage/Rush-01 2.png"
							width="113"
							height="124"
							alt="Solved 4x4 skyscrapers grid"
						/>
					</div>
					<p className="pb-4">
						A program that solves a 4x4 map of skyscrapers inputted
						as an argument in the format of "4x up 4x down 4x left
						4x right", reading from up to down and left to right.
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
			</div>
		</section>
	);
}
