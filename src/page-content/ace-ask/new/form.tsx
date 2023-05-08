import { PrimaryButton } from "components/buttons/primary";
import { SecondaryButton } from "components/buttons/secondary";
import { DebugForm } from "components/form/debug";
import { Formik } from "formik";
import { useSystemId } from "hooks/system-id";
import { useRouter } from "next/navigation";
import { api } from "utils/api";
import { toFormikValidate } from "zod-formik-adapter";
import { AceAskFormBidCard } from "../ace-asking-bid-card";
import { AceAskFormResponseTable } from "../ace-asking-response-table";
import type { AceAskFormType } from "../schema";
import { AceAskFormSchema } from "../schema";
import { AceAskFormSetupCard } from "../setup-card";

const formikValidate = toFormikValidate(AceAskFormSchema);

interface Props {
  initialValues: AceAskFormType;
}

export function NewAceAskForm({ initialValues }: Props) {
  const router = useRouter();
  const id = useSystemId();
  const addAceAsk = api.aceAsk.add.useMutation();

  const onSubmit = async (v: AceAskFormType) => {
    await addAceAsk.mutateAsync({ ...v, systemSlug: id });
    router.push(`/system/${id}#tab=slam`);
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={formikValidate}
      onSubmit={onSubmit}
    >
      {({ submitForm, isSubmitting }) => (
        <>
          <AceAskFormSetupCard />
          <AceAskFormBidCard />
          <AceAskFormResponseTable />
          <div className="flex justify-end space-x-3">
            <SecondaryButton text="Cancel" href={`/system/${id}#tab=slam`} />
            <PrimaryButton
              text="Add"
              loading={isSubmitting}
              onClick={submitForm}
            />
          </div>
          <DebugForm />
        </>
      )}
    </Formik>
  );
}
