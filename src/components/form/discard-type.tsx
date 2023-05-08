import { DiscardType } from "@prisma/client";
import { Field } from "formik";

interface Props {
  name: string;
  label: string;
}
export function DiscardTypeSelect({ name, label }: Props) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <Field
        as="select"
        id={name}
        name={name}
        className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        defaultValue={DiscardType.None}
      >
        <option value={DiscardType.None}>None</option>
        <option value={DiscardType.Attitude}>Attitude</option>
        <option value={DiscardType.Count}>Count</option>
        <option value={DiscardType.SuitPref}>Suit Preference</option>
        <option value={DiscardType.OddEven}>Odd/Even</option>
        <option value={DiscardType.Other}>Other</option>
      </Field>
    </div>
  );
}
