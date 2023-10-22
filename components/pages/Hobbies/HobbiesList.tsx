import Image from "next/image";

export const hobbies = [
  {
    img: "/HobbiesPage/hobby-snowboarding.png",
    name: "Snowboarding",
    achievement: "Backflip",
    alt: "The author doing a backflip on a snowboard",
  },
  {
    img: "/HobbiesPage/hobby-rugby.png",
    name: "Rugby",
    achievement: "7x Czech champion",
    alt: "The author running with a rugby ball",
  },
  {
    img: "/HobbiesPage/hobby-hiking.png",
    name: "Hiking",
    achievement: "1km climb in 86min",
    alt: "The author standing on top of a mountain in Austria",
  },
  {
    img: "/HobbiesPage/hobby-scuba-diving.png",
    name: "Scuba diving",
    achievement: "AOWD certification",
    alt: "The author scuba diving in a beautifully lit cave",
  },
  {
    img: "/HobbiesPage/hobby-dancing.png",
    name: "Dancing",
    achievement: "Advanced course",
    alt: "The author dancing with a girl at his graduation ball",
  },
  {
    img: "/HobbiesPage/hobby-traveling.png",
    name: "Traveling",
    achievement: "EU, NA, SA, AS, AF",
    alt: "New York from the Hudson river",
  },
  {
    img: "/HobbiesPage/hobby-running.png",
    name: "Running",
    achievement: "160km in one month",
    alt: "The author running on a sidewalk",
  },
  {
    img: "/HobbiesPage/hobby-games.png",
    name: "Games",
    achievement: "Platinum / 1600",
    alt: "Split image of League of Legends and Chess",
  },
];

export default function HobbiesList() {
  return (
    <section className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:mt-12 lg:grid-cols-4">
      {hobbies.map((hobby) => (
        <div key={hobby.name} className="m-auto text-center">
          <Image
            style={{ width: "255px" }}
            src={hobby.img}
            width="765"
            height="480"
            quality={100}
            alt={hobby.alt}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
          />
          <h4>{hobby.name}</h4>
          <div className="flex items-center justify-center space-x-1">
            <Image
              style={{ width: "25px" }}
              src="/HobbiesPage/medal-icon.png"
              width="75"
              height="75"
              quality={100}
              alt="Achievement medal"
            />
            <p>{hobby.achievement}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
