import type { SystemLink, User } from "@prisma/client";

export type PartnerType = {
  id: User["id"];
  email: User["email"];
  name: User["name"];
  image: User["image"];
};

export type EditorType = PartnerType & {
  type: SystemLink["type"];
};
