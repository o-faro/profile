import { HeroProjectWithContent } from "@/lib/content/types";
// TODO should @ point to src?
import Tile from "@/ui/Tile";

export function HeroList({
  heroProjects,
}: {
  heroProjects: HeroProjectWithContent[];
}) {
  return (
    <>
      <h2
        id="relevant_projects"
        className="text-3xl font-semibold self-center place-self-center"
      >
        Relevant Projects
      </h2>
      <section className="content-around lg:grid lg:grid-cols-1 xl:grid-cols-2 lg:gap-10 lg:m-12 xl:m-12 2xl:grid-cols-2 xl:space-x-0 xl:space-y-0 ">
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
