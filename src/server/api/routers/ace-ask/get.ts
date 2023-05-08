import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { protectedProcedure } from "../../trpc";

export const getAceAsk = protectedProcedure
  .input(z.string())
  .query(async ({ ctx, input }) => {
    const existing = await ctx.prisma.aceAskingScheme.findUnique({
      where: {
        id: input,
      },
    });

    if (existing === null) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "That ace-ask could not be found.",
      });
    }

    const systemLink = await ctx.prisma.systemLink.findUnique({
      where: {
        userId_systemId: {
          userId: ctx.userId,
          systemId: existing.systemId,
        },
      },
    });

    if (systemLink === null) {
      throw new TRPCError({
        code: "FORBIDDEN",
        message: "You do not have access to that system.",
      });
    }

    return existing;
  });
