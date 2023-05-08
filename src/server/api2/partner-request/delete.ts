"use server";

import { TRPCError } from "@trpc/server";
import { headers } from 'next/headers';
import { getUserId } from "server/auth";
import { prisma } from "server/db";
import { zact } from "zact/server";
import { z } from "zod";

const schema = z.string();

export const deletePartnershipRequest = zact(schema)(async (id) => {
  console.log(headers())

  const userId = getUserId();

  const request = await prisma.partnerRequest.findUnique({
    where: {
      id,
    },
  });

  if (request === null || request.userId !== userId) {
    throw new TRPCError({
      code: "NOT_FOUND",
      message: "The partnership request could not be found.",
    });
  }
  return prisma.partnerRequest.delete({
    where: {
      id,
    },
  });
});
