import { z } from "zod";
import { SystemSchema } from "../../prisma/schemas";
import { CC_TEMPLATE_NAMES } from "./templates";

export const NewSystemSteps = [
  {
    name: "Setup",
    description: "Give the system a name and description.",
  },
  {
    name: "Partners",
    description: "Select partners to share the system with.",
  },
  {
    name: "Build",
    description: "Build the basic system.",
  },
  {
    name: "Review",
    description: "Review the system.",
  },
];

export const NewSystemSchemaFull = SystemSchema.pick({
  biddingMethods: true,
  name: true,
  slug: true,
}).merge(
  z.object({
    partners: z.array(z.string()),
    bids: z.enum(CC_TEMPLATE_NAMES).or(z.literal("custom")),
  })
);

export type NewSystemSchemaType = z.infer<typeof NewSystemSchemaFull>;

export const InitialNewSystemValues: NewSystemSchemaType = {
  biddingMethods: "",
  name: "",
  slug: "",
  partners: [],
  bids: "custom",
};

export const NewSystemSchema = [
  NewSystemSchemaFull.pick({
    biddingMethods: true,
    name: true,
    slug: true,
  }),
  NewSystemSchemaFull.pick({
    partners: true,
  }),
  NewSystemSchemaFull.pick({
    bids: true,
  }),
  NewSystemSchemaFull.pick({}),
];
