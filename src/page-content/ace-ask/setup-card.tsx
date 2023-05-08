import { Card } from "components/card";
import { TextBox } from "components/form/text-box";
import { TextField } from "components/form/textfield";

export function AceAskFormSetupCard() {
  return (
    <Card title="Details" id="ace-ask-details-card">
      <div className="flex divide-x divide-gray-300">
        <div className="basis-1/2 space-y-6 px-4">
          <TextField
            name="name"
            label="Name"
            placeholder="Blackwood, gerber, RKCB..."
          />
          <TextBox
            name="description"
            label="Description"
            rows={4}
            placeholder="4NT asks how many aces responder has..."
            description="This description will be publically available"
          />
        </div>
        <div className="basis-1/2 space-y-6 px-4">
          <TextBox
            name="actionOverInterference"
            label="Action over Interference"
            rows={4}
            placeholder="DOPI, ROPI, DEPO..."
            description=""
          />
          <TextBox
            name="furtherResponses"
            label="Further Responses"
            rows={4}
            placeholder="First step which isn't a sign-off is a Q ask... "
            description=""
          />
        </div>
      </div>
    </Card>
  );
}
