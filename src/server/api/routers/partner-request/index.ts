import { createTRPCRouter } from "../../trpc";
import { createPartnershipRequest } from "./create";
import { deletePartnershipRequest } from "./delete";
import { listIncomingRequests } from "./list-incoming";
import { listOutgoingRequests } from "./list-outgoing";
import { respondPartnershipRequest } from "./respond";

export const partnerRequestRouter = createTRPCRouter({
  listOutgoing: listOutgoingRequests,
  listIncoming: listIncomingRequests,

  create: createPartnershipRequest,
  delete: deletePartnershipRequest,
  respond: respondPartnershipRequest,
});
