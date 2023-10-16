import Story from "@/components/pages/MyLifePage/Story";
import Container from "@/components/layout/Container";
import ScrollUp from "@/components/layout/ScrollUp";
import Title from "@/components/ui/Title";

export const metadata = {
  title: "My life | Jiří Šimeček",
  description:
    "A short look into my life, education and programming journey. It is made in a visual, dynamic string like way.",
};

export default function MyLife() {
  return (
    <>
      <ScrollUp />
      <Title title="<MyLife>" />
      <Container>
        <Story />
        <div className="mb-4 mt-12 text-center md:mt-20">
          <h1 className="font-normal">{"</MyLife>"}</h1>
        </div>
      </Container>
    </>
  );
}
