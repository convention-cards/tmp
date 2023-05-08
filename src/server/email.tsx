import { render } from "@react-email/render";
import { env } from "env/server.mjs";
import nodemailer from "nodemailer";
import PartnershipRequest from "../../emails/invite";

const transporter = nodemailer.createTransport({
  host: env.EMAIL_SERVER_HOST,
  port: env.EMAIL_SERVER_PORT,
  secure: true,
  tls: {
    rejectUnauthorized: true,
  },
  auth: {
    user: env.EMAIL_SERVER_USER,
    pass: env.EMAIL_SERVER_PASSWORD,
  },
});

interface PartnershipRequestProps {
  recipient: string;
  inviterName: string;
  inviterEmail: string;
  inviterImageUrl: string;
}

export async function sendPartnershipRequestEmail(
  props: PartnershipRequestProps
) {
  const emailHtml = render(
    <PartnershipRequest baseUrl={env.NEXTAUTH_URL} {...props} />
  );

  return transporter.sendMail({
    from: env.EMAIL_SERVER_USER,

    subject: `${props.inviterName} sent a partnership request on ConventionCards`,
    to: props.recipient,
    html: emailHtml,
    text: `${props.inviterName} sent a partnership request on ConventionCards. Log into https://convention.cards to respond.`,
  });
}

interface ContactArgs {
  name: string;
  email: string;
  message: string;
}
export async function sendContactEmail({ name, email, message }: ContactArgs) {
  await transporter.sendMail({
    from: env.EMAIL_SERVER_USER,

    subject: `Contact - ${name}`,
    to: env.EMAIL_SERVER_USER,
    html: `Name: ${name}<br />Email: ${email}<br />Message: ${message}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  });
}
