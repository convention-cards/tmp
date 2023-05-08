"use client";

import type { PropsWithChildren } from "react";
import { createContext, useContext } from "react";

export const SystemIdContext = createContext({ id: "", slug: "" });

interface Props extends PropsWithChildren {
  id: string;
  slug: string;
}
export default function SystemIdProvider({
  id,
  slug,
  children,
}: PropsWithChildren<Props>) {
  return (
    <SystemIdContext.Provider value={{ slug, id }}>
      {children}
    </SystemIdContext.Provider>
  );
}

export function useSystemId() {
  return useContext(SystemIdContext);
}
