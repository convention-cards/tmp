import { DotPattern } from "components/dot-pattern";
import { LeftFeatures, RightFeatures } from "config/features";
import Image from "next/image";

export function FeaturesSection() {
  return (
    <div className="overflow-hidden py-16 lg:py-24">
      <div className="relative mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8">
        <DotPattern
          className="absolute left-full hidden -translate-x-1/2 -translate-y-1/4 transform lg:block"
          orientation="vertical"
          id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
        />

        <div className="relative">
          <h2 className="text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            The modern way to manage your bidding system
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-500">
            No need for pages of notes on Google Docs. Define your bids using
            our custom interface and have your convention cards updated
            automatically.
          </p>
        </div>

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
          <div className="relative">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Collaborate with your partners
            </h3>
            <p className="mt-3 text-lg text-gray-500">
              Systems can be shared with an unlimited number of partners, all of
              whom can read and edit the system.
            </p>

            <dl className="mt-10 space-y-10">
              {LeftFeatures.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                    <div className="absolute flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white">
                      <item.icon className="h-8 w-8" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                      {item.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {item.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative -mx-4 mt-10 lg:mt-0" aria-hidden="true">
            <DotPattern
              className="absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden"
              orientation="horizontal"
              id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
            />
            <Image
              className="relative mx-auto"
              width={490}
              height={300}
              src="/assets/conventioncards-editors.jpg"
              alt="The editors table in the system builder"
            />
          </div>
        </div>

        <DotPattern
          className="absolute right-full hidden translate-x-1/2 translate-y-12 transform lg:block"
          orientation="vertical"
          id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
        />

        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-8">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Always in the loop
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                ex obcaecati natus eligendi delectus, cum deleniti sunt in
                labore nihil quod quibusdam expedita nemo.
              </p>

              <dl className="mt-10 space-y-10">
                {RightFeatures.map((item) => (
                  <div key={item.id} className="relative">
                    <dt>
                      <div className="absolute flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white">
                        <item.icon className="h-8 w-8" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                        {item.name}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      {item.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative -mx-4 mt-10 lg:col-start-1 lg:mt-0">
              <DotPattern
                className="absolute left-1/2 -translate-x-1/2 -translate-y-4 transform lg:hidden"
                orientation="horizontal"
                id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
              />

              <Image
                className="relative mx-auto"
                width={490}
                height={300}
                src="/assets/conventioncards-random.png"
                alt="Feature picture"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
