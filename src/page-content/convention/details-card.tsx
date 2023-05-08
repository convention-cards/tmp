import type { Convention } from "@prisma/client";
import type { ButtonProps } from "components/buttons/base";
import { Card } from "components/card";
import { useDialog } from "launch";
import { formatSuitString } from "utils/bridge/format-suit-string";

interface Props {
  convention: Convention;
}

export function ConventionDetailsCard({ convention }: Props) {
  const launch = useDialog();
  const actions: ButtonProps[] = [
    {
      text: "Edit",
      onClick: () => launch("editConvention", { convention }),
    },
  ];
  return (
    <Card title="Details" id="ace-ask-details" headingActions={actions}>
      <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <dt className="text-sm font-medium text-gray-500">Applies After</dt>
          <dd className="mt-1 text-sm text-gray-900">
            {formatSuitString(convention.applies)}
          </dd>
        </div>
        <div className="sm:col-span-1">
          <dt className="text-sm font-medium text-gray-500">Description</dt>
          <dd className="mt-1 text-sm text-gray-900">
            {formatSuitString(convention.description)}
          </dd>
        </div>
        <div className="sm:col-span-1">
          <dt className="text-sm font-medium text-gray-500">
            Action over interference
          </dt>
          <dd className="mt-1 text-sm text-gray-900">
            {formatSuitString(convention.intervention)}
          </dd>
        </div>
        <div className="sm:col-span-1">
          <dt className="text-sm font-medium text-gray-500">
            Other notes/exceptions
          </dt>
          <dd className="mt-1 text-sm text-gray-900">
            {formatSuitString(convention.notes)}
          </dd>
        </div>
      </dl>
    </Card>
  );
}
