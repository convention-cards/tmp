import { WideWidth } from "components/width/wide";
import { ConventionList } from "page-content/convention/list";

export const metadata = {
  title: "Conventions",
};

export default function Conventions() {
  return (
    <WideWidth>
      <div className="py-8">
        <ConventionList />
      </div>
    </WideWidth>
  );
}
