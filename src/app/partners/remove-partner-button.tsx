"use client";

import { GhostButton } from "components/buttons/ghost";
import { useRouter } from "next/navigation";
import { removePartner } from "server/api2/partner/remove";
import { useZact } from "zact/client";

export function RemovePartnerButton({ id }: { id: string }) {
  const router = useRouter();
  const { mutate, isLoading } = useZact(removePartner);

  return (
    <GhostButton
      text="Remove"
      loading={isLoading}
      onClick={async () => {
        await mutate(id);
        router.refresh();
      }}
    />
  );
}
