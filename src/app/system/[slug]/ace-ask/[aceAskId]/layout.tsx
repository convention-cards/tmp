"use client";

import { AceAskIdContext } from "hooks/ace-ask-id";
import type { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  params: { aceAskId: string };
}
export default function Layout({
  params: { aceAskId },
  children,
}: PropsWithChildren<Props>) {
  return (
    <AceAskIdContext.Provider value={aceAskId}>
      {children}
    </AceAskIdContext.Provider>
  );
}
