import { OpeningCard } from "./opening-card";
import { OpeningPicker } from "./opening-picker";

export function SystemConstructive() {
  return (
    <div className="space-y-6 ">
      <div className="w-32">
        <OpeningPicker />
      </div>
      <OpeningCard />
    </div>
  );
}
