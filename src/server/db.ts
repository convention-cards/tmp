import { PrismaClient } from "@prisma/client";

import { env } from "../env/server.mjs";

declare global {
  // eslint-disable-next-line no-var
  var p: PrismaClient | undefined;
}

export const prisma =
  global.p ||
  new PrismaClient({
    log:
      env.NODE_ENV === "development" ? [/*"query",*/ "error", "warn"] : ["error"],
  });

if (env.NODE_ENV !== "production") {
  global.p = prisma;
}
