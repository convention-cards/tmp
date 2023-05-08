import { z } from "zod";
import { protectedProcedure } from "../../trpc";

const schema = z.string();

export const checkSlug = protectedProcedure
  .input(schema)
  .mutation(async ({ ctx, input }) => {
    const system = await ctx.prisma.system.findUnique({
      where: {
        slug: input,
      },
    });
    return system === null;
  });
