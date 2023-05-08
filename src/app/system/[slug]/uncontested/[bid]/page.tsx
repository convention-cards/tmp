import { Suit } from "@prisma/client";
import { prisma } from "server/db";
import { systemSlugToId } from "server/utils/slug-to-id";
import { parseBidFromString } from "utils/bridge/sequence";
import { OpeningLoader } from "./existing-opening";
import { UndefinedOpeningCard } from "./undefined-opening";

interface Props {
  params: { bid: string; slug: string };
}

export default async function Page({ params: { slug, bid: bidStr } }: Props) {
  const { suit, level } = parseBidFromString(bidStr) ?? {
    suit: Suit.Club,
    level: 1,
  };
  const systemId = await systemSlugToId(slug);

  const opening = await prisma.opening.findFirst({
    where: {
      systemId,
      suit,
      level,
    },
    include: {
      responses: true,
    },
  });

  if (opening === null) {
    return <UndefinedOpeningCard suit={suit} level={level} />;
  }

  return <OpeningLoader opening={opening} responses={opening.responses} />;
}
