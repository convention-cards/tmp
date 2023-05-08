import { createTRPCRouter } from "../../trpc";
import { addOpening } from "./add";
import { editOpening } from "./edit";

export const openingRouter = createTRPCRouter({
  add: addOpening,
  edit: editOpening,
});
