import { Link } from "@react-email/link";
import { Section } from "@react-email/section";
import { EmailButton } from "./components/button";
import { EmailDivider } from "./components/divider";
import { EmailFooter } from "./components/footer";
import { EmailHeading } from "./components/heading";
import { EmailLayout } from "./components/layout";
import { EmailLogo } from "./components/logo";
import { EmailParagraph } from "./components/paragraph";
import { EmailUserImage } from "./components/user-image";

interface Props {
  baseUrl: string;

  inviterName: string;
  inviterEmail: string;
  inviterImageUrl: string;

  recipient: string;
}

export default function Email({
  recipient,
  baseUrl,
  inviterEmail,
  inviterImageUrl,
  inviterName,
}: Props) {
  return (
    <EmailLayout preview={`${inviterName} has sent you a partnership request`}>
      <Section style={{ marginTop: "32px" }}>
        <EmailLogo baseUrl={baseUrl} />
      </Section>
      <EmailHeading>{inviterName} sent you a partnership request</EmailHeading>
      <div style={{ display: "flex" }}>
        <div style={{ marginTop: "16px", marginBottom: "16px" }}>
          <EmailUserImage userImageUrl={inviterImageUrl} />
        </div>
        <div style={{ paddingLeft: "16px" }}>
          <EmailParagraph>
            {inviterName} ({inviterEmail}) has sent you a partnership request on
            ConventionCards. As partners you would be able to collaborate on
            bidding systems.
          </EmailParagraph>
        </div>
      </div>
      <EmailParagraph>
        Login to respond to this partnership request.
      </EmailParagraph>
      <Section style={{ textAlign: "center" }}>
        <EmailButton text="Click to Login" href={`${baseUrl}/sign-in`} />
      </Section>
      <EmailParagraph>
        Or go to <Link href={`${baseUrl}/sign-in`}>{baseUrl}/sign-in</Link> in
        your browser
      </EmailParagraph>
      <EmailParagraph>
        Thanks,
        <br />- ConventionCards Team
      </EmailParagraph>
      <EmailDivider />
      <EmailFooter>
        This partnership request was intended for{" "}
        <span
          style={{
            color: "black",
          }}
        >
          {recipient}
        </span>
        . If you were not expecting this invitation, please contact us at{" "}
        <Link href="mailto:support@convention.cards">
          support@convention.cards
        </Link>
        .
        <br />
        If you would like to stop receiving partnership requests from
        ConventionCards, please email us at{" "}
        <Link href="mailto:support@convention.cards">
          support@convention.cards
        </Link>{" "}
        and we will stop further emails being sent to this address.
      </EmailFooter>
    </EmailLayout>
  );
}
