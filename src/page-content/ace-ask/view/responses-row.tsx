import { AceAskBidComponent } from "components/bridge/ace-ask-bid-component";
import { BidComponent } from "components/bridge/bid-component";
import { increaseBid } from "utils/bridge/bid";
import type {
  AceAskingBidType,
  AceAskingResponseType,
} from "../../../../prisma/custom";

interface Props {
  response: AceAskingResponseType[number];
  askingBid: AceAskingBidType;
  index: number;
}

export function AceAskingResponseRow({ response, index, askingBid }: Props) {
  return (
    <tr>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        Step {index + 1}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {formatBidString(askingBid, index + 1)}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {response.type === "description" && response.description}
        {response.type === "ace" && (
          <>
            {response.response.join(" or ")} aces {response.additional}
          </>
        )}
        {response.type === "kc" && (
          <>
            {response.response.map((num) => `${num} keycards`).join(" or ")}
            {response.additional}
          </>
        )}
      </td>
    </tr>
  );
}

function formatBidString(askingBid: AceAskingBidType, step: number) {
  switch (askingBid.type) {
    case "bid":
      const bid = increaseBid(askingBid.bid, step);
      if (bid === null) {
        return "-";
      }
      return <BidComponent {...bid} />;
    case "generic":
      const resultingStep = askingBid.offset + step;
      return (
        <AceAskBidComponent bid={{ ...askingBid, offset: resultingStep }} />
      );
    case "description":
      return "-";
  }
}
