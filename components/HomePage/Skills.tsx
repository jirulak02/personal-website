import Image from "next/image";

import Circle from "../animations/Circle";
import ThemedIcon from "../ui/ThemedIcon";

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
    darkSrc: "/HomePage/next.png",
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
    name: "Framer motion",
    src: "/HomePage/framer-motion.png",
  },
  {
    name: "Express.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    darkSrc: "/HomePage/express.png",
  },
  {
    name: "Git",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Jest",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
  },
];

export default function Skills() {
  return (
    <>
      <div className="mb-12 flex flex-wrap justify-center space-x-3 text-center">
        {skills.map((skill) => (
          <Circle key={skill.name} name={skill.name} amount={skill.amount} />
        ))}
      </div>
      <div className="mb-12 flex flex-wrap justify-center space-x-3 text-center lg:mb-20">
        {tools.map((tool) =>
          tool.darkSrc ? (
            <ThemedIcon
              key={tool.name}
              alt={`${tool.name} logo`}
              width={40}
              height={40}
              src={tool.src}
              darkSrc={tool.darkSrc}
            />
          ) : (
            <Image
              key={tool.name}
              src={tool.src}
              width="40"
              height="40"
              alt={`${tool.name} logo`}
            />
          )
        )}
      </div>
    </>
  );
}
