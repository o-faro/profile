import MainTeaser from "@/components/start/MainTeaser";

export default async function Headline({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <MainTeaser locale={locale} />;
}
