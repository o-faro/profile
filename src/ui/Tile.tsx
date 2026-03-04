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
        "prose mb-5 flex h-full flex-col 2xl:justify-between",
        "2xl:bg-surface border-rim text-muted border-0 border-t-2 2xl:border-2 2xl:p-8",
        "hover:bg-surface-hover transition-colors 2xl:odd:justify-self-end",
        "no-underline lg:mb-0 xl:rounded-4xl xl:p-12"
      )}
    >
      {children}
      <ArrowRightIcon aria-hidden="true" className="ml-auto w-5" />
    </Link>
  );
}
