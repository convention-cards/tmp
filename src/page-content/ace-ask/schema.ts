import type { z } from "zod";
import { AceAskingSchemeSchema } from "../../../prisma/schemas";

export const AceAskFormSchema = AceAskingSchemeSchema.pick({
  name: true,
  actionOverInterference: true,
  askingBid: true,
  description: true,
  furtherResponses: true,
  responses: true,
});

export type AceAskFormType = z.infer<typeof AceAskFormSchema>;
