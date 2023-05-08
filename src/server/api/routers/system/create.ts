import { SystemLinkType } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import { NewSystemSchemaFull } from "config/new-system-form";
import { CC_TEMPLATES } from "config/templates";
import { protectedProcedure } from "../../trpc";

export const createSystem = protectedProcedure
  .input(NewSystemSchemaFull)
  .mutation(async ({ ctx, input }) => {
    const existingWithSlug = await ctx.prisma.system.findUnique({
      where: {
        slug: input.slug,
      },
    });
    if (existingWithSlug !== null) {
      throw new TRPCError({
        code: "CONFLICT",
        message: "A system with that slug already exists",
      });
    }

    const partnerIds = Array.from(new Set(input.partners));

    if (partnerIds.length !== input.partners.length) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "The partners field must not have any duplicates.",
      });
    }

    const foundPartners = await ctx.prisma.partner.count({
      where: {
        userId: ctx.userId,
        partnerId: {
          in: partnerIds,
        },
      },
    });

    if (foundPartners !== partnerIds.length) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "You are not partners with all of the listed editors.",
      });
    }

    const system = await ctx.prisma.system.create({
      data: {
        name: input.name,
        slug: input.slug,
        biddingMethods: input.biddingMethods,
      },
    });

    await ctx.prisma.systemLink.create({
      data: {
        type: SystemLinkType.Owner,
        systemId: system.id,
        userId: ctx.userId,
        lastOpenedAt: new Date(),
      },
    });

    if (partnerIds.length > 0) {
      await ctx.prisma.systemLink.createMany({
        data: partnerIds.map((id) => ({
          type: SystemLinkType.Editor,
          userId: id,
          systemId: system.id,
          lastOpenedAt: new Date(),
        })),
      });
    }

    if (input.bids !== "custom") {
      await ctx.prisma.opening.createMany({
        data: CC_TEMPLATES[input.bids].bidding.map(
          ({ definition, level, suit }) => ({
            definition,
            level,
            suit,
            systemId: system.id,
            description: "",
          })
        ),
      });
    }
  });
