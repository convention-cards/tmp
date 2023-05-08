import type { ButtonProps } from "components/buttons/base";
import { Card } from "components/card";
import { useSystem } from "hooks/system";
import { useDialog } from "launch";

export function MissingCardingCard() {
  const launch = useDialog();
  const { id } = useSystem();
  const actions: ButtonProps[] = [
    {
      text: "Define Carding",
      onClick: () => launch("defineCarding", { systemId: id }),
    },
  ];

  return (
    <Card id="no-carding-card" title="Carding" headingActions={actions}>
      <div className="text-gray-900">
        You have not defined your carding methods. Define them by clicking the
        button above.
      </div>
    </Card>
  );
}
