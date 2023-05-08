import { DocumentPlusIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export function NewSystemItem() {
  return (
    <Link
      className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      href="/system/new"
    >
      <DocumentPlusIcon className="mx-auto h-12 w-12 text-gray-400" />
      <span className="mt-2 block text-sm font-medium text-gray-900">
        Create a new system
      </span>
    </Link>
  );
}
