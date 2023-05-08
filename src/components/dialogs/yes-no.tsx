import { Dialog } from "@headlessui/react";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { PrimaryButton } from "components/buttons/primary";
import { SecondaryButton } from "components/buttons/secondary";
import { DialogBase } from "./base";

interface Props {
  onClose: () => void;

  title: string;
  text: string;

  yesText?: string;
  noText?: string;

  onYes: () => void;
  onNo?: () => void;
}

export function YesNoDialog({
  onClose,
  title,
  text,
  yesText = "Yes",
  noText = "No",
  onYes,
  onNo,
}: Props) {
  return (
    <DialogBase onClose={onClose}>
      <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
        <div>
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full">
            <QuestionMarkCircleIcon
              className="h-12 w-12 text-gray-500"
              aria-hidden="true"
            />
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
        <div className="mt-5 space-x-4 text-center sm:mt-6">
          <SecondaryButton
            text={noText}
            onClick={() => {
              onClose();
              onNo?.();
            }}
          />
          <PrimaryButton
            text={yesText}
            onClick={() => {
              onClose();
              onYes();
            }}
          />
        </div>
      </Dialog.Panel>
    </DialogBase>
  );
}
