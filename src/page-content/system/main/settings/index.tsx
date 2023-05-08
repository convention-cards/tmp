import { SystemCloneSection } from "./clone";
import { SystemDeleteSection } from "./delete";
import { SystemEditorsTable } from "./editors";
import { SystemTransferSection } from "./transfer";

export function SystemSettings() {
  return (
    <div className="space-y-6 ">
      <SystemEditorsTable />
      <SystemTransferSection />
      <SystemCloneSection />
      <SystemDeleteSection />
    </div>
  );
}
