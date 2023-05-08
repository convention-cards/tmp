import type { User, UserJSON } from "@clerk/clerk-sdk-node";

type EmailUser = Pick<User, "emailAddresses" | "primaryEmailAddressId">;
type EmailUserJson = Pick<
  UserJSON,
  "email_addresses" | "primary_email_address_id"
>;

export function getPrimaryEmail(user: EmailUser) {
  for (let i = 0; i < user.emailAddresses.length; i++) {
    const email = user.emailAddresses[i];
    if (email.id === user.primaryEmailAddressId) {
      return email.emailAddress;
    }
  }

  return null;
}

export function getPrimaryEmailJson(user: EmailUserJson) {
  for (let i = 0; i < user.email_addresses.length; i++) {
    const email = user.email_addresses[i];
    if (email.id === user.primary_email_address_id) {
      return email.email_address;
    }
  }

  return null;
}
