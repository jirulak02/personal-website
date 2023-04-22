import Image from "next/image";

const links = [
	{
		name: "GitHub",
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
		href: "https://github.com/jirulak02",
	},
	{
		name: "Instagram",
		src: "/Instagram logo.png",
		href: "https://www.instagram.com/jirulak02/",
	},
	{ name: "Mail", src: "/Mail logo.png", href: "mailto:jirulak02@gmail.com" },
	{ name: "Phone", src: "/Phone logo.png", href: "tel:+420777898501" },
];

export default function Footer() {
	const date = new Date().getFullYear();

	return (
		<footer className="z-10 mt-auto border-t-2 border-slate-800 w-full sm:justify-right bg-neutral-100">
			<div className="max-w-6xl m-auto flex justify-between h-16 items-center px-3">
				<div>
					<p>Copyright © {date}</p>
				</div>
				<div className="flex space-x-4">
					{links.map((link) => (
						<a
							href={link.href}
							key={link.name}
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image
								alt={link.name}
								width="25"
								height="25"
								src={link.src}
							/>
						</a>
					))}
				</div>
			</div>
		</footer>
	);
}
