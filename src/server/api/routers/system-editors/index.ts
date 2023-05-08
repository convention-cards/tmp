import { createTRPCRouter } from "../../trpc";
import { addSystemEditor } from "./add";
import { removeSystemEditor } from "./remove";

export const systemEditorsRouter = createTRPCRouter({
  add: addSystemEditor,
  remove: removeSystemEditor,
});
