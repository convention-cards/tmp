import { XMarkIcon } from "@heroicons/react/24/outline";
import { AceAskBidComponent } from "components/bridge/ace-ask-bid-component";
import { BidComponent } from "components/bridge/bid-component";
import { PrimaryButton } from "components/buttons/primary";
import { TextField } from "components/form/textfield";
import { FieldArray, useField } from "formik";
import { increaseBid } from "utils/bridge/bid";
import type {
  AceAskingBidType,
  AceAskingResponseType,
} from "../../../prisma/custom";
import { AceAskingResponseTypeSelect } from "./ace-asking-response-type-select";

interface Props {
  response: AceAskingResponseType[number];
  askingBid: AceAskingBidType;
  index: number;
}

export function AceAskingFormResponseRow({
  response,
  index,
  askingBid,
}: Props) {
  return (
    <tr>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        Step {index + 1}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {formatBidString(askingBid, index + 1)}
      </td>
      <td className="whitespace-nowrap px-3 py-4">
        <AceAskingResponseTypeSelect name={`responses[${index}]`} />
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {response.type === "description" && (
          <TextField
            name={`responses[${index}].description`}
            label={""}
            placeholder={"Description..."}
          />
        )}
        {response.type === "ace" && (
          <NumAcesCheckboxList
            name={`responses[${index}].response`}
            options={[0, 1, 2, 3, 4]}
          />
        )}
        {response.type === "kc" && (
          <NumAcesCheckboxList
            name={`responses[${index}].response`}
            options={[0, 1, 2, 3, 4, 5]}
          />
        )}
      </td>
      <td className="whitespace-nowrap px-3 py-4">
        {response.type === "description" && "-"}
        {(response.type === "ace" || response.type === "kc") && (
          <TextField
            name={`responses[${index}].additional`}
            label=""
            placeholder="with queen of trumps..."
          />
        )}
      </td>
      <td className="relative space-x-2 whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
        <FieldArray name="responses">
          {({ remove }) => (
            <PrimaryButton
              icon={<XMarkIcon className="h-4 w-4" />}
              onClick={() => remove(index)}
            />
          )}
        </FieldArray>
      </td>
    </tr>
  );
}

function NumAcesCheckboxList({
  name,
  options,
}: {
  name: string;
  options: number[];
}) {
  const [field, _, helpers] = useField<number[]>(name);

  return (
    <fieldset className="flex justify-evenly">
      {options.map((num) => (
        <div className="flex flex-col items-center" key={num}>
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            checked={field.value.includes(num)}
            onChange={(e) =>
              e.currentTarget.checked
                ? helpers.setValue([...field.value, num])
                : helpers.setValue(field.value.filter((n) => n !== num))
            }
          />
          <span>{num}</span>
        </div>
      ))}
    </fieldset>
  );
}

function formatBidString(askingBid: AceAskingBidType, step: number) {
  switch (askingBid.type) {
    case "bid":
      const bid = increaseBid(askingBid.bid, step);
      if (bid === null) {
        return "-";
      }
      return <BidComponent {...bid} />;
    case "generic":
      const resultingStep = askingBid.offset + step;
      return (
        <AceAskBidComponent bid={{ ...askingBid, offset: resultingStep }} />
      );
    case "description":
      return "-";
  }
}
