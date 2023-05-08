import { Heading } from "components/headings";
import { Spinner } from "components/spinner";
import { WideWidth } from "components/width/wide";
import { useAceAskId } from "hooks/ace-ask-id";
import { api } from "utils/api";
import { AceAskDetailsCard } from "./details-card";
import { AceAskResponsesCard } from "./responses-card";

export function AceAskPage() {
  const aceAskId = useAceAskId();
  const { data: ask } = api.aceAsk.get.useQuery(aceAskId);

  if (ask === undefined) {
    return (
      <div className="flex justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <WideWidth>
      <div className="space-y-6 py-8">
        <Heading title={ask.name} />
        <AceAskDetailsCard ask={ask} />
        <AceAskResponsesCard ask={ask} />
      </div>
    </WideWidth>
  );
}
