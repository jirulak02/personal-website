import Image from "next/image";

import Card from "../../ui/Card";
import ThemedIcon from "../../ui/ThemedIcon";
import ExternalLink from "@/components/ui/ExternalLink";

export default function GroupProjects() {
  return (
    <section className="mt-20">
      <h2 className="ml-4 text-center font-semibold md:text-left">Top 3 group projects</h2>
      <div className="mt-2 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card reveal className="mx-auto max-w-sm">
          <div className="flex items-center space-x-1">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              width="25"
              height="25"
              alt="JavaScript language logo"
            />
            <h4>Rugby Říčany</h4>
          </div>
          <div className="flex justify-center">
            <Image
              style={{ width: "280px" }}
              src="/ProjectsPage/rugby-ricany.png"
              width="840"
              height="474"
              quality={100}
              alt="Display of previous matches on the website"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
            />
          </div>
          <p>
            A website for our local rugby team. My part was loading matches from Google Sheets with
            limited code capabilities, because of the CMS resources.
          </p>
          <div>
            <ExternalLink href="https://github.com/jirulak02/rugby-ricany">
              View the code
            </ExternalLink>
            <ExternalLink href="https://zwa7y.solidpixels.com/zapasy">
              Visit the website
            </ExternalLink>
          </div>
        </Card>
        <Card reveal className="mx-auto max-w-sm">
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
            <h4>DX Heroes</h4>
          </div>
          <div className="flex justify-center">
            <Image
              style={{ width: "280px" }}
              src="/ProjectsPage/dxheroes.png"
              width="840"
              height="474"
              quality={100}
              alt="Homepage with spline animation"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
            />
          </div>
          <p>
            Contributing to a website of a company that helps with the adoption of digital products.
            My part was for example implementing infinite scroll and search bar for filtering
            articles.
          </p>
          <div>
            <ExternalLink href="https://www.dxheroes.io/" friendly>
              Visit the website
            </ExternalLink>
          </div>
        </Card>
        <Card reveal className="mx-auto max-w-sm">
          <div className="flex items-center space-x-1">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
              width="25"
              height="25"
              alt="C language logo"
            />
            <h4>Bsq</h4>
          </div>
          <div className="flex min-w-max justify-between">
            <Image
              style={{ width: "128px" }}
              src="/ProjectsPage/bsq-1.png"
              width="384"
              height="543"
              quality={100}
              alt="Display of a map in terminal made of dots and zeros"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
            />
            <Image
              style={{ width: "140px" }}
              src="/ProjectsPage/bsq-2.png"
              width="420"
              height="543"
              quality={100}
              alt="The same map filled with x's in place of the biggest gap"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
            />
          </div>
          <p>
            A program that finds space for the largest square and inserts 'x' characters in it's
            place.
          </p>
          <div>
            <ExternalLink href="https://github.com/jirulak02/42-piscine/tree/main/bsq">
              View the code
            </ExternalLink>
          </div>
        </Card>
      </div>
    </section>
  );
}
