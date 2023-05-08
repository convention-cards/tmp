import { WideWidth } from "components/width/wide";
import { FeaturesSection } from "page-content/features";

export const metadata = {
  title: "Features",
};

export default function Page() {
  return (
    <>
      <WideWidth>
        <FeaturesSection />
      </WideWidth>
    </>
  );
}
