import { MinMaxField } from "../min-max";

interface Props {
  name: string;
}
export function HandStrengthPanel({ name }: Props) {
  return (
    <div>
      <label htmlFor={name} className="text-smfont-medium block text-gray-700">
        Hand Strength
      </label>
      <div className="flex flex-col md:flex-row">
        <div className="grow pr-4">
          <div className="flex items-center">
            <span className="grow text-gray-900">HCP</span>
            <MinMaxField name={`${name}.hcp`} />
          </div>
        </div>
        <div className="grow pl-4">
          <div className="flex items-center">
            <span className="grow text-gray-900">LTC</span>
            <MinMaxField name={`${name}.ltc`} />
          </div>
        </div>
      </div>
    </div>
  );
}
