import Circle from "../ui/Circle";

const skills = [
	{ name: "TypeScript", amount: 55 },
	{ name: "JavaScript", amount: 59 },
	{ name: "HTML", amount: 73 },
	{ name: "CSS", amount: 64 },
	{ name: "C", amount: 51 },
	{ name: "Python", amount: 43 },
];

export default function Skills() {
	return (
		<div className="flex justify-center text-center space-x-3 mb-24">
			{skills.map((skill) => (
				<Circle
					key={skill.name}
					name={skill.name}
					amount={skill.amount}
				/>
			))}
		</div>
	);
}
