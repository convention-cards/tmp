import { WideWidth } from "components/width/wide";
import { FAQSection } from "page-content/faq";

export const metadata = {
  title: "FAQ",
};

export default function Page() {
  return (
    <>
      <WideWidth>
        <FAQSection />
      </WideWidth>
    </>
  );
}
