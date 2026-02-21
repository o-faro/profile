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
        "prose mb-5 flex h-full flex-col justify-between",
        "bg-surface text-muted p-8",
        "hover:bg-surface-hover odd:justify-self-end",
        "lg:mb-0 xl:rounded-4xl xl:p-12"
      )}
    >
      {children}
      <ArrowRightIcon aria-hidden="true" className="ml-auto w-5" />
    </Link>
  );
}
