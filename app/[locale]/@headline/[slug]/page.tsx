import { getPageContent } from "@/lib/content/loader";
import { HeroProject } from "@/lib/content/types";
import { getTranslations } from "next-intl/server";

export default async function Headline({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const ast = await getPageContent(locale, slug);
  const frontmatter: HeroProject | null = ast?.frontmatter ?? null;
  if (!frontmatter) {
    return null;
  }
  const { employmentTypeText, agencyOrPartner, clientOrganization } =
    frontmatter;
  const t = await getTranslations("projects.slug"); //projects.slug.alt
  const title = t("title");
  const alt = t("alt");

  return (
    <section className="prose headline">
      <h1>
        {title} {frontmatter.title}
      </h1>
      <h2>{frontmatter.contextText}</h2>
      <p>
        {t("role", {
          employmentTypeText: employmentTypeText || alt,
          agencyOrPartner: agencyOrPartner || alt,
          clientOrganization: clientOrganization || alt,
        })}
      </p>
    </section>
  );
}
