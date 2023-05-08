import type {
  Carding,
  Convention,
  ConventionCardEbu,
  Opening,
  Response,
  System,
  SystemLink,
} from "@prisma/client";
import type {
  BidDefinition,
  ConventionResponseType,
} from "../../prisma/custom";
import type { Bid } from "./bid";
import type { EditorType } from "./user";

export type SystemListItem = System & {
  lastOpenedAt: SystemLink["lastOpenedAt"];
};

export type FullSystem = System & {
  editors: EditorType[];
  openings: Opening[];
  carding: Carding | null;
  conventions: Convention[];
  cc: {
    ebu: ConventionCardEbu | null;
    acbl: null;
  };
};

export type ModifiedResponse = Response & {
  objSequence: Bid[];
  finalBid: Bid;
};
export type ModifiedConventionResponse = ConventionResponseType & {
  objSequence: Bid[];
  finalBid: Bid;
};

export type ResponseTableResponse = {
  id: string;
  bid: Bid;
  description: string;
  definition: BidDefinition;
};
