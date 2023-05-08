import { Card } from "components/card";
import { prisma } from "server/db";

interface Props {
  systemId: string;
}

export async function CardingViewOverview({ systemId }: Props) {
  const carding = await prisma.carding.findUnique({
    where: {
      systemId,
    },
  });

  return (
    <Card
      title="Carding"
      subtitle="The carding methods."
      id="carding-overiew"
      primaryAction={{
        text: "View Full Carding",
        relativeHref: "/carding",
      }}
    >
      {carding !== null && (
        <div className="flex items-center justify-around">
          <div>
            <dt className="text-sm font-medium text-gray-500">Attitude</dt>
            <dd className="mt-1 text-sm text-gray-900">{carding.attitude}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Count</dt>
            <dd className="mt-1 text-sm text-gray-900">{carding.count}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Discards</dt>
            <dd className="mt-1 text-sm text-gray-900">{carding.discards}</dd>
          </div>
        </div>
      )}
      {carding === null && "You have not defined your carding methods."}
    </Card>
  );
}
