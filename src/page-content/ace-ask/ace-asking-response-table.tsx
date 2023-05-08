import type { ButtonProps } from "components/buttons/base";
import { Card } from "components/card";
import { useField } from "formik";
import type {
  AceAskingBidType,
  AceAskingResponseType,
} from "../../../prisma/custom";
import { AceAskingFormResponseRow } from "./ask-asking-row";

const EMPTY_RESPONSE: AceAskingResponseType[number] = {
  type: "ace",
  response: [],
  additional: "",
};

export function AceAskFormResponseTable() {
  const [field, _, helpers] = useField<AceAskingResponseType>("responses");
  const [askingBidField] = useField<AceAskingBidType>("askingBid");

  const actions: ButtonProps[] = [
    {
      text: "Add Response",
      onClick: () => helpers.setValue([...field.value, EMPTY_RESPONSE]),
    },
  ];

  return (
    <Card
      id="ace-asking-form-response-table"
      title="Responses"
      padding={false}
      headingActions={actions}
    >
      <table className="mb-2 min-w-full divide-y divide-gray-300">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="w-8 px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              Step
            </th>
            <th
              scope="col"
              className="w-8 px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              Bid
            </th>
            <th
              scope="col"
              className="w-48 px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              Type
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              Meaning
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              Additional Description
            </th>
            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
              <span className="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {field.value.map((response, index) => (
            <AceAskingFormResponseRow
              key={index}
              response={response}
              index={index}
              askingBid={askingBidField.value}
            />
          ))}
          {field.value.length === 0 && (
            <tr>
              <td colSpan={100}>
                <div className="flex w-full items-center justify-center p-4 text-gray-500">
                  No ace responses defined.
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </Card>
  );
}
