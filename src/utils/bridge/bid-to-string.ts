import { Suit } from "@prisma/client";
import type { Bid } from "types/bid";

export function bidToString({ level, suit }: Bid) {
  if (suit === Suit.NT) {
    return `${level}NT`;
  }
  return `${level}!${suit[0] ?? ""}`;
}
