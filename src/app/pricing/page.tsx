import { WideWidth } from "components/width/wide";
import { PricingSection } from "page-content/pricing";

export const metadata = {
  title: "Pricing",
};

export default function Page() {
  return (
    <WideWidth>
      <PricingSection />
    </WideWidth>
  );
}
