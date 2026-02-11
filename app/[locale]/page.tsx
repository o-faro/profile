/**
 * Homepage
 *
 * TODO: Load hero projects (isHero: true)
 * TODO: Load home.md content
 * TODO: Render hero project cards
 * TODO: Conditionally show link only if detailPage: true
 */

import { getHeroProjects } from "@/src/lib/content/filters";
import { getAllProjects } from "@/src/lib/content/loader";
import { ProjectWithContent } from "@/src/lib/content/types";
import { Suspense } from "react";

// TODO: Add homepage component here

export async function generateStaticParams() {
  return [{ locale: "de" }, { locale: "en" }];
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: "en" | "de" }>;
}) {
  const { locale } = await params;
  const allProjects = await getAllProjects(locale);
  const heroProjects = getHeroProjects(allProjects);
  console.log("allProjects", allProjects);
  return (
    <div>
      HP Test {locale}
      <Suspense></Suspense>
      <HeroList heroProjects={heroProjects} />
    </div>
  );
}

export function HeroList({
  heroProjects,
}: {
  heroProjects: ProjectWithContent[];
}) {
  return (
    <ul>
      {heroProjects.map((project) => {
        return <li key={project.id}>{project.title}</li>;
      })}
    </ul>
  );
}
