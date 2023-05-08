import classNames from "classnames";
import { Field, useField } from "formik";

interface Props {
  label: string;
  description: string;

  name: string;

  placeholder: string;
  rows: number;
}

export function TextBox({
  label,
  description,
  name,
  placeholder,
  rows,
}: Props) {
  const [_, { error }] = useField(name);

  const hasError = error !== undefined;

  const inputClasses = classNames(
    "block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
    hasError && "border-red-500"
  );

  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1">
        <Field
          component="textarea"
          id={name}
          name={name}
          rows={rows}
          className={inputClasses}
          placeholder={placeholder}
        />
      </div>
      <p className="mt-2 text-sm text-gray-500">{description}</p>
      {hasError && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  );
}
