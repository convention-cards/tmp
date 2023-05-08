import { Text } from "@react-email/text";
import type { PropsWithChildren } from "react";

export function EmailHeading({ children }: PropsWithChildren) {
  return <Text style={h1}>{children}</Text>;
}

const h1 = {
  color: "#000",
  fontSize: "24px",
  fontWeight: "normal",
  textAlign: "center" as const,
  margin: "30px 0",
  padding: "0",
};
