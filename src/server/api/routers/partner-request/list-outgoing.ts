import { protectedProcedure } from "../../trpc";

export const listOutgoingRequests = protectedProcedure.query(({ ctx }) =>
  ctx.prisma.partnerRequest.findMany({
    where: {
      userId: ctx.userId,
    },
  })
);
