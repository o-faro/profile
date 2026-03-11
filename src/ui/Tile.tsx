import { ReactNode } from "react";

import { ArrowRightIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import Link from "next/link";

// use Link as optional parameter OR even button
export default function Tile({
  children,
  link,
  title,
}: {
  children: ReactNode;
  link: string;
  title: string;
}) {
  return (
    <Link
      aria-label={`View details for ${title}`}
      href={link}
      className={clsx(
        "tile prose content-padding",
        "hover:bg-surface-hover transition-colors",
        "flex h-full flex-col 2xl:justify-between 2xl:odd:justify-self-end",
        "border-rim text-muted mb-5 border-0 no-underline",
        "lg:mb-0 lg:rounded-4xl",
        "lg:bg-surface lg:border-2"
      )}
    >
      {children}
      <ArrowRightIcon aria-hidden="true" className="ml-auto w-5" />
    </Link>
  );
}
