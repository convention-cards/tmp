import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "server/api/routers";

export const api = createTRPCReact<AppRouter>();
