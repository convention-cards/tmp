import { Dialog } from "@headlessui/react";
import {
  CheckCircleIcon,
  InformationCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import { PrimaryButton } from "components/buttons/primary";
import { DialogBase } from "./base";

interface Props {
  onClose: () => void;

  title: string;
  text: string;

  buttonText?: string;

  variant?: "info" | "success" | "error";
}

export function TextDialog({
  onClose,
  title,
  text,
  buttonText = "Confirm",
  variant = "info",
}: Props) {
  return (
    <DialogBase onClose={onClose}>
      <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
        <div>
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full">
            {variant === "info" && (
              <InformationCircleIcon
                className="h-12 w-12 text-gray-500"
                aria-hidden="true"
              />
            )}
            {variant === "error" && (
              <XCircleIcon
                className="h-12 w-12 text-red-500"
                aria-hidden="true"
              />
            )}
            {variant === "success" && (
              <CheckCircleIcon
                className="h-12 w-12 text-green-500"
                aria-hidden="true"
              />
            )}
          </div>
          <div className="mt-2 text-center sm:mt-5">
            <Dialog.Title
              as="h3"
              className="text-lg font-medium leading-6 text-gray-900"
            >
              {title}
            </Dialog.Title>
            <div className="mt-2">
              <p className="text-sm text-gray-500">{text}</p>
            </div>
          </div>
        </div>
        <div className="mt-5 text-center sm:mt-6">
          <PrimaryButton text={buttonText} onClick={onClose} />
        </div>
      </Dialog.Panel>
    </DialogBase>
  );
}
