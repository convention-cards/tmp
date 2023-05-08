import { TRPCError } from "@trpc/server";
import type { FullSystem } from "types/system";
import { z } from "zod";
import { protectedProcedure } from "../../trpc";

const schema = z.string();

export const getSystem = protectedProcedure
  .input(schema)
  .query(async ({ ctx, input }) => {
    const system = await ctx.prisma.system.findFirst({
      where: {
        slug: input,
        systemLink: {
          some: {
            userId: ctx.userId,
          },
        },
      },
    });

    if (system === null) {
      throw new TRPCError({
        code: "FORBIDDEN",
        message: "You do not have permission to edit that system",
      });
    }

    // Update the last opened field
    await ctx.prisma.systemLink.update({
      where: {
        userId_systemId: { systemId: system.id, userId: ctx.userId },
      },
      data: {
        lastOpenedAt: new Date(),
      },
    });

    const fullSystem = await ctx.prisma.system.findUnique({
      where: {
        id: system.id,
      },
      include: {
        systemLink: {
          include: {
            user: true,
          },
        },
        conventionCardEbu: true,
        openings: true,
        carding: true,
        conventions: true,
      },
    });

    if (fullSystem === null) {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Something strange happened, please report this to support.",
      });
    }

    return {
      biddingMethods: fullSystem.biddingMethods,
      createdAt: fullSystem.createdAt,
      id: fullSystem.id,
      name: fullSystem.name,
      openings: fullSystem.openings,
      updatedAt: fullSystem.updatedAt,
      slug: fullSystem.slug,
      carding: fullSystem.carding,
      conventions: fullSystem.conventions,
      editors: fullSystem.systemLink.map((link) => ({
        id: link.user.id,
        image: link.user.image,
        name: link.user.name,
        email: link.user.email,
        type: link.type,
      })),
      cc: {
        ebu: fullSystem.conventionCardEbu,
        acbl: null,
      },
    } satisfies FullSystem;
  });
