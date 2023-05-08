"use server";

import { TRPCError } from "@trpc/server";
import { getUserId } from "server/auth";
import { prisma } from "server/db";
import { zact } from "zact/server";
import { z } from "zod";

const schema = z.string();

export const removePartner = zact(schema)(async (id) => {
  const userId = getUserId();

  const partnership = await prisma.partner.findUnique({
    where: {
      userId_partnerId: {
        userId,
        partnerId: id,
      },
    },
  });

  if (partnership === null) {
    throw new TRPCError({
      code: "NOT_FOUND",
      message: "The partnership could not be found.",
    });
  }

  await prisma.$transaction([
    prisma.partner.delete({
      where: {
        userId_partnerId: {
          userId,
          partnerId: id,
        },
      },
    }),
    prisma.partner.delete({
      where: {
        userId_partnerId: {
          userId: id,
          partnerId: userId,
        },
      },
    }),
  ]);
});
