import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { protectedProcedure } from "../../trpc";

const schema = z.object({
  id: z.string(),
});

export const deletePartnershipRequest = protectedProcedure
  .input(schema)
  .mutation(async ({ ctx, input }) => {
    const request = await ctx.prisma.partnerRequest.findUnique({
      where: {
        id: input.id,
      },
    });

    if (request === null || request.userId !== ctx.userId) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "The partnership request could not be found.",
      });
    }
    return ctx.prisma.partnerRequest.delete({
      where: {
        id: input.id,
      },
    });
  });
