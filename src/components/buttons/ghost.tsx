import type { ButtonProps } from "./base";
import { BaseButton } from "./base";

export function GhostButton(props: ButtonProps) {
  return (
    <BaseButton
      {...props}
      className="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    />
  );
}
