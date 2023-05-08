import { UserSchema } from "../../../../../prisma/schemas";
import { protectedProcedure } from "../../trpc";

const schema = UserSchema.pick({
  name: true,
});

export const editName = protectedProcedure
  .input(schema)
  .mutation(({ ctx, input }) =>
    ctx.prisma.user.update({
      where: { id: ctx.userId },
      data: {
        name: input.name,
      },
    })
  );
