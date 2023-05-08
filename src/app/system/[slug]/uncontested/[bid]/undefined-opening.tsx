"use client";

import type { Suit } from "@prisma/client";
import type { ButtonProps } from "components/buttons/base";
import { Card } from "components/card";
import { useSystem } from "hooks/system";
import { useDialog } from "launch";
import { bidToString } from "utils/bridge/bid-to-string";
import { formatSuitString } from "utils/bridge/format-suit-string";

interface Props {
  level: number;
  suit: Suit;
}
export function UndefinedOpeningCard(props: Props) {
  const { id } = useSystem();
  const launch = useDialog();

  const actions: ButtonProps[] = [
    {
      text: "Define Opening",
      onClick: () => launch("defineOpening", { ...props, systemId: id }),
    },
  ];
  return (
    <Card
      id="missing-opening-card"
      title={bidToString(props)}
      headingActions={actions}
    >
      <div className="text-gray-900">
        {formatSuitString(
          `You have not defined ${bidToString(
            props
          )}. It must be defined before you can add the continuations.`
        )}
      </div>
    </Card>
  );
}
