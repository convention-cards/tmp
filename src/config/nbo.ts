import type { NBO } from "@prisma/client";

// export const NBO_LIST: NBO[] = ["EBU", "ACBL"];
export const NBO_LIST: NBO[] = ["EBU"];

export const NBO_TO_PREFIX = {
  EBU: "ebu",
  ACBL: "acbl",
} as const satisfies Record<NBO, string>;

export const NBO_TO_IMG_URL = {
  EBU: "/nbo/ebu-logo.png",
  ACBL: "/nbo/acbl-logo.png",
} as const satisfies Record<NBO, string>;

export const NBO_TO_COUNTRY = {
  EBU: "England",
  ACBL: "North America",
} as const satisfies Record<NBO, string>;
