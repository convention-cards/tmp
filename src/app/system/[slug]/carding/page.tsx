import { systemSlugToId } from "server/utils/slug-to-id";
import { CardingCard } from "./carding-card";
import { NtLeadsCard } from "./nt-lead-card";
import { SuitLeadsCard } from "./suit-lead-card";

interface Props {
  params: { slug: string };
}

export default async function SystemCarding({ params: { slug } }: Props) {
  const systemId = await systemSlugToId(slug);

  return (
    <div className="space-y-6 ">
      <CardingCard systemId={systemId} />
      <NtLeadsCard />
      <SuitLeadsCard />
    </div>
  );
}
