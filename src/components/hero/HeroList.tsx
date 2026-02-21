import { HeroProjectWithContent } from "@/lib/content/types";
// TODO should @ point to src?
import Tile from "@/ui/Tile";
import clsx from "clsx";

export function HeroList({
  heroProjects,
}: {
  heroProjects: HeroProjectWithContent[];
}) {
  return (
    <>
      <h2
        id="relevant_projects"
        className="place-self-center self-center text-3xl font-semibold"
      >
        Relevant Projects
      </h2>
      <section
        className={clsx(
          "content-around",
          "lg:m-12 lg:grid lg:grid-cols-1 lg:gap-10",
          "xl:m-12 xl:grid-cols-2 xl:space-y-0 xl:space-x-0",
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
      </section>
    </>
  );
}
