import Container from "@/components/layout/Container";
import ScrollUp from "@/components/layout/ScrollUp";
import Title from "@/components/ui/Title";

export default function Blog() {
  return (
    <>
      <ScrollUp />
      <Title title="<Blog>" />
      <Container className="mb-40">Add a list of articles.</Container>
      <Title title="</Blog>" bottom />
    </>
  );
}
