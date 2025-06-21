import Card from "../../ui/Card";

export default function Greeting() {
  return (
    <section className="grid grid-cols-1 gap-8 py-12 md:grid-cols-2">
      <Card className="max-w-2xl">
        <h3>Greetings</h3>
        <p>
          Welcome to my personal website! My name is Jiří and I am a motivated software engineer
          with a passion for coding, problem-solving and design.
        </p>
        <p>Hope you enjoy my website.</p>
      </Card>
    </section>
  );
}
