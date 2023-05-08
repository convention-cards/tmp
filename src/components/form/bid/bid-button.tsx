import classNames from "classnames";
import { useMemo } from "react";
import type { Bid } from "types/bid";
import { bidEquals } from "utils/bridge/bid";
import { bidToString } from "utils/bridge/bid-to-string";
import { formatSuitString } from "utils/bridge/format-suit-string";

interface Props {
  bid: Bid;
  disallowed: Bid[];

  selectBid: (b: Bid) => void;
}

export function BidButton({ bid, disallowed, selectBid }: Props) {
  const isDisallowed = useMemo(() => {
    return (
      disallowed.filter((disallowedBid) => bidEquals(bid, disallowedBid))
        .length > 0
    );
  }, [bid, disallowed]);

  const classes = classNames(
    "rounded-full bg-white hover:bg-gray-100 w-12 h-12 flex items-center justify-center",
    isDisallowed && "opacity-50 cursor-not-allowed"
  );

  return (
    <button className={classes} onClick={() => selectBid(bid)}>
      {formatSuitString(bidToString(bid))}
    </button>
  );
}
