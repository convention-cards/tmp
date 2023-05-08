import { EnvelopeIcon } from "@heroicons/react/20/solid";
import { Avatar } from "components/avatar/base";
import { getEmail } from "server/auth";
import { prisma } from "server/db";
import { AcceptPartnerRequestButton } from "./accept-partner-request-button";
import { RejectPartnerRequestButton } from "./reject-partner-request-button";

export async function IncomingPartnershipRequests() {
  const email = await getEmail();

  const requests = await prisma.partnerRequest.findMany({
    where: {
      email,
    },
    include: {
      user: true,
    },
  });

  return (
    <div className="overflow-hidden bg-white shadow ring-1 ring-black ring-opacity-5 sm:rounded-md ">
      <ul role="list" className="divide-y divide-gray-200">
        {requests.map((request) => (
          <li key={request.id}>
            <div className="block hover:bg-gray-50">
              <div className="flex items-center px-4 py-4 sm:px-6">
                <div className="flex min-w-0 flex-1 items-center">
                  <div className="flex-shrink-0">
                    <Avatar
                      alt={`${request.user.name ?? ""}'s Image`}
                      src={request.user.image ?? ""}
                    />
                  </div>
                  <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                    <div>
                      <p className="truncate text-sm font-medium text-indigo-600">
                        {request.user.name}
                      </p>
                      <p className="mt-2 flex items-center text-sm text-gray-500">
                        <EnvelopeIcon
                          className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="truncate">{request.user.email}</span>
                      </p>
                    </div>
                    <div className="hidden items-center md:flex">
                      <p className="text-sm text-gray-900">
                        Sent on
                        <time
                          className="ml-1"
                          dateTime={request.createdAt.toISOString()}
                        >
                          {/* {dtFormat(request.createdAt).format("LLL")} */}
                        </time>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-x-4">
                  <RejectPartnerRequestButton id={request.id} />
                  <AcceptPartnerRequestButton id={request.id} />
                </div>
              </div>
            </div>
          </li>
        ))}
        {requests.length === 0 && (
          <div className="flex w-full items-center justify-center p-4 text-gray-500">
            You have no incoming partnership requests
          </div>
        )}
      </ul>
    </div>
  );
}
