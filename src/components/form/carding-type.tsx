import { CardingType } from "@prisma/client";
import { Field } from "formik";

interface Props {
  name: string;
  label: string;
}
export function CardingTypeSelect({ name, label }: Props) {
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
        defaultValue={CardingType.None}
      >
        <option value={CardingType.None}>None</option>
        <option value={CardingType.Standard}>Standard</option>
        <option value={CardingType.Reverse}>Reverse</option>
        <option value={CardingType.Other}>Other</option>
      </Field>
    </div>
  );
}
