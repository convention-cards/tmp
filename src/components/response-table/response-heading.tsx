import {
  ArrowUpIcon,
  ChevronRightIcon,
  HomeIcon,
} from "@heroicons/react/20/solid";
import { BidComponent } from "components/bridge/bid-component";
import { PrimaryButton } from "components/buttons/primary";
import { SecondaryButton } from "components/buttons/secondary";
import { Fragment } from "react";
import type { Bid } from "types/bid";

interface Props {
  baseSequence: Bid[];
  sequence: Bid[];
  setSequenceLength: (i: number) => void;

  addResponse: () => void;
}
export function ResponsesTableHeading({
  baseSequence,
  sequence,
  setSequenceLength,
  addResponse,
}: Props) {
  return (
    <div className="flex items-center gap-2 p-6">
      <SecondaryButton
        icon={<HomeIcon className="h-6 w-6" />}
        onClick={() => setSequenceLength(0)}
      />
      <SecondaryButton
        icon={<ArrowUpIcon className="h-6 w-6" />}
        disabled={sequence.length === 0}
        onClick={() => setSequenceLength(sequence.length - 1)}
      />
      <div className="flex grow items-center">
        {baseSequence.map((b, index) => (
          <Fragment key={index}>
            <div className="mx-1 rounded-lg p-2">
              <BidComponent {...b} size="xl" />
            </div>
          </Fragment>
        ))}
        {sequence.map((b, index) => (
          <Fragment key={index}>
            <ChevronRightIcon className="h-4 w-4" />
            <button
              className="mx-1 rounded-lg p-2 hover:bg-gray-200"
              onClick={() => setSequenceLength(index + 1)}
            >
              <BidComponent {...b} size="xl" />
            </button>
          </Fragment>
        ))}
      </div>
      <PrimaryButton text="Add Response" onClick={addResponse} />
    </div>
  );
}
