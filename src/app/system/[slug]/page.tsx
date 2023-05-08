import { systemSlugToId } from "server/utils/slug-to-id";
import { CardingViewOverview } from "./carding-card";
import { OpeningBidOverview } from "./opening-bids";

interface Props {
  params: { slug: string };
}

export default async function SystemOverview({ params: { slug } }: Props) {
  const systemId = await systemSlugToId(slug);
  return (
    <div className="space-y-6">
      {/* @ts-expect-error Server Component */}
      <OpeningBidOverview systemId={systemId} />
      {/* @ts-expect-error Server Component */}
      <CardingViewOverview systemId={systemId} />
    </div>
  );
}
