import { Dialog } from "@headlessui/react";
import type { Opening } from "@prisma/client";
import { PrimaryButton } from "components/buttons/primary";
import { SecondaryButton } from "components/buttons/secondary";
import { DialogBase } from "components/dialogs/base";
import { DialogCloseButton } from "components/dialogs/close-button";
import { DebugForm } from "components/form/debug";
import { BidDefinitionField } from "components/form/definition";
import { DescriptionField } from "components/form/description";
import { Formik } from "formik";
import { useMemo } from "react";
import { api } from "utils/api";
import { refineBidDefinition } from "utils/bridge/refine-bid-definition";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import type { BidDefinition } from "../../../../prisma/custom/bid-definition";
import { RequiredBidDefinitionSchema } from "../../../../prisma/custom/bid-definition";
import { OpeningSchema } from "../../../../prisma/schemas";

interface Props {
  onClose: () => void;

  existing: Opening;
}

const schema = OpeningSchema.pick({
  description: true,
}).merge(z.object({ definition: RequiredBidDefinitionSchema }));

type FormType = z.infer<typeof schema>;

const formikSchema = toFormikValidationSchema(schema);

const initialValues = {
  definition: {
    bal: false,
    unbal: false,
    art: false,

    c: {},
    d: {},
    h: {},
    s: {},
    ma: {},
    mi: {},

    hcp: {},
    ltc: {},
  },
  description: "",
} satisfies FormType;

export function EditOpeningDialog({ existing, onClose }: Props) {
  const ctx = api.useContext();
  const editOpening = api.opening.edit.useMutation({
    onSuccess: () => {
      ctx.system.get.invalidate();
    },
  });
  const onSubmit = async (v: FormType) => {
    const def = refineBidDefinition(v.definition);

    await editOpening.mutateAsync({
      description: v.description,
      definition: def,
      id: existing.id,
    });

    onClose();
  };

  const values = useMemo(
    () => ({
      description: existing.description,
      definition: {
        ...initialValues.definition,
        ...(existing.definition as BidDefinition),
      },
    }),
    [existing]
  );

  return (
    <Formik
      initialValues={values}
      validationSchema={formikSchema}
      onSubmit={onSubmit}
    >
      {({ submitForm }) => (
        <DialogBase onClose={onClose}>
          <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
            <DialogCloseButton onClose={onClose} />
            <div className="text-center sm:mt-0 sm:text-left">
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                Edit {existing.level} {existing.suit}
              </Dialog.Title>
              <div className="mt-6 space-y-6">
                <DescriptionField name="description" />
                <BidDefinitionField name="definition" />
                <DebugForm />
              </div>
            </div>
            <div className="mt-6 justify-end space-x-4 sm:mt-8 sm:flex">
              <SecondaryButton text="Cancel" onClick={onClose} />
              <PrimaryButton text="Save" onClick={submitForm} />
            </div>
          </Dialog.Panel>
        </DialogBase>
      )}
    </Formik>
  );
}
