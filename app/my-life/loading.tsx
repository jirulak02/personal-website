import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import TitleLoader from "@/components/ui/TitleLoader";

export default function MyLifeLoading() {
	return (
		<>
			<TitleLoader title="<MyLife>" />
			<Container>
				<section className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 lg:mt-12">
					<Card noPadding>
						<div className="grid md:grid-cols-4 lg:grid-cols-5 gap-6">
							<div className="col-span-3 lg:col-span-4 space-y-3 p-6 md:pr-0">
								<h3>2002 - 2014</h3>
								<p>Born and raised in the Czech Republic.</p>
							</div>
							<div className="col-span-1 min-w-max items-center justify-center border-l-2 border-neutral-800 hidden md:flex">
								<h2>0x1</h2>
							</div>
						</div>
					</Card>
					<div className="md:mt-14">
						<div className="relative -start-4 top-2 hidden md:block z-20">
							<div
								style={{ width: "183px", height: "77px" }}
							></div>
						</div>
						<Card noPadding className="relative z-10">
							<div className="grid md:grid-cols-4 lg:grid-cols-5 gap-6">
								<div className="col-span-1 min-w-max hidden md:flex items-center justify-center border-r-2 border-neutral-800">
									<h2>0x2</h2>
								</div>
								<div className="col-span-3 lg:col-span-4 space-y-3 p-6 md:pl-0">
									<h3>2014 - 2019</h3>
									<p>
										Studied at Masarykovo klasické gymnázium
										in Říčany.
									</p>
								</div>
							</div>
						</Card>
					</div>
					<div className="md:-mt-28 lg:-mt-24">
						<div className="relative left-32 top-2.5 hidden md:block">
							<div
								style={{ width: "456px", height: "95px" }}
							></div>
						</div>
						<Card noPadding>
							<div className="grid md:grid-cols-4 lg:grid-cols-5 gap-6">
								<div className="col-span-3 lg:col-span-4 space-y-3 p-6 md:pr-0">
									<h3>2019 - 2020</h3>
									<p>
										Spent a year as an exchange student in
										California, USA, an experience that
										greatly improved my English language
										skills and broadened my perspective on
										life.
									</p>
								</div>
								<div className="col-span-1 min-w-max hidden md:flex items-center justify-center border-l-2 border-neutral-800">
									<h2>0x3</h2>
								</div>
							</div>
						</Card>
					</div>
					<div className="md:mt-24">
						<div className="relative -start-4 top-1.5 hidden md:block z-20">
							<div
								style={{ width: "183px", height: "107px" }}
							></div>
						</div>
						<Card noPadding className="relative z-10">
							<div className="grid md:grid-cols-4 lg:grid-cols-5 gap-6">
								<div className="col-span-1 min-w-max hidden md:flex items-center justify-center border-r-2 border-neutral-800">
									<h2>0x4</h2>
								</div>
								<div className="col-span-3 lg:col-span-4 space-y-3 p-6 md:pl-0">
									<h3>2020 - 2022</h3>
									<p>
										Returned to the Czech Republic and
										graduated from Masarykovo klasické
										gymnázium in Říčany.
									</p>
									<p>
										Started learning programming in HTML,
										CSS and Python, and also did Harvard's
										CS50 course.
									</p>
								</div>
							</div>
						</Card>
					</div>
					<div className="md:-mt-48 lg:-mt-32">
						<div className="relative left-32 top-2 hidden md:block">
							<div
								style={{ width: "456px", height: "131px" }}
							></div>
						</div>
						<Card noPadding>
							<div className="grid md:grid-cols-4 lg:grid-cols-5 gap-6">
								<div className="col-span-3 lg:col-span-4 space-y-3 p-6 md:pr-0">
									<h3>2022 - Now</h3>
									<p>
										Began studying at Prague University of
										Economics and Business with a focus on
										Applied informatics, where I started
										learning Java and SQL.
									</p>
									<p>
										I also attend 42 Prague, a
										world-renowned chain of schools for
										C/C++ programming languages.
									</p>
									<p>
										Started learning everything for being a
										full-stack developer, including React,
										Nextjs, Nodejs, TypeScript and MongoDB.
									</p>
								</div>
								<div className="col-span-1 min-w-max hidden md:flex items-center justify-center border-l-2 border-neutral-800">
									<h2>'\0'</h2>
								</div>
							</div>
						</Card>
					</div>
				</section>
				<div className="mt-12 md:mt-20 mb-4 text-center">
					<h1 className="font-normal">{"</MyLife>"}</h1>
				</div>
			</Container>
		</>
	);
}
