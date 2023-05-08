import { TRPCError } from "@trpc/server";
import { CardingSchema } from "../../../../../prisma/schemas";
import { protectedProcedure } from "../../trpc";

const schema = CardingSchema.pick({
  id: true,

  attitude: true,
  attitudeOther: true,
  count: true,
  countOther: true,
  suitPref: true,
  suitPrefOther: true,
  smith: true,
  smithOther: true,
  discards: true,
  discardsOther: true,

  notes: true,
});

export const editCarding = protectedProcedure
  .input(schema)
  .mutation(async ({ ctx, input }) => {
    const existing = await ctx.prisma.carding.findUnique({
      where: {
        id: input.id,
      },
    });

    if (existing === null) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "That carding could not be found.",
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

    return ctx.prisma.carding.update({
      where: {
        id: input.id,
      },
      data: {
        ...input,
        notes: input.notes ?? "",
      },
    });
  });
