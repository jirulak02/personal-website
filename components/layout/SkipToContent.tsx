"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SkipToContent() {
  const pathname = usePathname();

  return (
    <Link href={`${pathname}#content-start`} className="sr-only">
      Skip to content
    </Link>
  );
}
