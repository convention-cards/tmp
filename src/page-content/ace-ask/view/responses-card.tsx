import type { AceAskingScheme } from "@prisma/client";
import { Card } from "components/card";
import type {
  AceAskingBidType,
  AceAskingResponseType,
} from "../../../../prisma/custom";
import { AceAskingResponseRow } from "./responses-row";

interface Props {
  ask: AceAskingScheme;
}

export function AceAskResponsesCard({ ask }: Props) {
  const responses = ask.responses as AceAskingResponseType;
  return (
    <Card id="ace-asking-form-response-table" title="Responses" padding={false}>
      <table className="mb-2 min-w-full divide-y divide-gray-300">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              Step
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              Bid
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              Meaning
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {responses.map((response, index) => (
            <AceAskingResponseRow
              key={index}
              response={response}
              index={index}
              askingBid={ask.askingBid as AceAskingBidType}
            />
          ))}
          {responses.length === 0 && (
            <tr>
              <td colSpan={100}>
                <div className="flex w-full items-center justify-center p-4 text-gray-500">
                  No ace responses defined.
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </Card>
  );
}
