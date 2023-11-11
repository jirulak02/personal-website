import Image from "next/image";

export default function Title({
  title,
  bottom,
  id,
}: {
  title: string;
  bottom?: boolean;
  id?: string;
}) {
  if (bottom) {
    return (
      <div className="mb-4 mt-12 text-center md:mt-20">
        <p className="text-3xl font-normal sm:text-5xl md:text-6xl">{title}</p>
      </div>
    );
  }

  return (
    <div className="relative h-24 sm:h-36 md:h-48 lg:h-56">
      <div className="absolute z-10 flex h-full w-full items-center justify-center text-neutral-200">
        <h1 className="pb-5" id={id}>
          {title}
        </h1>
      </div>
      <Image src="/brick-wall.png" className="select-none" fill alt="" priority />
    </div>
  );
}
