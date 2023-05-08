import { Card } from "components/card";
import { TextBox } from "components/form/text-box";
import { TextField } from "components/form/textfield";
import { env } from "env/client.mjs";

export function NewSystemSetupForm() {
  return (
    <Card id="new-cc-setup">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Setup</h3>
          <p className="mt-1 text-sm text-gray-500">
            Enter the basic details of the system.
          </p>
        </div>
        <div className="mt-5 space-y-6 md:col-span-2 md:mt-0">
          <TextField
            label="Name"
            description=""
            name="name"
            placeholder="Smith-Jones 2/1 GF"
          />

          <TextBox
            label="General Description of Methods"
            description="A basic description of the system."
            name="biddingMethods"
            placeholder="15-17NT, 5cM, 2/1, Better Minor"
            rows={3}
          />

          <TextField
            label="URL"
            description={
              "The URL through which your system will be accessible. Only numbers, lowercase letters or hypens allowed."
            }
            name="slug"
            placeholder="smith-jones-2-1"
            pretext={`${env.NEXT_PUBLIC_BASE_URL}/system/`}
          />
        </div>
      </div>
    </Card>
  );
}
