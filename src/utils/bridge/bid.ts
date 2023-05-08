import { Suit } from "@prisma/client";
import type { Bid } from "types/bid";

const SUIT_INDEX = {
  Club: 0,
  Diamond: 1,
  Heart: 2,
  Spade: 3,
  NT: 4,
} as const satisfies Record<Suit, number>;

export const SUIT_LIST = [
  Suit.Club,
  Suit.Diamond,
  Suit.Heart,
  Suit.Spade,
  Suit.NT,
] satisfies Suit[];

export const NUM_SUITS = SUIT_LIST.length;

export function bidEquals(b1: Bid | undefined, b2: Bid | undefined) {
  return b1?.level === b2?.level && b1?.suit === b2?.suit;
}

export function bidComparator(b1: Bid, b2: Bid) {
  if (b1.level < b2.level) {
    return -1;
  } else if (b1.level > b2.level) {
    return 1;
  } else {
    return SUIT_INDEX[b1.suit] - SUIT_INDEX[b2.suit];
  }
}

export function increaseBid(b: Bid, steps: number): Bid | null {
  const currentIndex = SUIT_INDEX[b.suit];
  const newIndex = currentIndex + steps;

  const remainder = newIndex % NUM_SUITS;
  const newSuit = SUIT_LIST[newIndex % NUM_SUITS];
  const newLevel = b.level + (newIndex - remainder) / NUM_SUITS;

  if (newLevel < 1 || newLevel > 7) {
    return null;
  } else {
    return { suit: newSuit, level: newLevel };
  }
}
