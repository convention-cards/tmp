"use client";

import { SecondaryButton } from "components/buttons/secondary";
import { useRouter } from "next/navigation";
import { respondToPartnershipRequest } from "server/api2/partner-request/respond";
import { useZact } from "zact/client";

export function RejectPartnerRequestButton({ id }: { id: string }) {
  "use client";
  const router = useRouter();
  const { mutate, isLoading } = useZact(respondToPartnershipRequest);

  return (
    <SecondaryButton
      text="Reject"
      loading={isLoading}
      onClick={async () => {
        await mutate({ id, response: false });
        router.refresh();
      }}
    />
  );
}
