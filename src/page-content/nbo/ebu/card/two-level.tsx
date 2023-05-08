import { Suit } from "@prisma/client";
import { BidComponent } from "components/bridge/bid-component";
import { Card } from "components/card";

const bids = [
  {
    suit: Suit.Club,
    level: 2,
    definition: { hcp: { min: 22 } },
    responses: "2D waiting, 2M natural forcing",
    notes: "",
  },
  {
    suit: Suit.Diamond,
    level: 2,
    definition: { diamond: { min: 5 }, hcp: { min: 4, max: 8 } },
    responses: "2M Constructive, 2N asking",
    notes: "[A]",
  },
  {
    suit: Suit.Heart,
    level: 2,
    definition: { heart: { min: 5 }, hcp: { min: 4, max: 8 } },
    responses: "2N asking",
    notes: "[A]",
  },
  {
    suit: Suit.Spade,
    level: 2,
    definition: { spade: { min: 5 }, hcp: { min: 4, max: 8 } },
    responses: "2N asking",
    notes: "[A]",
  },
  {
    suit: Suit.NT,
    level: 2,
    definition: { hcp: { min: 20, max: 21 } },
    responses: "Stayman, GF Transfers",
    notes: "[B]",
  },
];

export function EBUTwoLevelOpenings() {
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
              <td className="whitespace-nowrap px-3 py-4 text-gray-900">
                {/* <BidDescription definition={bid.definition} /> */}
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-gray-900">
                {bid.responses}
              </td>
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
