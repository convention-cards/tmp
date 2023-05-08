import type { Carding } from "@prisma/client";
import { CardingType, DiscardType } from "@prisma/client";
import type { ButtonProps } from "components/buttons/base";
import { Card } from "components/card";
import { useDialog } from "launch";

interface Props {
  carding: Carding;
}
export function ExistingCardingCard({ carding }: Props) {
  const launch = useDialog();

  const actions: ButtonProps[] = [
    {
      text: "Edit",
      onClick: () => launch("editCarding", { carding }),
    },
  ];

  const attitudeString = formatAttitude(
    carding.attitude,
    carding.attitudeOther
  );
  const countString = formatCount(carding.count, carding.countOther);
  const suitPrefString = formatSuitPref(
    carding.suitPref,
    carding.suitPrefOther
  );
  const smithString = formatSmith(carding.smith, carding.smithOther);
  const discardsString = formatDiscards(
    carding.discards,
    carding.discardsOther
  );

  return (
    <Card id="carding" title="Carding" headingActions={actions}>
      <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <dt className="text-sm font-medium text-gray-500">Attitude</dt>
          <dd className="mt-1 text-sm text-gray-900">{attitudeString}</dd>
        </div>
        <div className="sm:col-span-1">
          <dt className="text-sm font-medium text-gray-500">Count</dt>
          <dd className="mt-1 text-sm text-gray-900">{countString}</dd>
        </div>
        <div className="sm:col-span-1">
          <dt className="text-sm font-medium text-gray-500">Suit Preference</dt>
          <dd className="mt-1 text-sm text-gray-900">{suitPrefString}</dd>
        </div>
        <div className="sm:col-span-1">
          <dt className="text-sm font-medium text-gray-500">Smith Peters</dt>
          <dd className="mt-1 text-sm text-gray-900">{smithString}</dd>
        </div>
        <div className="sm:col-span-1">
          <dt className="text-sm font-medium text-gray-500">Discards</dt>
          <dd className="mt-1 text-sm text-gray-900">{discardsString}</dd>
        </div>
        <div className="border-t border-gray-300 pt-6 sm:col-span-2">
          <dt className="text-sm font-medium text-gray-500">
            Other notes/exceptions
          </dt>
          <dd className="mt-1 text-sm text-gray-900">{carding.notes}</dd>
        </div>
      </dl>
    </Card>
  );
}

function formatAttitude(type: CardingType, other: string | null) {
  switch (type) {
    case CardingType.None:
      return "-";
    case CardingType.Standard:
      return "Standard (High-Low encouraging)";
    case CardingType.Reverse:
      return "Reverse (High-Low discouraging)";
    case CardingType.Other:
      return other ?? "";
  }
}
function formatCount(type: CardingType, other: string | null) {
  switch (type) {
    case CardingType.None:
      return "-";
    case CardingType.Standard:
      return "Standard (High-Low even)";
    case CardingType.Reverse:
      return "Reverse (High-Low odd)";
    case CardingType.Other:
      return other ?? "";
  }
}

function formatSuitPref(type: CardingType, other: string | null) {
  switch (type) {
    case CardingType.None:
      return "-";
    case CardingType.Standard:
      return "Standard (High asks for higher suit)";
    case CardingType.Reverse:
      return "Reverse (High asks for lower suit)";
    case CardingType.Other:
      return other ?? "";
  }
}

function formatSmith(type: CardingType, other: string | null) {
  switch (type) {
    case CardingType.None:
      return "-";
    case CardingType.Standard:
      return "Standard (High-Low encourages suit lead)";
    case CardingType.Reverse:
      return "Reverse (High-Low discourages suit lead)";
    case CardingType.Other:
      return other ?? "";
  }
}

function formatDiscards(type: DiscardType, other: string | null) {
  switch (type) {
    case DiscardType.None:
      return "-";
    case DiscardType.Attitude:
      return "Attitude (as above)";
    case DiscardType.Count:
      return "Count (as above)";
    case DiscardType.SuitPref:
      return "Suit Preference (as above)";
    case DiscardType.OddEven:
      return "Odd/Even";
    case DiscardType.Other:
      return other ?? "";
  }
}
