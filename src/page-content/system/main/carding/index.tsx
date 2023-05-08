import { CardingCard } from "./carding-card";
import { NtLeadsCard } from "./nt-lead-card";
import { SuitLeadsCard } from "./suit-lead-card";

export function SystemCarding() {
  return (
    <div className="space-y-6 ">
      <CardingCard />
      <NtLeadsCard />
      <SuitLeadsCard />
    </div>
  );
}
