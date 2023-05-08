import { createTRPCRouter } from "../../trpc";
import { changeNboNumber } from "./change";
import { deleteNboNumber } from "./delete";
import { listNboNumbers } from "./list";

export const nboNumberRouter = createTRPCRouter({
  list: listNboNumbers,
  change: changeNboNumber,
  delete: deleteNboNumber,
});
