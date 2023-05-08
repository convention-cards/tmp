import { z } from "zod";
import { BidLevelSchema, BidSchema } from "./bid";

export const AceAskingBidSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("bid"),
    bid: BidSchema,
  }),
  z.object({
    type: z.literal("generic"),
    level: BidLevelSchema,
    description: z.enum(["minor", "major", "suit"]),
    offset: z.number(),
  }),
  z.object({
    type: z.literal("description"),
    description: z.string().max(500),
  }),
]);
export type AceAskingBidType = z.infer<typeof AceAskingBidSchema>;

export const AceAskingResponseSchema = z.array(
  z.discriminatedUnion("type", [
    z.object({
      type: z.literal("ace"),
      response: z.array(z.number()),
      additional: z.string().max(50),
    }),
    z.object({
      type: z.literal("kc"),
      response: z.array(z.number()),
      additional: z.string().max(50),
    }),
    z.object({
      type: z.literal("description"),
      description: z.string().max(500),
    }),
  ])
);
export type AceAskingResponseType = z.infer<typeof AceAskingResponseSchema>;
