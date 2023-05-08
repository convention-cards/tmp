import { z } from "zod";

const SuitLengthSchema = z
  .object({
    min: z.number().nonnegative().max(13).optional(),
    max: z.number().nonnegative().max(13).optional(),
  })
  .optional();

const StrengthSchema = z
  .object({
    min: z.number().nonnegative().optional(),
    max: z.number().nonnegative().optional(),
  })
  .optional();

export const BidDefinitionSchema = z.object({
  hcp: StrengthSchema,
  ltc: StrengthSchema,

  c: SuitLengthSchema,
  d: SuitLengthSchema,
  h: SuitLengthSchema,
  s: SuitLengthSchema,

  mi: SuitLengthSchema,
  ma: SuitLengthSchema,

  bal: z.boolean().optional(),
  unbal: z.boolean().optional(),
  art: z.boolean().optional(),
});

export const RequiredBidDefinitionSchema = BidDefinitionSchema.required();

export type BidDefinition = z.infer<typeof BidDefinitionSchema>;
export type MinMax = z.infer<typeof StrengthSchema>;
