import { PrimaryButton } from "components/buttons/primary";
import { Card } from "components/card";

export function SettingsCommunications() {
  return (
    <div className="space-y-6 ">
      <Card id="communications" title="Communications">
        <div className="sm:grid sm:grid-cols-3 sm:items-baseline sm:gap-4">
          <div>
            <div
              className="text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700"
              id="label-email"
            >
              By Email
            </div>
          </div>
          <div className="mt-4 sm:col-span-2 sm:mt-0">
            <div className="max-w-lg space-y-4">
              <div className="relative flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="comments"
                    name="comments"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="comments"
                    className="font-medium text-gray-700"
                  >
                    Partnership Updates
                  </label>
                  <p className="text-gray-500">
                    Get notified when someone sends you a partnership request
                  </p>
                </div>
              </div>
              <div className="relative flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="candidates"
                    name="candidates"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="candidates"
                    className="font-medium text-gray-700"
                  >
                    Marketing
                  </label>
                  <p className="text-gray-500">Get marketing updates</p>
                </div>
              </div>
              <div className="relative flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="offers"
                    name="offers"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="offers" className="font-medium text-gray-700">
                    New Features
                  </label>
                  <p className="text-gray-500">
                    Get notified on updates and features on the ConventionCards
                    site
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 flex w-full justify-end">
          <PrimaryButton text="Save" href="#" />
        </div>
      </Card>
    </div>
  );
}
