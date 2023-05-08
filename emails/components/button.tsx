import { Button } from "@react-email/button";

interface ButtonProps {
  text: string;
  href: string;
}
export function EmailButton({ text, href }: ButtonProps) {
  return (
    <Button style={btn} href={href}>
      {text}
    </Button>
  );
}

const btn = {
  color: "rgb(255 255 255)",
  fontWeight: 500,
  fontSize: "0.875rem",
  lineHeight: "1.25rem",
  paddingTop: "0.5rem",
  paddingBottom: "0.5rem",
  paddingLeft: "1rem",
  paddingRight: "1rem",
  backgroundColor: "rgb(79 70 229)",
  borderColor: "transparent",
  borderWidth: "1px",
  borderRadius: "0.375rem",
  alignItems: "center",
  display: "inline-flex",
  backgroundImage: "none",
  cursor: "pointer",
  textTransform: "none" as const,
  margin: 0,
};
