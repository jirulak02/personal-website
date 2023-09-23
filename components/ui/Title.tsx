import Image from "next/image";

type TitleProps = {
  title: string;
};

export default function Title({ title }: TitleProps) {
  return (
    <div className="relative h-24 sm:h-36 md:h-48 lg:h-56">
      <div className="absolute z-10 flex h-full w-full items-center justify-center text-neutral-200">
        <h1 className="pb-5">{title}</h1>
      </div>
      <Image
        src="/brick-wall.png"
        className="select-none"
        fill
        alt=""
        priority
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
      />
    </div>
  );
}
