import Link from "next/link";

import Card from "../../ui/Card";

export default function AboutMe() {
  return (
    <section className="w-full bg-secColor px-3 py-2">
      <h1 className="py-8 text-center">A few bits about me</h1>
      <div className="m-auto grid max-w-6xl grid-cols-1 gap-8 pb-12 md:grid-cols-2">
        <Card white reveal className="max-w-2xl">
          <h3>My life</h3>
          <p>I am always up for learning, trying out new challenges and growing as a person.</p>
          <p>One such challenge was spending a year with a host family in the United States.</p>
          <p>
            Currently, I am focusing on my job as well as building personal projects on a daily
            basis.
          </p>
          <div className="text-right">
            <Link href="/my-life" className="underline">
              Learn more{">"}
            </Link>
          </div>
        </Card>
        <Card white reveal className="max-w-2xl md:mt-72">
          <h3>Personality</h3>
          <p>
            Even though I consider myself to be more of an introvert, I won't miss out on team
            bonding activities such as bowling, gaming, or just going out for a beer.
          </p>
          <p>
            Recently, I found myself enjoying the taste of nonalcoholic beer, so I seized the
            opportunity and started a 6-month challenge of not drinking alcohol.
          </p>
          <div className="text-right">
            <Link href="/hobbies" className="underline">
              Other hobbies{">"}
            </Link>
          </div>
        </Card>
        <Card white reveal className="max-w-2xl md:-mt-28">
          <h3>My projects</h3>
          <p>
            I have worked on a bunch of projects, from personal endeavors to client websites and
            group projects as part of the 42 Prague school.
          </p>
          <p>
            Currently, some of my biggest projects were production grade business websites, which I
            made in Next.js.
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
