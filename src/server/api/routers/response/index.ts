import { createTRPCRouter } from "../../trpc";
import { addResponse } from "./add";
import { editResponse } from "./edit";
import { listResponses } from "./list";

export const responseRouter = createTRPCRouter({
  list: listResponses,
  add: addResponse,
  edit: editResponse,
});
