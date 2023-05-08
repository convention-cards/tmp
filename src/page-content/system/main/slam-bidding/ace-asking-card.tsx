import type { ButtonProps } from "components/buttons/base";
import { Card } from "components/card";
import { useSystem } from "hooks/system";
import { useRouter } from "next/navigation";
import { api } from "utils/api";
import { AceAskingRow } from "./ask-asking-row";

export function AceAskingTable() {
  const { id, slug } = useSystem();
  const router = useRouter();
  const { data: aceAsks } = api.aceAsk.list.useQuery(id);
  const actions: ButtonProps[] = [
    {
      text: "Add",
      onClick: () => router.push(`/system/${slug}/ace-ask/new`),
    },
  ];

  return (
    <Card
      id="ace-asking-table"
      title="Ace Asking Bids"
      headingActions={actions}
      padding={false}
      loading={aceAsks === undefined}
    >
      <table className="mb-2 min-w-full divide-y divide-gray-300">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              Asking Bid
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            ></th>
            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
              <span className="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {aceAsks?.map((ask) => (
            <AceAskingRow key={ask.id} ask={ask} />
          ))}
          {aceAsks?.length === 0 && (
            <tr>
              <td colSpan={100}>
                <div className="flex w-full items-center justify-center p-4 text-gray-500">
                  No ace asking bids defined.
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </Card>
  );
}
