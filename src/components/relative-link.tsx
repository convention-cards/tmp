"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function RelativeLink({
  href,
  ...props
}: React.ComponentProps<typeof Link>) {
  const path = usePathname() ?? "/";
  return <Link {...props} href={path + href.toString()} />;
}
