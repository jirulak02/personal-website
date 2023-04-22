"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import classes from "./Header.module.css";

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

function Header({ normal }: HeaderProps) {
	const [open, setOpen] = useState(false);

	function toggleHandler() {
		setOpen((prevState) => !prevState);
	}

	return (
		<header
			className={`${
				normal ? "fixed z-30" : "absolute top-0 z-50"
			} w-full sm:justify-right bg-neutral-100 sm:border-b-2 sm:border-slate-800`}
		>
			<div className="max-w-6xl m-auto flex justify-between h-16 items-center border-b-2 border-slate-800 sm:border-none">
				{normal ? (
					<Link
						className="font-semibold text-base sm:text-xl md:text-2xl px-3 py-2"
						href="/"
					>
						Jiří Šimeček
					</Link>
				) : (
					<a
						className="font-semibold text-base sm:text-xl md:text-2xl px-3 py-2"
						href="/"
					>
						Jiří Šimeček
					</a>
				)}
				<div
					className="p-5 sm:hidden cursor-pointer"
					onClick={toggleHandler}
				>
					<Image
						src="/Menu icon.png"
						width="28"
						height="20"
						alt="Hamburger toggle menu icon"
						priority
					/>
				</div>
				<nav className="space-x-1 hidden sm:flex">
					{links.map((link) =>
						normal ? (
							<Link
								key={link.path}
								className="px-3 py-2 font-medium border-b-2 border-neutral-100 hover:border-neutral-800"
								href={link.path}
							>
								{link.name}
							</Link>
						) : (
							<a
								key={link.path}
								className="px-3 py-2 font-medium border-b-2 border-neutral-100 hover:border-neutral-800"
								href={link.path}
							>
								{link.name}
							</a>
						)
					)}
				</nav>
			</div>
			{open && (
				<nav className={classes.drop}>
					{links.map((link) =>
						normal ? (
							<Link
								key={link.path}
								className="py-4 block sm:hidden text-center font-medium border-b border-neutral-800 hover:bg-neutral-200"
								href={link.path}
								onClick={toggleHandler}
							>
								{link.name}
							</Link>
						) : (
							<a
								key={link.path}
								className="py-4 block sm:hidden text-center font-medium border-b border-neutral-800 hover:bg-neutral-200"
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

export default Header;
