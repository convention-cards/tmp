import type { SystemListItem } from "types/system";
import { protectedProcedure } from "../../trpc";

export const listSystems = protectedProcedure.query(async ({ ctx }) => {
  const systems = await ctx.prisma.system.findMany({
    where: {
      systemLink: {
        some: {
          userId: ctx.userId,
        },
      },
    },
    include: {
      systemLink: {
        where: {
          userId: ctx.userId,
        },
        select: { lastOpenedAt: true },
        take: 1,
      },
    },
  });

  return systems.map(
    ({ biddingMethods, createdAt, id, name, slug, updatedAt, systemLink }) => ({
      biddingMethods,
      createdAt,
      id,
      name,
      slug,
      updatedAt,
      lastOpenedAt: systemLink[0]?.lastOpenedAt,
    })
  ) as SystemListItem[];
});
