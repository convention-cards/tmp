"use client";

import { ConventionPage } from "page-content/convention";

interface Props {
  params: { conventionId: string };
}
export default function Page({ params: { conventionId } }: Props) {
  return <ConventionPage id={conventionId} />;
}
