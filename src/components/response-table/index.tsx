import { Card } from "components/card";
import type { Bid } from "types/bid";
import type { ResponseTableResponse } from "types/system";
import { ResponsesTableHeading } from "./response-heading";
import { ResponseRow } from "./response-row";

interface Props {
  baseSequence: Bid[];
  sequence: Bid[];
  setSequenceLength: (i: number) => void;
  addBidToSequence: (bid: Bid) => void;

  responses: ResponseTableResponse[];

  addResponse: () => void;
  editResponse: (id: string) => void;
  deleteResponse: (id: string) => void;
}
export function ResponsesTable({
  baseSequence,
  sequence,
  setSequenceLength,
  addBidToSequence,
  responses,
  addResponse,
  editResponse,
  deleteResponse,
}: Props) {
  const heading = (
    <ResponsesTableHeading
      addResponse={addResponse}
      baseSequence={baseSequence}
      sequence={sequence}
      setSequenceLength={setSequenceLength}
    />
  );

  return (
    <Card id="responses-table" padding={false} substituteHeading={heading}>
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
          {responses.map((response) => (
            <ResponseRow
              key={response.id}
              onClick={() => addBidToSequence(response.bid)}
              response={response}
              editResponse={editResponse}
              deleteResponse={deleteResponse}
            />
          ))}
          {responses.length === 0 && (
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
