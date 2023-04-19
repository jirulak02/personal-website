import Image from "next/image";

import Card from "../ui/Card";

export default function GroupProjects() {
	return (
		<section className="mt-20">
			<h2 className="font-semibold ml-4">Top 3 group projects</h2>
			<div className="grid grid-cols-3 gap-8 mt-2">
				<Card>
					<div className="flex items-center space-x-1">
						<Image
							src="/ProjectsPage/C logo.png"
							width="23"
							height="25"
							alt="C language logo"
						/>
						<h4>Bsq</h4>
					</div>
					<div className="flex justify-between">
						<Image
							src="/ProjectsPage/Bsq 1.png"
							width="141"
							height="199"
							alt="Display of a map in terminal made of dots and zeros"
						/>
						<Image
							src="/ProjectsPage/Bsq 2.png"
							width="154"
							height="199"
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
					>
						View the code{">"}
					</a>
				</Card>
				<Card>
					<div className="flex items-center space-x-1">
						<Image
							src="/ProjectsPage/C logo.png"
							width="23"
							height="25"
							alt="C language logo"
						/>
						<h4>Number converter</h4>
					</div>
					<div className="flex justify-center">
						<Image
							src="/ProjectsPage/Rush-02.png"
							width="305"
							height="132"
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
					>
						View the code{">"}
					</a>
				</Card>
				<Card>
					<div className="flex items-center space-x-1">
						<Image
							src="/ProjectsPage/C logo.png"
							width="23"
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
					>
						View the code{">"}
					</a>
				</Card>
			</div>
		</section>
	);
}
