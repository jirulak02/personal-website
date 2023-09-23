import Image from "next/image";

import Card from "../ui/Card";
import Reveal from "../animations/Reveal";

export default function SoloProjects() {
  return (
    <section className="mt-8 lg:mt-12">
      <h2 className="ml-4 text-center font-semibold md:text-left">Top 3 solo projects</h2>
      <div className="mt-2 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Reveal>
          <Card className="mx-auto max-w-sm">
            <div className="flex items-center space-x-1">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                width="25"
                height="25"
                alt="Python language logo"
              />
              <h4>Sudoku app</h4>
            </div>
            <div className="flex min-w-max justify-between">
              <Image
                src="/ProjectsPage/sudoku-1.png"
                width="140"
                height="184"
                quality={100}
                alt="Playing sudoku"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
              />
              <Image
                src="/ProjectsPage/sudoku-2.png"
                width="139"
                height="184"
                quality={100}
                alt="Victory screen of sudoku app"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
              />
            </div>
            <p className="pb-4">A fully functional Sudoku game application for Windows.</p>
            <a
              href="https://github.com/jirulak02/Sudoku"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View the code{">"}
            </a>
            <div className="text-center">
              <a
                href="https://github.com/jirulak02/Sudoku/raw/main/Sudoku.exe"
                className="inline-block w-48 rounded-3xl md:w-56"
              >
                <div className="rounded-3xl border-2 border-lime-800 bg-lime-800 py-2 text-lg text-neutral-200 hover:bg-neutral-200 hover:text-lime-800 sm:text-xl md:text-2xl">
                  Download game
                </div>
              </a>
            </div>
          </Card>
        </Reveal>
        <Reveal>
          <Card className="mx-auto max-w-sm">
            <div className="flex items-center space-x-1">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                width="25"
                height="25"
                alt="Nextjs logo"
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                width="25"
                height="25"
                alt="TypeScript language logo"
              />
              <h4>Matěj Šimeček</h4>
            </div>
            <div className="flex min-w-max flex-col justify-center">
              <Image
                style={{ width: "280px" }}
                src="/ProjectsPage/ms2.png"
                width="840"
                height="474"
                quality={100}
                alt="Business website for a client"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
              />
              <Image
                src="/ProjectsPage/matej-simecek.png"
                width="280"
                height="158"
                quality={100}
                alt="Business website for a client"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
              />
            </div>
            <p>A business website for a financial advisor.</p>
            <a
              href="https://github.com/jirulak02/Matej-simecek"
              className="block underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View the code{">"}
            </a>
            <a href="https://www.matejsimecek.cz/" className="underline" target="_blank">
              Visit the website{">"}
            </a>
          </Card>
        </Reveal>
        <Reveal>
          <Card className="mx-auto max-w-sm">
            <div className="flex items-center space-x-1">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                width="25"
                height="25"
                alt="Nextjs logo"
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                width="25"
                height="25"
                alt="TypeScript language logo"
              />
              <h4>Zelené stavění</h4>
            </div>
            <div className="flex justify-center">
              <Image
                style={{ width: "280px" }}
                src="/ProjectsPage/ms.png"
                width="560"
                height="316"
                quality={100}
                alt="Business website for a client"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
              />
            </div>
            <p>A business website for a client, who specialises in building green roofs.</p>
            <a
              href="https://github.com/jirulak02/Zelene-staveni"
              className="block underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View the code{">"}
            </a>
            <a href="https://www.zelenestaveni.cz/" className="underline" target="_blank">
              Visit the website{">"}
            </a>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
