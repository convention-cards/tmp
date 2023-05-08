import { createTRPCRouter } from "../../trpc";
import { addAceAsk } from "./add";
import { deleteAceAsk } from "./delete";
import { editAceAsk } from "./edit";
import { getAceAsk } from "./get";
import { listAceAsks } from "./list";

export const aceAskRouter = createTRPCRouter({
  add: addAceAsk,
  edit: editAceAsk,
  delete: deleteAceAsk,
  list: listAceAsks,
  get: getAceAsk,
});
