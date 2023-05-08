import { Suit } from "@prisma/client";
import { BidComponent } from "components/bridge/bid-component";
import { Card } from "components/card";

export function EBUOneNTOpenings() {
  return (
    <Card title="1NT Openings and Responses" id="1nt">
      <div className="flex flex-col divide-y divide-gray-200">
        <div className="grid grid-cols-4 py-2">
          <div className="font-bold">Strength</div>
          <div>15-17</div>
          <div className="col-span-2 text-right font-bold text-red-600">
            Artificial
          </div>
        </div>
        <div className="grid grid-cols-4  py-2">
          <div className="font-bold">Shape constraints</div>
          <div>5M or 6m possible</div>
          <div className="col-span-2 text-right font-bold text-red-600">
            May have singleton
          </div>
        </div>
        <div className="grid grid-cols-4 space-y-2 py-2">
          <div className="font-bold">Responses</div>
          <div className="col-span-3 flex space-x-4">
            <BidComponent suit={Suit.Club} level={2} size="md" />
            <span>Stayman</span>
          </div>
          <div className="col-span-2 flex space-x-4">
            <BidComponent suit={Suit.Diamond} level={2} size="md" />
            <span>Hearts</span>
          </div>
          <div className="col-span-2 flex space-x-4">
            <BidComponent suit={Suit.Heart} level={2} size="md" />
            <span>Spades</span>
          </div>
          <div className="col-span-2 flex space-x-4">
            <BidComponent suit={Suit.Spade} level={2} size="md" />
            <span>Clubs</span>
          </div>
          <div className="col-span-2 flex space-x-4">
            <BidComponent suit={Suit.NT} level={2} size="md" />
            <span>Diamonds</span>
          </div>
          <div className="col-span-1 font-bold">Other responses</div>
          <div className="col-span-3">
            3C: Puppet, 3D: 5/5 minors, 3M: 3M1oM(54)
          </div>
        </div>
        <div className="grid grid-cols-4 py-2">
          <div className="font-bold">Action after double</div>
          <div className="col-span-3">
            Pass is to play. New suit = nat, weak. XX = 4/4
          </div>
        </div>
        <div className="grid grid-cols-4 py-2">
          <div className="font-bold">Action after interference</div>
          <div className="col-span-3">Transfer Lebensohl</div>
        </div>
      </div>
    </Card>
  );
}
