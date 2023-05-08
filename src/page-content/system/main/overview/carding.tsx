import { Card } from "components/card";
import { useSystem } from "hooks/system";
import { useAtom } from "jotai";
import { systemTabAtom } from "../atoms";

export function CardingViewOverview() {
  const [_, setTab] = useAtom(systemTabAtom);
  const { carding } = useSystem();
  return (
    <Card
      title="Carding"
      subtitle="The carding methods."
      id="carding-overiew"
      primaryAction={{
        text: "View Full Carding",
        onClick: () => setTab("carding"),
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
