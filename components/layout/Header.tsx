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

type HeaderProps = {
  normal: boolean;
};

export default function Header({ normal }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const toggleHandler = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <header
      className={`${
        normal ? "fixed z-30" : "absolute top-0 z-50"
      } sm:justify-right bg-bgColor sm:border-fgColor w-full sm:border-b-2`}
    >
      <div className="border-fgColor m-auto flex h-16 max-w-6xl items-center justify-between border-b-2 sm:border-none">
        <div className="flex items-center space-x-1">
          {normal ? (
            <Link className="px-3 py-2 text-base font-semibold sm:text-xl md:text-2xl" href="/">
              Jiří Šimeček
            </Link>
          ) : (
            <a className="px-3 py-2 text-base font-semibold sm:text-xl md:text-2xl" href="/">
              Jiří Šimeček
            </a>
          )}
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
          {links.map((link) =>
            normal ? (
              <Link
                key={link.path}
                className={`border-bgColor hover:border-fgColor border-b-2 px-3 py-2 font-medium ${
                  pathname === link.path && "border-fgColor"
                }`}
                href={link.path}
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.path}
                className="border-bgColor hover:border-fgColor border-b-2 px-3 py-2 font-medium"
                href={link.path}
              >
                {link.name}
              </a>
            )
          )}
        </nav>
      </div>
      {open && (
        <nav className="origin-top animate-[dropdown_200ms_ease-out_forwards] motion-reduce:animate-none">
          {links.map((link) =>
            normal ? (
              <Link
                key={link.path}
                className="border-fgColor hover:bg-secColor block border-b py-4 text-center font-medium sm:hidden"
                href={link.path}
                onClick={toggleHandler}
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.path}
                className="border-fgColor hover:bg-secColor block border-b py-4 text-center font-medium sm:hidden"
                href={link.path}
                onClick={toggleHandler}
              >
                {link.name}
              </a>
            )
          )}
        </nav>
      )}
    </header>
  );
}
