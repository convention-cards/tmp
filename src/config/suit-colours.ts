import type { Suit } from "@prisma/client";

export const SUIT_COLOURS: Record<Suit, string> = {
  Club: "bg-green-600",
  Diamond: "bg-yellow-600",
  Heart: "bg-red-600",
  Spade: "bg-black",
  NT: "bg-gray-600",
};
