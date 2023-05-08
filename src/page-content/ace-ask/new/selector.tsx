import { DocumentTextIcon } from "@heroicons/react/20/solid";
import classNames from "classnames";
import { AceAskBidComponent } from "components/bridge/ace-ask-bid-component";
import { SecondaryButton } from "components/buttons/secondary";
import { Card } from "components/card";
import { useSystemId } from "hooks/system-id";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { AceAskFormType } from "../schema";
import {
  NewAceAskCustom,
  NewAceAskCustomFilled,
  NewAceAskTemplateColours,
  NewAceAskTemplates,
} from "./templates";

interface TemplateItemProps {
  onClick: () => void;
  template: AceAskFormType;
  colour: string;
}
function TemplateItem({ onClick, template, colour }: TemplateItemProps) {
  const iconClasses = classNames(
    colour,
    "inline-flex h-10 w-10 items-center justify-center rounded-lg"
  );

  return (
    <li>
      <div
        className="group relative flex cursor-pointer items-center space-x-3 rounded-md p-4 hover:bg-gray-200"
        onClick={onClick}
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
          <div className="text-sm font-medium text-gray-900">
            {template.name}
          </div>
          <div className="flex items-start text-sm text-gray-500">
            <AceAskBidComponent bid={template.askingBid} />
          </div>
        </div>
      </div>
    </li>
  );
}

interface Props {
  setValues: (v: AceAskFormType) => void;
}
export function NewAceAskTemplateSelector({ setValues }: Props) {
  const router = useRouter();
  const id = useSystemId();

  return (
    <div className="space-y-6">
      <Card id="new-ace-ask-template">
        <h3 className="mt-2 text-lg font-medium leading-6 text-gray-900">
          Template
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          Pick one of the templates to get started with a new ace-asking bid.
        </p>
        <div className="mt-5 md:col-span-2 md:mt-0">
          <ul
            role="list"
            className="mt-6 grid gap-6 border-gray-200 sm:grid-cols-2 md:grid-cols-3"
          >
            <TemplateItem
              key={NewAceAskCustom.name}
              template={NewAceAskCustomFilled}
              onClick={() => setValues(NewAceAskCustom)}
              colour={"bg-gray-500"}
            />
            {NewAceAskTemplates.map((template, index) => (
              <TemplateItem
                key={template.name}
                template={template}
                onClick={() => setValues(template)}
                colour={
                  NewAceAskTemplateColours[
                    index % NewAceAskTemplateColours.length
                  ]
                }
              />
            ))}
          </ul>
          <p className="mt-1 text-sm text-gray-500">
            If there is a template missing from this list, please{" "}
            <Link href="/contact" className="text-blue-500">
              Contact Us
            </Link>{" "}
            and we can add it.
          </p>
        </div>
      </Card>
      <div className="flex justify-end">
        <SecondaryButton
          text="Cancel"
          onClick={() => router.push(`/system/${id}#tab=slam`)}
        />
      </div>
    </div>
  );
}
