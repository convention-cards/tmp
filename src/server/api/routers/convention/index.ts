import { createTRPCRouter } from "../../trpc";
import { addConvention } from "./add";
import { deleteConvention } from "./delete";
import { editConvention } from "./edit";
import { getConvention } from "./get";
import { listConventions } from "./list";

export const conventionRouter = createTRPCRouter({
  add: addConvention,
  edit: editConvention,
  delete: deleteConvention,
  list: listConventions,
  get: getConvention,
});
