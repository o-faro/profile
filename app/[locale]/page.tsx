/**
 * Homepage
 *
 * TODO: Load hero projects (isHero: true)
 * TODO: Load home.md content
 * TODO: Render hero project cards
 * TODO: Conditionally show link only if detailPage: true
 */

import BackButton from "@/components/backtotop/BackButton";
import { HeroList } from "@/components/hero/HeroList";
import { getHeroProjects } from "@/lib/content/filters";
import { getAllProjects, getPage } from "@/lib/content/loader";
import { ArrowDownIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

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
  const intro = await getPage(locale, "home.teaser");
  // console.log("allProjects", allProjects);
  return (
    <div className="w-full min-h-screen">
      <div className="flex flex-col min-h-screen place-items-center">
        <article
          className="prose w-full mx-auto my-16"
          contentEditable={false}
          dangerouslySetInnerHTML={{ __html: intro?.html ?? "Not found" }}
        />
        <Link href="#relevant_projects">
          <ArrowDownIcon className="w-10" />
        </Link>
      </div>
      <HeroList heroProjects={heroProjects} />
      <BackButton />
    </div>
  );
}
