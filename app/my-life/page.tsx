import Story from "@/components/MyLifePage/Story";
import Container from "@/components/layout/Container";
import ScrollUp from "@/components/layout/ScrollUp";
import Title from "@/components/ui/Title";

export const metadata = {
  title: "My life",
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
        <div className="mt-12 md:mt-20 mb-4 text-center">
          <h1 className="font-normal">{"</MyLife>"}</h1>
        </div>
      </Container>
    </>
  );
}
