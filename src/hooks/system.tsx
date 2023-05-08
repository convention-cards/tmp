import { useAuth } from "@clerk/nextjs";
import { createContext, useContext } from "react";
import type { FullSystem } from "types/system";

export const SystemContext = createContext<FullSystem>({
  biddingMethods: "",
  createdAt: new Date(),
  id: "",
  name: "",
  openings: [],
  editors: [],
  slug: "",
  updatedAt: new Date(),
  cc: { ebu: null, acbl: null },
  conventions: [],
  carding: null,
});

export function useSystem() {
  return useContext(SystemContext);
}

export function useIsOwner() {
  const { editors } = useSystem();
  const { userId } = useAuth();

  const editor = editors.find((e) => e.id === userId);

  return editor?.type === "Owner";
}
