import { Card } from "components/card";

interface Props {
  systemId: string;
}

export function SystemDeleteSection({ systemId }: Props) {
  return (
    <Card id="cc-delete">
      <h3 className="text-lg font-medium leading-6 text-gray-900">
        Delete your system
      </h3>
      <div className="mt-2 max-w-xl text-sm text-gray-500">
        <p>
          Once you delete your system, you will lose all data associated with
          it.
        </p>
      </div>
      <div className="mt-5">
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 font-medium text-red-700 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:text-sm"
        >
          Delete System
        </button>
      </div>
    </Card>
  );
}
