import { Divider } from "components/divider";
import { AppLogo } from "components/header/app-logo";
import { FooterNavigation } from "config/footer-navigation";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="z-10">
      <div className="mx-auto max-w-7xl overflow-hidden py-12 px-6 sm:py-16 lg:px-8">
        <Divider />
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {FooterNavigation.map((item) => (
            <div key={item.name} className="pb-6">
              <Link
                href={item.href}
                className="text-sm leading-6 text-gray-600 hover:text-gray-900"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-6 flex justify-center">
          <AppLogo />
        </div>
        <p className="mt-6 text-center text-xs leading-5 text-gray-500">
          &copy; {new Date().getFullYear()} Aaron Hutton. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
