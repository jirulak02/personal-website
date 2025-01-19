import Image from "next/image";

import Copyright from "../ui/Copyright";
import ThemedIcon from "../ui/ThemedIcon";

const links = [
  {
    name: "GitHub",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    darkSrc: "/github-logo.png",
    href: "https://github.com/jirulak02",
  },
  {
    name: "LinkedIn",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
    href: "https://www.linkedin.com/in/jiří-šimeček",
  },
  {
    name: "Instagram",
    src: "/instagram-logo.png",
    href: "https://www.instagram.com/jirulak02",
  },
  { name: "Mail", src: "/mail-logo.png", href: "mailto:jirulak02@gmail.com" },
  { name: "Phone", src: "/phone-logo.png", href: "tel:+420777898501" },
];

export default function Footer() {
  return (
    <footer className="sm:justify-right z-10 mt-auto w-full border-t-2 border-fgColor bg-bgColor text-fgColor">
      <div className="m-auto flex h-16 max-w-6xl items-center justify-between px-3">
        <div>
          <Copyright />
        </div>
        <div className="flex gap-4">
          {links.map((link) => (
            <a href={link.href} key={link.name} target="_blank" rel="noopener noreferrer">
              {link.darkSrc ? (
                <ThemedIcon
                  alt={link.name}
                  width={25}
                  height={25}
                  src={link.src}
                  darkSrc={link.darkSrc}
                />
              ) : (
                <Image alt={link.name} width="25" height="25" src={link.src} />
              )}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
