import { createContext, useContext } from "react";

export const AceAskIdContext = createContext("");

export function useAceAskId() {
  return useContext(AceAskIdContext);
}
