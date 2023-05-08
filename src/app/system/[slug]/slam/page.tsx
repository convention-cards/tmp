import { systemSlugToId } from "server/utils/slug-to-id";
import { AceAskingTable } from "./ace-asking-card";

interface Props {
  params: { slug: string };
}
export default async function Slam({ params: { slug } }: Props) {
  const systemId = await systemSlugToId(slug);

  return (
    <div className="space-y-6 ">
      <AceAskingTable systemId={systemId} />
    </div>
  );
}
