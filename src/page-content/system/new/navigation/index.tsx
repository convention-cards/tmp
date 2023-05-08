import { NewSystemSteps } from "config/new-system-form";
import { NavigationStep } from "./navigation-step";

interface Props {
  currentStep: number;
  setStep: (step: number) => void;
}

export function NewSystemNavigation({ currentStep, setStep }: Props) {
  return (
    <div className="lg:border-t lg:border-b lg:border-gray-200">
      <nav className="mx-auto max-w-7xl" aria-label="Progress">
        <ol
          role="list"
          className="overflow-hidden rounded-md shadow lg:flex lg:rounded-none lg:border-l lg:border-r lg:border-gray-200"
        >
          {NewSystemSteps.map((step, index) => (
            <NavigationStep
              key={index}
              step={step}
              currentStep={currentStep}
              setStep={setStep}
              index={index}
              finalStep={index === NewSystemSteps.length - 1}
            />
          ))}
        </ol>
      </nav>
    </div>
  );
}
