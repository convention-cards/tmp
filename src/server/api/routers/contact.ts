import { sendContactEmail } from "server/email";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

const schema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

const send = publicProcedure
  .input(schema)
  .mutation(async ({ input }) => sendContactEmail(input));

export const contactRouter = createTRPCRouter({
  send,
});
