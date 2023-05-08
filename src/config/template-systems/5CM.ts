import type { DefineOpeningType } from "schemas/bid";
import {
  STANDARD_HCP,
  STRONG_2C,
  STRONG_2NT,
  STRONG_NT,
  WEAK_2_D,
  WEAK_2_H,
  WEAK_2_S,
} from "./shared";

export const FIVE_CARD_MAJOR_SYSTEM: DefineOpeningType[] = [
  {
    level: 1,
    suit: "Club",
    definition: { c: { min: 3 }, hcp: STANDARD_HCP },
  },
  {
    level: 1,
    suit: "Diamond",
    definition: { d: { min: 3 }, hcp: STANDARD_HCP },
  },
  {
    level: 1,
    suit: "Heart",
    definition: { h: { min: 5 }, hcp: STANDARD_HCP },
  },
  {
    level: 1,
    suit: "Spade",
    definition: { s: { min: 5 }, hcp: STANDARD_HCP },
  },
  {
    level: 1,
    suit: "NT",
    definition: STRONG_NT,
  },
  {
    level: 2,
    suit: "Club",
    definition: STRONG_2C,
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
    definition: STRONG_2NT,
  },
];
