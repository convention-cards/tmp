import classNames from "classnames";
import { Field, useField } from "formik";

interface Props {
  label: string;
  description?: string;

  name: string;

  placeholder: string;
  type?: string;
  disabled?: boolean;

  pretext?: string;
}

export function TextField({
  label,
  description = "",
  name,
  placeholder,
  type = "text",
  disabled = false,
  pretext = "",
}: Props) {
  const [_, { error }] = useField(name);

  const hasError = error !== undefined;

  const inputClasses = classNames(
    "block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
    pretext === "" && "rounded-l-md",
    hasError && "border-red-500",
    disabled && "opacity-50 bg-gray-100"
  );

  return (
    <div>
      {label !== "" && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <div className="mt-1 flex rounded-md shadow-sm">
        {pretext !== "" && (
          <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
            {pretext}
          </span>
        )}
        <Field
          type={type}
          id={name}
          name={name}
          className={inputClasses}
          placeholder={placeholder}
          disabled={disabled}
        />
      </div>
      {description !== "" && (
        <p className="mt-2 text-sm text-gray-500">{description}</p>
      )}
      {hasError && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  );
}
