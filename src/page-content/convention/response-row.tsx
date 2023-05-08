import { PencilIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { BidComponent } from "components/bridge/bid-component";
import { PrimaryButton } from "components/buttons/primary";
import { useDialog } from "launch";
import type { ModifiedConventionResponse } from "types/system";
import { defToString } from "utils/bridge/bid-description";
import { formatSuitString } from "utils/bridge/format-suit-string";

interface Props {
  response: ModifiedConventionResponse;
  onClick: () => void;
}

export function ConventionResponseRow({ response, onClick }: Props) {
  const launch = useDialog();

  return (
    <tr className="cursor-pointer hover:bg-gray-100" onClick={onClick}>
      <td className="whitespace-nowrap py-4 pl-4 pr-3 sm:pl-6">
        <BidComponent {...response.finalBid} size="xl" />
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {formatSuitString(defToString(response.definition))}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {formatSuitString(response.description ?? "")}
      </td>
      <td className="relative space-x-2 whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
        <PrimaryButton
          icon={<PencilIcon className="h-4 w-4" />}
          onClick={
            () => {
              alert("Edit response");
            }
            // launch("editResponse", {
            //   existing: response,
            // })
          }
        />
        <PrimaryButton
          icon={<XMarkIcon className="h-4 w-4" />}
          onClick={() =>
            launch("yesNo", {
              onYes: () => console.log("Delete"),
              text: "Are you sure you want to delete this response and all of its descendants?",
              title: "Delete Response",
            })
          }
        />
      </td>
    </tr>
  );
}
