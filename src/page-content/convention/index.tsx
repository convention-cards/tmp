import { Heading } from "components/headings";
import { Spinner } from "components/spinner";
import { WideWidth } from "components/width/wide";
import { api } from "utils/api";
import { ConventionDetailsCard } from "./details-card";

interface Props {
  id: string;
}
export function ConventionPage({ id }: Props) {
  const { data: convention } = api.convention.get.useQuery(id);

  if (convention === undefined) {
    return (
      <div className="flex justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <WideWidth>
      <div className="space-y-6 py-8">
        <Heading title={convention.name} />
        <ConventionDetailsCard convention={convention} />
        {/* <AceAskResponsesCard ask={convention} /> */}
      </div>
    </WideWidth>
  );
}
