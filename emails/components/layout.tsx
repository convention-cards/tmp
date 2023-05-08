import { Container } from "@react-email/container";
import { Head } from "@react-email/head";
import { Html } from "@react-email/html";
import { Preview } from "@react-email/preview";
import { Section } from "@react-email/section";
import type { ReactNode } from "react";

const fontFamily =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif";

interface LayoutProps {
  children: ReactNode;
  preview: string;
}
export function EmailLayout({ children, preview }: LayoutProps) {
  return (
    <Html>
      <Head />
      <Preview>{preview}</Preview>
      <Section style={main}>
        <Container style={container}>{children}</Container>
      </Section>
    </Html>
  );
}

const main = {
  backgroundColor: "rgb(243 244 246)",
  margin: "0 auto",
  fontFamily,
};

const container = {
  boxShadow:
    "0 0 #0000, 0 0 #0000, 0 1px 3px 0 rgb(0 0 0), 0 1px 2px -1px rgb(0 0 0)",
  border: "1px solid rgb(209 213 219)",
  borderRadius: "0.5rem",
  backgroundColor: "white",
  margin: "40px auto",
  padding: "20px",
  width: "465px",
};
