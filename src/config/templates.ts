import type { DefineOpeningType } from "schemas/bid";
import { FOUR_CARD_MAJOR_SYSTEM } from "./template-systems/4CM";
import { FIVE_CARD_MAJOR_SYSTEM } from "./template-systems/5CM";
import { POLISH_SYSTEM } from "./template-systems/polish";
import { PRECISION_SYSTEM } from "./template-systems/precision";

export interface CC_TEMPLATE_TYPE {
  name: string;
  description: string;
  colour: string;

  bidding: DefineOpeningType[];
}

export const CC_TEMPLATE_NAMES = ["5cm", "4cm", "precision", "polish"] as const;

export const CC_TEMPLATES = {
  "5cm": {
    name: "Standard 5cM",
    description: "5 Card Majors, 15-17NT, Better Minor, 3 Weak Twos",
    bidding: FIVE_CARD_MAJOR_SYSTEM,
    colour: "bg-green-500",
  },
  "4cm": {
    name: "Standard Acol",
    description: "4 Card Majors, 12-14NT, 3 Weak Twos",
    bidding: FOUR_CARD_MAJOR_SYSTEM,
    colour: "bg-yellow-500",
  },
  precision: {
    name: "Precision",
    description: "Strong Club, 5 Card Majors, 14-16NT",
    bidding: PRECISION_SYSTEM,
    colour: "bg-red-500",
  },
  polish: {
    name: "Polish Club",
    description: "Nebulous Club, 5 Card Majors, 15-17NT",
    bidding: POLISH_SYSTEM,
    colour: "bg-pink-500",
  },
} satisfies Record<(typeof CC_TEMPLATE_NAMES)[number], CC_TEMPLATE_TYPE>;
