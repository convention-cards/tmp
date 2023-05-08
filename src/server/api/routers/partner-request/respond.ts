import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { protectedProcedure } from "../../trpc";

const schema = z.object({
  id: z.string(),
  response: z.boolean(),
});

export const respondPartnershipRequest = protectedProcedure
  .input(schema)
  .mutation(async ({ ctx, input }) => {
    const user = await ctx.prisma.user.findUniqueOrThrow({
      where: { id: ctx.userId },
    });

    const request = await ctx.prisma.partnerRequest.findUnique({
      where: {
        id: input.id,
      },
    });

    if (request === null || request.email !== user.email) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "The partnership request could not be found.",
      });
    }

    if (input.response) {
      await ctx.prisma.$transaction([
        ctx.prisma.partner.create({
          data: {
            userId: ctx.userId,
            partnerId: request.userId,
          },
        }),
        ctx.prisma.partner.create({
          data: {
            userId: request.userId,
            partnerId: ctx.userId,
          },
        }),
      ]);
    }
    return ctx.prisma.partnerRequest.delete({
      where: {
        id: input.id,
      },
    });
  });
