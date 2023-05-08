import { stripe } from "server/stripe";
import { z } from "zod";
import { protectedProcedure } from "../../trpc";

const schema = z.object({});
export const createPaymentLink = protectedProcedure
  .input(schema)
  .query(async ({ ctx }) => {
    const user = await ctx.prisma.user.findUniqueOrThrow({
      where: { id: ctx.userId },
    });

    const checkout = await stripe.checkout.sessions.create({
      mode: "subscription",
      customer: user.stripeId ?? "",
      line_items: [
        {
          price: "price_1N1XyMKLZu3PzNB0EW1BxRG2",
          quantity: 1,
        },
      ],
      // {CHECKOUT_SESSION_ID} is a string literal which the Stripe SDK will replace; do not manually change it or replace it with a variable!
      success_url: `http://localhost:3000/?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: "http://localhost:3000/?cancelledPayment=true",
      subscription_data: {
        metadata: {
          clerkUserId: user.id,
        },
      },
    });

    return checkout.url;
  });
