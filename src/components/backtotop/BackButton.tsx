"use client";

import { useRouter } from "next/navigation";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/solid";

export default function BackButton({
  direction = "up",
}: {
  direction?: "up" | "right" | "left";
}) {
  const router = useRouter();
  let Icon = ArrowUpIcon;

  if (direction === "right") {
    Icon = ArrowRightIcon;
  }
  if (direction === "left") {
    Icon = ArrowLeftIcon;
  }

  return (
    <Icon className="my-10 w-10 cursor-pointer" onClick={() => router.back()} />
  );
}
