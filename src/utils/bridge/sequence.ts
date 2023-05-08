import { Suit } from "@prisma/client";
import type { Bid } from "types/bid";
import { bidToString } from "./bid-to-string";

const SUIT_LOOKUP: Record<string, Suit> = {
  C: Suit.Club,
  D: Suit.Diamond,
  H: Suit.Heart,
  S: Suit.Spade,
  N: Suit.NT,
};

export function parseBidFromString(s: string) {
  if (s.length !== 2) {
    return null;
  }
  const level = parseInt(s[0] ?? "1");
  const suit = SUIT_LOOKUP[s[1] ?? ""];
  return { level, suit };
}

export function formatBidToString({ level, suit }: Bid) {
  return `${level}${suit[0] ?? ""}`;
}

export function sequenceStrToObj(sequence: string) {
  const strParts = sequence.split("-");
  return strParts.map(parseBidFromString);
}

export function objToSequenceStr(bids: Bid[]) {
  return bids.map(formatBidToString).join("-");
}

export function objSequenceToSuitString(seq: Bid[]) {
  return seq.map(bidToString).join("-");
}

export function getSequenceStrFinalBid(sequence: string) {
  const strParts = sequence.split("-");

  return parseBidFromString(strParts[strParts.length - 1]);
}
