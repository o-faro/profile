import { getPageContent } from "@/lib/content/loader";
import { HeroProject } from "@/lib/content/types";

export default async function Headline({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const ast = await getPageContent(locale, slug);
  const frontmatter: HeroProject | null = ast?.frontmatter ?? null;
  return frontmatter ? (
    <section className="prose headline">
      <h1>Projekt {frontmatter.title}</h1>
      <h2>{frontmatter.contextText}</h2>
      <p>
        {frontmatter.employmentTypeText} für {frontmatter.agencyOrPartner},
        Kunde {frontmatter.clientOrganization}{" "}
      </p>
    </section>
  ) : null;
}
