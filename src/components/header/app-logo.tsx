"use client";

import { useAuth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

interface Props {
  noFocus?: boolean;
}

export function AppLogo({ noFocus = false }: Props) {
  const { userId } = useAuth();

  const url = userId !== null ? "/systems" : "/";

  return (
    <div className="flex flex-shrink-0 items-center">
      <Link href={url} tabIndex={noFocus ? -1 : 0}>
        <Image
          className="h-8 w-auto"
          src="/logo.svg"
          height={102}
          width={400}
          alt="ConventionCards Logo"
        />
      </Link>
    </div>
  );
}
