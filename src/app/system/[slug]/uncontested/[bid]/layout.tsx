import { Suit } from "@prisma/client";
import type { PropsWithChildren } from "react";
import { parseBidFromString } from "utils/bridge/sequence";
import { OpeningPicker } from "./opening-picker";

interface Props extends PropsWithChildren {
  params: { bid: string };
}

export default function Layout({
  params: { bid: bidStr },
  children,
}: PropsWithChildren<Props>) {
  const bid = parseBidFromString(bidStr) ?? { suit: Suit.Club, level: 1 };
  return (
    <div className="space-y-6 ">
      <div className="w-32">
        <OpeningPicker bid={bid} />
      </div>
      {children}
    </div>
  );
}
