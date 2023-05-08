import { prisma } from "server/db";
import { ExistingCardingCard } from "./existing";
import { MissingCardingCard } from "./missing";

interface Props {
  systemId: string;
}

export async function CardingCard({ systemId }: Props) {
  const carding = await prisma.carding.findUnique({
    where: {
      systemId,
    },
  });

  if (carding === null) {
    return <MissingCardingCard />;
  }
  return <ExistingCardingCard carding={carding} />;
}
