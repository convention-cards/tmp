import type { AceAskingBidType } from "../../../prisma/custom";
import { BidComponent } from "./bid-component";

interface Props {
  bid: AceAskingBidType;
}

export function AceAskBidComponent({ bid }: Props) {
  if (bid.type === "bid") {
    return <BidComponent {...bid.bid} />;
  } else if (bid.type === "generic") {
    const suitStr =
      bid.description === "minor"
        ? "m"
        : bid.description === "major"
        ? "M"
        : "x";
    const offsetStr =
      bid.offset === 0
        ? ``
        : bid.offset > 0
        ? `+${bid.offset}`
        : `${bid.offset}`;
    return (
      <>
        {bid.level}
        {suitStr}
        {offsetStr}
      </>
    );
  } else {
    return <>{bid.description}</>;
  }
}
