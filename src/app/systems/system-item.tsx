import { DocumentIcon } from "@heroicons/react/24/outline";
import type { System, SystemLink } from "@prisma/client";
import Link from "next/link";
import { dtFormat } from "utils/dt-format";

interface Props {
  system: System & { systemLink: SystemLink[] };
}

export function SystemItem({ system }: Props) {
  const dt = dtFormat(system.systemLink[0].lastOpenedAt);
  return (
    <Link href={`/system/${system.slug}`}>
      <li className="group col-span-1 h-48 divide-y divide-gray-200 rounded-lg border border-gray-300 bg-white shadow hover:bg-gray-200">
        <div className="flex h-full w-full flex-col items-start justify-between p-6">
          <div className="flex items-center space-x-3">
            <span className="flex aspect-square w-16 items-center justify-center overflow-hidden rounded-full bg-gray-100 group-hover:bg-indigo-500 ">
              <DocumentIcon className="h-8 w-8 text-gray-500 group-hover:text-white" />
            </span>
            <div className="flex flex-col">
              <h3 className="text-md truncate font-medium text-gray-900">
                {system.name}
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                {system.biddingMethods}
              </p>
            </div>
          </div>
          <p className="m-0 p-0 text-sm text-gray-500">
            Last opened <time dateTime={dt.toISOString()}>{dt.fromNow()}</time>
          </p>
        </div>
      </li>
    </Link>
  );
}
