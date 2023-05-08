import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { env } from "env/server.mjs";
import { appRouter } from "server/api/routers";
import { createContext } from "server/api/trpc";

const handler = (request: Request) => {
  // return NextResponse.json({});
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req: request,
    router: appRouter,
    createContext,
    onError:
      env.NODE_ENV === "development"
        ? ({ path, error }) => {
            console.error(
              `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`
            );
          }
        : undefined,
  });
};

export const GET = handler;
export const POST = handler;
