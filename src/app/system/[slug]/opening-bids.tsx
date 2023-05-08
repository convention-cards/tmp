import type { Opening, Suit } from "@prisma/client";
import { BidComponent } from "components/bridge/bid-component";
import { Card } from "components/card";
import { RelativeLink } from "components/relative-link";
import { prisma } from "server/db";
import { SUIT_LIST, bidEquals } from "utils/bridge/bid";
import { defToString } from "utils/bridge/bid-description";
import { formatSuitString } from "utils/bridge/format-suit-string";
import { formatBidToString } from "utils/bridge/sequence";
import type { BidDefinition } from "../../../../prisma/custom/bid-definition";

interface BidProps {
  suit: Suit;
  level: number;
  definition: BidDefinition | null;
}
function BidOverview({ suit, level, definition }: BidProps) {
  return (
    <RelativeLink href={`/uncontested/${formatBidToString({ suit, level })}/`}>
      <li
        key={`${level}${suit}`}
        className="flex cursor-pointer items-center gap-4 px-4 py-2 hover:bg-gray-100"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full border-gray-300">
          <BidComponent suit={suit} level={level} size="xl" />
        </div>
        <div className="text-sm text-gray-900">
          {definition !== null && formatSuitString(defToString(definition))}
          {definition === null && "Not yet defined"}
        </div>
      </li>
    </RelativeLink>
  );
}

interface LevelOverviewProps {
  level: number;
  openings: Opening[];
}
function LevelOverview({ level, openings }: LevelOverviewProps) {
  return (
    <ul role="list" className="divide-y divide-gray-200">
      {SUIT_LIST.map((suit) => {
        const opening = openings.find((b) => bidEquals(b, { suit, level }));
        return (
          <BidOverview
            key={suit}
            level={level}
            suit={suit}
            definition={(opening?.definition as BidDefinition) ?? null}
          />
        );
      })}
    </ul>
  );
}

interface Props {
  systemId: string;
}
export async function OpeningBidOverview({ systemId }: Props) {
  const openings = await prisma.opening.findMany({
    where: {
      systemId,
    },
  });

  return (
    <Card
      title="Openings Overview"
      subtitle="The basic bids in the system"
      id="opening-bid-overiew"
      primaryAction={{
        text: "View Full System",
        relativeHref: "/uncontested/1C",
      }}
    >
      <div className="grid grid-cols-2">
        <LevelOverview level={1} openings={openings} />
        <LevelOverview level={2} openings={openings} />
      </div>
    </Card>
  );
}
