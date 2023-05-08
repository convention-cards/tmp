import { DocumentPlusIcon, PlusIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export function EmptySystems() {
  return (
    <div className="text-center">
      <DocumentPlusIcon className="mx-auto h-12 w-12 text-gray-400" />
      <h3 className="mt-2 text-sm font-medium text-gray-900">
        No bidding systems
      </h3>
      <p className="mt-1 text-sm text-gray-500">
        Get started by creating a system.
      </p>
      <div className="mt-6">
        <Link
          type="button"
          className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          href="/system/new"
        >
          <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          New System
        </Link>
      </div>
    </div>
  );
}
