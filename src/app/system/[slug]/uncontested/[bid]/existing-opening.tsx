"use client";

import type { Opening, OpeningResponse } from "@prisma/client";
import type { ButtonProps } from "components/buttons/base";
import { Card } from "components/card";
import { ResponsesTable } from "components/response-table";
import { useDialog } from "launch";
import { useMemo, useState } from "react";
import type { Bid } from "types/bid";
import type { ResponseTableResponse } from "types/system";
import { bidComparator } from "utils/bridge/bid";
import { defToString } from "utils/bridge/bid-description";
import { bidToString } from "utils/bridge/bid-to-string";
import { calculateDisallowedResponses } from "utils/bridge/disallowed-responses";
import { formatSuitString } from "utils/bridge/format-suit-string";
import { objToSequenceStr } from "utils/bridge/sequence";
import type { BidDefinition } from "../../../../../../prisma/custom/bid-definition";

function convertToLookup(
  responses: OpeningResponse[]
): Record<string, ResponseTableResponse[]> {
  const lookup: Record<string, ResponseTableResponse[]> = {};

  responses.forEach((res) => {
    const r: ResponseTableResponse = {
      bid: { level: res.level, suit: res.suit },
      definition: res.definition as BidDefinition,
      description: res.description,
      id: res.id,
    };

    const existing = lookup[res.sequence] ?? [];
    lookup[res.sequence] = [...existing, r];
  });

  Object.values(lookup).forEach((rs) =>
    rs.sort((r1, r2) => bidComparator(r1.bid, r2.bid))
  );

  return lookup;
}

interface Props {
  opening: Opening;
  responses: OpeningResponse[];
}
export function OpeningLoader({ opening, responses }: Props) {
  const [sequence, setSequence] = useState<Bid[]>([]);
  const finalBid =
    sequence.length > 0 ? sequence[sequence.length - 1] : opening;
  const launch = useDialog();

  const lookup = useMemo(() => {
    return convertToLookup(responses ?? []);
  }, [responses]);

  // console.log(lookup);

  const filteredResponses = lookup[objToSequenceStr(sequence)] ?? [];

  const actions: ButtonProps[] = [
    {
      text: "Edit",
      onClick: () => launch("editOpening", { existing: opening }),
    },
  ];

  const setSequenceLength = (i: number) => {
    if (i >= sequence.length) {
      throw new Error(
        `Unexpected sequence length ${i}, greater than max length`
      );
    }

    setSequence(sequence.slice(0, i));
  };

  const addBidToSequence = (b: Bid) => {
    setSequence((existing) => [...existing, b]);
  };

  const addResponse = () => {
    launch("selectBid", {
      disallowed: calculateDisallowedResponses(finalBid, filteredResponses),
      onBid: (bid) =>
        bid != null &&
        launch("addResponse", {
          bid,
          objSequence: sequence,
          opening,
        }),
    });
  };

  const editResponse = (id: string) => {
    const existing = responses?.find((r) => r.id === id);

    if (existing === undefined) {
      throw new Error(`Trying to edit unexpected response ${id}`);
    }

    launch("editResponse", { existing });
  };

  const deleteResponse = (id: string) => {
    const existing = responses?.find((r) => r.id === id);

    if (existing === undefined) {
      throw new Error(`Trying to delete unexpected response ${id}`);
    }

    launch("yesNo", {
      onYes: () => console.log("Delete"),
      text: "Are you sure you want to delete this response and all of its descendants?",
      title: "Delete Response",
    });
  };

  return (
    <>
      <Card
        id="opening-card"
        title={`${bidToString(opening)}`}
        subtitle={defToString(opening.definition as BidDefinition)}
        headingActions={actions}
      >
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className="sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-500">Description</dt>
            <dd className="text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {formatSuitString(opening.description)}
            </dd>
          </div>
        </dl>
      </Card>

      {responses !== undefined && (
        <ResponsesTable
          baseSequence={[{ suit: opening.suit, level: opening.level }]}
          sequence={sequence}
          setSequenceLength={setSequenceLength}
          addBidToSequence={addBidToSequence}
          addResponse={addResponse}
          editResponse={editResponse}
          deleteResponse={deleteResponse}
          responses={filteredResponses}
        />
      )}
    </>
  );
}
