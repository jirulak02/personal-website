import Card from "../ui/Card";

export default function OtherProjects() {
	return (
		<section className="mt-12">
			<h2 className="font-semibold ml-4">Other projects</h2>
			<div className="grid grid-cols-3 gap-8 mt-2">
				<Card>
					<p className="pb-4">
						You can view all my projects on GitHub.
					</p>
					<a
						href="https://github.com/jirulak02/"
						className="underline"
					>
						Show me{">"}
					</a>
				</Card>
				<Card>
					<p className="pb-4">
						Currently I'm learning more about Nextjs.
					</p>
				</Card>
			</div>
		</section>
	);
}
