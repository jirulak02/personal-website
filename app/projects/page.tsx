import Container from "@/components/layout/Container";
import ScrollUp from "@/components/layout/ScrollUp";
import OtherProjects from "@/components/pages/Projects/OtherProjects";
import SoloProjects from "@/components/pages/Projects/SoloProjects";
import WorkProjects from "@/components/pages/Projects/WorkProjects";
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
      <Title title="<Projects>" id="content-start" />
      <Container>
        <WorkProjects />
        <SoloProjects />
        <OtherProjects />
        <Title title="</Projects>" bottom />
      </Container>
    </>
  );
}
