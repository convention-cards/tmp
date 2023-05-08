"use client";

import { PrimaryButton } from "components/buttons/primary";
import { Card } from "components/card";
import { useNotification } from "launch";

interface Props {
  systemId: string;
}
export function SystemCloneSection({ systemId }: Props) {
  const launch = useNotification();
  return (
    <Card id="cc-clone">
      <h3 className="text-lg font-medium leading-6 text-gray-900">
        Clone this system
      </h3>
      <div className="mt-2 max-w-xl text-sm text-gray-500">
        <p>
          Cloning the system will make you the owner of a new copy of the
          system. Initially the new system will have no associated partners.
          Partners can be added later from the settings screen.
        </p>
      </div>
      <div className="mt-5">
        <PrimaryButton
          onClick={() => launch("success", 5, { subtitle: "", title: "hmm" })}
          text="Clone System"
        />
      </div>
    </Card>
  );
}
