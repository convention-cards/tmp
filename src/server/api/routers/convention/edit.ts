import { TRPCError } from "@trpc/server";
import { ConventionSchema } from "../../../../../prisma/schemas";
import { protectedProcedure } from "../../trpc";

const schema = ConventionSchema.pick({
  id: true,

  applies: true,
  description: true,
  name: true,
  notes: true,
  responses: true,
  intervention: true,
});

export const editConvention = protectedProcedure
  .input(schema)
  .mutation(async ({ ctx, input }) => {
    const existing = await ctx.prisma.convention.findUnique({
      where: {
        id: input.id,
        userId: ctx.userId,
      },
    });

    if (existing === null) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "That convention could not be found.",
      });
    }

    return ctx.prisma.convention.update({
      where: {
        id: input.id,
      },
      data: input,
    });
  });
