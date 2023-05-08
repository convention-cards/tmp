import type { z } from "zod";
import { OpeningSchema } from "../../prisma/schemas";

export const DefineOpeningSchema = OpeningSchema.pick({
  level: true,
  suit: true,
  definition: true,
});

export type DefineOpeningType = z.infer<typeof DefineOpeningSchema>;
