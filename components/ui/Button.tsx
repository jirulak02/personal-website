import Link from "next/link";

export default function Button() {
	return (
		<div className="text-center">
			<Link href="/contact" className="w-52 rounded-3xl inline-block">
				<div className="text-3xl py-2 rounded-3xl bg-lime-800 text-white border-2 border-lime-800 hover:bg-neutral-100 hover:text-lime-800 hover:border-2">
					Contact me
				</div>
			</Link>
		</div>
	);
}
