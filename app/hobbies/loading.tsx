import { hobbies } from "@/components/HobbiesPage/HobbiesList";

export default function HobbiesLoading() {
	return (
		<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 lg:mt-12">
			{hobbies.map((hobby) => (
				<div key={hobby.name} className="text-center m-auto">
					<div
						style={{ width: "255px", height: "160px" }}
						className="bg-neutral-300 animate-pulse"
					></div>
					<h4>{hobby.name}</h4>
					<div className="flex justify-center items-center space-x-1">
						<div
							style={{ width: "25px", height: "25px" }}
							className="bg-neutral-300 animate-pulse"
						></div>
						<p>{hobby.achievement}</p>
					</div>
				</div>
			))}
		</section>
	);
}