/**
 * Project detail page
 *
 * TODO: Implement generateStaticParams()
 * TODO: Load project by slug
 * TODO: Check detailPage: true, otherwise notFound()
 * TODO: Render project metadata and content
 * TODO: Use AST for section-based rendering
 */

import { getHeroProjects } from "@/src/lib/content/filters";
import { getAllProjects, getPageContent } from "@/src/lib/content/loader";

// TODO: Add detail page component here

export async function generateStaticParams() {
  const allProjectsDe = await getAllProjects("de");
  const allProjectsEn = await getAllProjects("en");
  const heroProjectsDe = getHeroProjects(allProjectsDe);
  const heroProjectsEn = getHeroProjects(allProjectsEn);
  const slugsDe = heroProjectsDe.map((hero) => hero.id);
  const slugsEn = heroProjectsEn.map((hero) => hero.id);
  const params = [
    ...slugsDe.map((slug) => ({ locale: "de", slug })),
    ...slugsEn.map((slug) => ({ locale: "en", slug })),
  ];
  return params;
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: "en" | "de"; slug: string }>;
}) {
  const { locale, slug } = await params;
  const heroDetail = await getPageContent(locale, slug);
  console.log(locale, slug, heroDetail);
  return (
    <section>
      <article
        contentEditable="false"
        dangerouslySetInnerHTML={{
          __html: heroDetail?.html ?? "no hero found",
        }}
      />
    </section>
  );
}
