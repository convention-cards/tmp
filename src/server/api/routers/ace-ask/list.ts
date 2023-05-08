import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { protectedProcedure } from "../../trpc";

export const listAceAsks = protectedProcedure
  .input(z.string())
  .query(async ({ ctx, input }) => {
    const systemLink = await ctx.prisma.systemLink.findUnique({
      where: {
        userId_systemId: {
          userId: ctx.userId,
          systemId: input,
        },
      },
    });

    if (systemLink === null) {
      throw new TRPCError({
        code: "FORBIDDEN",
        message: "You do not have access to that system.",
      });
    }

    return ctx.prisma.aceAskingScheme.findMany({
      where: {
        systemId: input,
      },
    });
  });
