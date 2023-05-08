import { Tab } from "@headlessui/react";
import { DescriptionInputPane } from "./description-input-pane";
import { DescriptionPreviewPane } from "./description-preview-pane";
import { DescriptionTabList } from "./tab-list";

interface Props {
  name: string;
  label?: string;
  placeholder?: string;
}

export function DescriptionField({
  name,
  label = "Description",
  placeholder = "Add a description",
}: Props) {
  return (
    <div>
      <label htmlFor={name} className="mb-4 block font-medium text-gray-700">
        {label}
      </label>
      <Tab.Group>
        {({ selectedIndex }) => (
          <>
            <DescriptionTabList name={name} selected={selectedIndex} />
            <Tab.Panels className="mt-2">
              <DescriptionInputPane name={name} placeholder={placeholder} />
              <DescriptionPreviewPane name={name} />
            </Tab.Panels>
          </>
        )}
      </Tab.Group>
    </div>
  );
}
