import { Suit } from "@prisma/client";
import type { CC_TABS_IDS } from "config/system-tabs";
import { CC_TABS } from "config/system-tabs";
import { atom } from "jotai";
import { atomWithHash } from "jotai-location";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
export const systemTabAtom = atomWithHash<CC_TABS_IDS>("tab", "overview", {
  serialize: (v) => v,
  deserialize: (v) => CC_TABS.find((tab) => tab.id === v)?.id ?? "overview",
});

export const constructiveOpeningAtom = atom<{ level: number; suit: Suit }>({
  level: 1,
  suit: Suit.Club,
});
