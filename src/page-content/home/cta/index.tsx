import Link from "next/link";

export function CallToAction() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-6 lg:flex lg:items-center lg:justify-between lg:py-24 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
          <span className="block">Ready to build a system?</span>
          <span className="block text-indigo-600">
            Start your free trial today.
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link
              href="/sign-up"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
