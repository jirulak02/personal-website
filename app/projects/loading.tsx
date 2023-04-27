import Card from "@/components/ui/Card";

export default function ProjectsLoading() {
	return (
		<section className="mt-8 lg:mt-12 mb-80">
			<h2 className="font-semibold ml-4 text-center md:text-left">
				Top 3 solo projects
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-2">
				<Card className="max-w-sm mx-auto">
					<div className="flex items-center space-x-1">
						<div
							style={{ width: "25px", height: "25px" }}
							className="bg-neutral-300 animate-pulse"
						></div>
						<h4>Sudoku app</h4>
					</div>
					<div className="flex justify-between min-w-max">
						<div
							style={{ width: "140px", height: "184px" }}
							className="bg-neutral-300 animate-pulse"
						></div>
						<div
							style={{ width: "139px", height: "184px" }}
							className="bg-neutral-300 animate-pulse"
						></div>
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
						<div
							style={{ width: "25px", height: "25px" }}
							className="bg-neutral-300 animate-pulse"
						></div>
						<div
							style={{ width: "25px", height: "25px" }}
							className="bg-neutral-300 animate-pulse"
						></div>
						<h4>Personal website</h4>
					</div>
					<div className="flex justify-center min-w-max">
						<div
							style={{ width: "280px", height: "133px" }}
							className="bg-neutral-300 animate-pulse"
						></div>
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
						<div
							style={{ width: "25px", height: "25px" }}
							className="bg-neutral-300 animate-pulse"
						></div>
						<h4>User authentication</h4>
					</div>
					<div className="flex justify-center">
						<div
							style={{ width: "280px", height: "138px" }}
							className="bg-neutral-300 animate-pulse"
						></div>
					</div>
					<p className="pb-4">
						A simple page that let's you sign in with Google or
						Facebook to unlock restricted content. I did this using
						OAuth 2.0 and the passport library.
					</p>
					<a
						href="https://github.com/jirulak02/WebDev-course/tree/main/Security"
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
