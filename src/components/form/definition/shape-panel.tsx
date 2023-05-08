import { Checkbox } from "../checkbox";

interface Props {
  name: string;
}
export function ShapePanel({ name }: Props) {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="text-smfont-medium block text-gray-700">
        Shape
      </label>
      <div className="flex flex-col md:flex-row">
        <div className="w-1/2 pr-4">
          <Checkbox name={`${name}.bal`} label="Balanced" />
          <Checkbox name={`${name}.unbal`} label="Unbalanced" />
        </div>
        <div className="w-1/2 pl-4">
          <Checkbox name={`${name}.art`} label="Artificial" />
        </div>
      </div>
    </div>
  );
}
