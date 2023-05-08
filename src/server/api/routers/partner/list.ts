import { protectedProcedure } from "../../trpc";

export const listPartners = protectedProcedure.query(({ ctx }) =>
  ctx.prisma.user.findMany({
    where: {
      partners: {
        some: {
          partnerId: ctx.userId,
        },
      },
    },
  })
);
