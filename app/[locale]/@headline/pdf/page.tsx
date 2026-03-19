export default function Headline({
  params,
}: {
  params: Promise<{ locale: "de" | "en" }>;
}) {
  params;
  return (
    <section className="prose headline">
      <h1>PDF Generator</h1>
      <h2>CV downloadable as PDF</h2>
    </section>
  );
}
