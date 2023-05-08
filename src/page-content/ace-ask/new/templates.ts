import { Suit } from "@prisma/client";
import type { AceAskFormType } from "../schema";

export const NewAceAskCustom: AceAskFormType = {
  name: "",
  askingBid: { type: "bid", bid: { level: 4, suit: Suit.NT } },
  responses: [],
  actionOverInterference: "",
  description: "",
  furtherResponses: "",
};
export const NewAceAskCustomFilled: AceAskFormType = {
  name: "Custom",
  askingBid: { type: "bid", bid: { level: 4, suit: Suit.NT } },
  responses: [],
  actionOverInterference: "",
  description: "",
  furtherResponses: "",
};

export const NewAceAskTemplates: AceAskFormType[] = [
  {
    name: "Blackwood",
    askingBid: { type: "bid", bid: { level: 4, suit: Suit.NT } },
    responses: [
      { type: "ace", response: [0, 4], additional: "" },
      { type: "ace", response: [1], additional: "" },
      { type: "ace", response: [2], additional: "" },
      { type: "ace", response: [3], additional: "" },
    ],
    actionOverInterference: "",
    description: "",
    furtherResponses: "",
  },
  {
    name: "Gerber",
    askingBid: { type: "bid", bid: { level: 4, suit: Suit.Club } },
    responses: [
      { type: "ace", response: [0, 4], additional: "" },
      { type: "ace", response: [1], additional: "" },
      { type: "ace", response: [2], additional: "" },
      { type: "ace", response: [3], additional: "" },
    ],
    actionOverInterference: "",
    description: "",
    furtherResponses: "",
  },
  {
    name: "Roman Key Card Blackwood (0314)",
    askingBid: { type: "bid", bid: { level: 4, suit: Suit.NT } },
    responses: [
      { type: "kc", response: [0, 3], additional: "" },
      { type: "kc", response: [1, 4], additional: "" },
      { type: "kc", response: [2, 5], additional: "without queen of trumps" },
      { type: "kc", response: [2, 5], additional: "with queen of trumps" },
    ],
    actionOverInterference: "",
    description: "",
    furtherResponses: "",
  },
  {
    name: "Roman Key Card Blackwood (1430)",
    askingBid: { type: "bid", bid: { level: 4, suit: Suit.NT } },
    responses: [
      { type: "kc", response: [1, 4], additional: "" },
      { type: "kc", response: [0, 3], additional: "" },
      { type: "kc", response: [2, 5], additional: "without queen of trumps" },
      { type: "kc", response: [2, 5], additional: "with queen of trumps" },
    ],
    actionOverInterference: "",
    description: "",
    furtherResponses: "",
  },
  {
    name: "Specific Ace Ask",
    askingBid: { type: "bid", bid: { level: 4, suit: Suit.NT } },
    responses: [
      { type: "description", description: "No aces" },
      { type: "description", description: "Ace of diamonds" },
      { type: "description", description: "Ace of hearts" },
      { type: "description", description: "Ace of spades" },
      { type: "description", description: "2 aces" },
      { type: "description", description: "Ace of clubs" },
    ],
    actionOverInterference: "",
    description: "",
    furtherResponses: "",
  },
  {
    name: "Exclusion Key Card (Voidwood)",
    askingBid: {
      type: "description",
      description:
        "A jump after a fit is established. Normally above game in the trump suit.",
    },
    responses: [
      { type: "kc", response: [0, 3], additional: "" },
      { type: "kc", response: [1, 4], additional: "" },
      { type: "kc", response: [2, 5], additional: "without queen of trumps" },
      { type: "kc", response: [2, 5], additional: "with queen of trumps" },
    ],
    actionOverInterference: "",
    description: "",
    furtherResponses: "",
  },
  {
    name: "Minorwood",
    askingBid: { type: "generic", level: 4, description: "minor", offset: 0 },
    responses: [
      { type: "kc", response: [1, 4], additional: "" },
      { type: "kc", response: [0, 3], additional: "" },
      { type: "kc", response: [2, 5], additional: "without queen of trumps" },
      { type: "kc", response: [2, 5], additional: "with queen of trumps" },
    ],
    actionOverInterference: "",
    description: "",
    furtherResponses: "",
  },
  {
    name: "Kickback",
    askingBid: { type: "generic", level: 4, description: "suit", offset: 1 },
    responses: [
      { type: "kc", response: [0, 3], additional: "" },
      { type: "kc", response: [1, 4], additional: "" },
      { type: "kc", response: [2, 5], additional: "without queen of trumps" },
      { type: "kc", response: [2, 5], additional: "with queen of trumps" },
    ],
    actionOverInterference: "",
    description: "",
    furtherResponses: "",
  },
];

export const NewAceAskTemplateColours = [
  "bg-green-500",
  "bg-yellow-500",
  "bg-red-500",
  "bg-pink-500",
  "bg-cyan-500",
  "bg-purple-500",
  "bg-orange-500",
  "bg-indigo-500",
];
