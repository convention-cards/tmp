import { SuitComponent } from "components/bridge/suit-component";
import { MinMaxField } from "../min-max";

interface Props {
  name: string;
}
export function SuitLengthPanel({ name }: Props) {
  return (
    <div>
      <label htmlFor={name} className="text-smfont-medium block text-gray-700">
        Suit Lengths
      </label>
      <div className="flex flex-col md:flex-row">
        <div className="grow pr-4">
          <div className="flex items-center">
            <div className="grow">
              <SuitComponent suit="Club" size="sm" />
            </div>
            <MinMaxField name={`${name}.c`} />
          </div>
          <div className="flex items-center">
            <div className="grow">
              <SuitComponent suit="Diamond" size="sm" />
            </div>
            <MinMaxField name={`${name}.d`} />
          </div>
          <div className="flex items-center">
            <span className="grow text-gray-900">Minor</span>
            <MinMaxField name={`${name}.mi`} />
          </div>
        </div>
        <div className="grow pl-4">
          <div className="flex items-center">
            <div className="grow">
              <SuitComponent suit="Heart" size="sm" />
            </div>
            <MinMaxField name={`${name}.h`} />
          </div>
          <div className="flex items-center">
            <div className="grow">
              <SuitComponent suit="Spade" size="sm" />
            </div>
            <MinMaxField name={`${name}.s`} />
          </div>
          <div className="flex items-center">
            <span className="grow text-gray-900">Major</span>
            <MinMaxField name={`${name}.ma`} />
          </div>
        </div>
      </div>
    </div>
  );
}
