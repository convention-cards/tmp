import { useField } from "formik";
import type { AceAskingResponseType } from "../../../prisma/custom";

const TYPE_TO_EXAMPLE = {
  ace: {
    type: "ace",
    additional: "",
    response: [],
  },
  kc: {
    type: "kc",
    additional: "",
    response: [],
  },
  description: {
    type: "description",
    description: "",
  },
} satisfies Record<
  AceAskingResponseType[number]["type"],
  AceAskingResponseType[number]
>;

interface Props {
  name: string;
}
export function AceAskingResponseTypeSelect({ name }: Props) {
  const [field, _, helpers] = useField<AceAskingResponseType[number]>(name);
  return (
    <select
      id={name}
      name={name}
      className="w-48 rounded-md border-gray-300 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
      value={field.value.type}
      onChange={(e) => {
        const newType = e.currentTarget
          .value as AceAskingResponseType[number]["type"];
        if (newType !== field.value.type) {
          helpers.setValue(TYPE_TO_EXAMPLE[newType]);
        }
      }}
    >
      <option value="ace">Number of aces</option>
      <option value="kc">Number of keycards</option>
      <option value="description">Description</option>
    </select>
  );
}
