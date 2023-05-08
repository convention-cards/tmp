import { Card } from "components/card";
import type { NewSystemSchemaType } from "config/new-system-form";
import { useField } from "formik";
import { TemplateOrCustomSelector } from "./template-custom-selector";
import { NewSystemTemplateSystemForm } from "./template-form";

export function NewSystemSystemForm() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [field, _2, { setValue }] =
    useField<NewSystemSchemaType["bids"]>("bids");

  const clearMode = () => {
    setValue("custom");
  };

  return (
    <Card id="new-cc-system">
      {field.value === "custom" && <TemplateOrCustomSelector />}

      {field.value !== "custom" && (
        <NewSystemTemplateSystemForm goBack={clearMode} />
      )}
    </Card>
  );
}
