import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import TitleLoader from "@/components/ui/TitleLoader";

export default function ProjectsLoading() {
	return (
		<>
			<TitleLoader title="<Projects>" />
			<Container>
				<section className="mt-8 lg:mt-12">
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
									style={{ width: "280px", height: "140px" }}
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
								<h4>YouTube downloader</h4>
							</div>
							<div className="flex justify-center">
								<div
									style={{ width: "141px", height: "162px" }}
									className="bg-neutral-300 animate-pulse"
								></div>
							</div>
							<p className="pb-4">
								A script that can download videos or entire
								playlists of videos from YouTube in the MP4
								format.
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
				<div className="mt-12 md:mt-20 mb-4 text-center">
					<h1 className="font-normal">{"</Projects>"}</h1>
				</div>
			</Container>
		</>
	);
}
