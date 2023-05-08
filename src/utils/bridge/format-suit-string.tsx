import { Suit } from "@prisma/client";
import { SuitComponent } from "components/bridge/suit-component";
import reactStringReplace from "react-string-replace";

export function formatSuitString(s: string) {
  const c = reactStringReplace(s, /(!c|!C)/g, (_, i) => (
    <SuitComponent key={`club-${i}`} suit={Suit.Club} size="inline-block" />
  ));

  const d = reactStringReplace(c, /(!d|!D)/g, (_, i) => (
    <SuitComponent
      key={`diamond-${i}`}
      suit={Suit.Diamond}
      size="inline-block"
    />
  ));

  const h = reactStringReplace(d, /(!h|!H)/g, (_, i) => (
    <SuitComponent key={`heart-${i}`} suit={Suit.Heart} size="inline-block" />
  ));

  return reactStringReplace(h, /(!s|!S)/g, (_, i) => (
    <SuitComponent key={`spade-${i}`} suit={Suit.Spade} size="inline-block" />
  ));
}
