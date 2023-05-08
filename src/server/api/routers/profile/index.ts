import { createTRPCRouter } from "../../trpc";
import { clearProfilePicture } from "./clear-profile-picture";
import { editName } from "./edit-name";

export const profileRouter = createTRPCRouter({
  editName,
  clearProfilePicture,
});
