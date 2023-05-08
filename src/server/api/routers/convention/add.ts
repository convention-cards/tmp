import { ConventionSchema } from "../../../../../prisma/schemas";
import { protectedProcedure } from "../../trpc";

const schema = ConventionSchema.pick({
  systemId: true,

  applies: true,
  description: true,
  name: true,
  notes: true,
  responses: true,
  intervention: true,
});

export const addConvention = protectedProcedure
  .input(schema)
  .mutation(async ({ ctx, input }) => {
    return ctx.prisma.convention.create({
      data: {
        ...input,
        description: input.description ?? "",
        applies: input.applies ?? "",
        notes: input.notes ?? "",
        intervention: input.intervention ?? "",
        userId: ctx.userId,
      },
    });
  });
