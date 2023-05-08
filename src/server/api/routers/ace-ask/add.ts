import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { AceAskingSchemeSchema } from "../../../../../prisma/schemas";
import { protectedProcedure } from "../../trpc";

const schema = AceAskingSchemeSchema.pick({
  actionOverInterference: true,
  askingBid: true,
  description: true,
  furtherResponses: true,
  responses: true,
  name: true,
}).merge(
  z.object({
    systemSlug: z.string(),
  })
);

export const addAceAsk = protectedProcedure
  .input(schema)
  .mutation(async ({ ctx, input: { systemSlug, ...input } }) => {
    const systemAccess = await ctx.prisma.systemLink.findFirst({
      where: {
        userId: ctx.userId,
        system: {
          slug: systemSlug,
        },
      },
    });
    if (systemAccess === null) {
      throw new TRPCError({
        code: "FORBIDDEN",
        message: "You do not have the right to edit that system.",
      });
    }

    return ctx.prisma.aceAskingScheme.create({
      data: {
        ...input,
        systemId: systemAccess.systemId,
        description: input.description ?? "",
        furtherResponses: input.furtherResponses ?? "",
        actionOverInterference: input.actionOverInterference ?? "",
      },
    });
  });
