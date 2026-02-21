import { ReactNode } from "react";

import { ArrowRightIcon } from "@heroicons/react/24/solid";
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
      className="prose odd:justify-self-end  mb-5 lg:mb-0 bg-[#1a273d] text-[#7e9bce]  hover:bg-[#0d1421] h-full p-8 xl:p-12 xl:rounded-4xl flex flex-col justify-between "
    >
      {children}
      <ArrowRightIcon aria-hidden="true" className="w-5 ml-auto" />
    </Link>
  );
}
