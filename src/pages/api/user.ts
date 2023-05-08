import type { UserJSON, WebhookEvent } from "@clerk/clerk-sdk-node";
import { env } from "env/server.mjs";
import type { IncomingHttpHeaders } from "http";
import { buffer } from "micro";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "server/db";
import { stripe } from "server/stripe";
import type { WebhookRequiredHeaders } from "svix";
import { Webhook } from "svix";
import { getPrimaryEmailJson } from "utils/primary-email";

export const config = {
  api: {
    bodyParser: false,
  },
};

type NextApiRequestWithSvixRequiredHeaders = NextApiRequest & {
  headers: IncomingHttpHeaders & WebhookRequiredHeaders;
};

const WEBHOOK = new Webhook(env.CLERK_WEBHOOK_SECRET);

export default async function handler(
  req: NextApiRequestWithSvixRequiredHeaders,
  res: NextApiResponse
) {
  // Verify the webhook signature
  // See https://docs.svix.com/receiving/verifying-payloads/how
  const payload = (await buffer(req)).toString();
  const { headers } = req;
  let event: WebhookEvent | null = null;
  try {
    event = WEBHOOK.verify(payload, headers) as WebhookEvent;
  } catch (_) {
    return res.status(400).json({});
  }

  if (event === null) {
    return res.status(400).json({});
  }

  switch (event.type) {
    case "user.created":
      await createUser(event.data);
      break;
    case "user.updated":
      await updateUser(event.data);
      break;
  }

  // Do something with the message...

  res.json({});
}

async function createUser(user: UserJSON) {
  const email = getPrimaryEmailJson(user) ?? "";

  const customer = await stripe.customers.create({
    email,
  });

  await prisma.user.create({
    data: {
      id: user.id,
      email: email,
      image: user.profile_image_url,
      name: `${user.first_name} ${user.last_name}`,
      stripeId: customer.id,
    },
  });
}

async function updateUser(user: UserJSON) {
  const email = getPrimaryEmailJson(user) ?? "";

  const userInstance = await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      email: email,
      image: user.profile_image_url,
      name: `${user.first_name} ${user.last_name}`,
    },
  });

  await stripe.customers.update(userInstance.stripeId ?? "", { email });
}
