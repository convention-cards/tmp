import { getUserId } from "server/auth";
import { prisma } from "server/db";
import { EmptySystems } from "./empty-item";
import { NewSystemItem } from "./new-system-item";
import { SystemItem } from "./system-item";

export const metadata = {
  title: "Systems",
};

export default async function Systems() {
  const userId = getUserId();

  const systems = await prisma.system.findMany({
    where: {
      systemLink: {
        some: {
          userId,
        },
      },
    },
    include: {
      systemLink: { where: { userId } },
    },
  });

  if (systems.length === 0) {
    return <EmptySystems />;
  }

  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {systems.map((system) => (
        <SystemItem key={system.id} system={system} />
      ))}

      <NewSystemItem />
    </ul>
  );
}
