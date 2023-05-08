import { Dialog } from "@headlessui/react";
import { DialogBase } from "components/dialogs/base";
import { DialogCloseButton } from "components/dialogs/close-button";
import { BidSelector } from "components/form/bid/bid-selector";
import type { Bid } from "types/bid";

interface Props {
  onClose: () => void;

  onBid: (bid: Bid | null) => void;
  disallowed: Bid[];
}

export function SelectBidDialog({ onBid, disallowed, onClose }: Props) {
  const closeDialog = () => {
    onClose();
    onBid(null);
  };

  return (
    <DialogBase onClose={closeDialog}>
      <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
        <DialogCloseButton onClose={closeDialog} />
        <div className="text-center sm:mt-0 sm:text-left">
          <Dialog.Title
            as="h3"
            className="text-lg font-medium leading-6 text-gray-900"
          >
            Select Bid
          </Dialog.Title>
          <div className="mt-6 space-y-6">
            <BidSelector disallowed={disallowed} onBidSelected={onBid} />
          </div>
        </div>
      </Dialog.Panel>
    </DialogBase>
  );
}
