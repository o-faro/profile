/**
 * Homepage
 *
 * TODO: Load hero projects (isHero: true)
 * TODO: Load home.md content
 * TODO: Render hero project cards
 * TODO: Conditionally show link only if detailPage: true
 */

import { HeroList } from "@/src/components/hero/HeroList";
import { getHeroProjects } from "@/src/lib/content/filters";
import { getAllProjects } from "@/src/lib/content/loader";

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
  // console.log("allProjects", allProjects);
  return (
    <div className="w-full">
      <HeroList heroProjects={heroProjects} />
    </div>
  );
}
