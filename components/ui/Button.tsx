import Link from "next/link";

export default function Button() {
	return (
		<div className="text-center rounded-3xl w-52 py-2 bg-lime-800 text-white m-auto border-2 border-lime-800 hover:bg-neutral-100 hover:text-lime-800 hover:border-2">
			<Link href="/contact" className="text-3xl">
				Contact me
			</Link>
		</div>
	);
}
