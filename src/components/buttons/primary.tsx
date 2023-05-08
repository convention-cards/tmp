import classNames from "classnames";
import type { ButtonProps } from "./base";
import { BaseButton } from "./base";

export function PrimaryButton(props: ButtonProps) {
  const cls = classNames(
    "inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm",
    "font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500",
    "focus:ring-offset-2",
    props.disabled && "cursor-not-allowed opacity-50"
  );

  return <BaseButton {...props} className={cls} />;
}
