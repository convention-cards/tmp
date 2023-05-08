import { z } from "zod";
import { BidDefinitionSchema } from "./bid-definition";

export const ConventionResponseSchema = z.object({
  sequence: z.string().max(50),
  description: z.string().max(500).optional().or(z.literal("")),
  definition: BidDefinitionSchema,
});
export type ConventionResponseType = z.infer<typeof ConventionResponseSchema>;

export const ConventionResponsesSchema = z.array(ConventionResponseSchema);

export type ConventionResponsesType = z.infer<typeof ConventionResponsesSchema>;
