import Image from "next/image";

export const hobbies = [
	{
		img: "/HobbiesPage/Snowboarding.png",
		name: "Snowboarding",
		achievement: "Backflip",
		alt: "The author doing a backflip on a snowboard",
	},
	{
		img: "/HobbiesPage/Rugby.png",
		name: "Rugby",
		achievement: "7x Czech champion",
		alt: "The author running with a rugby ball",
	},
	{
		img: "/HobbiesPage/Hiking.png",
		name: "Hiking",
		achievement: "1km climb in 86min",
		alt: "The author standing on top of a mountain in Austria",
	},
	{
		img: "/HobbiesPage/Scuba diving.png",
		name: "Scuba diving",
		achievement: "AOWD certification",
		alt: "The author scuba diving in a beautifully lit cave",
	},
	{
		img: "/HobbiesPage/Dancing.png",
		name: "Dancing",
		achievement: "Advanced course",
		alt: "The author dancing with a girl at his graduation ball",
	},
	{
		img: "/HobbiesPage/Traveling.png",
		name: "Traveling",
		achievement: "EU, NA, SA, AS, AF",
		alt: "New York from the Hudson river",
	},
	{
		img: "/HobbiesPage/Running.png",
		name: "Running",
		achievement: "160km in one month",
		alt: "The author running on a sidewalk",
	},
	{
		img: "/HobbiesPage/Games.png",
		name: "Games",
		achievement: "Platinum / 1600",
		alt: "Split image of League of Legends and Chess",
	},
];

export default function HobbiesList() {
	return (
		<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 lg:mt-12">
			{hobbies.map((hobby) => (
				<div key={hobby.name} className="text-center m-auto">
					<Image
						src={hobby.img}
						width="255"
						height="160"
						alt={hobby.alt}
					/>
					<h4>{hobby.name}</h4>
					<div className="flex justify-center items-center space-x-1">
						<Image
							src="/HobbiesPage/Medal.png"
							width="25"
							height="25"
							alt="Achievement medal"
						/>
						<p>{hobby.achievement}</p>
					</div>
				</div>
			))}
		</section>
	);
}
