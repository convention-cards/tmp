import { Suit } from "@prisma/client";
import { BidComponent } from "components/bridge/bid-component";
import { Card } from "components/card";
import type { CardPrimaryActionProps } from "components/card/primary-action";
import { useSystem } from "hooks/system";
import { useAtom } from "jotai";
import { defToString } from "utils/bridge/bid-description";
import { formatSuitString } from "utils/bridge/format-suit-string";
import type { BidDefinition } from "../../../../../prisma/custom/bid-definition";
import { constructiveOpeningAtom, systemTabAtom } from "../atoms";

interface BidProps {
  suit: Suit;
  level: number;
}
function BidOverview({ suit, level }: BidProps) {
  const { openings } = useSystem();
  const applicableOpening = openings.find(
    (b) => b.suit === suit && b.level === level
  );

  const [_, setConstructiveOpening] = useAtom(constructiveOpeningAtom);
  const [_2, setTab] = useAtom(systemTabAtom);

  const onClick = () => {
    setConstructiveOpening({ suit, level });
    setTab("uncontested");
  };

  return (
    <li
      key={`${level}${suit}`}
      className="flex cursor-pointer items-center gap-4 px-4 py-2 hover:bg-gray-100"
      onClick={onClick}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full border-gray-300">
        <BidComponent suit={suit} level={level} size="xl" />
      </div>
      <div className="text-sm text-gray-900">
        {applicableOpening !== undefined &&
          formatSuitString(
            defToString(applicableOpening.definition as BidDefinition)
          )}
        {applicableOpening === undefined && "Undefined"}
      </div>
    </li>
  );
}

function LevelOverview({ level }: { level: number }) {
  return (
    <ul role="list" className="divide-y divide-gray-200">
      <BidOverview level={level} suit={Suit.Club} />
      <BidOverview level={level} suit={Suit.Diamond} />
      <BidOverview level={level} suit={Suit.Heart} />
      <BidOverview level={level} suit={Suit.Spade} />
      <BidOverview level={level} suit={Suit.NT} />
    </ul>
  );
}

export function OpeningBidOverview() {
  const [_, setTab] = useAtom(systemTabAtom);

  const primaryAction: CardPrimaryActionProps = {
    text: "View Full System",
    onClick: () => setTab("uncontested"),
  };

  return (
    <Card
      title="Openings Overview"
      subtitle="The basic bids in the system"
      id="opening-bid-overiew"
      primaryAction={primaryAction}
    >
      <div className="grid grid-cols-2">
        <LevelOverview level={1} />
        <LevelOverview level={2} />
      </div>
    </Card>
  );
}
