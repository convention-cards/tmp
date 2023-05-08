import { Suit } from "@prisma/client";
import { Field } from "formik";

interface Props {
  name: string;
}

export function BidFormComponent({ name }: Props) {
  return (
    <div className="flex items-center space-x-4">
      <label htmlFor="level" className="text-sm font-medium text-gray-700">
        Level
      </label>
      <Field
        as="select"
        id="level"
        name={`${name}.level`}
        className="mt-1 w-32 rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
      >
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
      </Field>
      <label htmlFor="suit" className="text-sm font-medium text-gray-700">
        Suit
      </label>
      <Field
        as="select"
        id="suit"
        name={`${name}.suit`}
        className="mt-1 w-32 rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
      >
        <option>{Suit.Club}</option>
        <option>{Suit.Diamond}</option>
        <option>{Suit.Heart}</option>
        <option>{Suit.Spade}</option>
        <option>{Suit.NT}</option>
      </Field>
    </div>
  );
}
