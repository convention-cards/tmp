import classNames from "classnames";
import { useField } from "formik";
import { useState } from "react";
import { stripUndefined } from "utils/strip-undefined";

interface Props {
  name: string;
}

export function MinMaxField({ name }: Props) {
  const [field, { error: errorWrongType }, helpers] = useField<{
    min?: number;
    max?: number;
  }>(name);

  // Formik has mistyped the error field, it's actually an object
  const error = errorWrongType as unknown as
    | { min?: string; max?: string }
    | undefined;

  const hasErrorMin = error?.min !== undefined;
  const hasErrorMax = error?.max !== undefined;

  const [inputState, setInputState] = useState<{ min: string; max: string }>({
    min: field.value?.min?.toString() ?? "",
    max: field.value?.max?.toString() ?? "",
  });

  const inputClassesMin = classNames(
    "block w-12 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-[0.25em]",
    hasErrorMin && "border-red-500"
  );
  const inputClassesMax = classNames(
    "block w-12 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-[0.25em]",
    hasErrorMax && "border-red-500"
  );

  const onMaxChange = (str: string) => {
    const newMax = parseInt(str, 10);

    if (isNaN(newMax)) {
      helpers.setValue({
        min: field.value.min,
      });
    } else {
      helpers.setValue(
        stripUndefined({
          min: field.value.min,
          max: newMax,
        })
      );
    }

    setInputState({
      min: inputState.min,
      max: str,
    });
  };

  const onMinChange = (str: string) => {
    const newMin = parseInt(str, 10);

    if (isNaN(newMin)) {
      helpers.setValue({
        max: field.value.max,
      });
    } else {
      helpers.setValue(
        stripUndefined({
          min: newMin,
          max: field.value.max,
        })
      );
    }

    setInputState({
      min: str,
      max: inputState.max,
    });
  };

  return (
    <div className="mt-1 flex items-center justify-start space-x-4">
      <label htmlFor="min" className="text-sm font-medium text-gray-700">
        Min
      </label>
      <input
        type="number"
        id={`${name}-min`}
        className={inputClassesMin}
        onChange={(e) => onMinChange(e.currentTarget.value)}
        value={inputState.min}
      />
      <label htmlFor="min" className="text-sm font-medium text-gray-700">
        Max
      </label>
      <input
        type="number"
        id={`${name}-max`}
        className={inputClassesMax}
        onChange={(e) => onMaxChange(e.currentTarget.value)}
        value={inputState.max}
      />
    </div>
  );
}
