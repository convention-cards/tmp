import { cache } from "react";
import { prisma } from "server/db";

export const systemSlugToId = cache(async (slug: string) => {
  const system = await prisma.system.findUniqueOrThrow({ where: { slug } });

  return system.id;
});
