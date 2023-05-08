"use server";

import { TRPCError } from "@trpc/server";
import { getUserId } from "server/auth";
import { prisma } from "server/db";
import { sendPartnershipRequestEmail } from "server/email";
import { zact } from "zact/server";
import { z } from "zod";

const schema = z.object({
  email: z.string(),
});

export const createPartnershipRequest = zact(schema)(async (input) => {
  const userId = getUserId();
  const user = await prisma.user.findUniqueOrThrow({
    where: { id: userId },
  });

  if (user === null) {
    throw new TRPCError({
      code: "FORBIDDEN",
      message: "Unexpected user does not exist.",
    });
  }

  if (input.email === user.email) {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: "You can't issue a partnership request to your own email.",
    });
  }

  const existingRequest = await prisma.partnerRequest.findFirst({
    where: {
      userId,
      email: input.email,
    },
  });

  if (existingRequest !== null) {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: "There is an existing request pending to that email.",
    });
  }

  const existingPartnership = await prisma.partner.findFirst({
    where: {
      userId,
      partner: { email: input.email },
    },
  });

  if (existingPartnership !== null) {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: "There is an existing partnership with that email.",
    });
  }

  await prisma.partnerRequest.create({
    data: {
      email: input.email,
      userId,
    },
  });

  await sendPartnershipRequestEmail({
    inviterEmail: user.email ?? "",
    inviterName: user.name ?? "",
    inviterImageUrl: user.image ?? "",
    recipient: input.email,
  });
});
