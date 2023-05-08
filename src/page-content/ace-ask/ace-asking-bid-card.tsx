import { Card } from "components/card";
import { BidFormComponent } from "components/form/bid/bid-form-component";
import { TextBox } from "components/form/text-box";
import { useField } from "formik";
import type { AceAskingBidType } from "../../../prisma/custom";
import { AceAskingBidTypeSelect } from "./ace-asking-bid-type-select";
import { AceAskingGenericBidComponent } from "./ace-asking-generic-bid-selector";

export function AceAskFormBidCard() {
  const [field] = useField<AceAskingBidType["type"]>("askingBid.type");
  return (
    <Card
      id="ace-asking-form-bid-card"
      title="Asking Bid"
      subtitle="Which bid begins the ace-ask?"
    >
      <div className="flex divide-x divide-gray-300">
        <div className="basis-1/2 px-4">
          <AceAskingBidTypeSelect name="askingBid" label="Type" />
        </div>
        <div className="basis-1/2 px-4">
          {field.value === "bid" && (
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Bid
              </label>
              <BidFormComponent name="askingBid.bid" />
            </div>
          )}
          {field.value === "generic" && (
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Bid
              </label>
              <AceAskingGenericBidComponent name="askingBid" />
            </div>
          )}

          {field.value === "description" && (
            <TextBox
              rows={4}
              name="askingBid.description"
              label="Bid"
              placeholder="Description..."
              description=""
            />
          )}
        </div>
      </div>
    </Card>
  );
}
