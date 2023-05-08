import { createTRPCRouter } from "../../trpc";
import { listPartners } from "./list";
import { removePartner } from "./remove";

export const partnerRouter = createTRPCRouter({
  list: listPartners,
  remove: removePartner,
});
