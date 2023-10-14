import Image from "next/image";

export default function Title({ title }: { title: string }) {
  return (
    <div className="relative h-24 sm:h-36 md:h-48 lg:h-56">
      <div className="absolute z-10 flex h-full w-full items-center justify-center text-neutral-200">
        <h1 className="pb-5">{title}</h1>
      </div>
      <Image src="/brick-wall.png" className="select-none" fill alt="" priority />
    </div>
  );
}
