import Link from "next/link";

import Card from "../ui/Card";
import Reveal from "../animations/Reveal";

export default function AboutMe() {
  return (
    <section className="w-full bg-neutral-200 px-3 py-2">
      <h1 className="py-8 text-center">A few bits about me</h1>
      <div className="m-auto grid max-w-6xl grid-cols-1 gap-8 pb-12 md:grid-cols-2">
        <Reveal>
          <Card white>
            <h3>My life</h3>
            <p>I am always up for learning, trying out new challenges and growing as a person.</p>
            <p>One such challenge was spending a year with a host family in the United States.</p>
            <p>
              Currently, I am getting started in the workforce while pursuing my education at 42
              Prague.
            </p>
            <div className="text-right">
              <Link href="/my-life" className="underline">
                Learn more{">"}
              </Link>
            </div>
          </Card>
        </Reveal>
        <Card white special className="md:mt-72">
          <h3>Personality</h3>
          <p>
            Even though I consider myself to be more of an introvert, I won't miss out on team
            bonding activities such as bowling, gaming, or just going out for a beer.
          </p>
          <p>
            For those who believe that you can learn a lot about someone from what they drink, my
            favorite beer is Kozel 11°, but Plzeň is alright too I guess.
          </p>
          <div className="text-right">
            <Link href="/hobbies" className="underline">
              Other hobbies{">"}
            </Link>
          </div>
        </Card>
        <Reveal>
          <Card white className="md:-mt-28">
            <h3>My projects</h3>
            <p>
              I have worked on a bunch of projects, from personal endeavors to client websites and
              group projects as part of the 42 Prague school.{" "}
            </p>
            <p>
              One of my most significant accomplishments to date was the launch of a fully
              functional Sudoku app, which I coded in Python.
            </p>
            <div className="text-right">
              <Link href="/projects" className="underline">
                Show me{">"}
              </Link>
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
