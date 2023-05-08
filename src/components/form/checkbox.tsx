import { Field, useField } from "formik";

interface Props {
  name: string;
  label: string;
}

export function Checkbox({ name, label }: Props) {
  const [_, { error }] = useField<boolean>(name);

  const hasError = error !== undefined;
  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <div className="flex h-5 items-center">
          <Field
            id={name}
            name={`${name}`}
            type="checkbox"
            className="h-4 w-4 rounded border-gray-500 text-indigo-600 focus:ring-indigo-500"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor={name} className="font-medium text-gray-700">
            {label}
          </label>
        </div>
      </div>
      {hasError && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  );
}
