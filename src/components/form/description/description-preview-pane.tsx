import { Tab } from "@headlessui/react";
import { useField } from "formik";
import { formatSuitString } from "utils/bridge/format-suit-string";

interface Props {
  name: string;
}
export function DescriptionPreviewPane({ name }: Props) {
  const [field] = useField<string>(name);
  return (
    <Tab.Panel className="-m-0.5 rounded-lg p-0.5">
      <div className="border-b">
        <div className="mx-px mt-px px-3 pt-2 pb-12 text-sm leading-5 text-gray-800">
          {formatSuitString(field.value)}
        </div>
      </div>
    </Tab.Panel>
  );
}
