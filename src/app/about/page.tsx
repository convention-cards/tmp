import Link from "next/link";

export const metadata = {
  title: "About",
};

export default function About() {
  return (
    <div className="relative overflow-hidden py-8">
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-prose text-justify text-lg">
          <h1>
            <span className="block text-center text-lg font-semibold text-indigo-600">
              Introducing
            </span>
            <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              ConventionCards
            </span>
          </h1>
          <p className="mt-8 text-xl leading-8 text-gray-500">
            This website allows a partnership&apos;s to manage their system
            online and allows for the exporting of the system in various
            formats, including many common NBO convention cards.
          </p>
        </div>
        <div className="prose prose-lg prose-indigo mx-auto mt-6 text-justify text-gray-500">
          <p>
            This website was designed and built by Aaron Hutton, a software
            developer and England Under 26 player. I realised the pain involved
            in managing large system files and convention cards for a range of
            partnerships and thought the process could use some modernisation.
          </p>
          <p>
            The website can manage all aspects of a system, it has been
            specifically designed for bridge bidding so includes many custom
            bidding aspects, like a carding section or specific defence
            sections.
          </p>
          <p>
            When the system has been built you can use the convention card views
            to generate a link to an NBO convention card which will
            automatically update as you make changes to the system. No need to
            check if the convention card is still up to date before a
            tournament.
          </p>
          <p>
            If you have any suggestions or requests or would like to integrate
            your website feel free to reach out from the{" "}
            <Link href="/contact">Contact Us</Link> page.
          </p>
        </div>
      </div>
    </div>
  );
}
