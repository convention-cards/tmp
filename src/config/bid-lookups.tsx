import type { Suit } from "@prisma/client";
import type { IconType } from "react-icons";
import { GiClubs, GiDiamonds, GiHearts, GiSpades } from "react-icons/gi";

export const SUIT_TO_ICON: Record<Suit, IconType> = {
  Club: GiClubs,
  Diamond: GiDiamonds,
  Heart: GiHearts,
  Spade: GiSpades,
  NT: () => <>NT</>,
};

export const SUIT_TO_COLOUR: Record<Suit, string> = {
  Club: "text-green-600",
  Diamond: "text-orange-600",
  Heart: "text-red-600",
  Spade: "text-gray-900",
  NT: "text-gray-500",
};
