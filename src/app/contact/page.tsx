import { DotPattern } from "components/dot-pattern";
import { ContactBox } from "page-content/contact";

export const metadata = {
  title: "Contact Us",
};

export default function About() {
  return (
    <main className="overflow-hidden">
      {/* Header */}
      <div className="">
        <div className="py-8 lg:py-16">
          <div className="relative z-10 mx-auto max-w-7xl pl-4 pr-8 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Get in touch
            </h1>
            <p className="mt-6 max-w-3xl text-xl text-gray-500">
              We&apos;d love hear to any comments or suggestions you have for
              the site. Please don&apos;t hesitate to get in touch.
            </p>
          </div>
        </div>
      </div>

      {/* Contact section */}
      <section className="relative" aria-labelledby="contact-heading">
        <div className="absolute h-1/2 w-full " aria-hidden="true" />
        {/* Decorative dot pattern */}
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <DotPattern
            id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
            className="absolute right-0 top-0 z-0 -translate-y-16 translate-x-1/2 transform sm:translate-x-1/4 md:-translate-y-24 lg:-translate-y-72"
            orientation="vertical"
          />
        </div>
        <ContactBox />
      </section>
    </main>
  );
}
