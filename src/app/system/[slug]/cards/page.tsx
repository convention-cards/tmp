import { Card } from "components/card";
import { NBO_LIST, NBO_TO_PREFIX } from "config/nbo";
import { prisma } from "server/db";
import { systemSlugToId } from "server/utils/slug-to-id";
import { ConventionCardRow } from "./convention-card-row";

interface Props {
  params: { slug: string };
}

export default async function SystemCards({ params: { slug } }: Props) {
  const systemId = await systemSlugToId(slug);

  const ebu = await prisma.conventionCardEbu.findUnique({
    where: {
      systemId,
    },
  });

  const ccs = { ebu, acbl: null };

  return (
    <Card
      title="Convention Cards"
      subtitle="Conventions cards for your system for different NBOs."
      id="convention-card-table"
      padding={false}
    >
      <table className="mb-2 min-w-full divide-y divide-gray-300">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
            >
              NBO
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              Created
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              Public Link
            </th>
            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
              <span className="sr-only">View or Generate</span>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {NBO_LIST.map((nbo) => {
            const prefix = NBO_TO_PREFIX[nbo];
            const card = ccs[prefix];
            return (
              <ConventionCardRow nbo={nbo} conventionCard={card} key={nbo} />
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}
