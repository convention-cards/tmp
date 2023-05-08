import { Card } from "components/card";
import type { NewSystemSchemaType } from "config/new-system-form";
import { CC_TEMPLATES } from "config/templates";
import { env } from "env/client.mjs";
import { useField } from "formik";
import { api } from "utils/api";

export function NewSystemReviewForm() {
  const { data: partners } = api.partner.list.useQuery();
  const [field] = useField<NewSystemSchemaType>("");
  return (
    <Card id="new-cc-review">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Review
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            These settings can be changed at any time
          </p>
        </div>
        <div className="mt-5 md:col-span-2 md:mt-0">
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {field.value.name}
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Bidding Methods
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {field.value.biddingMethods}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">URL</dt>
            <dd className="prose mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <code>
                {`${env.NEXT_PUBLIC_BASE_URL}/system/${field.value.slug}`}
              </code>
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Partners</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {partners !== undefined &&
                field.value.partners
                  .map(
                    (partnerId) =>
                      partners.find(({ id }) => id === partnerId)?.name
                  )
                  .join(", ")}
              {}
              {field.value.partners.length === 0 && "None"}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">System</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {field.value.bids === "custom" ? (
                "Custom"
              ) : (
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-medium text-gray-900">
                    {CC_TEMPLATES[field.value.bids].name}
                  </div>
                  <p className="text-sm text-gray-500">
                    {CC_TEMPLATES[field.value.bids].description}
                  </p>
                </div>
              )}
            </dd>
          </div>
        </div>
      </div>
    </Card>
  );
}
