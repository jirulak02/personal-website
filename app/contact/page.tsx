import Container from "@/components/layout/Container";
import ScrollUp from "@/components/layout/ScrollUp";
import Card from "@/components/ui/Card";
import Title from "@/components/ui/Title";

export const metadata = {
  title: "Contact | Jiří Šimeček",
  description: "All the important contact information, including my email and socials.",
};

export default function Contact() {
  return (
    <>
      <ScrollUp />
      <Title title="<Contact>" id="content-start" />
      <Container>
        <section className="mt-12 grid gap-8 sm:grid-cols-2 sm:gap-12">
          <Card className="row-start-1 sm:row-auto">
            <h3>Get in touch</h3>
            <p>
              If I have sparked your interest for collaboration or you just want to talk, please
              don&apos;t hesitate to reach out to me.
            </p>
            <div className="flex flex-col gap-2">
              <p>
                Email:{" "}
                <a href="mailto:jirulak02@gmail.com" className="underline">
                  jirulak02@gmail.com
                </a>
              </p>
              <p>
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/jiří-šimeček"
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Jiří Šimeček
                </a>
              </p>
            </div>
          </Card>
        </section>
        <Title title="</Contact>" bottom />
      </Container>
    </>
  );
}
