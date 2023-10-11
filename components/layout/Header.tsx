"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "../utils/ThemeSwitcher";

const links = [
  { path: "/", name: "Home" },
  { path: "/my-life", name: "My life" },
  { path: "/hobbies", name: "Hobbies" },
  { path: "/projects", name: "Projects" },
  { path: "/contact", name: "Contact" },
];

type HeaderLinkProps = {
  className: string;
  href: string;
  children: string;
  onClick?: () => void;
};

export default function Header({ normal }: { normal: boolean }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const toggleHandler = () => {
    setOpen((prevState) => !prevState);
  };

  const HeaderLink = ({ className, href, children, onClick }: HeaderLinkProps) => {
    return normal ? (
      <Link href={href} className={className} onClick={onClick}>
        {children}
      </Link>
    ) : (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    );
  };

  return (
    <header
      className={`${
        normal ? "z-30" : "z-50"
      } sm:justify-right fixed top-0 w-full bg-bgColor sm:border-b-2 sm:border-fgColor`}
    >
      <div className="m-auto flex h-16 max-w-6xl items-center justify-between border-b-2 border-fgColor sm:border-none">
        <div className="flex items-center space-x-1">
          <HeaderLink className="px-3 py-2 text-base font-semibold sm:text-xl md:text-2xl" href="/">
            Jiří Šimeček
          </HeaderLink>
          <ThemeSwitcher />
        </div>
        <div className="cursor-pointer p-5 sm:hidden" onClick={toggleHandler}>
          <svg
            width="28"
            height="20"
            viewBox="0 0 28 20"
            fill="rgb(var(--foreground-rgb))"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="28" height="4" rx="2" />
            <rect y="8" width="28" height="4" rx="2" />
            <rect y="16" width="28" height="4" rx="2" />
          </svg>
        </div>
        <nav className="hidden space-x-1 sm:flex">
          {links.map((link) => (
            <HeaderLink
              key={link.path}
              className={`border-b-2 border-bgColor px-3 py-2 font-medium hover:border-fgColor ${
                pathname === link.path && "border-fgColor"
              }`}
              href={link.path}
            >
              {link.name}
            </HeaderLink>
          ))}
        </nav>
      </div>
      {open && (
        <nav className="origin-top animate-[dropdown_200ms_ease-out_forwards] motion-reduce:animate-none">
          {links.map((link) => (
            <HeaderLink
              key={link.path}
              className="block border-b border-fgColor py-4 text-center font-medium hover:bg-secColor sm:hidden"
              href={link.path}
              onClick={toggleHandler}
            >
              {link.name}
            </HeaderLink>
          ))}
        </nav>
      )}
    </header>
  );
}
