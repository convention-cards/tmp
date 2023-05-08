import { ArrowLongLeftIcon } from "@heroicons/react/20/solid";
import { CustomAnimatePresence } from "components/animation/animated-presence";
import { Heading } from "components/headings";
import { WideWidth } from "components/width/wide";
import { useState } from "react";
import type { AceAskFormType } from "../schema";
import { NewAceAskForm } from "./form";
import { NewAceAskTemplateSelector } from "./selector";

export function NewAceAskPage() {
  const [values, setValues] = useState<AceAskFormType | null>(null);

  return (
    <WideWidth>
      <div className="space-y-6 py-8">
        <Heading title="New Ace-Asking Bid" />

        <CustomAnimatePresence show={values === null}>
          <NewAceAskTemplateSelector setValues={setValues} />
        </CustomAnimatePresence>
        <CustomAnimatePresence show={values !== null}>
          <div className="space-y-6">
            <div className="flex">
              <div
                className="group inline-flex cursor-pointer space-x-3 text-sm font-medium text-gray-500 hover:text-gray-700"
                onClick={() => setValues(null)}
              >
                <ArrowLongLeftIcon
                  className="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-600"
                  aria-hidden="true"
                />
                <span>Back to templates</span>
              </div>
            </div>
            {values !== null && <NewAceAskForm initialValues={values} />}
          </div>
        </CustomAnimatePresence>
      </div>
    </WideWidth>
  );
}
