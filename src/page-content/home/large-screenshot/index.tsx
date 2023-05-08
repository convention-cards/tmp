import Image from "next/image";

export function LargeScreenshotSection() {
  return (
    <div className="relative mb-24 overflow-hidden pt-24">
      <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
        <div>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            A system builder like never before
          </p>
          <p className="mx-auto mt-5 max-w-prose text-xl text-gray-600">
            Our system builder allows you to describe any aspect of a modern
            system. Constructive and competitive auctions, conventions and
            carding.
          </p>
        </div>
        <div className="mt-12 -mb-10 sm:-mb-24 lg:-mb-80">
          <Image
            className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
            src="/assets/conventioncards-full.png"
            alt="A large screenshot of the ConventionCards system builder"
            width={1216}
            height={881}
          />
        </div>
      </div>
    </div>
  );
}
