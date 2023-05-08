"use client";

import { PrimaryButton } from "components/buttons/primary";
import { TextBox } from "components/form/text-box";
import { TextField } from "components/form/textfield";
import { Formik } from "formik";
import { useState } from "react";
import { api } from "utils/api";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";

const schema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

type ContactType = z.infer<typeof schema>;

const initialValues = {
  name: "",
  email: "",
  message: "",
} satisfies ContactType;

const validationSchema = toFormikValidationSchema(schema);

export function ContactForm() {
  const [status, setStatus] = useState("unsent");
  const sendEmail = api.contact.send.useMutation();

  const onSubmit = async (v: ContactType) => {
    setStatus("waiting");
    await sendEmail.mutateAsync(v);
    setStatus("sent");
  };

  const buttonString =
    status === "unsent"
      ? "Submit"
      : status === "waiting"
      ? "Submitting..."
      : "Sent";

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ submitForm }) => (
        <div className="px-6 py-10 sm:px-10 lg:col-span-2 xl:p-12">
          <h3 className="text-lg font-medium text-gray-900">
            Send us a message
          </h3>
          <div className="mt-6 flex grid-cols-2 flex-col gap-x-8 gap-y-6 sm:grid sm:grid-cols-2">
            <TextField label="Name" name="name" placeholder="John Smith" />
            <TextField
              label="Email"
              name="email"
              placeholder="john@example.com"
            />
            <div className="col-span-2">
              <TextBox
                label="Message"
                name="message"
                placeholder=""
                description=""
                rows={4}
              />
            </div>
            <div className="sm:col-span-2 sm:flex sm:justify-end">
              <PrimaryButton
                text={buttonString}
                onClick={submitForm}
                disabled={status !== "unsent"}
              />
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
}
