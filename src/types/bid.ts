import type { Suit } from "@prisma/client";

export type Bid = {
  level: number;
  suit: Suit;
};
