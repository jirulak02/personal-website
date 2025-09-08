import Link from "next/link";

import Card from "../../ui/Card";
import ExternalLink from "@/components/ui/ExternalLink";

export default function AboutMe() {
  return (
    <section className="w-full bg-secColor px-3 py-2">
      <h2 className="py-8 text-center text-3xl font-semibold sm:text-5xl md:text-6xl">
        A few bits about me
      </h2>
      <div className="m-auto grid max-w-6xl grid-cols-1 gap-8 pb-12 md:grid-cols-2">
        <Card white reveal className="max-w-2xl">
          <h3>Experience</h3>
          <p>
            I have experience working with a variety of programming languages, but mostly specialize
            in TypeScript, with React and Next.js as my main technologies. But overall I&apos;m
            mostly a problem solver, so I don&apos;t mind working with anything that is required by
            the problem.
          </p>
          <div className="flex justify-end">
            <ExternalLink href="https://www.linkedin.com/in/jiří-šimeček">
              See more on LinkedIn
            </ExternalLink>
          </div>
        </Card>
        <Card white reveal className="max-w-2xl md:mt-72">
          <h3>Personality</h3>
          <p>
            Even though I consider myself to be more of an introvert, I love being active, whether
            it&apos;s sports, singing, or other crazy things people come up with.
          </p>
          <p>
            I also have a strong mental and can accomplish pretty much anything I set my mind to,
            e.g. a 6-month challenge of not drinking alcohol.
          </p>
        </Card>
        <Card white reveal className="max-w-2xl md:-mt-28">
          <h3>My projects</h3>
          <p>
            I have worked on a bunch of projects, from personal endeavors to client websites and
            team projects at work.
          </p>
          <p>
            Currently, some of my biggest projects were complex admin portals and an SDK generator.
          </p>
          <div className="flex justify-end">
            <Link href="/projects" className="underline">
              Show me
            </Link>
          </div>
        </Card>
      </div>
    </section>
  );
}
