import Link from "next/link";

export default function Button() {
  return (
    <div className="text-center">
      <Link href="/contact" className="inline-block w-36 rounded-3xl md:w-52">
        <div className="border-priColor bg-priColor hover:text-priColor rounded-3xl border-2 py-2 text-lg text-neutral-100 hover:bg-transparent sm:text-xl md:text-3xl">
          Contact me
        </div>
      </Link>
    </div>
  );
}
