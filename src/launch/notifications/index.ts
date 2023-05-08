import { ErrorLauncher } from "./error";
import { SuccessLauncher } from "./success";

export const launchableNotifications = {
  success: SuccessLauncher,
  error: ErrorLauncher,
};
