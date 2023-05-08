import { useSystem } from "hooks/system";
import { useAtom } from "jotai";
import { useMemo } from "react";
import { constructiveOpeningAtom } from "../atoms";
import { OpeningLoader } from "./existing/loader";
import { MissingOpeningCard } from "./missing/card";

export function OpeningCard() {
  const [opening] = useAtom(constructiveOpeningAtom);
  const { openings } = useSystem();

  const currentOpening = useMemo(
    () =>
      openings.find(
        ({ level, suit }) => level === opening.level && suit === opening.suit
      ),
    [opening, openings]
  );

  if (currentOpening === undefined) {
    return <MissingOpeningCard {...opening} />;
  }

  return <OpeningLoader opening={currentOpening} />;
}
