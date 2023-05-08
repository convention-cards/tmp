import { TRPCError } from "@trpc/server";
import { NationalNumberSchema } from "../../../../../prisma/schemas";
import { protectedProcedure } from "../../trpc";

const schema = NationalNumberSchema.pick({
  nbo: true,
});

export const deleteNboNumber = protectedProcedure
  .input(schema)
  .mutation(async ({ ctx, input }) => {
    const existing = await ctx.prisma.nationalNumber.findUnique({
      where: {
        userId_nbo: {
          userId: ctx.userId,
          nbo: input.nbo,
        },
      },
    });

    if (existing === null) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "That NBO number could not be found.",
      });
    }

    await ctx.prisma.nationalNumber.delete({
      where: {
        userId_nbo: {
          userId: ctx.userId,
          nbo: input.nbo,
        },
      },
    });
  });
