import { CardingViewOverview } from "./carding";
import { OpeningBidOverview } from "./opening-bids";

export function SystemOverview() {
  return (
    <div className="space-y-6">
      <OpeningBidOverview />
      <CardingViewOverview />
    </div>
  );
}
