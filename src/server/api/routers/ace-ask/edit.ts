import { TRPCError } from "@trpc/server";
import { AceAskingSchemeSchema } from "../../../../../prisma/schemas";
import { protectedProcedure } from "../../trpc";

const schema = AceAskingSchemeSchema.pick({
  id: true,

  actionOverInterference: true,
  askingBid: true,
  description: true,
  furtherResponses: true,
  responses: true,
  name: true,
});

export const editAceAsk = protectedProcedure
  .input(schema)
  .mutation(async ({ ctx, input }) => {
    const existing = await ctx.prisma.aceAskingScheme.findUnique({
      where: {
        id: input.id,
      },
    });

    if (existing === null) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "That ace-ask could not be found.",
      });
    }

    const systemAccess = await ctx.prisma.systemLink.findUnique({
      where: {
        userId_systemId: {
          userId: ctx.userId,
          systemId: existing.systemId,
        },
      },
    });
    if (systemAccess === null) {
      throw new TRPCError({
        code: "FORBIDDEN",
        message: "You do not have the right to edit that system.",
      });
    }

    return ctx.prisma.aceAskingScheme.update({
      where: {
        id: input.id,
      },
      data: input,
    });
  });
