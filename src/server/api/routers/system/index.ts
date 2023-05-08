import { createTRPCRouter } from "../../trpc";
import { checkSlug } from "./check-slug";
import { createSystem } from "./create";
import { getSystem } from "./get";
import { listSystems } from "./list";

export const systemRouter = createTRPCRouter({
  list: listSystems,
  get: getSystem,
  create: createSystem,

  checkSlug,
});
