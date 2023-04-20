import Image from "next/image";
import Circle from "../ui/Circle";

const skills = [
	{ name: "TypeScript", amount: 65 },
	{ name: "JavaScript", amount: 69 },
	{ name: "C", amount: 51 },
	{ name: "Python", amount: 43 },
	{ name: "Java", amount: 36 },
	{ name: "SQL", amount: 39 },
];

const tools = [
	{
		name: "React.js",
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
	},
	{
		name: "Next.js",
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
	},
	{
		name: "Node.js",
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
	},
	{
		name: "Tailwindcss",
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
	},
	{
		name: "MongoDB",
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
	},
	{
		name: "Express.js",
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
	},
	{
		name: "Git",
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
	},
	{
		name: "Redux",
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
	},
	{
		name: "Jest",
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
	},
];

export default function Skills() {
	return (
		<>
			<div className="flex justify-center text-center space-x-3 mb-12">
				{skills.map((skill) => (
					<Circle
						key={skill.name}
						name={skill.name}
						amount={skill.amount}
					/>
				))}
			</div>
			<div className="flex justify-center text-center space-x-3 mb-24">
				{tools.map((tool) => (
					<Image
						key={tool.name}
						alt={`${tool.name} logo`}
						width="40"
						height="40"
						src={tool.src}
					/>
				))}
			</div>
		</>
	);
}
