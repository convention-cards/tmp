import { RadioGroup, Switch } from "@headlessui/react";
import classNames from "classnames";
import { Card } from "components/card";
import { useState } from "react";

const plans = [
  {
    name: "Free",
    free: true,
    limit: "Up to 2 systems",
  },
  {
    name: "Silver",
    free: false,
    priceMonthly: 0,
    priceYearly: 0,
    limit: "Up to 5 systems",
  },
  {
    name: "Gold",
    free: false,
    priceMonthly: 0,
    priceYearly: 0,
    limit: "Unlimited systems",
  },
  {
    name: "Custom",
    free: false,
    priceMonthly: "-",
    priceYearly: "-",
    limit: "Custom",
  },
];

export function SettingsTierCard() {
  const [selectedPlan, setSelectedPlan] = useState(plans[1]);
  const [annualBillingEnabled, setAnnualBillingEnabled] = useState(true);
  return (
    <Card id="billing-plan" title="Pricing Plan">
      <form action="#" method="POST">
        <div className="space-y-6 bg-white ">
          <RadioGroup value={selectedPlan} onChange={setSelectedPlan}>
            <RadioGroup.Label className="sr-only">
              Pricing plans
            </RadioGroup.Label>
            <div className="relative -space-y-px rounded-md bg-white">
              {plans.map((plan, planIdx) => (
                <RadioGroup.Option
                  key={plan.name}
                  value={plan}
                  className={({ checked }) =>
                    classNames(
                      planIdx === 0 ? "rounded-tl-md rounded-tr-md" : "",
                      planIdx === plans.length - 1
                        ? "rounded-bl-md rounded-br-md"
                        : "",
                      checked
                        ? "z-10 border-indigo-200 bg-indigo-50"
                        : "border-gray-200 hover:bg-gray-50",
                      "relative flex cursor-pointer flex-col border p-4 focus:outline-none md:grid md:grid-cols-3 md:pl-4 md:pr-6"
                    )
                  }
                >
                  {({ active, checked }) => (
                    <>
                      <span className="flex items-center text-sm">
                        <span
                          className={classNames(
                            checked
                              ? "border-transparent bg-indigo-500"
                              : "border-gray-300 bg-white",
                            active ? "ring-2 ring-gray-900 ring-offset-2" : "",
                            "flex h-4 w-4 items-center justify-center rounded-full border"
                          )}
                          aria-hidden="true"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-white" />
                        </span>
                        <RadioGroup.Label
                          as="span"
                          className="ml-3 font-medium text-gray-900"
                        >
                          {plan.name}
                        </RadioGroup.Label>
                      </span>
                      {plan.free && (
                        <RadioGroup.Description
                          as="span"
                          className="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center"
                        >
                          <span
                            className={classNames(
                              checked ? "text-indigo-900" : "text-gray-900",
                              "font-medium"
                            )}
                          >
                            Free
                          </span>
                        </RadioGroup.Description>
                      )}
                      {!plan.free && (
                        <RadioGroup.Description
                          as="span"
                          className="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center"
                        >
                          <span
                            className={classNames(
                              checked ? "text-indigo-900" : "text-gray-900",
                              "font-medium"
                            )}
                          >
                            ${plan.priceMonthly} / mo
                          </span>{" "}
                          <span
                            className={
                              checked ? "text-indigo-700" : "text-gray-500"
                            }
                          >
                            (${plan.priceYearly} / yr)
                          </span>
                        </RadioGroup.Description>
                      )}
                      <RadioGroup.Description
                        as="span"
                        className={classNames(
                          checked ? "text-indigo-700" : "text-gray-500",
                          "ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right"
                        )}
                      >
                        {plan.limit}
                      </RadioGroup.Description>
                    </>
                  )}
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>

          <Switch.Group as="div" className="flex items-center">
            <Switch
              checked={annualBillingEnabled}
              onChange={setAnnualBillingEnabled}
              className={classNames(
                annualBillingEnabled ? "bg-indigo-500" : "bg-gray-200",
                "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
              )}
            >
              <span
                aria-hidden="true"
                className={classNames(
                  annualBillingEnabled ? "translate-x-5" : "translate-x-0",
                  "inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                )}
              />
            </Switch>
            <Switch.Label as="span" className="ml-3">
              <span className="text-sm font-medium text-gray-900">
                Annual billing
              </span>
              <span className="text-sm text-gray-500">(Save 10%)</span>
            </Switch.Label>
          </Switch.Group>
        </div>
      </form>
    </Card>
  );
}
