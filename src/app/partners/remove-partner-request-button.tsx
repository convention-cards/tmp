"use client";

import { PrimaryButton } from "components/buttons/primary";
import { useRouter } from "next/navigation";
import { deletePartnershipRequest } from "server/api2/partner-request/delete";
import { useZact } from "zact/client";

export function RemovePartnerRequestButton({ id }: { id: string }) {
  const router = useRouter();
  const { mutate, isLoading } = useZact(deletePartnershipRequest);

  return (
    <PrimaryButton
      text="Cancel"
      loading={isLoading}
      onClick={async () => {
        await mutate(id);
        router.refresh();
      }}
    />
  );
}
