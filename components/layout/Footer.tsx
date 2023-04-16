export default function Footer() {
	const date = new Date().getFullYear();

	return (
		<footer className="border-t-2 border-slate-800 w-full sm:justify-right bg-neutral-100">
			<div className="max-w-6xl m-auto flex justify-between h-16 items-center">
				<div>
					<p>Copyright © {date}</p>
				</div>
				<div className="flex space-x-4">
					<a href="tel:+420777898501">777 898 501</a>
					<a href="mailto:jirulak02@gmail.com">jirulak02@gmail.com</a>
				</div>
			</div>
		</footer>
	);
}
