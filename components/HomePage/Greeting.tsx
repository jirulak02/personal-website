import Card from "../ui/Card";

export default function Greeting() {
	return (
		<section className="grid grid-cols-2 gap-8 py-12">
			<Card>
				<h3>Greetings</h3>
				<p>
					Welcome to my personal website! My name is Jiří and I am a
					young and motivated programmer with a passion for coding,
					problem-solving and design. I am currently seeking
					employment opportunities as a front-end developer and am
					excited to see what the future holds.
				</p>
				<p>Hope you find my website informative and fun.</p>
			</Card>
			<Card className="mt-52">
				<h3>Experience</h3>
				<p>
					I have experience working with a variety of programming
					languages, including the ones seen below. I'm not an expert
					in any of them, but I'm a quick learner and can become one,
					if you let me.
				</p>
				<p>
					My strong attention to detail and ability to think
					critically have helped me to excel in my projects, both
					individually and as part of a team.
				</p>
			</Card>
		</section>
	);
}
