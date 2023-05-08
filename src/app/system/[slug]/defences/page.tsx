import { Card } from "components/card";
import { systemSlugToId } from "server/utils/slug-to-id";

interface Props {
  params: { slug: string };
}
export default async function SystemDefences({ params: { slug } }: Props) {
  const systemId = await systemSlugToId(slug);

  return (
    <div className="space-y-6 ">
      <Card id="defence-nt" title="Defence to 1NT">
        Content
      </Card>
      <Card id="defence-strong-club" title="Defence to Strong Club">
        Content
      </Card>
      <Card id="defence" title="Defence to Multi 2D">
        Content
      </Card>
    </div>
  );
}
