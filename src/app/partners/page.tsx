import { Divider } from "components/divider";
import { Heading } from "components/headings";
import { SubHeading } from "components/headings/subheading";
import { WideWidth } from "components/width/wide";
import { PartnerInviteBox } from "page-content/partners/invite-box";
import { IncomingPartnershipRequests } from "./incoming-requests";
import { OutgoingPartnershipRequests } from "./outgoing-requests";
import { PartnersTable } from "./partners-table";

export const metadata = {
  title: "Partners",
};

export default function Partners() {
  return (
    <WideWidth>
      <div className="space-y-12 py-8">
        <div className="space-y-4">
          <Heading title="Partners" />
          <div className="text-sm text-gray-500">
            Partners can edit and make systems together. As partners you will be
            able to see each others name, email, picture and NBO numbers.
          </div>
          {/* @ts-expect-error Server Component */}
          <PartnersTable />
        </div>
        <Divider />
        <div className="space-y-8">
          <div className="space-y-4">
            <Heading title="Partner Requests" />
            <SubHeading title="Invite" />
            <div className="text-sm text-gray-500">
              Sending an invite is the method through which you become partners.
              When an invite is sent your partner will receive an email
              informing them you sent the request. To accept it they must log
              onto ConventionCards.
            </div>
            <PartnerInviteBox />
          </div>
          <div className="space-y-4">
            <SubHeading title="Incoming" />
            <div className="text-sm text-gray-500">
              Incoming requests are requests which have been sent to you and are
              waiting for you to respond to.
            </div>
            {/* @ts-expect-error Server Component */}
            <IncomingPartnershipRequests />
          </div>
          <div className="space-y-4">
            <SubHeading title="Outgoing" />
            <div className="text-sm text-gray-500">
              Outgoing requests are requests which you have sent and are waiting
              for a response.
            </div>
            {/* @ts-expect-error Server Component */}
            <OutgoingPartnershipRequests />
          </div>
        </div>
      </div>
    </WideWidth>
  );
}
