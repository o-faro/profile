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
    <div className="flex flex-col min-h-screen">
      <header className="bg-cyan-800 flex-row flex gap-6">
        <Link href={`/${locale}`}>Start</Link>
        <LanguageSwitcher params={params} />
      </header>
      <main className="grow flex-col md:flex-row flex md:w-full md:justify-between">
        <div className="w-full shrink-0 md:w-64 lg:w-sm xl:w-sm 2xl:w-md">
          <MainTeaser locale={locale} />
        </div>

        <div className="flex-row grow min-h-screen">{children}</div>
      </main>
      <footer className="bg-cyan-800">Footer</footer>
    </div>
  );
}
