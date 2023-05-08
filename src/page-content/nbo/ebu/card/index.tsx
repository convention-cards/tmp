import { EBUOneNTOpenings } from "./1nt-openings";
import { EbuSection } from "./ebu-section";
import { EBUGeneralDescription } from "./general-description";
import { EBUPartnershipNames } from "./names";
import { EBUOtherOpenings } from "./opening-bids";
import { EBUOtherAspects } from "./other-aspects";
import { EBUTwoLevelOpenings } from "./two-level";

export function EbuCardContent() {
  return (
    <div className="space-y-4">
      <EbuSection tag="partners">
        <EBUPartnershipNames />
      </EbuSection>
      <EbuSection tag="general">
        <EBUGeneralDescription />
      </EbuSection>
      <EbuSection tag="1nt">
        <EBUOneNTOpenings />
      </EbuSection>
      <EbuSection tag="2-level">
        <EBUTwoLevelOpenings />
      </EbuSection>
      <EbuSection tag="other-aspects">
        <EBUOtherAspects />
      </EbuSection>
      <EbuSection tag="openings">
        <EBUOtherOpenings />
      </EbuSection>
    </div>
  );
}
