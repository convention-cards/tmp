import { protectedProcedure } from "../../trpc";

export const listNboNumbers = protectedProcedure.query(async ({ ctx }) => {
  return ctx.prisma.nationalNumber.findMany({
    where: {
      userId: ctx.userId,
    },
  });
});
