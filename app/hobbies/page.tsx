import HobbiesList from "@/components/pages/Hobbies/HobbiesList";
import Container from "@/components/layout/Container";
import ScrollUp from "@/components/layout/ScrollUp";
import Title from "@/components/ui/Title";

export const metadata = {
  title: "Hobbies | Jiří Šimeček",
  description:
    "Showcase of my personal hobbies and interests with my biggest achievement in that field.",
};

export default function Hobbies() {
  return (
    <>
      <ScrollUp />
      <Title title="<Hobbies>" />
      <Container>
        <HobbiesList />
        <Title title="</Hobbies>" bottom />
      </Container>
    </>
  );
}
