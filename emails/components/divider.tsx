import { Hr } from "@react-email/hr";

export function EmailDivider() {
  return <Hr style={hr} />;
}

const hr = {
  border: "none",
  borderTop: "1px solid #eaeaea",
  margin: "26px 0",
  width: "100%",
};
