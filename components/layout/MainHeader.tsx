import Link from "next/link";
import React from "react";

const links = [
	{ path: "/", name: "Home" },
	{ path: "/my-life", name: "My life" },
	{ path: "/hobbies", name: "Hobbies" },
	{ path: "/projects", name: "Projects" },
	{ path: "/contact", name: "Contact" },
];

export default function MainHeader() {
	return (
		<header className="border-b-2 border-slate-900 w-full sm:justify-right fixed">
			<div className="max-w-6xl m-auto flex justify-between h-20 items-center">
				<Link className="font-bold" href={"/"}>
					Jiří Šimeček
				</Link>
				<nav>
					<ul className="flex space-x-1">
						{links.map((link) => (
							<li>
								<Link
									className="rounded-lg px-3 py-2 font-medium hover:bg-slate-100 hover:text-slate-900"
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
