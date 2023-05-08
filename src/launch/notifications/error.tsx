import { NotificationFadeOut } from "components/animation/notification-fade-out";
import { ErrorNotification } from "components/notifications/error";

interface Props {
  title: string;
  subtitle: string;
}
export function ErrorLauncher({ title, subtitle }: Props) {
  return (
    <NotificationFadeOut>
      <ErrorNotification title={title} subtitle={subtitle} />
    </NotificationFadeOut>
  );
}
