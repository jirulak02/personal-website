import Image from "next/image";

import Card from "../ui/Card";

export default function Story() {
	return (
		<section className="grid grid-cols-2 gap-4 mt-12">
			<Card noPadding>
				<div className="grid grid-cols-5 gap-6">
					<div className="col-span-4 space-y-3 p-6 pr-0">
						<h3>2002 - 2014</h3>
						<p>Born and raised in the Czech Republic.</p>
					</div>
					<div className="col-span-1 p-6 flex items-center justify-center border-l-2 border-neutral-800">
						<h2>0x1</h2>
					</div>
				</div>
			</Card>
			<div className="mt-14">
				<div className="relative -start-4 top-2">
					<Image
						src="/MyLifePage/Arrow 1.png"
						width="183"
						height="77"
						alt="An arrow symbolizing a pointer to continue in the string of life. From first to second part."
					/>
				</div>
				<Card noPadding>
					<div className="grid grid-cols-5 gap-6">
						<div className="col-span-1 p-6 flex items-center justify-center border-r-2 border-neutral-800">
							<h2>0x2</h2>
						</div>
						<div className="col-span-4 space-y-3 p-6 pl-0">
							<h3>2014 - 2019</h3>
							<p>
								Studied at Masarykovo klasické gymnázium in
								Říčany.
							</p>
						</div>
					</div>
				</Card>
			</div>
			<div className="-mt-24">
				<div className="relative left-32 top-2.5">
					<Image
						src="/MyLifePage/Arrow 2.png"
						width="456"
						height="95"
						alt="An arrow symbolizing a pointer to continue in the string of life. From second to third part."
					/>
				</div>
				<Card noPadding>
					<div className="grid grid-cols-5 gap-6">
						<div className="col-span-4 space-y-3 p-6 pr-0">
							<h3>2019 - 2020</h3>
							<p>
								Spent a year as an exchange student in
								California, USA, an experience that greatly
								improved my English language skills and
								broadened my perspective on life.
							</p>
						</div>
						<div className="col-span-1 p-6 flex items-center justify-center border-l-2 border-neutral-800">
							<h2>0x3</h2>
						</div>
					</div>
				</Card>
			</div>
			<div className="mt-24">
				<div className="relative -start-4 top-1.5">
					<Image
						src="/MyLifePage/Arrow 3.png"
						width="183"
						height="107"
						alt="An arrow symbolizing a pointer to continue in the string of life. From third to fourth part."
					/>
				</div>
				<Card noPadding>
					<div className="grid grid-cols-5 gap-6">
						<div className="col-span-1 p-6 flex items-center justify-center border-r-2 border-neutral-800">
							<h2>0x4</h2>
						</div>
						<div className="col-span-4 space-y-3 p-6 pl-0">
							<h3>2020 - 2022</h3>
							<p>
								Returned to the Czech Republic and graduated
								from Masarykovo klasické gymnázium in Říčany.
							</p>
							<p>
								Started learning programming in HTML, CSS and
								Python, and also did Harvard's CS50 course.
							</p>
						</div>
					</div>
				</Card>
			</div>
			<div className="-mt-32">
				<div className="relative left-32 top-2">
					<Image
						src="/MyLifePage/Arrow 4.png"
						width="456"
						height="131"
						alt="An arrow symbolizing a pointer to continue in the string of life. From fourth to fifth part."
					/>
				</div>
				<Card noPadding>
					<div className="grid grid-cols-5 gap-6">
						<div className="col-span-4 space-y-3 p-6 pr-0">
							<h3>2022 - Now</h3>
							<p>
								Began studying at Prague University of Economics
								and Business with a focus on Applied
								informatics, where I started learning Java and
								SQL.
							</p>
							<p>
								I also attend 42 Prague, a world-renowned chain
								of schools for C/C++ programming languages.
							</p>
							<p>
								Started learning everything for being a
								full-stack developer, including React, Nextjs,
								Nodejs, TypeScript and MongoDB.
							</p>
						</div>
						<div className="col-span-1 p-6 flex items-center justify-center border-l-2 border-neutral-800">
							<h2>'\0'</h2>
						</div>
					</div>
				</Card>
			</div>
		</section>
	);
}
