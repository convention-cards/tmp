"use client";
import { EnvelopeIcon } from "@heroicons/react/20/solid";
import { api } from "api";
import { PrimaryButton } from "components/buttons/primary";
import type { RouterOutputs } from "hooks/api";
import { dtFormat } from "utils/dt-format";

interface Props {
  requests: RouterOutputs["partnerRequest"]["listOutgoing"];
}

export function OutgoingPartnershipRequests({ requests }: Props) {
  const cxt = api.useContext();
  const cancelOutgoing = api.partnerRequest.delete.useMutation({
    onSuccess: () => {
      cxt.partnerRequest.listOutgoing.invalidate();
    },
  });

  return (
    <div className="overflow-hidden bg-white shadow ring-1 ring-black ring-opacity-5 sm:rounded-md ">
      <ul role="list" className="divide-y divide-gray-200">
        {requests.map(({ id, email, createdAt }) => (
          <li key={id}>
            <div className="block hover:bg-gray-50">
              <div className="flex items-center px-4 py-4 sm:px-6">
                <div className="flex min-w-0 flex-1 items-center">
                  <div className="min-w-0 flex-1 md:grid md:grid-cols-2 md:gap-4">
                    <p className="flex items-center text-gray-800">
                      <EnvelopeIcon
                        className="mr-4 h-5 w-5 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span className="truncate">{email}</span>
                    </p>
                    <p className="flex items-center text-sm text-gray-900">
                      Sent on
                      <time className="ml-1" dateTime={createdAt.toISOString()}>
                        {dtFormat(createdAt).format("LLL")}
                      </time>
                    </p>
                  </div>
                </div>
                <div>
                  <PrimaryButton
                    text="Cancel"
                    onClick={() => cancelOutgoing.mutate({ id })}
                  />
                </div>
              </div>
            </div>
          </li>
        ))}
        {requests.length === 0 && (
          <div className="flex w-full items-center justify-center p-4 text-gray-500">
            You have no outgoing partnership requests waiting for a response
          </div>
        )}
      </ul>
    </div>
  );
}
