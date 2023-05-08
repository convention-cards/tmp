import { TRPCError } from "@trpc/server";
import { OpeningResponseSchema } from "../../../../../prisma/schemas";
import { protectedProcedure } from "../../trpc";

const schema = OpeningResponseSchema.pick({
  id: true,
  description: true,
  definition: true,
});

export const editResponse = protectedProcedure
  .input(schema)
  .mutation(async ({ ctx, input }) => {
    const existing = await ctx.prisma.openingResponse.findUnique({
      where: {
        id: input.id,
      },
    });

    if (existing === null) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "That response could not be found.",
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

    return ctx.prisma.openingResponse.update({
      where: {
        id: input.id,
      },
      data: {
        description: input.description,
        definition: input.definition,
      },
    });
  });
