import { Card } from "components/card";
import Link from "next/link";

export function SettingsDelete() {
  return (
    <div className="space-y-6 ">
      <Card id="delete" title="Delete Account">
        <p className="text-gray-900">
          If you would like to delete your account please contact us at{" "}
          <Link
            href="mailto:support@convention.cards"
            className="text-blue-800"
          >
            support@convention.cards
          </Link>{" "}
          and we will organise that for you. We&apos;ll be sad to see you go.
        </p>
      </Card>
    </div>
  );
}
