import { PencilIcon, XMarkIcon } from "@heroicons/react/24/outline";
import type { AceAskingScheme } from "@prisma/client";
import { AceAskBidComponent } from "components/bridge/ace-ask-bid-component";
import { PrimaryButton } from "components/buttons/primary";
import { useSystem } from "hooks/system";
import { useDialog } from "launch";
import { useRouter } from "next/navigation";
import { api } from "utils/api";
import type { AceAskingBidType } from "../../../../../prisma/custom";

interface Props {
  ask: AceAskingScheme;
}

export function AceAskingRow({ ask }: Props) {
  const launch = useDialog();
  const ctx = api.useContext();
  const deleteAsk = api.aceAsk.delete.useMutation({
    onSuccess: () => {
      ctx.system.get.invalidate();
    },
  });
  const { slug } = useSystem();
  const router = useRouter();

  return (
    <tr
      className="cursor-pointer hover:bg-gray-100"
      onClick={() => router.push(`/system/${slug}/ace-ask/${ask.id}`)}
    >
      <td className="whitespace-nowrap py-4 pl-4 pr-3 sm:pl-6">{ask.name}</td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        <AceAskBidComponent bid={ask.askingBid as AceAskingBidType} />
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {ask.description}
      </td>
      <td className="relative space-x-2 whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
        <PrimaryButton
          icon={<PencilIcon className="h-4 w-4" />}
          onClick={() => router.push(`/system/${slug}/ace-ask/${ask.id}/edit`)}
        />
        <PrimaryButton
          icon={<XMarkIcon className="h-4 w-4" />}
          onClick={() =>
            launch("yesNo", {
              title: `Delete Ace-Ask`,
              text: `Are you sure you want to delete '${ask.name}'. This action cannot be undone.`,
              onYes: () => deleteAsk.mutate({ id: ask.id }),
            })
          }
        />
      </td>
    </tr>
  );
}
