import {
  ArrowSmallUpIcon,
  ChevronRightIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import { BidComponent } from "components/bridge/bid-component";
import { PrimaryButton } from "components/buttons/primary";
import { SecondaryButton } from "components/buttons/secondary";
import { Card } from "components/card";
import { useDialog } from "launch";
import { Fragment } from "react";
import type { Bid } from "types/bid";
import type { ModifiedResponse } from "types/system";
import { calculateDisallowedResponses } from "utils/bridge/disallowed-responses";
import { ResponseRow } from "./response-row";

interface Props {
  sequence: Bid[];
  setSequence: (s: Bid[]) => void;
  responses: ModifiedResponse[];
  openingId: string;
}

export function ResponsesTableHeading({
  sequence,
  setSequence,
  responses,
  openingId,
}: Props) {
  const launch = useDialog();
  return (
    <div className="flex items-center gap-2 p-6">
      <SecondaryButton
        icon={<HomeIcon className="h-6 w-6" />}
        onClick={() => setSequence([sequence[0]])}
      />
      <SecondaryButton
        icon={<ArrowSmallUpIcon className="h-6 w-6" />}
        disabled={sequence.length < 2}
        onClick={() => setSequence(sequence.slice(0, -1))}
      />
      <div className="flex grow items-center">
        {sequence.map((b, index) => (
          <Fragment key={index}>
            {index !== 0 && <ChevronRightIcon className="h-4 w-4" />}
            <button
              className="mx-1 rounded-lg p-2 hover:bg-gray-200"
              onClick={() => setSequence(sequence.slice(0, index + 1))}
            >
              <BidComponent {...b} size="xl" />
            </button>
          </Fragment>
        ))}
      </div>
      <PrimaryButton
        text="Add Response"
        onClick={() => {
          launch("selectBid", {
            disallowed: calculateDisallowedResponses(
              sequence[sequence.length - 1],
              responses,
              sequence.length
            ),
            onBid: (b) =>
              b != null &&
              launch("addResponse", {
                objSequence: [...sequence, b],
                openingId,
              }),
          });
        }}
      />
    </div>
  );
}

export function ResponsesTable(props: Props) {
  return (
    <Card
      id="responses-table"
      padding={false}
      substituteHeading={<ResponsesTableHeading {...props} />}
    >
      <table className="mb-2 min-w-full divide-y divide-gray-300">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="w-8 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
            >
              Bid
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              Definition
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              Description
            </th>
            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
              <span className="sr-only">Remove</span>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {props.responses.map((response) => (
            <ResponseRow
              key={response.id}
              onClick={() => props.setSequence(response.objSequence)}
              response={response}
            />
          ))}
          {props.responses.length === 0 && (
            <tr>
              <td colSpan={100}>
                <div className="flex w-full items-center justify-center p-4 text-gray-500">
                  No further bids defined.
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </Card>
  );
}
