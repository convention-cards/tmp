import { atom } from "jotai";

export const EBU_SECTIONS = [
  { id: "partners", name: "Partners" },
  { id: "general", name: "General Description" },
  { id: "1nt", name: "1NT Openings and Responses" },
  { id: "2-level", name: "Two-Level Openings and Responses" },
  {
    id: "other-aspects",
    name: "Other Aspects to Note",
  },
  { id: "openings", name: "Other Opening Bids" },
  { id: "defensive", name: "Defensive Methods" },
  { id: "slam", name: "Slam Conventions" },
  { id: "competitive", name: "Competitive Auctions" },
  { id: "conventions", name: "Other Conventions" },
  { id: "leads", name: "Opening Leads" },
  { id: "carding", name: "Carding Methods" },
  { id: "details", name: "Supplementary Details" },
] as const;

export type EBU_SECTIONS_IDS = (typeof EBU_SECTIONS)[number]["id"];

export const ebuSectionAtom = atom<{
  id: EBU_SECTIONS_IDS;
  autoscroll: boolean;
}>({ id: "partners", autoscroll: false });
