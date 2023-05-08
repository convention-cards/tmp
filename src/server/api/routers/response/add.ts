import { TRPCError } from "@trpc/server";
import { OpeningResponseSchema } from "../../../../../prisma/schemas";
import { protectedProcedure } from "../../trpc";

const schema = OpeningResponseSchema.pick({
  sequence: true,
  openingId: true,
  description: true,
  definition: true,
  level: true,
  suit: true,
});

export const addResponse = protectedProcedure
  .input(schema)
  .mutation(async ({ ctx, input }) => {
    //TODO: Also check the sequence corresponds to the opening it's linked to
    const opening = await ctx.prisma.opening.findUnique({
      where: { id: input.openingId },
    });
    if (opening === null) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "The opening could not be found.",
      });
    }

    const systemAccess = await ctx.prisma.systemLink.findUnique({
      where: {
        userId_systemId: {
          userId: ctx.userId,
          systemId: opening.systemId,
        },
      },
    });
    if (systemAccess === null) {
      throw new TRPCError({
        code: "FORBIDDEN",
        message: "You do not have the right to edit that system.",
      });
    }

    const existing = await ctx.prisma.openingResponse.findFirst({
      where: {
        sequence: input.sequence,
        level: input.level,
        suit: input.suit,
        systemId: opening.systemId,
      },
    });
    if (existing !== null) {
      throw new TRPCError({
        code: "CONFLICT",
        message: "That response has already been defined for that system.",
      });
    }

    return ctx.prisma.openingResponse.create({
      data: {
        ...input,
        systemId: opening.systemId,
      },
    });
  });
