import type { AceAskingScheme } from "@prisma/client";
import { AceAskBidComponent } from "components/bridge/ace-ask-bid-component";
import type { ButtonProps } from "components/buttons/base";
import { Card } from "components/card";
import { useSystemId } from "hooks/system-id";
import { useRouter } from "next/navigation";
import type { AceAskingBidType } from "../../../../prisma/custom";

interface Props {
  ask: AceAskingScheme;
}

export function AceAskDetailsCard({ ask }: Props) {
  const router = useRouter();
  const id = useSystemId();
  const actions: ButtonProps[] = [
    {
      text: "Edit",
      onClick: () => router.push(`/system/${id}/ace-ask/${ask.id}/edit`),
    },
  ];
  return (
    <Card title="Details" id="ace-ask-details" headingActions={actions}>
      <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
        <div>
          <dt className="text-sm font-medium text-gray-500">Asking Bid</dt>
          <dd className="mt-1 text-sm text-gray-900">
            <AceAskBidComponent bid={ask.askingBid as AceAskingBidType} />
          </dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-gray-500">Description</dt>
          <dd className="mt-1 text-sm text-gray-900">{ask.description}</dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-gray-500">
            Further Responses
          </dt>
          <dd className="mt-1 text-sm text-gray-900">{ask.furtherResponses}</dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-gray-500">
            Action Over Interference
          </dt>
          <dd className="mt-1 text-sm text-gray-900">
            {ask.actionOverInterference}
          </dd>
        </div>
      </dl>
    </Card>
  );
}
