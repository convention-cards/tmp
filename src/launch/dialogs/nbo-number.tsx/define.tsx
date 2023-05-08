import { Dialog } from "@headlessui/react";
import type { NBO } from "@prisma/client";
import { PrimaryButton } from "components/buttons/primary";
import { SecondaryButton } from "components/buttons/secondary";
import { DialogBase } from "components/dialogs/base";
import { DialogCloseButton } from "components/dialogs/close-button";
import { TextField } from "components/form/textfield";
import { Formik } from "formik";
import { api } from "utils/api";
import type { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { NationalNumberSchema } from "../../../../prisma/schemas";

interface Props {
  onClose: () => void;

  nbo: NBO;
  current: string;
}

const schema = NationalNumberSchema.pick({
  number: true,
});

type FormType = z.infer<typeof schema>;

const formikSchema = toFormikValidationSchema(schema);

export function ChangeNboNumberDialog({ nbo, current, onClose }: Props) {
  const ctx = api.useContext();
  const changeNumber = api.nboNumber.change.useMutation({
    onSuccess: () => {
      ctx.nboNumber.list.invalidate();
    },
  });
  const onSubmit = async (v: FormType) => {
    await changeNumber.mutateAsync({ ...v, nbo });

    onClose();
  };

  return (
    <Formik
      initialValues={{ number: current }}
      validationSchema={formikSchema}
      onSubmit={onSubmit}
    >
      {({ submitForm, isSubmitting }) => (
        <DialogBase onClose={onClose}>
          <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
            <DialogCloseButton onClose={onClose} />
            <div className="text-center sm:mt-0 sm:text-left">
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                Change {nbo} number
              </Dialog.Title>
              <div className="mt-6">
                <TextField name="number" label="Number" placeholder="012345" />
              </div>
            </div>
            <div className="mt-6 justify-end space-x-4 sm:mt-8 sm:flex">
              <SecondaryButton text="Cancel" onClick={onClose} />
              <PrimaryButton
                text="Change"
                onClick={submitForm}
                loading={isSubmitting}
              />
            </div>
          </Dialog.Panel>
        </DialogBase>
      )}
    </Formik>
  );
}
