import { Tab } from "@headlessui/react";
import { Suit } from "@prisma/client";
import classNames from "classnames";
import { SUIT_TO_ICON } from "config/bid-lookups";
import { useField } from "formik";

interface Props {
  selected: number;
  name: string;
}
export function DescriptionTabList({ selected, name }: Props) {
  const [field, _, helpers] = useField<string>(name);
  const writeTabCls = classNames(
    classNames(
      "rounded-md border border-transparent px-3 py-1.5 text-sm font-medium",
      selected === 0 && "bg-gray-100 text-gray-900 hover:bg-gray-200",
      selected !== 0 &&
        "bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-900"
    )
  );
  const previewTabCls = classNames(
    classNames(
      "ml-2 rounded-md border border-transparent px-3 py-1.5 text-sm font-medium",
      selected === 1 && "bg-gray-100 text-gray-900 hover:bg-gray-200",
      selected !== 1 &&
        "bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-900"
    )
  );

  return (
    <Tab.List className="flex items-center">
      <Tab className={writeTabCls}>Write</Tab>
      <Tab className={previewTabCls}>Preview</Tab>

      {selected === 0 ? (
        <div className="ml-auto flex items-center space-x-2">
          {Object.entries(SUIT_TO_ICON).map(([suit, Symbol]) => {
            if (suit === Suit.NT) {
              return;
            }

            return (
              <button
                key={suit}
                type="button"
                className="inline-flex items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
                onClick={() =>
                  helpers.setValue(
                    `${field.value}!${suit[0]?.toLowerCase() ?? ""}`
                  )
                }
              >
                <span className="sr-only">Insert a {suit}</span>
                <Symbol className="h-5 w-5" aria-hidden="true" />
              </button>
            );
          })}
        </div>
      ) : null}
    </Tab.List>
  );
}
