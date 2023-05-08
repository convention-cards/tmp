import { Heading } from "components/headings";
import { Spinner } from "components/spinner";
import { WideWidth } from "components/width/wide";
import { useAceAskId } from "hooks/ace-ask-id";
import { api } from "utils/api";
import { EditAceAskForm } from "./form";

export function EditAceAskPage() {
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
        <Heading title={`Edit ${ask.name}`} />
        <EditAceAskForm id={ask.id} ask={ask} />
      </div>
    </WideWidth>
  );
}
