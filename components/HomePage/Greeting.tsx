import Reveal from "../animations/Reveal";
import Card from "../ui/Card";

export default function Greeting() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
      <Card>
        <h3>Greetings</h3>
        <p>
          Welcome to my personal website! My name is Jiří and I am a young and motivated software
          engineer with a passion for coding, problem-solving and design. I am currently working as
          a full-stack developer at DX Heroes.
        </p>
        <p>Hope you find my website informative and fun.</p>
      </Card>
      <Reveal>
        <Card className="md:mt-52">
          <h3>Experience</h3>
          <p>
            I have experience working with a variety of programming languages, including the ones
            seen below. I'm not an expert in any of them, but I'm a quick learner and strive to be
            better every day.
          </p>
          <p>
            My strong attention to detail and ability to think critically have helped me to excel in
            my projects, both individually and as part of a team.
          </p>
        </Card>
      </Reveal>
    </section>
  );
}
