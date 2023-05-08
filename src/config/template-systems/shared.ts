import type { BidDefinition } from "../../../prisma/custom/bid-definition";

export const STANDARD_HCP: BidDefinition["hcp"] = { min: 11, max: 21 };

export const STRONG_2NT: BidDefinition = {
  hcp: { min: 20, max: 22 },
  bal: true,
};

export const STRONG_NT: BidDefinition = {
  hcp: { min: 15, max: 17 },
  bal: true,
};

export const WEAK_NT: BidDefinition = {
  hcp: { min: 12, max: 14 },
  bal: true,
};

export const STRONG_2C: BidDefinition = {
  hcp: { min: 22 },
};

export const PREC_2C: BidDefinition = {
  c: { min: 5 },
  hcp: { min: 11, max: 15 },
};

export const WEAK_2_S: BidDefinition = {
  s: { min: 6 },
  hcp: { min: 5, max: 9 },
};

export const WEAK_2_H: BidDefinition = {
  h: { min: 6 },
  hcp: { min: 5, max: 9 },
};

export const WEAK_2_D: BidDefinition = {
  d: { min: 6 },
  hcp: { min: 5, max: 9 },
};
