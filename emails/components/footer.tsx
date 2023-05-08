import { Text } from "@react-email/text";
import type { PropsWithChildren } from "react";

export function EmailFooter({ children }: PropsWithChildren) {
  return <Text style={footer}>{children}</Text>;
}

const footer = {
  color: "#666666",
  fontSize: "10px",
  lineHeight: "24px",
};
