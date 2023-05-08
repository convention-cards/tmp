export const CC_TABS = [
  { id: "overview", name: "Overview" },
  { id: "uncontested", name: "Uncontested Auctions" },
  // { id: "contested", name: "Competitive Auctions" },
  { id: "conventions", name: "Conventions" },
  { id: "defences", name: "Specific Defences" },
  { id: "slam", name: "Slam Bidding" },
  { id: "carding", name: "Leads + Carding" },
  { id: "cards", name: "Convention Cards" },
  { id: "settings", name: "Settings" },
] as const;

export const CC_TABS_HREF = [
  { id: "overview", name: "Overview", href: "/" },
  { id: "uncontested", name: "Uncontested Auctions", href: "/uncontested/1C" },
  // { id: "contested", name: "Competitive Auctions" },
  { id: "conventions", name: "Conventions", href: "/conventions" },
  { id: "defences", name: "Specific Defences", href: "/defences" },
  { id: "slam", name: "Slam Bidding", href: "/slam" },
  { id: "carding", name: "Leads + Carding", href: "/carding" },
  { id: "cards", name: "Convention Cards", href: "/cards" },
  { id: "settings", name: "Settings", href: "/settings" },
] as const;

export type CC_TABS_IDS = (typeof CC_TABS)[number]["id"];
