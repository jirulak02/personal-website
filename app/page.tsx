import Container from "@/components/layout/Container";
import ScrollUp from "@/components/layout/ScrollUp";
import AboutMe from "@/components/pages/Home/AboutMe";
import Greeting from "@/components/pages/Home/Greeting";
import Hero from "@/components/pages/Home/Hero";
import Skills from "@/components/pages/Home/Skills";
import Wow from "@/components/pages/Home/Wow";
import Wave from "@/components/ui/Wave";

export const metadata = {
  title: "Jiří Šimeček's personal portfolio website",
  description:
    "The most important information about me summed up, including my personality and coding experience.",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Container>
        <Hero />
        <Greeting />
        <Skills />
      </Container>
      <Wave />
      <AboutMe />
      <Wave rotated />
      <Wow />
    </>
  );
}
