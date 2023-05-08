import { auth } from "@clerk/nextjs";
import { prisma } from "./db";

export function getUserId() {
  console.log("I'm here");
  const { userId } = auth();

  if (userId === null) {
    throw new Error("Forbidden. Access denied.");
  }

  return userId;
}

export async function getEmail() {
  const userId = getUserId();

  const user = await prisma.user.findUniqueOrThrow({
    where: {
      id: userId
    }
  });

  return user.email;
}
