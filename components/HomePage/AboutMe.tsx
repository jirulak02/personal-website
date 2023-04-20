import Link from "next/link";

import Card from "../ui/Card";

export default function AboutMe() {
	return (
		<section className="bg-neutral-200 w-full py-2">
			<h1 className="text-center py-8">A few bits about me</h1>
			<div className="grid grid-cols-2 gap-8 max-w-6xl m-auto pb-12">
				<Card white>
					<h3>My life</h3>
					<p>
						I am always up for learning, trying out new challenges
						and growing as a person.
					</p>
					<p>
						One such challenge was spending a year with a host
						family in the United States.
					</p>
					<p>
						Currently, I am pursuing my education at the Prague
						University of Economics and Business with a focus on
						Applied informatics.
					</p>
					<div className="text-right">
						<Link href="/my-life" className="underline">
							Learn more{">"}
						</Link>
					</div>
				</Card>
				<Card white className="mt-72">
					<h3>Personality</h3>
					<p>
						Even though I consider myself to be more of an
						introvert, I won't miss out on team bonding activities
						such as bowling, gaming, or just going out for a beer.
					</p>
					<p>
						For those who believe that you can learn a lot about
						someone from what they drink, my favorite beer is Kozel
						11°, with Plzeň being a bit further in second.
					</p>
					<div className="text-right">
						<Link href="/hobbies" className="underline">
							Other hobbies{">"}
						</Link>
					</div>
				</Card>
				<Card white className="-mt-28">
					<h3>My projects</h3>
					<p>
						I have worked on a bunch of projects, from personal
						endeavors to coursework at Harvard's CS50 and group
						projects as part of the 42 Prague school program.{" "}
					</p>
					<p>
						One of my most significant accomplishments to date was
						the launch of a fully functional Sudoku app, which I
						coded in Python.
					</p>
					<div className="text-right">
						<Link href="/projects" className="underline">
							Show me{">"}
						</Link>
					</div>
				</Card>
			</div>
		</section>
	);
}