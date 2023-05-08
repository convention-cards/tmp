import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { protectedProcedure } from "../../trpc";

export const getConvention = protectedProcedure
  .input(z.string())
  .query(async ({ ctx, input }) => {
    const existing = await ctx.prisma.convention.findUnique({
      where: {
        id: input,
        userId: ctx.userId,
      },
    });

    if (existing === null) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "That convention could not be found.",
      });
    }

    return existing;
  });
