import { buffer } from "micro";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "server/db";
import { stripe } from "server/stripe";
import type Stripe from "stripe";

export const config = {
  api: {
    bodyParser: false, // don't parse body of incoming requests because we need it raw to verify signature
  },
};

const request = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    const requestBuffer = await buffer(req);
    const sig = req.headers["stripe-signature"] as string;

    let event: Stripe.Event | null;

    try {
      event = stripe.webhooks.constructEvent(
        requestBuffer.toString(),
        sig,
        "" //endpointSecret
      );
    } catch (err) {
      console.log(`⚠️  Webhook signature verification failed.`, err);
      return res.status(400).send(`Webhook signature verification failed.`);
    }

    console.log(event);

    // Handle the event
    switch (event.type) {
      // Handle successful subscription creation
      case "customer.subscription.created": {
        const subscription = event.data.object as Stripe.Subscription;
        await prisma.user.updateMany({
          // Find the customer in our database with the Stripe customer ID linked to this purchase
          where: {
            stripeId: subscription.customer as string,
          },
          data: {},
        });
        break;
      }
      // ... handle other event types
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    // Return a 200 response to acknowledge receipt of the event
    res.status(200).json({ received: true });
  } catch (err) {
    // Return a 500 error
    console.log(err);
    res.status(500).end();
  }
};

export default request;
