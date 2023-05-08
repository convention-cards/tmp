import { TRPCError } from "@trpc/server";
import { sendPartnershipRequestEmail } from "server/email";
import { z } from "zod";
import { protectedProcedure } from "../../trpc";

const schema = z.object({
  email: z.string(),
});

export const createPartnershipRequest = protectedProcedure
  .input(schema)
  .mutation(async ({ ctx, input }) => {
    const user = await ctx.prisma.user.findUniqueOrThrow({
      where: { id: ctx.userId },
    });

    if (user === null) {
      throw new TRPCError({
        code: "FORBIDDEN",
        message: "Unexpected user does not exist.",
      });
    }

    if (input.email === user.email) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "You can't issue a partnership request to your own email.",
      });
    }

    const existingRequest = await ctx.prisma.partnerRequest.findFirst({
      where: {
        userId: ctx.userId,
        email: input.email,
      },
    });

    if (existingRequest !== null) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "There is an existing request pending to that email.",
      });
    }

    const existingPartnership = await ctx.prisma.partner.findFirst({
      where: {
        userId: ctx.userId,
        partner: { email: input.email },
      },
    });

    if (existingPartnership !== null) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "There is an existing partnership with that email.",
      });
    }

    await ctx.prisma.partnerRequest.create({
      data: {
        email: input.email,
        userId: ctx.userId,
      },
    });

    await sendPartnershipRequestEmail({
      inviterEmail: user.email ?? "",
      inviterName: user.name ?? "",
      inviterImageUrl: user.image ?? "",
      recipient: input.email,
    });
  });
