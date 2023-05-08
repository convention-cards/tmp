import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { protectedProcedure } from "../../trpc";

export const listResponses = protectedProcedure
  .input(z.string())
  .query(async ({ ctx, input }) => {
    const opening = await ctx.prisma.opening.findUnique({
      where: { id: input },
    });
    if (opening === null) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "The system could not be found.",
      });
    }

    const systemLink = await ctx.prisma.systemLink.findUnique({
      where: {
        userId_systemId: {
          userId: ctx.userId,
          systemId: opening.systemId,
        },
      },
    });

    if (systemLink === null) {
      throw new TRPCError({
        code: "FORBIDDEN",
        message: "You do not have access to that system.",
      });
    }

    return ctx.prisma.openingResponse.findMany({
      where: {
        openingId: opening.id,
      },
    });
  });
