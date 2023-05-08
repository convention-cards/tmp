import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { protectedProcedure } from "../../trpc";

const schema = z.object({
  id: z.string(),
});

export const removePartner = protectedProcedure
  .input(schema)
  .mutation(async ({ ctx, input }) => {
    const partnership = await ctx.prisma.partner.findUnique({
      where: {
        userId_partnerId: {
          userId: ctx.userId,
          partnerId: input.id,
        },
      },
    });

    if (partnership === null) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "The partnership could not be found.",
      });
    }

    await ctx.prisma.$transaction([
      ctx.prisma.partner.delete({
        where: {
          userId_partnerId: {
            userId: ctx.userId,
            partnerId: input.id,
          },
        },
      }),
      ctx.prisma.partner.delete({
        where: {
          userId_partnerId: {
            userId: input.id,
            partnerId: ctx.userId,
          },
        },
      }),
    ]);
  });
