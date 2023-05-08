import { Card } from "components/card";

export function EBUOtherAspects() {
  return (
    <Card
      title="Other aspects of system which opponents should note"
      id="general"
    >
      <ul className="list-disc space-y-1 pl-4 text-gray-900">
        <li>1C - 12-14 bal, natural clubs or natural diamonds</li>
        <li>1D - 18+ any</li>
        <li>Very light 1M openings</li>
        <li>FP after we have shown the values for game</li>
      </ul>
    </Card>
  );
}
