import { NotificationFadeOut } from "components/animation/notification-fade-out";
import { SuccessNotification } from "components/notifications/success";

interface Props {
  title: string;
  subtitle: string;
}
export function SuccessLauncher({ title, subtitle }: Props) {
  return (
    <NotificationFadeOut>
      <SuccessNotification title={title} subtitle={subtitle} />
    </NotificationFadeOut>
  );
}
