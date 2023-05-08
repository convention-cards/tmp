import type { Suit } from "@prisma/client";
import { SUIT_TO_COLOUR, SUIT_TO_ICON } from "config/bid-lookups";

interface Props {
  suit: Suit;
  size?: string;
}

export function SuitComponent({ suit, size = "" }: Props) {
  const Icon = SUIT_TO_ICON[suit];
  const colour = SUIT_TO_COLOUR[suit];

  return <Icon className={`${size} ${colour}`} />;
}
