import { NationalNumberSchema } from "../../../../../prisma/schemas";
import { protectedProcedure } from "../../trpc";

const schema = NationalNumberSchema.pick({
  nbo: true,
  number: true,
});

export const changeNboNumber = protectedProcedure
  .input(schema)
  .mutation(async ({ ctx, input }) => {
    const existing = await ctx.prisma.nationalNumber.findFirst({
      where: {
        userId: ctx.userId,
        nbo: input.nbo,
      },
    });
    if (existing !== null) {
      return ctx.prisma.nationalNumber.update({
        where: {
          id: existing.id,
        },
        data: {
          ...input,
        },
      });
    } else {
      return ctx.prisma.nationalNumber.create({
        data: {
          userId: ctx.userId,
          ...input,
        },
      });
    }
  });
