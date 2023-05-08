import { Suit } from "@prisma/client";
import { Fragment } from "react";
import type { Bid } from "types/bid";
import { BidButton } from "./bid-button";

const POSSIBLE_LEVELS = [1, 2, 3, 4, 5, 6, 7];
const POSSIBLE_SUITS = [
  Suit.Club,
  Suit.Diamond,
  Suit.Heart,
  Suit.Spade,
  Suit.NT,
];

interface Props {
  onBidSelected: (b: Bid) => void;

  disallowed: Bid[];
}
export function BidSelector({ onBidSelected, disallowed }: Props) {
  return (
    <div className="grid grid-cols-7">
      {POSSIBLE_SUITS.map((suit) => (
        <Fragment key={suit}>
          {POSSIBLE_LEVELS.map((level) => (
            <div className="flex items-center justify-center" key={level}>
              <BidButton
                bid={{ suit, level }}
                disallowed={disallowed}
                selectBid={onBidSelected}
              />
            </div>
          ))}
        </Fragment>
      ))}
    </div>
  );
}
