/**
 * Archive page
 *
 * TODO: Load archive projects (showInArchive: true)
 * TODO: Sort by date (newest first)
 * TODO: Render chronological list
 * TODO: Link to detail pages only if detailPage: true
 */

// TODO: Add archive page component here

export async function generateStaticParams() {
  return [{ locale: "de" }, { locale: "en" }];
}

export default function Page() {
  return null;
}
