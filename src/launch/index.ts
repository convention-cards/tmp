"use client";

import { NotificationBase } from "components/notifications/base";
import { createReactLauncher } from "react-launch-component";
import { launchableDialogs } from "./dialogs";
import { launchableNotifications } from "./notifications";

export const { ReactLauncherProvider, useDialog, useNotification } =
  createReactLauncher({
    dialogs: launchableDialogs,
    notifications: launchableNotifications,

    notificationsWrapper: NotificationBase,
  });
