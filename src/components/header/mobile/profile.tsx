import { useUser } from "@clerk/nextjs";
import { BellIcon } from "@heroicons/react/20/solid";
import { UserAvatar } from "components/avatar";
import { UserNavigation } from "config/header-navigation";
import Link from "next/link";

export function MobileProfile() {
  const { user } = useUser();

  return (
    <div className="pb-2 pt-4">
      <div className="flex items-center px-5">
        <div className="flex-shrink-0">
          <UserAvatar size="xl" />
        </div>
        <div className="ml-3">
          <div className="text-base font-medium text-gray-800">
            {user?.fullName}
          </div>
          <div className="text-sm font-medium text-gray-500">
            {user?.primaryEmailAddress?.emailAddress}
          </div>
        </div>
        <button
          type="button"
          className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <span className="sr-only">View notifications</span>
          <BellIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div className="mt-3 space-y-1 px-2">
        {UserNavigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
