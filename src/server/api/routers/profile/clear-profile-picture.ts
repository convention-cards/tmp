import { protectedProcedure } from "../../trpc";

export const clearProfilePicture = protectedProcedure.mutation(({ ctx }) =>
  ctx.prisma.user.update({
    where: { id: ctx.userId },
    data: {
      image: null,
    },
  })
);
