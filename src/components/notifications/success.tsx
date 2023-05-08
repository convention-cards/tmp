import { CheckCircleIcon } from "@heroicons/react/20/solid";

interface Props {
  title: string;
  subtitle: string;
}

export function SuccessNotification({ title, subtitle }: Props) {
  return (
    <div className="pointer-events-auto w-80 max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-green-500 ring-opacity-5">
      <div className="p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <CheckCircleIcon
              className="h-6 w-6 text-green-400"
              aria-hidden="true"
            />
          </div>
          <div className="ml-3 w-0 flex-1 pt-0.5">
            <p className="text-sm font-medium text-gray-900">{title}</p>
            <p className="mt-1 text-sm text-gray-500">{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
