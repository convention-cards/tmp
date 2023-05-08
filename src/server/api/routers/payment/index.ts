import { createTRPCRouter } from "../../trpc";
import { createPaymentLink } from "./create-link";

export const paymentRouter = createTRPCRouter({
  createLink: createPaymentLink,
});
