import Link from "next/link";

import Container from "@/components/layout/Container";
import ScrollUp from "@/components/layout/ScrollUp";
import Card from "@/components/ui/Card";
import Title from "@/components/ui/Title";

export const metadata = {
  title: "Blog | Jiří Šimeček",
  description:
    "Read my articles about programming, careers, new technologies and other interesting topics.",
};

const articles = [
  {
    title: "Article 1",
    description: "Description 1",
    date: "2021-01-01",
    labels: ["label1", "label2"],
    link: "/blog/test",
  },
];
const firstArticle = articles.shift();

export default function Blog() {
  if (!firstArticle)
    return (
      <div className="absolute top-1/2 w-full -translate-y-1/2 p-3 text-center">
        <h2 className="font-semibold">There are no articles at this moment.</h2>
      </div>
    );

  return (
    <>
      <ScrollUp />
      <Title title="<Blog>" />
      <Container className="mb-40 mt-6 md:mt-12">
        <Card className="mx-auto mb-6 max-w-4xl md:mb-12">
          <h2 className="font-semibold">{firstArticle.title}</h2>
          <p className="text-xs">{firstArticle.date}</p>
          <p>{firstArticle.description}</p>
          <div className="flex items-center">
            {firstArticle.labels?.map((label) => (
              <div key={label} className="mr-2 rounded-md bg-shadowColor p-2 text-xs">
                {label}
              </div>
            ))}
            <Link href={firstArticle.link} className="ml-auto underline">
              Read the article{">"}
            </Link>
          </div>
        </Card>
        {articles.length > 0 && (
          <div className="mx-auto max-w-4xl">
            {articles.map((article) => (
              <div key={article.link} className="space-y-4">
                <hr />
                <div className="flex flex-col space-y-4 px-6">
                  <h2 className="font-semibold">{article.title}</h2>
                  <p className="text-xs">{article.date}</p>
                  <p>{article.description}</p>
                  <div className="flex items-center pb-4">
                    {article.labels?.map((label) => (
                      <div key={label} className="mr-2 rounded-md bg-shadowColor p-2 text-xs">
                        {label}
                      </div>
                    ))}
                    <Link href={article.link} className="ml-auto underline">
                      Read the article{">"}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            <hr />
          </div>
        )}
      </Container>
      <Title title="</Blog>" bottom />
    </>
  );
}
