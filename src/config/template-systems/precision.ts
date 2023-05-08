import type { DefineOpeningType } from "schemas/bid";
import { PREC_2C, WEAK_2_D, WEAK_2_H, WEAK_2_S } from "./shared";

const LIMITED_HCP = { min: 11, max: 15 };

export const PRECISION_SYSTEM: DefineOpeningType[] = [
  {
    level: 1,
    suit: "Club",
    definition: { hcp: { min: 16 } },
  },
  {
    level: 1,
    suit: "Diamond",
    definition: { d: { min: 2 }, hcp: LIMITED_HCP },
  },
  {
    level: 1,
    suit: "Heart",
    definition: { h: { min: 5 }, hcp: LIMITED_HCP },
  },
  {
    level: 1,
    suit: "Spade",
    definition: { s: { min: 5 }, hcp: LIMITED_HCP },
  },
  {
    level: 1,
    suit: "NT",
    definition: { hcp: { min: 13, max: 15 }, bal: true },
  },
  {
    level: 2,
    suit: "Club",
    definition: PREC_2C,
  },
  {
    level: 1,
    suit: "Diamond",
    definition: WEAK_2_D,
  },
  {
    level: 2,
    suit: "Heart",
    definition: WEAK_2_H,
  },
  {
    level: 2,
    suit: "Spade",
    definition: WEAK_2_S,
  },
  {
    level: 2,
    suit: "NT",
    definition: {
      c: { min: 5 },
      d: { min: 5 },
      hcp: { min: 6, max: 11 },
    },
  },
];
