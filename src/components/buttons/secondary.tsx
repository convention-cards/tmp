import classNames from "classnames";
import type { ButtonProps } from "./base";
import { BaseButton } from "./base";

export function SecondaryButton(props: ButtonProps) {
  props.disabled && "cursor-not-allowed opacity-50";
  const cls = classNames(
    "rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 ",
    "shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 ",
    "focus:ring-offset-2",
    props.disabled && "cursor-not-allowed opacity-50"
  );

  return <BaseButton {...props} className={cls} />;
}
