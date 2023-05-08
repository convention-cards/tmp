import { TRPCError } from "@trpc/server";
import { CardingSchema } from "../../../../../prisma/schemas";
import { protectedProcedure } from "../../trpc";

const schema = CardingSchema.pick({
  systemId: true,

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

export const addCarding = protectedProcedure
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

    const existing = await ctx.prisma.carding.findFirst({
      where: {
        systemId: input.systemId,
      },
    });
    if (existing !== null) {
      throw new TRPCError({
        code: "CONFLICT",
        message: "That opening has already been defined for that system.",
      });
    }

    return ctx.prisma.carding.create({
      data: {
        ...input,
        notes: input.notes ?? "",
        attitudeOther: input.attitudeOther ?? "",
        countOther: input.countOther ?? "",
        suitPrefOther: input.suitPrefOther ?? "",
        smithOther: input.smithOther ?? "",
        discardsOther: input.discardsOther ?? "",
      },
    });
  });
