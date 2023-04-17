import Link from "next/link";
import React from "react";

const links = [
	{ path: "/", name: "Home" },
	{ path: "/my-life", name: "My life" },
	{ path: "/hobbies", name: "Hobbies" },
	{ path: "/projects", name: "Projects" },
	{ path: "/contact", name: "Contact" },
];

export default function Header() {
	return (
		<header className="z-10 border-b-2 border-slate-800 w-full sm:justify-right fixed bg-neutral-100">
			<div className="max-w-6xl m-auto flex justify-between h-16 items-center">
				<Link className="font-semibold text-2xl" href="/">
					Jiří Šimeček
				</Link>
				<nav>
					<ul className="flex space-x-1">
						{links.map((link) => (
							<li key={link.path}>
								<Link
									className="px-3 py-2 font-medium hover:border-b-2 border-neutral-800"
									href={link.path}
								>
									{link.name}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
}
