import { DocumentPlusIcon, DocumentTextIcon } from "@heroicons/react/20/solid";
import type { NewSystemSchemaType } from "config/new-system-form";
import { useField, useFormikContext } from "formik";

export function TemplateOrCustomSelector() {
  const { submitForm } = useFormikContext();
  const [_, _2, { setValue }] = useField<NewSystemSchemaType["bids"]>("bids");

  return (
    <div className="flex h-full flex-col md:col-span-2">
      <h3 className="text-lg font-medium leading-6 text-gray-900">Build</h3>
      <div className="mt-4 grid grow grid-cols-1 gap-4 md:grid-cols-2">
        <div
          className="flex h-full w-full cursor-pointer flex-col justify-center rounded-lg border-2 border-dashed border-gray-300 px-12 py-6 text-center hover:border-gray-400 hover:bg-gray-50 focus:outline-none focus:ring-2  focus:ring-indigo-500 focus:ring-offset-2 md:p-12"
          onClick={submitForm}
        >
          <DocumentPlusIcon className="mx-auto h-12 w-12 text-gray-400" />
          <span className="mt-2 block text-sm font-medium text-gray-900">
            Create a custom system
          </span>
          <span className="mt-4 block text-xs font-medium text-gray-500">
            Define all of the opening bids yourself. Only recommended for a
            particularly unusual system or a system missing from the templates.
          </span>
        </div>
        <div
          className="flex w-full cursor-pointer flex-col justify-center rounded-lg border-2 border-dashed border-gray-300 px-12 py-6 text-center hover:border-gray-400 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 md:p-12"
          onClick={() => setValue("5cm")}
        >
          <DocumentTextIcon className="mx-auto h-12 w-12 text-gray-400" />
          <span className="mt-2 block text-sm font-medium text-gray-900">
            Start with a template
          </span>
          <span className="mt-1 block text-xs font-medium text-gray-500">
            (Recommended)
          </span>
          <span className="mt-4 block text-xs font-medium text-gray-500">
            Start from a standard system template. The bids can be amended later
            to fit your system.
          </span>
        </div>
      </div>
    </div>
  );
}
