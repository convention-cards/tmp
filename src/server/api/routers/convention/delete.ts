import { TRPCError } from "@trpc/server";
import { ConventionSchema } from "../../../../../prisma/schemas";
import { protectedProcedure } from "../../trpc";

const schema = ConventionSchema.pick({
  id: true,
});

export const deleteConvention = protectedProcedure
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

    await ctx.prisma.convention.delete({
      where: {
        id: input.id,
      },
    });
  });
