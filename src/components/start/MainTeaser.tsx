import { getPage } from "@/lib/content/loader";
import { Locale } from "@/lib/content/types";

export default async function MainTeaser({ locale }: { locale: Locale }) {
  // md Home.md
  const mdContent = await getPage(locale, "home");
  return (
    <div
      className="main-teaser prose not-last-of-type:prose sticky top-0 mb-24 self-end"
      contentEditable="false"
      dangerouslySetInnerHTML={{
        __html: mdContent?.html ?? "no hero found",
      }}
    />
  );
}
