import Link from "next/link";

export default function Button() {
  return (
    <div className="text-center">
      <Link href="/contact" className="w-36 md:w-52 rounded-3xl inline-block">
        <div className="text-lg sm:text-xl md:text-3xl py-2 rounded-3xl bg-lime-800 text-neutral-100 border-2 border-lime-800 hover:bg-neutral-100 hover:text-lime-800">
          Contact me
        </div>
      </Link>
    </div>
  );
}
