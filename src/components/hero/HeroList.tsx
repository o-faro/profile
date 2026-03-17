import { HeroProjectWithContent } from "@/lib/content/types";

import Tile from "@/ui/Tile";
import clsx from "clsx";
import { useTranslations } from "next-intl";

export function HeroList({
  heroProjects,
}: {
  heroProjects: HeroProjectWithContent[];
}) {
  const t = useTranslations("projects.relevant");
  return (
    <section className="prose min-w-full">
      <h2 id="relevant_projects" className="mb-20">
        {t("title")}
      </h2>
      <div
        className={clsx(
          "hero-list",
          "content-indent",
          "lg:grid lg:grid-cols-1 lg:gap-10",
          "2xl:grid-cols-2"
        )}
      >
        {heroProjects.map((project) => {
          return (
            <Tile
              key={project.id}
              link={`/de/${project.id}`}
              title={project.title}
            >
              <article className="prose">
                <h3>{project.title}</h3>

                {project.narratives.cv.map((article, i) => {
                  return (
                    <ul key={i}>
                      {article.bodyText.map((listElement, index) => {
                        return <li key={index}>{listElement}</li>;
                      })}
                    </ul>
                  );
                })}
              </article>
            </Tile>
          );
        })}
      </div>
    </section>
  );
}
