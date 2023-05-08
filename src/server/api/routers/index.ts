import { createTRPCRouter } from "../trpc";
import { aceAskRouter } from "./ace-ask";
import { cardingRouter } from "./carding";
import { contactRouter } from "./contact";
import { conventionRouter } from "./convention";
import { nboNumberRouter } from "./nbo-number";
import { openingRouter } from "./opening";
import { partnerRouter } from "./partner";
import { partnerRequestRouter } from "./partner-request";
import { profileRouter } from "./profile";
import { responseRouter } from "./response";
import { systemRouter } from "./system";
import { systemEditorsRouter } from "./system-editors";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  system: systemRouter,
  partner: partnerRouter,
  partnerRequest: partnerRequestRouter,
  profile: profileRouter,
  systemEditors: systemEditorsRouter,
  opening: openingRouter,
  response: responseRouter,
  carding: cardingRouter,
  nboNumber: nboNumberRouter,
  aceAsk: aceAskRouter,
  convention: conventionRouter,

  contact: contactRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
