import type { Metadata } from "next";
import { Rokkitt } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { BreakpointIndicator } from "@/components/debug/BreakpointIndicator";

export const metadata: Metadata = {
  title: "Personal Homepage",
  description: "Personal homepage and technical showcase",
};

const rokkitt = Rokkitt({
  subsets: ["latin"],
  weight: "300",
  display: "swap",
  variable: "--font-rokkitt",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={clsx("h-screen scroll-smooth", rokkitt.variable)}
    >
      <body className="bg-canvas text-muted h-screen antialiased">
        {children}
        {process.env.NODE_ENV !== "production" && <BreakpointIndicator />}
      </body>
    </html>
  );
}
