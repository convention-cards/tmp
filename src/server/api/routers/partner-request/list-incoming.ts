import { currentUser } from "@clerk/nextjs";
import { TRPCError } from "@trpc/server";
import { protectedProcedure } from "../../trpc";

export const listIncomingRequests = protectedProcedure.query(
  async ({ ctx }) => {
    const user = await currentUser();

    if (user === null) {
      throw new TRPCError({
        code: "FORBIDDEN",
        message: "Unexpected user does not exist.",
      });
    }

    return ctx.prisma.partnerRequest.findMany({
      where: {
        // TODO: Should read appropriate email address
        email: user.emailAddresses[0].emailAddress ?? "",
      },
      include: {
        user: { select: { name: true, email: true, image: true } },
      },
    });
  }
);
