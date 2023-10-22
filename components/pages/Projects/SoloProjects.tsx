import Image from "next/image";

import Card from "../../ui/Card";
import ThemedIcon from "../../ui/ThemedIcon";
import Button from "../../ui/Button";

export default function SoloProjects() {
  return (
    <section className="mt-8 lg:mt-12">
      <h2 className="ml-4 text-center font-semibold md:text-left">Top 3 solo projects</h2>
      <div className="mt-2 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
              style={{ width: "140px" }}
              src="/ProjectsPage/sudoku-1.png"
              width="420"
              height="552"
              quality={100}
              alt="Playing sudoku"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
            />
            <Image
              style={{ width: "140px" }}
              src="/ProjectsPage/sudoku-2.png"
              width="417"
              height="552"
              quality={100}
              alt="Victory screen of sudoku app"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
            />
          </div>
          <p>A fully functional Sudoku game application for Windows.</p>
          <a
            href="https://github.com/jirulak02/sudoku"
            className="block underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View the code{">"}
          </a>
          <Button href="https://github.com/jirulak02/sudoku/raw/main/Sudoku.exe">
            Download game
          </Button>
        </Card>
        <Card className="mx-auto max-w-sm">
          <div className="flex items-center space-x-1">
            <ThemedIcon
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
              darkSrc="/HomePage/next.png"
              width={25}
              height={25}
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
          <div className="flex justify-center">
            <Image
              style={{ width: "280px" }}
              src="/ProjectsPage/matej-simecek.png"
              width="840"
              height="474"
              quality={100}
              alt="Business website for a client"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
            />
          </div>
          <p>A one page business website for a financial advisor.</p>
          <a
            href="https://github.com/jirulak02/matej-simecek"
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
        <Card className="mx-auto max-w-sm">
          <div className="flex items-center space-x-1">
            <ThemedIcon
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
              darkSrc="/HomePage/next.png"
              width={25}
              height={25}
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
              src="/ProjectsPage/zelene-staveni.png"
              width="840"
              height="474"
              quality={100}
              alt="Business website for a client"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
            />
          </div>
          <p>A business website for a client, who specialises in building green roofs.</p>
          <a
            href="https://github.com/jirulak02/zelene-staveni"
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
      </div>
    </section>
  );
}
