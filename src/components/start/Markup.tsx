import Link from "next/link";
import { LanguageSwitcher } from "../languageswitcher/LanguageSwitcher";
import { ReactNode } from "react";
import MainTeaser from "./MainTeaser";

export default async function Markup({
  params,
  children,
}: {
  params: Promise<{ locale: string }>;
  children: ReactNode;
}) {
  const { locale } = await params;
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex flex-row gap-6 bg-cyan-800">
        <Link href={`/${locale}`}>Start</Link>
        <LanguageSwitcher params={params} />
      </header>
      <main className="flex grow flex-col md:w-full md:flex-row md:justify-between">
        <div className="w-full shrink-0 md:w-64 lg:w-sm xl:w-sm 2xl:w-md">
          <MainTeaser locale={locale} />
        </div>

        <div className="min-h-screen grow flex-row">{children}</div>
      </main>
      <footer className="bg-cyan-800">Footer</footer>
    </div>
  );
}
