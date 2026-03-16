import { LanguageSwitcher } from "@/components/languageswitcher/LanguageSwitcher";
import clsx from "clsx";
import Link from "next/link";
import { ReactNode } from "react";

export default async function LodacleLayout({
  children,
  headline,
  params,
}: Readonly<{
  children: ReactNode;
  headline: ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  return (
    <div className="flex min-h-screen flex-col px-2 sm:px-4 sm:py-2 2xl:px-32">
      <header className="bg-canvas flex flex-row gap-6 2xl:gap-16">
        <Link href={`/${locale}`}>Start</Link>
        <LanguageSwitcher params={params} />
      </header>
      <main
        className={clsx(
          "main-padding",
          "flex grow flex-col md:w-full md:flex-col md:justify-between"
        )}
      >
        <div className="w-full shrink-0">{headline}</div>

        <div className="min-h-screen grow flex-row">{children}</div>
      </main>
      <footer className="bg-canvas">Footer</footer>
    </div>
  );
}
