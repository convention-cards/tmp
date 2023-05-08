import { CheckIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";

interface Props {
  step: { name: string; description: string };
  index: number;
  currentStep: number;

  finalStep: boolean;

  setStep: (step: number) => void;
}

export function NavigationStep({
  step,
  index,
  currentStep,
  finalStep,
  setStep,
}: Props) {
  const mainDivClasses = classNames(
    index === 0 ? "rounded-t-md border-b-0" : "",
    finalStep ? "rounded-b-md border-t-0" : "",
    "overflow-hidden border border-gray-200 lg:border-0"
  );

  const complete = index < currentStep;
  const current = index === currentStep;
  const future = !complete && !current;

  const icon = complete ? (
    <CheckIcon className="h-6 w-6 text-white" aria-hidden="true" />
  ) : (
    index + 1
  );

  const clickableDivClasses = classNames(
    "group",
    complete && "cursor-pointer",
    future && "cursor-not-allowed"
  );
  const bottomBorderClasses = classNames(
    "absolute top-0 left-0 h-full w-1 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full",
    complete && "bg-transparent group-hover:bg-gray-200 ",
    current && "bg-indigo-600",
    future && "bg-transparent"
  );

  const outerLayoutClasses = classNames(
    "flex items-start px-6 py-5 text-sm font-medium",
    index !== 0 && "lg:pl-9"
  );

  const iconClasses = classNames(
    "flex h-10 w-10 items-center justify-center rounded-full ",
    complete && "bg-indigo-600",
    current && "border-2 border-indigo-600 text-indigo-600",
    future && "border-2 border-gray-300 text-gray-500"
  );

  const nameClasses = classNames(
    "text-sm font-medium",
    current && "text-indigo-600",
    future && "text-gray-500"
  );

  return (
    <li className="relative overflow-hidden bg-white lg:flex-1">
      <div className={mainDivClasses}>
        <div
          aria-current={current ? "step" : undefined}
          className={clickableDivClasses}
          onClick={() => complete && setStep(index)}
        >
          <span className={bottomBorderClasses} aria-hidden="true" />
          <span className={outerLayoutClasses}>
            <span className="flex-shrink-0">
              <span className={iconClasses}>{icon}</span>
            </span>
            <span className="mt-0.5 ml-4 flex min-w-0 flex-col">
              <span className={nameClasses}>{step.name}</span>
              <span className="text-sm font-medium text-gray-500">
                {step.description}
              </span>
            </span>
          </span>
        </div>
        {index !== 0 ? (
          <>
            {/* Separator */}
            <div
              className="absolute inset-0 top-0 left-0 hidden w-3 lg:block"
              aria-hidden="true"
            >
              <svg
                className="h-full w-full text-gray-300"
                viewBox="0 0 12 82"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M0.5 0V31L10.5 41L0.5 51V82"
                  stroke="currentcolor"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>
          </>
        ) : null}
      </div>
    </li>
  );
}
