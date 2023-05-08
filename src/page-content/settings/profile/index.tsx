import { Card } from "components/card";
import { Spinner } from "components/spinner";
import { ProfilePictureUpdater } from "./profile";

export function SettingsProfile() {
  // const { status } = useSession();
  const status = "loading";
  return (
    <div className="space-y-6">
      <Card
        title="Profile"
        subtitle="This information will be available to your partners."
        id="profile"
      >
        {status !== "loading" && (
          <dl className="divide-y divide-gray-200">
            <ProfilePictureUpdater />
          </dl>
        )}
        {status === "loading" && (
          <div className="flex h-full w-full items-center justify-center">
            <Spinner size="lg" />
          </div>
        )}
      </Card>
    </div>
  );
}
