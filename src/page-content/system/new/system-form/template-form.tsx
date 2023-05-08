import { ArrowLongLeftIcon, DocumentTextIcon } from "@heroicons/react/20/solid";
import classNames from "classnames";
import { CC_TEMPLATES, CC_TEMPLATE_NAMES } from "config/templates";
import { useField, useFormikContext } from "formik";

interface TemplateItemProps {
  templateName: (typeof CC_TEMPLATE_NAMES)[number];
}
function TemplateItem({ templateName }: TemplateItemProps) {
  const { name, colour, description } = CC_TEMPLATES[templateName];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, _2, helpers] = useField("bids");
  const { submitForm } = useFormikContext();

  const iconClasses = classNames(
    colour,
    "inline-flex h-10 w-10 items-center justify-center rounded-lg"
  );

  return (
    <li>
      <div
        className="group relative flex cursor-pointer items-start space-x-3 rounded-md p-4 hover:bg-gray-200"
        onClick={() => {
          helpers.setValue(templateName);
          submitForm();
        }}
      >
        <div className="flex-shrink-0">
          <span className={iconClasses}>
            <DocumentTextIcon
              className="h-6 w-6 text-white"
              aria-hidden="true"
            />
          </span>
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-sm font-medium text-gray-900">{name}</div>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
    </li>
  );
}

interface Props {
  goBack: () => void;
}
export function NewSystemTemplateSystemForm({ goBack }: Props) {
  return (
    <div className="md:grid md:grid-cols-3 md:gap-6">
      <div className="md:col-span-1">
        <div className="flex">
          <div
            className="group inline-flex cursor-pointer space-x-3 text-sm font-medium text-gray-500 hover:text-gray-700"
            onClick={goBack}
          >
            <ArrowLongLeftIcon
              className="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-600"
              aria-hidden="true"
            />
            <span>Back</span>
          </div>
        </div>
        <h3 className="mt-2 text-lg font-medium leading-6 text-gray-900">
          Template
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          Pick one of the templates to get started with a new system.
        </p>
      </div>
      <div className="mt-5 md:col-span-2 md:mt-0">
        <ul
          role="list"
          className="mt-6 divide-y divide-gray-200 border-t border-b border-gray-200"
        >
          {CC_TEMPLATE_NAMES.map((templateName) => (
            <TemplateItem key={templateName} templateName={templateName} />
          ))}
        </ul>
      </div>
    </div>
  );
}
