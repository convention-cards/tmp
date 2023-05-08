import type { Suit } from "@prisma/client";
import { SuitComponent } from "./suit-component";

const SIZE_LOOKUP = {
  xs: { suit: "h-2.5 w-2.5", level: "text-xs" },
  sm: { suit: "h-3 w-3", level: "text-sm" },
  md: { suit: "h-3.5 w-3.5", level: "text-md" },
  xl: { suit: "h-5 w-5", level: "text-xl" },
  big: { suit: "h-7 w-7", level: "text-3xl" },
};

interface Props {
  level: number;
  suit: Suit;

  size?: keyof typeof SIZE_LOOKUP;
}

export function BidComponent({ suit, level, size = "md" }: Props) {
  return (
    <div
      className={`flex items-center justify-center ${SIZE_LOOKUP[size].level}`}
    >
      {level}
      <SuitComponent suit={suit} size={SIZE_LOOKUP[size].suit} />
    </div>
  );
}
