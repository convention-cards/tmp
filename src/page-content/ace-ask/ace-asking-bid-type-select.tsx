import { Suit } from "@prisma/client";
import { useField } from "formik";
import type { AceAskingBidType } from "../../../prisma/custom";

const TYPE_TO_EXAMPLE = {
  bid: {
    type: "bid",
    bid: { suit: Suit.NT, level: 4 },
  },
  generic: {
    type: "generic",
    description: "suit",
    level: 4,
    offset: 0,
  },
  description: {
    type: "description",
    description: "",
  },
} satisfies Record<AceAskingBidType["type"], AceAskingBidType>;

interface Props {
  name: string;
  label: string;
}
export function AceAskingBidTypeSelect({ name, label }: Props) {
  const [field, _, helpers] = useField<AceAskingBidType>(name);
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <select
        id={name}
        name={name}
        className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        value={field.value.type}
        onChange={(e) => {
          const newType = e.currentTarget.value as AceAskingBidType["type"];
          if (newType !== field.value.type) {
            helpers.setValue(TYPE_TO_EXAMPLE[newType]);
          }
        }}
      >
        <option value="bid">Specific bid</option>
        <option value="generic">Dependent on trump suit</option>
        <option value="description">Other description</option>
      </select>
    </div>
  );
}
