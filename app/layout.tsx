import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Personal Homepage",
  description: "Personal homepage and technical showcase",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: "de" | "en" }>;
}>) {
  return (
    <html lang="en" className="h-screen scroll-smooth">
      <body className="bg-canvas text-muted h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
