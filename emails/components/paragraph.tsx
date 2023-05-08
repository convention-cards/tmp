import { Text } from "@react-email/text";
import type { PropsWithChildren } from "react";

export function EmailParagraph({ children }: PropsWithChildren) {
  return <Text style={paragraph}>{children}</Text>;
}

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};
