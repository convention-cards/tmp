import { createTRPCRouter } from "../../trpc";
import { addCarding } from "./add";
import { editCarding } from "./edit";

export const cardingRouter = createTRPCRouter({
  add: addCarding,
  edit: editCarding,
});
