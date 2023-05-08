import { PrimaryButton } from "components/buttons/primary";
import { Spinner } from "components/spinner";
import { NBO_LIST, NBO_TO_IMG_URL } from "config/nbo";
import { useDialog } from "launch";
import Image from "next/image";
import { api } from "utils/api";

export function SettingsNboNumbers() {
  const { data: numbers } = api.nboNumber.list.useQuery();
  const ctx = api.useContext();
  const deleteNumber = api.nboNumber.delete.useMutation({
    onSuccess: () => ctx.nboNumber.list.invalidate(),
  });
  const launch = useDialog();

  if (numbers === undefined) {
    return (
      <div className="flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="space-y-6 ">
      <div className="overflow-x-auto border border-gray-300 shadow sm:rounded-lg">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden shadow-sm ring-1 ring-black ring-opacity-5">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8"
                  >
                    NBO
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Number
                  </th>
                  <th
                    scope="col"
                    className="relative py-3.5 pl-3 pr-4 sm:pr-6 lg:pr-8"
                  >
                    <span className="sr-only">Manage</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {NBO_LIST.map((nbo) => {
                  const matchedNumber = numbers.find((n) => n.nbo === nbo);

                  return (
                    <tr key={nbo}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <Image
                              className="h-10 w-10 rounded-full"
                              src={NBO_TO_IMG_URL[nbo]}
                              alt={`${nbo}'s Logo`}
                              width={100}
                              height={100}
                            />
                          </div>
                          <div className="ml-4">
                            <div className="font-medium text-gray-900">
                              {nbo}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                        {matchedNumber?.number ?? "-"}
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 lg:pr-8">
                        <div className="flex justify-end space-x-4">
                          <PrimaryButton
                            text={matchedNumber === undefined ? "Add" : "Edit"}
                            onClick={() =>
                              launch("changeNboNumber", {
                                nbo,
                                current: matchedNumber?.number ?? "",
                              })
                            }
                          />
                          {matchedNumber !== undefined && (
                            <PrimaryButton
                              text="Remove"
                              onClick={() => deleteNumber.mutate({ nbo })}
                            />
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
