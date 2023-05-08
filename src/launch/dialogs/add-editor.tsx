import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { PrimaryButton } from "components/buttons/primary";
import { SecondaryButton } from "components/buttons/secondary";
import { DialogBase } from "components/dialogs/base";
import { PartnerSelect } from "components/form/partner-select";
import { Spinner } from "components/spinner";
import { useMemo, useState } from "react";
import type { PartnerType } from "types/user";
import { api } from "utils/api";

interface Props {
  onClose: () => void;
  systemId: string;
  editors: PartnerType[];
}

export function AddEditorDialog({ systemId, editors, onClose }: Props) {
  const { data: allPartners } = api.partner.list.useQuery();
  const ctx = api.useContext();
  const add = api.systemEditors.add.useMutation({
    onSuccess: () => {
      ctx.system.get.invalidate();
    },
  });

  const partners = useMemo(() => {
    if (allPartners !== undefined) {
      return allPartners.filter(
        (partner) =>
          editors.find((editor) => editor.id === partner.id) === undefined
      );
    } else {
      return [];
    }
  }, [editors, allPartners]);

  const [partnerIndex, setPartnerIndex] = useState(0);

  const submit = async () => {
    const partner = partners[partnerIndex];
    if (partner !== undefined) {
      await add.mutateAsync({ editorId: partner.id, systemId });
      onClose();
    }
  };

  return (
    <DialogBase onClose={onClose}>
      <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
        <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
          <button
            type="button"
            className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={onClose}
          >
            <span className="sr-only">Close</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="text-center sm:mt-0 sm:text-left">
          <Dialog.Title
            as="h3"
            className="text-lg font-medium leading-6 text-gray-900"
          >
            Add Editor
          </Dialog.Title>
          <div className="mt-6">
            {partners.length !== 0 && (
              <PartnerSelect
                partners={partners}
                selected={partners[partnerIndex]}
                setSelected={(p) =>
                  setPartnerIndex(partners.findIndex(({ id }) => p.id === id))
                }
              />
            )}
            {partners === undefined && <Spinner />}
            {partners.length === 0 && (
              <p className="text-sm text-gray-600">
                You have no partners to add.
              </p>
            )}
          </div>
        </div>
        <div className="mt-6 justify-end space-x-4 sm:mt-8 sm:flex">
          <SecondaryButton text="Cancel" onClick={onClose} />
          {partners?.length > 0 && (
            <PrimaryButton text="Add" onClick={submit} />
          )}
        </div>
      </Dialog.Panel>
    </DialogBase>
  );
}
