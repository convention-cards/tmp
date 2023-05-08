import Link from "next/link";

export const metadata = {
  title: "Privacy Policy",
};

export default function Privacy() {
  return (
    <div className="relative overflow-hidden py-8">
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-prose text-lg">
          <h1>
            <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              Privacy Policy
            </span>
          </h1>
        </div>
        <div className="prose prose-lg prose-indigo mx-auto mt-6 text-justify text-gray-500">
          <p>
            At ConventionCards one of our main priorities is the privacy of our
            visitors. This Privacy Policy document contains types of information
            that is collected and recorded by convention.cards and how we use
            it.
          </p>

          <p>
            If you have additional questions or require more information about
            our Privacy Policy, do not hesitate to contact us.
          </p>

          <h2>General Data Protection Regulation (GDPR)</h2>
          <p>We are a Data Controller of your information.</p>

          <p>
            ConventionCards legal basis for collecting and using the personal
            information described in this Privacy Policy depends on the Personal
            Information we collect and the specific context in which we collect
            the information:
          </p>
          <ul>
            <li>ConventionCards needs to perform a contract with you</li>
            <li>You have given ConventionCards permission to do so</li>
            <li>
              Processing your personal information is in ConventionCards
              legitimate interests
            </li>
            <li>ConventionCards needs to comply with the law</li>
          </ul>

          <p>
            ConventionCards will retain your personal information only for as
            long as is necessary for the purposes set out in this Privacy
            Policy. We will retain and use your information to the extent
            necessary to comply with our legal obligations, resolve disputes,
            and enforce our policies.
          </p>

          <p>
            If you are a resident of the European Economic Area (EEA), you have
            certain data protection rights. If you wish to be informed what
            Personal Information we hold about you and if you want it to be
            removed from our systems, please contact us.
          </p>
          <p>
            In certain circumstances, you have the following data protection
            rights:
          </p>
          <ul>
            <li>
              The right to access, update or to delete the information we have
              on you.
            </li>
            <li>The right of rectification.</li>
            <li>The right to object.</li>
            <li>The right of restriction.</li>
            <li>The right to data portability</li>
            <li>The right to withdraw consent</li>
          </ul>

          <h2>Log Files</h2>

          <p>
            ConventionCards follows a standard procedure of using log files.
            These files log visitors when they visit websites. All hosting
            companies do this and a part of hosting services&apos; analytics.
            The information collected by log files include internet protocol
            (IP) addresses, browser type, Internet Service Provider (ISP), date
            and time stamp, referring/exit pages, and possibly the number of
            clicks. These are not linked to any information that is personally
            identifiable. The purpose of the information is for analyzing
            trends, administering the site, tracking users&apos; movement on the
            website, and gathering demographic information.
          </p>

          <h2>Cookies and Web Beacons</h2>

          <p>
            Like any other website, ConventionCards uses &lsquo;cookies&rsquo;.
            These cookies are used to store information including visitors&apos;
            preferences, and the pages on the website that the visitor accessed
            or visited. The information is used to optimize the users&apos;
            experience by customizing our web page content based on
            visitors&apos; browser type and/or other information. For more
            information about the cookies we store, please see our{" "}
            <Link href={"/cookies"}>Cookie Policy</Link>.
          </p>

          <h2>Children&apos;s Information</h2>

          <p>
            Another part of our priority is adding protection for children while
            using the internet. We encourage parents and guardians to observe,
            participate in, and/or monitor and guide their online activity.
          </p>

          <p>
            ConventionCards does not knowingly collect any Personal Identifiable
            Information from children under the age of 13. If you think that
            your child provided this kind of information on our website, we
            strongly encourage you to contact us immediately and we will do our
            best efforts to promptly remove such information from our records.
          </p>

          <h2>Online Privacy Policy Only</h2>

          <p>
            Our Privacy Policy applies only to our online activities and is
            valid for visitors to our website with regards to the information
            that they shared and/or collect in ConventionCards. This policy is
            not applicable to any information collected offline or via channels
            other than this website.
          </p>

          <h2>Consent</h2>

          <p>
            By using our website, you hereby consent to our Privacy Policy and
            agree to its terms.
          </p>
        </div>
      </div>
    </div>
  );
}
