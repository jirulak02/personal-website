import Story from "@/components/pages/MyLife/Story";
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
      <Container className="mb-40">
        <Story />
      </Container>
      <Title title="</MyLife>" bottom />
    </>
  );
}
