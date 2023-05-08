import { Card } from "components/card";

export function NtLeadsCard() {
  return (
    <Card id="nt-leads" title="Leads against No-Trump Contracts">
      <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <dt className="text-sm font-medium text-gray-500">Primary Method</dt>
          <dd className="mt-1 text-sm text-gray-900">4th and 2nd</dd>
        </div>
        <div className="sm:col-span-2">
          <dt className="text-sm font-medium text-gray-500">Examples</dt>
          <dd className="mt-1 text-sm text-gray-900">
            <table className="mb-2 min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Card
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Combinations
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="whitespace-nowrap px-3 py-2 text-sm">A</td>
                  <td className="whitespace-nowrap px-3 py-2 text-sm">AKxx</td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-3 py-2 text-sm">K</td>
                  <td className="whitespace-nowrap px-3 py-2 text-sm">KQT</td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-3 py-2 text-sm ">Q</td>
                  <td className="grid grid-cols-4 whitespace-nowrap px-3 py-2 text-sm">
                    <span>AQJ</span>
                    <span>QJT</span>
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-3 py-2 text-sm">J</td>
                  <td className="grid grid-cols-4 whitespace-nowrap px-3 py-2 text-sm">
                    <span>KJT</span>
                    <span>JTx</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </dd>
        </div>
        <div className="sm:col-span-2">
          <dt className="text-sm font-medium text-gray-500">
            Other notes/exceptions
          </dt>
          <dd className="mt-1 text-sm text-gray-900">
            Suit preference in trumps. We intentionally only card when we
            believe the information is useful to our partner.
          </dd>
        </div>
      </dl>
    </Card>
  );
}
