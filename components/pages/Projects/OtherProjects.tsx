import Card from "../../ui/Card";

export default function OtherProjects() {
  return (
    <section className="mt-12">
      <h2 className="ml-4 text-center font-semibold md:text-left">Other projects</h2>
      <div className="mt-2 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card reveal className="mx-auto max-w-sm">
          <p>You can view all my projects and more on GitHub.</p>
          <a
            href="https://github.com/jirulak02/"
            className="block underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Show me{">"}
          </a>
        </Card>
        <Card reveal className="mx-auto max-w-sm">
          <p>Currently I'm upgrading my current projects and websites.</p>
        </Card>
      </div>
    </section>
  );
}