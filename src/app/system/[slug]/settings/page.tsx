import { systemSlugToId } from "server/utils/slug-to-id";
import { SystemCloneSection } from "./clone";
import { SystemDeleteSection } from "./delete";
import { SystemEditorsTable } from "./editors";
import { SystemTransferSection } from "./transfer";

interface Props {
  params: { slug: string };
}

export default async function SystemSettings({ params: { slug } }: Props) {
  const systemId = await systemSlugToId(slug);

  return (
    <div className="space-y-6 ">
      <SystemEditorsTable systemId={systemId} />
      <SystemTransferSection systemId={systemId} />
      <SystemCloneSection systemId={systemId} />
      <SystemDeleteSection systemId={systemId} />
    </div>
  );
}
