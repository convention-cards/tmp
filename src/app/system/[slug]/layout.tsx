import { Sidebar } from "components/sidebar2";
import { WideWidth } from "components/width/wide";
import { CC_TABS_HREF } from "config/system-tabs";
import SystemIdProvider from "hooks/system-id";
import { notFound } from "next/navigation";
import type { PropsWithChildren } from "react";
import { getUserId } from "server/auth";
import { prisma } from "server/db";
import { MainSystemHeading } from "./system-heading";

interface Props extends PropsWithChildren {
  params: { slug: string };
}

export default async function Layout({
  params: { slug },
  children,
}: PropsWithChildren<Props>) {
  const userId = getUserId();

  const system = await prisma.system.findUnique({
    where: {
      slug,
      systemLink: { some: { userId } },
    },
  });

  if (system === null) {
    return notFound();
  }

  return (
    <SystemIdProvider id={system.id} slug={slug}>
      <WideWidth>
        <div className="space-y-2 py-8 md:space-y-6">
          <MainSystemHeading
            name={system.name}
            biddingMethods={system.biddingMethods}
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:pt-4">
            <div className="col-span-1">
              <Sidebar
                currentTabId={"" as string}
                prefix={`/system/${slug}`}
                tabs={CC_TABS_HREF}
              />
            </div>
            <div className="md:col-span-3">{children}</div>
          </div>
        </div>
      </WideWidth>
    </SystemIdProvider>
  );
}
