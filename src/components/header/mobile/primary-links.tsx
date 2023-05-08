"use client";

import { SignedIn, SignedOut } from "@clerk/nextjs";
import {
  AuthenticatedNavigation,
  PublicNavigation,
} from "config/header-navigation";
import Link from "next/link";
import { AppLogo } from "../app-logo";

export function MobilePrimaryLinks() {
  return (
    <div className="pb-2 pt-3">
      <div className="flex items-center justify-between px-4">
        <AppLogo noFocus />
        <div className="-mr-2">
          {/* <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button> */}
        </div>
      </div>
      <div className="mt-3 space-y-1 px-2">
        <SignedIn>
          {AuthenticatedNavigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
            >
              {item.name}
            </Link>
          ))}
        </SignedIn>
        <SignedOut>
          {PublicNavigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
            >
              {item.name}
            </Link>
          ))}
        </SignedOut>
      </div>
    </div>
  );
}
