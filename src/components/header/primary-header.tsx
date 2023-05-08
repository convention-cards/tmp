// "use client";

import { SignedIn, SignedOut } from "@clerk/nextjs/app-beta";
import {
  AuthenticatedNavigation,
  PublicNavigation,
} from "config/header-navigation";
import Link from "next/link";
import { AppLogo } from "./app-logo";
import { MobileMenu } from "./mobile/menu";
import { MobileMenuButton } from "./mobile/menu-button";
import { NotificationsDropdown } from "./protected/notifications-dropdown";
import { ProfileDropdown } from "./protected/profile-dropdown";
import { AuthButtons } from "./public/auth-buttons";

export function PrimaryHeader() {
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
      {/* <Popover> */}
      <div className="flex h-16 justify-between">
        <div className="flex px-2 lg:px-0">
          <AppLogo />
          <nav
            aria-label="Global"
            className="hidden lg:ml-6 lg:flex lg:items-center lg:space-x-4"
          >
            <SignedIn>
              {AuthenticatedNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-gray-900"
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
                  className="px-3 py-2 text-sm font-medium text-gray-900"
                >
                  {item.name}
                </Link>
              ))}
            </SignedOut>
          </nav>
        </div>

        <MobileMenuButton />
        <SignedOut>
          <AuthButtons />
        </SignedOut>

        <div className="hidden lg:ml-4 lg:flex lg:items-center">
          <SignedIn>
            <NotificationsDropdown />

            <ProfileDropdown />
          </SignedIn>
        </div>
      </div>
      <MobileMenu />
      {/* </Popover> */}
    </div>
  );
}
