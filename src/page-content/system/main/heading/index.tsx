import { DocumentTextIcon } from "@heroicons/react/20/solid";
import { SecondaryButton } from "components/buttons/secondary";
import { useSystem } from "hooks/system";

export function MainSystemHeading() {
  const { name, biddingMethods } = useSystem();
  return (
    <div className="lg:flex lg:items-center lg:justify-between">
      <div className="min-w-0 flex-1">
        {/* <SystemHeadingBreadcrumbs /> */}
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          {name}
        </h2>
        <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:space-x-6">
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <DocumentTextIcon
              className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
              aria-hidden="true"
            />
            {biddingMethods}
          </div>
        </div>
      </div>
      <div className="mt-5 flex lg:mt-0 lg:ml-4">
        <SecondaryButton href="#" text="View Summary" />
      </div>
    </div>
  );
}
