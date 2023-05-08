"use client";

import { Suit } from "@prisma/client";
import { usePathname, useRouter } from "next/navigation";
import type { Bid } from "types/bid";
import { formatBidToString } from "utils/bridge/sequence";

interface Props {
  bid: Bid;
}
export function OpeningPicker({ bid }: Props) {
  const router = useRouter();
  const pathname = usePathname() ?? "";
  return (
    <div className="flex items-center space-x-4">
      <label htmlFor="location" className="text-sm font-medium text-gray-700">
        Level
      </label>
      <select
        id="location"
        name="location"
        className="mt-1 w-32 rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        value={bid.level}
        onChange={(e) =>
          router.replace(
            `${pathname}/../${formatBidToString({
              level: parseInt(e.currentTarget.value),
              suit: bid.suit,
            })}`
          )
        }
      >
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
      </select>
      <label htmlFor="location" className="text-sm font-medium text-gray-700">
        Suit
      </label>
      <select
        id="location"
        name="location"
        className="mt-1 w-32 rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        value={bid.suit}
        onChange={(e) =>
          router.replace(
            `${pathname}/../${formatBidToString({
              level: bid.level,
              suit: e.currentTarget.value as Suit,
            })}`
          )
        }
      >
        <option>{Suit.Club}</option>
        <option>{Suit.Diamond}</option>
        <option>{Suit.Heart}</option>
        <option>{Suit.Spade}</option>
        <option>{Suit.NT}</option>
      </select>
    </div>
  );
}
