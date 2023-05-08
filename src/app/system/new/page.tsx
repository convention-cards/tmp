"use client";

import { CustomAnimatePresence } from "components/animation/animated-presence";
import { PrimaryButton } from "components/buttons/primary";
import { SecondaryButton } from "components/buttons/secondary";
import { DebugForm } from "components/form/debug";
import { Heading } from "components/headings";
import { WideWidth } from "components/width/wide";
import type { NewSystemSchemaType } from "config/new-system-form";
import {
  InitialNewSystemValues,
  NewSystemSchema,
  NewSystemSteps,
} from "config/new-system-form";
import type { FormikConfig } from "formik";
import { Formik } from "formik";
import { NewSystemNavigation } from "page-content/system/new/navigation";
import { NewSystemPartnerForm } from "page-content/system/new/partner-form";
import { NewSystemReviewForm } from "page-content/system/new/review-form";
import { NewSystemSetupForm } from "page-content/system/new/setup-form";
import { NewSystemSystemForm } from "page-content/system/new/system-form";
import { useMemo, useState } from "react";
import { api } from "utils/api";
import { toFormikValidationSchema } from "zod-formik-adapter";

const FINAL_STEP = NewSystemSteps.length - 1;

interface FormDisplayProps {
  step: number;
}
function FormDisplay({ step }: FormDisplayProps) {
  return (
    <div>
      <CustomAnimatePresence show={step === 0}>
        <NewSystemSetupForm />
      </CustomAnimatePresence>
      <CustomAnimatePresence show={step === 1}>
        <NewSystemPartnerForm />
      </CustomAnimatePresence>
      <CustomAnimatePresence show={step === 2}>
        <NewSystemSystemForm />
      </CustomAnimatePresence>
      <CustomAnimatePresence show={step === 3}>
        <NewSystemReviewForm />
      </CustomAnimatePresence>
    </div>
  );
}

// export const metadata = {
//   title: "New System",
// };

export default function Page() {
  const [step, setStep] = useState(0);
  const checkSlug = api.system.checkSlug.useMutation();
  const submitFullForm = api.system.create.useMutation();
  // const router = useRouter();

  const validate = async (values: NewSystemSchemaType) => {
    if (step === 0 && values.slug !== "") {
      const slugFree = await checkSlug.mutateAsync(values.slug);

      if (!slugFree) {
        return { slug: "That URL has been taken, please choose another." };
      }
    }
  };

  const handleSubmit: FormikConfig<NewSystemSchemaType>["onSubmit"] = async (
    values,
    actions
  ) => {
    if (step === FINAL_STEP) {
      await submitFullForm.mutateAsync(values);
      // router.push("/systems");
    } else {
      setStep(step + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };
  const schema = useMemo(
    () =>
      toFormikValidationSchema<unknown>(
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        NewSystemSchema[step]!
      ),
    [step]
  );

  return (
    <Formik
      initialValues={InitialNewSystemValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
      validateOnBlur={false}
      validateOnChange={false}
      validate={validate}
    >
      {({ submitForm }) => (
        <WideWidth>
          <div className="space-y-6 py-8">
            <Heading title="New System" />
            <NewSystemNavigation currentStep={step} setStep={setStep} />
            <FormDisplay step={step} />

            <div className="flex justify-end space-x-3">
              <SecondaryButton text="Cancel" href="/systems" />
              {step !== 0 && (
                <SecondaryButton
                  text="Back"
                  onClick={() => setStep(step - 1)}
                />
              )}
              <PrimaryButton
                text={
                  step === FINAL_STEP
                    ? submitFullForm.isLoading
                      ? "Submitting..."
                      : "Finish"
                    : "Next"
                }
                onClick={submitForm}
              />
            </div>
          </div>

          <DebugForm />
        </WideWidth>
      )}
    </Formik>
  );
}
