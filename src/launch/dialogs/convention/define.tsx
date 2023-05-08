import { Dialog } from "@headlessui/react";
import { PrimaryButton } from "components/buttons/primary";
import { SecondaryButton } from "components/buttons/secondary";
import { DialogBase } from "components/dialogs/base";
import { DialogCloseButton } from "components/dialogs/close-button";
import { DescriptionField } from "components/form/description";
import { TextField } from "components/form/textfield";
import { Formik } from "formik";
import { api } from "utils/api";
import type { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { ConventionSchema } from "../../../../prisma/schemas";

interface Props {
  onClose: () => void;

  systemId: string;
}

const schema = ConventionSchema.pick({
  applies: true,
  description: true,
  intervention: true,
  name: true,
  notes: true,
});

type FormType = z.infer<typeof schema>;

const formikSchema = toFormikValidationSchema(schema);

const initialValues: FormType = {
  applies: "",
  description: "",
  intervention: "",
  name: "",
  notes: "",
};

export function DefineConventionDialog({ systemId, onClose }: Props) {
  const ctx = api.useContext();
  const addConvention = api.convention.add.useMutation({
    onSuccess: () => {
      ctx.system.get.invalidate();
    },
  });
  const onSubmit = async (v: FormType) => {
    await addConvention.mutateAsync({ ...v, systemId, responses: [] });

    onClose();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={formikSchema}
      onSubmit={onSubmit}
    >
      {({ submitForm, isSubmitting }) => (
        <DialogBase onClose={onClose}>
          <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
            <DialogCloseButton onClose={onClose} />
            <div className="text-center sm:mt-0 sm:text-left">
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                Define convention
              </Dialog.Title>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <TextField
                  name="name"
                  label={"Name"}
                  placeholder={"Stayman, Jacoby, Checkback..."}
                />
                <TextField
                  name="description"
                  label={"Description"}
                  placeholder={"Asks for a 4 card major..."}
                />
                <div className="col-span-2">
                  <DescriptionField
                    name="applies"
                    label="Applies after"
                    placeholder="1NT-?"
                  />
                </div>
                <div className="col-span-2">
                  <DescriptionField
                    name="interventions"
                    label="Action over intervention"
                    placeholder="XX - offer to play. Bids show stop. Pass denies stop."
                  />
                </div>
                <div className="col-span-2">
                  <DescriptionField
                    name="notes"
                    label="Other notes/exceptions"
                    placeholder="Non-promissory."
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 justify-end space-x-4 sm:mt-8 sm:flex">
              <SecondaryButton text="Cancel" onClick={onClose} />
              <PrimaryButton
                text="Save"
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
