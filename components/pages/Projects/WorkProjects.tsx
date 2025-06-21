import Card from "../../ui/Card";
import ExternalLink from "@/components/ui/ExternalLink";

export default function WorkProjects() {
  return (
    <section className="mt-8 lg:mt-12">
      <h2 className="ml-4 text-center font-semibold md:text-left">Work projects</h2>
      <Card className="mt-2 w-full">
        <p>
          The most interesting projects I&apos;ve worked on were all under NDA, but you can see a
          description of them on my LinkedIn.
        </p>
        <div>
          <ExternalLink href="https://www.linkedin.com/in/jiří-šimeček/details/projects">
            Show me
          </ExternalLink>
        </div>
      </Card>
    </section>
  );
}
