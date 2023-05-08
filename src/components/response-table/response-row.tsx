import { PencilIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { BidComponent } from "components/bridge/bid-component";
import { PrimaryButton } from "components/buttons/primary";
import type { ResponseTableResponse } from "types/system";
import { defToString } from "utils/bridge/bid-description";
import { formatSuitString } from "utils/bridge/format-suit-string";

interface Props {
  response: ResponseTableResponse;

  onClick: () => void;
  editResponse: (id: string) => void;
  deleteResponse: (id: string) => void;
}

export function ResponseRow({
  response: { bid, definition, description, id },
  onClick,
  editResponse,
  deleteResponse,
}: Props) {
  return (
    <tr className="cursor-pointer hover:bg-gray-100" onClick={onClick}>
      <td className="whitespace-nowrap py-4 pl-4 pr-3 sm:pl-6">
        <BidComponent {...bid} size="xl" />
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {formatSuitString(defToString(definition))}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {formatSuitString(description)}
      </td>
      <td className="relative space-x-2 whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
        <PrimaryButton
          icon={<PencilIcon className="h-4 w-4" />}
          onClick={() => editResponse(id)}
        />
        <PrimaryButton
          icon={<XMarkIcon className="h-4 w-4" />}
          onClick={() => deleteResponse(id)}
        />
      </td>
    </tr>
  );
}
