import Reveal from "../animations/Reveal";
import Card from "../ui/Card";

export default function OtherProjects() {
	return (
		<section className="mt-12">
			<h2 className="font-semibold ml-4 text-center md:text-left">
				Other projects
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-2">
				<Reveal>
					<Card className="max-w-sm mx-auto">
						<p className="pb-4">
							You can view all my projects on GitHub.
						</p>
						<a
							href="https://github.com/jirulak02/"
							className="underline"
							target="_blank"
							rel="noopener noreferrer"
						>
							Show me{">"}
						</a>
					</Card>
				</Reveal>
				<Reveal>
					<Card className="max-w-sm mx-auto">
						<p>
							Currently I'm mostly just focusing on programming at my job.
						</p>
					</Card>
				</Reveal>
			</div>
		</section>
	);
}
