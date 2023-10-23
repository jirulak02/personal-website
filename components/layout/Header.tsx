"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import ThemeSwitcher from "../utils/ThemeSwitcher";

const links = [
  { path: "/", name: "Home" },
  { path: "/my-life", name: "My life" },
  { path: "/hobbies", name: "Hobbies" },
  { path: "/projects", name: "Projects" },
  { path: "/blog", name: "Blog" },
  { path: "/contact", name: "Contact" },
];

type HeaderLinkProps = {
  className: string;
  href: string;
  children: string;
  onClick?: () => void;
};

export default function Header({ normal }: { normal: boolean }) {
  const pathname = usePathname();

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
      } md:justify-right fixed top-0 w-full bg-bgColor md:border-b-2 md:border-fgColor`}
    >
      <div className="relative m-auto flex h-16 max-w-6xl items-center justify-between border-b-2 border-fgColor md:border-none">
        <div className="flex items-center space-x-1">
          <HeaderLink
            className="z-10 px-3 py-2 text-base font-semibold sm:text-xl md:text-2xl"
            href="/"
          >
            Jiří Šimeček
          </HeaderLink>
          <ThemeSwitcher />
        </div>
        <nav className="hidden space-x-1 md:flex">
          {links.map((link) => (
            <HeaderLink
              key={link.path}
              className={`border-b-2 px-3 py-2 font-medium hover:border-fgColor ${
                link.path === "/"
                  ? pathname === link.path
                    ? "border-fgColor"
                    : "border-bgColor"
                  : pathname.startsWith(link.path)
                  ? "border-fgColor"
                  : "border-bgColor"
              }`}
              href={link.path}
            >
              {link.name}
            </HeaderLink>
          ))}
        </nav>
        <details className="group absolute top-0 w-full md:hidden" id="navDropdown">
          <summary className="absolute right-0 m-0.5 cursor-pointer list-none p-5 marker:hidden">
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
          </summary>
          <nav className="absolute top-16 w-full origin-top bg-bgColor group-open:animate-[dropdown_200ms_ease-out_forwards] motion-reduce:animate-none">
            {links.map((link) => (
              <HeaderLink
                key={link.path}
                className="block border-b border-fgColor py-4 text-center font-medium hover:bg-secColor md:hidden"
                href={link.path}
                onClick={() => {
                  const navDropdown = document.getElementById("navDropdown") as HTMLDetailsElement;
                  navDropdown.open = false;
                }}
              >
                {link.name}
              </HeaderLink>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
