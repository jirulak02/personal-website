import ContactForm from "@/components/pages/Contact/ContactForm";
import Container from "@/components/layout/Container";
import ScrollUp from "@/components/layout/ScrollUp";
import Card from "@/components/ui/Card";
import Title from "@/components/ui/Title";

export const metadata = {
  title: "Contact | Jiří Šimeček",
  description:
    "All the important contact information, including my socials, e-mail and phone number.",
};

export default function Contact() {
  return (
    <>
      <ScrollUp />
      <Title title="<Contact>" />
      <Container className="mb-40">
        <section className="mb-12 mt-12 grid gap-8 sm:grid-cols-2 sm:gap-12">
          <Card>
            <ContactForm />
          </Card>
          <Card className="row-start-1 sm:row-auto">
            <h3>Get in touch</h3>
            <p>
              If I have sparked your interest for collaboration or you just want to talk, please
              don't hesitate to reach out to me.
            </p>
          </Card>
        </section>
        <h3>Or contact me elsewhere</h3>
        <div className="mt-3 flex flex-col gap-2">
          <p>
            Email:{" "}
            <a href="mailto:jirulak02@gmail.com" className="underline">
              jirulak02@gmail.com
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/ji%C5%99%C3%AD-%C5%A1ime%C4%8Dek-a95b5027b/"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jiří Šimeček
            </a>
          </p>
          <p>
            Instagram:{" "}
            <a
              href="https://www.instagram.com/jirulak02/"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              @jirulak02
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+420777898501" className="underline">
              777 898 501
            </a>
          </p>
        </div>
      </Container>
      <Title title="</Contact>" bottom />
    </>
  );
}
