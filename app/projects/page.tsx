import GroupProjects from "@/components/pages/Projects/GroupProjects";
import OtherProjects from "@/components/pages/Projects/OtherProjects";
import SoloProjects from "@/components/pages/Projects/SoloProjects";
import Container from "@/components/layout/Container";
import ScrollUp from "@/components/layout/ScrollUp";
import Title from "@/components/ui/Title";

export const metadata = {
  title: "Projects | Jiří Šimeček",
  description:
    "A portfolio of the best solo and best group coding projects that I have been a part of.",
};

export default function Projects() {
  return (
    <>
      <ScrollUp />
      <Title title="<Projects>" />
      <Container>
        <SoloProjects />
        <GroupProjects />
        <OtherProjects />
        <Title title="</Projects>" bottom />
      </Container>
    </>
  );
}
