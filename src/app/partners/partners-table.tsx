import { Avatar } from "components/avatar";
import { getUserId } from "server/auth";
import { prisma } from "server/db";
import { RemovePartnerButton } from "./remove-partner-button";

export async function PartnersTable() {
  const userId = getUserId();

  const partners = await prisma.user.findMany({
    where: {
      partners: {
        some: {
          userId,
        },
      },
    },
  });

  return (
    <div className="-mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                >
                  Name
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                  <span className="sr-only">Remove</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {partners.map((partner) => (
                <tr key={partner.id}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                    <div className="flex items-center">
                      <Avatar
                        size="md"
                        alt={`${partner.name ?? ""}'s Picture`}
                        src={partner.image}
                      />
                      <div className="ml-4">
                        <div className="font-medium text-gray-900">
                          {partner.name}
                        </div>
                        <div className="text-gray-500">{partner.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                    <RemovePartnerButton id={partner.id} />
                  </td>
                </tr>
              ))}
              {partners.length === 0 && (
                <tr>
                  <td colSpan={100}>
                    <div className="flex w-full items-center justify-center p-4 text-gray-500">
                      You have no partners. Try inviting one of your partners
                      below to start collaborating on a new system!
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
