import { LanguageSwitcher } from "../languageswitcher/LanguageSwitcher";
import { ReactNode } from "react";

export default function StartPage({
  params,
  children,
}: {
  params: Promise<{ locale: string }>;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-cyan-800">
        <LanguageSwitcher params={params} />
      </header>
      <main className="grow flex-col md:flex-row flex md:w-full md:justify-between">
        <div className="w-full shrink-0 md:w-64 lg:w-sm xl:w-sm 2xl:w-md self-start">
          main teaser
        </div>
        <div className="grow">{children}</div>
      </main>
      <footer className="bg-cyan-800">Footer</footer>
    </div>
  );
}
