export const SETTINGS_TABS = [
  { id: "profile", name: "Profile" },
  { id: "billing", name: "Billing" },
  { id: "nbo", name: "NBO Numbers" },
  { id: "communications", name: "Communications" },
  { id: "delete", name: "Delete Account" },
] as const;

export type SETTINGS_TABS_IDS = (typeof SETTINGS_TABS)[number]["id"];
