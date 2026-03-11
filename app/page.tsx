import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto flex flex-col px-4 py-16">
        <h1 className="text-4xl font-bold">Personal Homepage</h1>
        <Link href={`/de`}>Zur deutschen Version</Link>
        <Link href={`/en`}>To english version</Link>
      </div>
    </main>
  );
}
