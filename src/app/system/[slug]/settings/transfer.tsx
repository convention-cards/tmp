import { PrimaryButton } from "components/buttons/primary";
import { Card } from "components/card";

interface Props {
  systemId: string;
}
export function SystemTransferSection({ systemId }: Props) {
  return (
    <Card id="cc-clone">
      <h3 className="text-lg font-medium leading-6 text-gray-900">
        Transfer ownership of this system
      </h3>
      <div className="mt-2 max-w-xl text-sm text-gray-500">
        <p>
          Transferring ownership will make the recipient the owner of this
          system. They will be able to make it remove your access, delete it or
          make it public. The system will no longer use up a system slot under
          your current payment tier.
        </p>
      </div>
      <div className="mt-5">
        <PrimaryButton href="#" text="Transfer System" />
      </div>
    </Card>
  );
}
