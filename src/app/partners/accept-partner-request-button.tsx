"use client";

import { PrimaryButton } from "components/buttons/primary";
import { useRouter } from "next/navigation";
import { respondToPartnershipRequest } from "server/api2/partner-request/respond";
import { useZact } from "zact/client";

export function AcceptPartnerRequestButton({ id }: { id: string }) {
  "use client";
  const router = useRouter();
  const { mutate, isLoading } = useZact(respondToPartnershipRequest);

  return (
    <PrimaryButton
      text="Accept"
      loading={isLoading}
      onClick={async () => {
        await mutate({ id, response: true });
        router.refresh();
      }}
    />
  );
}
