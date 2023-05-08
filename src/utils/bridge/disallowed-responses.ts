import { Suit } from "@prisma/client";
import type { Bid } from "types/bid";
import { bidEquals, SUIT_LIST } from "./bid";

export function calculateDisallowedResponses(
  bid: Bid,
  existing: { bid: Bid }[]
) {
  const disallowed: Bid[] = [];

  console.log(existing);

  // Add the existing ones first so we have slightly less to search through
  existing.forEach((r) => {
    const b = disallowed.find((d) => bidEquals(d, r.bid));
    console.log(b);

    if (b === undefined) {
      disallowed.push(r.bid);
    }
  });

  for (let i = 1; i < bid.level; i++) {
    SUIT_LIST.forEach((s) => disallowed.push({ level: i, suit: s }));
  }

  for (let i = 0; i < SUIT_LIST.length; i++) {
    const b: Bid = { level: bid.level, suit: SUIT_LIST[i] ?? Suit.Club };
    disallowed.push(b);

    if (bidEquals(b, bid)) {
      break;
    }
  }

  return Array.from(disallowed);
}
