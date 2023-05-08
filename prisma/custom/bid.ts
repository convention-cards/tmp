import { z } from "zod";
import { SuitSchema } from "../schemas/inputTypeSchemas/SuitSchema";

export const BidLevelSchema = z.number().min(1).max(7);
export const BidSchema = z.object({
  level: BidLevelSchema,
  suit: SuitSchema,
});
