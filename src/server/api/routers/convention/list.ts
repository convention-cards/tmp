import { protectedProcedure } from "../../trpc";

export const listConventions = protectedProcedure.query(async ({ ctx }) => {
  return ctx.prisma.convention.findMany({
    where: {
      userId: ctx.userId,
    },
  });
});
