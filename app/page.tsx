import AboutMe from "@/components/HomePage/AboutMe";
import Greeting from "@/components/HomePage/Greeting";
import Hero from "@/components/HomePage/Hero";
import Skills from "@/components/HomePage/Skills";
import Wow from "@/components/HomePage/Wow";
import Container from "@/components/layout/Container";
import ScrollUp from "@/components/layout/ScrollUp";
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
