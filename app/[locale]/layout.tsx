import Markup from "@/components/start/Markup";
import { ReactNode } from "react";

export default function LodacleLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ locale: "de" | "en" }>;
}>) {
  return <Markup params={params}>{children}</Markup>;
}
