import { SystemLinkType } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { protectedProcedure } from "../../trpc";

const schema = z.object({
  systemId: z.string(),
  editorId: z.string(),
});

export const removeSystemEditor = protectedProcedure
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
        message: "You are not allowed to remove editors from that system",
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

    if (existingLink === null) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "That user does not have access to the system",
      });
    }

    await ctx.prisma.systemLink.delete({
      where: {
        userId_systemId: {
          systemId: input.systemId,
          userId: input.editorId,
        },
      },
    });
  });
