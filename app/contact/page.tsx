import Container from "@/components/layout/Container";
import ScrollUp from "@/components/layout/ScrollUp";
import Card from "@/components/ui/Card";
import Title from "@/components/ui/Title";

export const metadata = {
  title: "Contact",
  description:
    "All the important contact information, including my socials, e-mail and phone number.",
};

export default function Contact() {
  return (
    <>
      <ScrollUp />
      <Title title="<Contact>" />
      <Container>
        <section className="grid sm:grid-cols-6 lg:grid-cols-7 gap-8 mt-12 mb-36">
          <Card className="col-span-3">
            <h3>Get in touch</h3>
            <p>
              If I have sparked your interest for collaboration, please don't hesitate to reach out
              to me.
            </p>
            <p>
              Here is my contact information, listed in order of quickest response time and
              likelihood that I won't miss it.
            </p>
          </Card>
          <div className="lg:col-end-8 col-span-3 space-y-6 pl-6">
            <div>
              <h2 className="font-semibold">Email:</h2>
              <a href="mailto:jirulak02@gmail.com" className="underline">
                jirulak02@gmail.com
              </a>
            </div>
            <div>
              <h3>LinkedIn:</h3>
              <a
                href="https://www.linkedin.com/in/ji%C5%99%C3%AD-%C5%A1ime%C4%8Dek-a95b5027b/"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Jiří Šimeček
              </a>
            </div>
            <div>
              <h4>Instagram:</h4>
              <a
                href="https://www.instagram.com/jirulak02/"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                @jirulak02
              </a>
            </div>
            <div>
              <h4>Phone:</h4>
              <a href="tel:+420777898501" className="underline">
                777 898 501
              </a>
            </div>
          </div>
        </section>
      </Container>
      <div className="mb-4 text-center absolute w-full bottom-16">
        <h1 className="font-normal">{"</Contact>"}</h1>
      </div>
    </>
  );
}
