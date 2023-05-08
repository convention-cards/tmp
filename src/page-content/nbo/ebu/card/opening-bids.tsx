import { Suit } from "@prisma/client";
import { BidComponent } from "components/bridge/bid-component";
import { Card } from "components/card";
import { convertRangeToString } from "utils/bridge/bid-description";
import { formatSuitString } from "utils/bridge/format-suit-string";

const bids = [
  {
    suit: Suit.Club,
    level: 1,
    definition: { club: { min: 2 }, hcp: { min: 11, max: 17 } },
    description: "",
    notes: "",
  },
  {
    suit: Suit.Diamond,
    level: 1,
    definition: { hcp: { min: 18 } },
    description: "",
    notes: "[A]",
  },
  {
    suit: Suit.Heart,
    level: 1,
    definition: { heart: { min: 5 }, hcp: { min: 10, max: 17 } },
    description: "",
    notes: "[A]",
  },
  {
    suit: Suit.Spade,
    level: 1,
    definition: { spade: { min: 5 }, hcp: { min: 10, max: 17 } },
    description: "",
    notes: "[A]",
  },
];

export function EBUOtherOpenings() {
  return (
    <Card
      title="Two-level Openings and Responses"
      id="two-level"
      padding={false}
    >
      <table className="mb-2 min-w-full divide-y divide-gray-300">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
              <span className="sr-only">Bid</span>
            </th>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left text-sm font-bold text-gray-900 sm:pl-6"
            >
              HCP
            </th>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left text-sm font-bold text-gray-900 sm:pl-6"
            >
              Min Length
            </th>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left text-sm font-bold text-gray-900 sm:pl-6"
            >
              Meaning
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-bold text-gray-900"
            >
              Responses
            </th>
            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
              Notes
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {bids.map((bid, index) => (
            <tr key={index}>
              <td className="p-4">
                <BidComponent {...bid} />
              </td>
              <td className="p-4">
                {bid.definition.hcp !== undefined &&
                  convertRangeToString(bid.definition.hcp)}
              </td>
              <td className="p-4">4</td>
              <td className="whitespace-nowrap px-3 py-4 text-gray-900">
                {formatSuitString(bid.description)}
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-gray-900"></td>
              <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-center font-medium sm:pr-6">
                {bid.notes}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
