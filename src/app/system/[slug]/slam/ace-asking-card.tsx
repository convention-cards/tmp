import { Card } from "components/card";
import { prisma } from "server/db";
import { AceAskingRow } from "./ask-asking-row";

interface Props {
  systemId: string;
}

export async function AceAskingTable({ systemId }: Props) {
  const aceAsks = await prisma.aceAskingScheme.findMany({
    where: {
      systemId,
    },
  });

  return (
    <Card
      id="ace-asking-table"
      title="Ace Asking Bids"
      headingActions={[
        {
          text: "New",
          relativeHref: "/new",
        },
      ]}
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
