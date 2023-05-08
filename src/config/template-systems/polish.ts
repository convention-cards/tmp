import type { DefineOpeningType } from "schemas/bid";
import { PREC_2C, STRONG_NT } from "./shared";

const LIMITED_HCP = { min: 11, max: 17 };

export const POLISH_SYSTEM: DefineOpeningType[] = [
  {
    level: 1,
    suit: "Club",
    definition: { hcp: { min: 11 } },
  },
  {
    level: 1,
    suit: "Diamond",
    definition: { d: { min: 4 }, hcp: LIMITED_HCP },
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
    definition: STRONG_NT,
  },
  {
    level: 2,
    suit: "Club",
    definition: PREC_2C,
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
