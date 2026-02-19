import Link from "next/link";

// Server Component - no 'use client' directive needed
export async function LanguageSwitcher({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const otherLocale = locale === "en" ? "de" : "en";

  // Current path without locale
  // You'd need to reconstruct the path based on the current page

  return (
    <nav>
      <Link href={`/${otherLocale}`}>
        {otherLocale === "de" ? "Deutsch" : "English"}
      </Link>
    </nav>
  );
}
