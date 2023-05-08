"use server";

import { TRPCError } from "@trpc/server";
import { getUserId } from "server/auth";
import { prisma } from "server/db";
import { zact } from "zact/server";
import { z } from "zod";

const schema = z.object({
  id: z.string(),
  response: z.boolean(),
});

export const respondToPartnershipRequest = zact(schema)(
  async ({ id, response }) => {
    const userId = getUserId();

    const user = await prisma.user.findUniqueOrThrow({
      where: { id: userId },
    });

    const request = await prisma.partnerRequest.findUnique({
      where: {
        id,
      },
    });

    if (request === null || request.email !== user.email) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "The partnership request could not be found.",
      });
    }

    if (response) {
      await prisma.$transaction([
        prisma.partner.create({
          data: {
            userId,
            partnerId: request.userId,
          },
        }),
        prisma.partner.create({
          data: {
            userId: request.userId,
            partnerId: userId,
          },
        }),
      ]);
    }
    return prisma.partnerRequest.delete({
      where: {
        id,
      },
    });
  }
);
