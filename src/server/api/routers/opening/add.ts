import { TRPCError } from "@trpc/server";
import { OpeningSchema } from "../../../../../prisma/schemas";
import { protectedProcedure } from "../../trpc";

const schema = OpeningSchema.pick({
  level: true,
  suit: true,
  systemId: true,
  description: true,
  definition: true,
});

export const addOpening = protectedProcedure
  .input(schema)
  .mutation(async ({ ctx, input }) => {
    const systemAccess = await ctx.prisma.systemLink.findUnique({
      where: {
        userId_systemId: {
          userId: ctx.userId,
          systemId: input.systemId,
        },
      },
    });
    if (systemAccess === null) {
      throw new TRPCError({
        code: "FORBIDDEN",
        message: "You do not have the right to edit that system.",
      });
    }

    const existing = await ctx.prisma.opening.findFirst({
      where: {
        suit: input.suit,
        level: input.level,
        systemId: input.systemId,
      },
    });
    if (existing !== null) {
      throw new TRPCError({
        code: "CONFLICT",
        message: "That opening has already been defined for that system.",
      });
    }

    return ctx.prisma.opening.create({
      data: {
        ...input,
        description: input.description ?? "",
      },
    });
  });
