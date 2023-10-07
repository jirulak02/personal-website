import Image from "next/image";

import Button from "../ui/Button";
import ThemedIcon from "../ui/ThemedIcon";

export default function Hero() {
  return (
    <section>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-7 lg:mt-16">
        <div className="col-span-4 space-y-3 text-center sm:mt-32">
          <h1>/the_next generati*n of tech t^lent.</h1>
          <h2>Jiří Šimeček</h2>
          <Button />
        </div>
        <div className="relative order-first col-span-3 m-auto h-52 w-52 sm:order-last sm:h-full sm:w-full lg:h-96">
          <div className="absolute right-0 m-auto h-full w-full sm:float-right lg:h-96 lg:w-96">
            <Image
              src="/HomePage/profile-picture.png"
              fill
              sizes="872px"
              className="rounded-full object-contain"
              alt="A handsome young man in a grass field."
              priority
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
            />
          </div>
        </div>
      </div>
      <div className="m-auto mt-5 flex h-10 w-full items-center justify-center lg:justify-end lg:pr-8">
        <div className="relative h-6 w-32 md:h-8 md:w-40 lg:h-9 lg:w-48">
          <ThemedIcon
            logo
            src="/HomePage/vse-logo.png"
            darkSrc="/HomePage/vse-logo-white.png"
            sizes="360px"
            alt="Logo of Prague University of Economics and Business."
          />
        </div>
        <div className="relative ml-4 h-6 w-20 md:h-8 lg:h-9 lg:w-28">
          <ThemedIcon
            logo
            src="/HomePage/42prague-logo.png"
            darkSrc="/HomePage/42prague-logo-white.png"
            sizes="186px"
            alt="Logo of 42 Prague school."
          />
        </div>
      </div>
    </section>
  );
}
