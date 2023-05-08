"use client";

import { TRPCClientError } from "@trpc/client";
import { PrimaryButton } from "components/buttons/primary";
import { TextField } from "components/form/textfield";
import type { FormikConfig } from "formik";
import { Formik } from "formik";
import { useNotification } from "launch";
import { api } from "utils/api";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";

const schema = z.object({
  email: z.string().email(),
});

type schemaType = z.infer<typeof schema>;

const initialValues: schemaType = {
  email: "",
};

export function PartnerInviteBox() {
  const cxt = api.useContext();
  const launchNotification = useNotification();

  const performInvite = api.partnerRequest.create.useMutation({
    onSuccess: () => cxt.partnerRequest.listOutgoing.invalidate(),
  });

  const onSubmit: FormikConfig<schemaType>["onSubmit"] = async (
    values,
    { resetForm }
  ) => {
    try {
      await performInvite.mutateAsync(values);
      launchNotification("success", 5, {
        title: "Request sent",
        subtitle: `Your partnership request to ${values.email} has been sent.`,
      });
    } catch (e) {
      if (e instanceof TRPCClientError) {
        launchNotification("error", 5, {
          title: "Error",
          subtitle: e.message,
        });
      }
    }

    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validateOnBlur={false}
      validationSchema={toFormikValidationSchema(schema)}
    >
      {({ submitForm }) => (
        <form className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
          <div className="w-full sm:max-w-xs">
            <TextField
              name="email"
              label=""
              type="email"
              placeholder="partner@example.com"
            />
          </div>

          <PrimaryButton onClick={submitForm} text="Send Invite" />
        </form>
      )}
    </Formik>
  );
}
