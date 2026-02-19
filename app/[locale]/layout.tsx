/**
 * Locale layout
 *
 * TODO: Implement generateStaticParams()
 * TODO: Set lang attribute on wrapper element
 */

import StartPage from "@/src/components/start/startPage";

export default async function RootLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode }> & {
  params: Promise<{ locale: string }>;
}) {
  return <StartPage params={params}>{children}</StartPage>;
}
