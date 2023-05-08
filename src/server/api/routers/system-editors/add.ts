import { SystemLinkType } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { protectedProcedure } from "../../trpc";

const schema = z.object({
  systemId: z.string(),
  editorId: z.string(),
});

export const addSystemEditor = protectedProcedure
  .input(schema)
  .mutation(async ({ ctx, input }) => {
    const link = await ctx.prisma.systemLink.findUnique({
      where: {
        userId_systemId: {
          userId: ctx.userId,
          systemId: input.systemId,
        },
      },
    });

    if (link === null || link.type !== SystemLinkType.Owner) {
      throw new TRPCError({
        code: "FORBIDDEN",
        message: "You are not allowed to add editors to that system",
      });
    }

    const partnership = await ctx.prisma.partner.findUnique({
      where: {
        userId_partnerId: {
          userId: ctx.userId,
          partnerId: input.editorId,
        },
      },
    });

    if (partnership === null) {
      throw new TRPCError({
        code: "FORBIDDEN",
        message: "You are not partners with that person",
      });
    }

    const existingLink = await ctx.prisma.systemLink.findUnique({
      where: {
        userId_systemId: {
          userId: input.editorId,
          systemId: input.systemId,
        },
      },
    });

    if (existingLink !== null) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "That user already has edit access to this system",
      });
    }

    await ctx.prisma.systemLink.create({
      data: {
        userId: input.editorId,
        systemId: input.systemId,
        type: SystemLinkType.Editor,
        lastOpenedAt: new Date(),
      },
    });
  });
