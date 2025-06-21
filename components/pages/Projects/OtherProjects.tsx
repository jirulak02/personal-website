import Card from "../../ui/Card";
import ExternalLink from "@/components/ui/ExternalLink";

export default function OtherProjects() {
  return (
    <section className="mt-8 lg:mt-12">
      <h2 className="ml-4 text-center font-semibold md:text-left">Other projects</h2>
      <div className="mt-2 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card reveal className="mx-auto max-w-sm">
          <p>You can view all my projects and more on GitHub.</p>
          <div>
            <ExternalLink href="https://github.com/jirulak02/">Show me</ExternalLink>
          </div>
        </Card>
      </div>
    </section>
  );
}
