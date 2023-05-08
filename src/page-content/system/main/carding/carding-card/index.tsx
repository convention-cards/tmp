import { useSystem } from "hooks/system";
import { ExistingCardingCard } from "./existing";
import { MissingCardingCard } from "./missing";

export function CardingCard() {
  const { carding } = useSystem();

  if (carding === null) {
    return <MissingCardingCard />;
  }
  return <ExistingCardingCard carding={carding} />;
}
