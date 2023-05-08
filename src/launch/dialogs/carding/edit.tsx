import { Dialog } from "@headlessui/react";
import type { Carding } from "@prisma/client";
import { CardingType, DiscardType } from "@prisma/client";
import { PrimaryButton } from "components/buttons/primary";
import { SecondaryButton } from "components/buttons/secondary";
import { DialogBase } from "components/dialogs/base";
import { DialogCloseButton } from "components/dialogs/close-button";
import { CardingTypeSelect } from "components/form/carding-type";
import { DiscardTypeSelect } from "components/form/discard-type";
import { TextBox } from "components/form/text-box";
import { TextField } from "components/form/textfield";
import { Formik } from "formik";
import { api } from "utils/api";
import type { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { CardingSchema } from "../../../../prisma/schemas";

interface Props {
  onClose: () => void;
  carding: Carding;
}

const schema = CardingSchema.pick({
  attitude: true,
  attitudeOther: true,
  count: true,
  countOther: true,
  suitPref: true,
  suitPrefOther: true,
  smith: true,
  smithOther: true,
  discards: true,
  discardsOther: true,

  notes: true,
});

type FormType = z.infer<typeof schema>;

const formikSchema = toFormikValidationSchema(schema);

export function EditCardingDialog({ carding, onClose }: Props) {
  const ctx = api.useContext();
  const editCarding = api.carding.edit.useMutation({
    onSuccess: () => {
      ctx.system.get.invalidate();
    },
  });

  const onSubmit = async (v: FormType) => {
    await editCarding.mutateAsync({ ...v, id: carding.id });

    onClose();
  };

  return (
    <Formik
      initialValues={carding}
      validationSchema={formikSchema}
      onSubmit={onSubmit}
    >
      {({ submitForm, isSubmitting, values }) => (
        <DialogBase onClose={onClose}>
          <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
            <DialogCloseButton onClose={onClose} />
            <div className="text-center sm:mt-0 sm:text-left">
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                Edit carding
              </Dialog.Title>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <CardingTypeSelect name="attitude" label="Attitude" />
                <TextField
                  name="attitudeOther"
                  label={"Other"}
                  placeholder={"Attitude..."}
                  disabled={values.attitude !== CardingType.Other}
                />
                <CardingTypeSelect name="count" label="Count" />
                <TextField
                  name="countOther"
                  label={"Other"}
                  placeholder={"Count..."}
                  disabled={values.count !== CardingType.Other}
                />
                <CardingTypeSelect name="suitPref" label="Suit Preference" />
                <TextField
                  name="suitPrefOther"
                  label={"Other"}
                  placeholder={"Suit Preference..."}
                  disabled={values.suitPref !== CardingType.Other}
                />
                <CardingTypeSelect name="smith" label="Smith Peters" />
                <TextField
                  name="smithOther"
                  label={"Other"}
                  placeholder={"Smith Peters..."}
                  disabled={values.smith !== CardingType.Other}
                />
                <DiscardTypeSelect name="discards" label="Discards" />
                <TextField
                  name="discardsOther"
                  label={"Other"}
                  placeholder={"Discards..."}
                  disabled={values.discards !== DiscardType.Other}
                />
                <div className="col-span-2">
                  <TextBox
                    name="notes"
                    label="Extra Notes"
                    description="Any further information on your carding system"
                    placeholder="Standard attitude at trick 1. K for count at high level."
                    rows={4}
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
