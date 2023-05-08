import Link from "next/link";

export function AuthButtons() {
  return (
    <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
      <Link
        href="/sign-in"
        className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
      >
        Login
      </Link>
      <Link
        href="/sign-up"
        className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
      >
        Try for free
      </Link>
    </div>
  );
}
