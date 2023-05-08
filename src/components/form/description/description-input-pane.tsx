import { Tab } from "@headlessui/react";
import classNames from "classnames";
import { Field, useField } from "formik";

interface Props {
  name: string;
  placeholder: string;
}
export function DescriptionInputPane({ placeholder, name }: Props) {
  const [_, { error }] = useField(name);

  const hasError = error !== undefined;

  const inputClasses = classNames(
    "block w-full rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
    hasError && "border-red-600",
    !hasError && "border-gray-300"
  );

  return (
    <Tab.Panel className="-m-0.5 rounded-lg p-0.5">
      <label htmlFor="comment" className="sr-only">
        Comment
      </label>
      <div>
        <Field
          component="textarea"
          name={name}
          rows={3}
          id="comment"
          className={inputClasses}
          placeholder={placeholder}
        />
        {hasError && <p className="mt-2 text-sm text-red-500">{error}</p>}
      </div>
    </Tab.Panel>
  );
}
