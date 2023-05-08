import type { Convention } from "@prisma/client";
import type { ButtonProps } from "components/buttons/base";
import { useDialog } from "launch";
import { useMemo, useState } from "react";
import type { Bid } from "types/bid";
import type { ModifiedConventionResponse } from "types/system";
import { bidComparator } from "utils/bridge/bid";
import { objToSequenceStr, sequenceStrToObj } from "utils/bridge/sequence";
import type { ConventionResponsesType } from "../../../prisma/custom";

interface Props {
  convention: Convention;
}
export function ConventionResponsesManager({ convention }: Props) {
  const [sequence, setSequence] = useState<Bid[]>([]);
  const launch = useDialog();

  const modifiedResponses = useMemo(() => {
    return (convention.responses as ConventionResponsesType).map((r) => {
      const objSequence = sequenceStrToObj(r.sequence);

      return {
        ...r,
        objSequence,
        finalBid: objSequence[objSequence.length - 1],
      } as ModifiedConventionResponse;
    });
  }, [convention]);

  const subResponses = useMemo(() => {
    if (modifiedResponses === undefined) {
      return undefined;
    }

    const sequenceStr = objToSequenceStr(sequence).toLowerCase();
    return modifiedResponses
      .filter(
        (r) =>
          r.sequence.toLowerCase().startsWith(sequenceStr) &&
          r.objSequence.length === sequence.length + 1
      )
      .sort((r1, r2) => bidComparator(r1.finalBid, r2.finalBid));
  }, [modifiedResponses, sequence]);

  const actions: ButtonProps[] = [
    {
      text: "Edit",
      onClick: () => console.log(""), //launch("editOpening", { existing: opening }),
    },
  ];

  return (
    <div></div>
    // <ConventionResponsesTable
    //   sequence={sequence}
    //   setSequence={setSequence}
    //   responses={subResponses ?? []}
    //   openingId={""}
    // />
  );
}
