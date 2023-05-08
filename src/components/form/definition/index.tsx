import { ShapePanel } from "./shape-panel";
import { HandStrengthPanel } from "./strength-panel";
import { SuitLengthPanel } from "./suit-length-panel";

interface Props {
  name: string;
}

export function BidDefinitionField({ name }: Props) {
  return (
    <div className="space-y-4">
      <label htmlFor={name} className="block font-medium text-gray-700">
        Definition
      </label>
      <ShapePanel name={name} />
      <SuitLengthPanel name={name} />
      <HandStrengthPanel name={name} />
    </div>
  );
}
